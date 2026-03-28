import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { BrickModel, BrickType, brickCells, isDoorBrick, doorTemplateId } from './model.js';

const JOINT  = 0.077;
const ROW_H  = 0.5;
const CELL   = 0.5;   // 1 grid cell in 3D units (BRICK_W/4 = 2.0/4)

// face order: +X, -X, +Y, -Y, +Z, -Z
const C_NORMAL = {
  top:   0xC8764A,
  front: 0xD4855A,
  side:  0xA85C32,
  bot:   0x7A3E1A,
};
const C_SEL = {
  top:   0x5DCAA5,
  front: 0x9FE1CB,
  side:  0x1D9E75,
  bot:   0x0E7055,
};
const C_HOLE  = { top: 0x111111, front: 0x151515, side: 0x0d0d0d, bot: 0x080808 };
const C_GRATE = { top: 0x555555, front: 0x666666, side: 0x444444, bot: 0x333333 };

function faceMats(c: typeof C_NORMAL): THREE.MeshStandardMaterial[] {
  return [
    new THREE.MeshStandardMaterial({ color: c.side,  roughness: 0.9 }),  // +X
    new THREE.MeshStandardMaterial({ color: c.side,  roughness: 0.9 }),  // -X
    new THREE.MeshStandardMaterial({ color: c.top,   roughness: 0.85 }), // +Y
    new THREE.MeshStandardMaterial({ color: c.bot,   roughness: 1.0 }),  // -Y
    new THREE.MeshStandardMaterial({ color: c.front, roughness: 0.85 }), // +Z
    new THREE.MeshStandardMaterial({ color: c.side,  roughness: 0.9 }),  // -Z
  ];
}

export class Renderer3D {
  private scene:    THREE.Scene;
  private camera:   THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private group:    THREE.Group;
  private sun:      THREE.DirectionalLight;

  constructor(container: HTMLElement) {
    // ── Scene ──────────────────────────────────────────────────────────
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a1814);
    this.scene.fog = new THREE.FogExp2(0x1a1814, 0.012);

    // ── Camera ─────────────────────────────────────────────────────────
    const w = container.clientWidth, h = container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 500);
    this.camera.position.set(20, 14, 28);

    // ── Renderer ───────────────────────────────────────────────────────
    this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(w, h);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping       = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    container.appendChild(this.renderer.domElement);

    // ── Lights ─────────────────────────────────────────────────────────
    this.scene.add(new THREE.AmbientLight(0xfff0d8, 0.6));

    this.sun = new THREE.DirectionalLight(0xffe8c0, 2.2);
    this.sun.position.set(20, 35, 20);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.bias   = -0.0008;
    this.sun.shadow.camera.near = 0.5;
    this.sun.shadow.camera.far  = 200;
    const sc = this.sun.shadow.camera as THREE.OrthographicCamera;
    sc.left = sc.bottom = -40;
    sc.right = sc.top   =  40;
    this.scene.add(this.sun);

    // fill from opposite side
    const fill = new THREE.DirectionalLight(0xb0c8e8, 0.5);
    fill.position.set(-15, 10, -15);
    this.scene.add(fill);

    // ── Floor ──────────────────────────────────────────────────────────
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(300, 300),
      new THREE.MeshStandardMaterial({ color: 0x151210, roughness: 1, metalness: 0 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.02;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // subtle grid on floor
    this.scene.add(new THREE.GridHelper(300, 150, 0x2a2218, 0x221c14));

    // ── Brick group ────────────────────────────────────────────────────
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // ── Controls ───────────────────────────────────────────────────────
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping  = true;
    this.controls.dampingFactor  = 0.06;
    this.controls.minDistance    = 3;
    this.controls.maxDistance    = 120;
    this.controls.maxPolarAngle  = Math.PI / 2 + 0.1;

    // ── Resize ─────────────────────────────────────────────────────────
    new ResizeObserver(() => {
      const cw = container.clientWidth, ch = container.clientHeight;
      this.camera.aspect = cw / ch;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(cw, ch);
    }).observe(container);

    // ── Loop ───────────────────────────────────────────────────────────
    const loop = () => {
      requestAnimationFrame(loop);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    loop();
  }

  /** Подключить кнопки управления видом в 3D-окне */
  bindControls(): void {
    const ROTATE_STEP = 0.12; // радианы за клик
    const ZOOM_FACTOR = 0.85; // коэффициент приближения/отдаления

    const rotate = (dTheta: number, dPhi: number) => {
      const offset = this.camera.position.clone().sub(this.controls.target);
      const r = offset.length();
      // spherical coords
      let theta = Math.atan2(offset.x, offset.z);
      let phi   = Math.acos(Math.max(-1, Math.min(1, offset.y / r)));
      theta += dTheta;
      phi    = Math.max(0.05, Math.min(Math.PI / 2 + 0.1, phi + dPhi));
      this.camera.position.set(
        this.controls.target.x + r * Math.sin(phi) * Math.sin(theta),
        this.controls.target.y + r * Math.cos(phi),
        this.controls.target.z + r * Math.sin(phi) * Math.cos(theta),
      );
      this.camera.lookAt(this.controls.target);
    };

    const zoom = (factor: number) => {
      const offset = this.camera.position.clone().sub(this.controls.target);
      const r = Math.max(this.controls.minDistance,
                  Math.min(this.controls.maxDistance, offset.length() * factor));
      offset.normalize().multiplyScalar(r);
      this.camera.position.copy(this.controls.target).add(offset);
    };

    const defaultPos = this.camera.position.clone();

    const btn = (id: string, fn: () => void) => {
      const el = document.getElementById(id);
      if (!el) return;
      // поддержка удержания кнопки
      let timer: ReturnType<typeof setInterval> | null = null;
      el.addEventListener('mousedown', () => { fn(); timer = setInterval(fn, 80); });
      el.addEventListener('mouseup',   () => { if (timer) { clearInterval(timer); timer = null; } });
      el.addEventListener('mouseleave',() => { if (timer) { clearInterval(timer); timer = null; } });
      // touch
      el.addEventListener('touchstart', (e) => { e.preventDefault(); fn(); timer = setInterval(fn, 80); }, { passive: false });
      el.addEventListener('touchend',   () => { if (timer) { clearInterval(timer); timer = null; } });
    };

    btn('btn-3d-up',      () => rotate(0, -ROTATE_STEP));
    btn('btn-3d-down',    () => rotate(0,  ROTATE_STEP));
    btn('btn-3d-left',    () => rotate(-ROTATE_STEP, 0));
    btn('btn-3d-right',   () => rotate( ROTATE_STEP, 0));
    btn('btn-3d-zoomin',  () => zoom(ZOOM_FACTOR));
    btn('btn-3d-zoomout', () => zoom(1 / ZOOM_FACTOR));

    document.getElementById('btn-3d-reset')?.addEventListener('click', () => {
      this.camera.position.copy(defaultPos);
      this.camera.lookAt(this.controls.target);
    });
  }

  exportPNG(): void {
    this.renderer.render(this.scene, this.camera);
    const url = this.renderer.domElement.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'furnace_3d.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  update(model: BrickModel, selectedRow: number, showMortar = false, maxRow = -1, maxCol = -1): void {
    const rowCount = maxRow < 0 ? model.rows.length : Math.min(maxRow, model.rows.length);
    const colLimit = maxCol < 0 ? model.cols : Math.min(maxCol, model.cols);
    // clear
    for (const child of [...this.group.children]) {
      const m = child as THREE.Mesh;
      if (Array.isArray(m.material))
        m.material.forEach(mat => mat.dispose());
      else
        (m.material as THREE.Material)?.dispose();
      m.geometry?.dispose();
    }
    this.group.clear();

    // centre controls target on model bounds
    const cx = model.cols   * CELL * 0.5;
    const cz = model.depths * CELL * 0.5;
    const cy = rowCount * (ROW_H + JOINT) * 0.5;
    this.controls.target.set(cx, cy, cz);

    // widen shadow camera to cover the scene
    const half = Math.max(model.cols, model.depths) * CELL + 10;
    const sc = this.sun.shadow.camera as THREE.OrthographicCamera;
    sc.left = sc.bottom = -half;
    sc.right = sc.top   =  half;
    sc.updateProjectionMatrix();

    // build meshes
    for (let ri = 0; ri < rowCount; ri++) {
      const isSelected = ri === selectedRow;
      const palette    = isSelected ? C_SEL : C_NORMAL;
      const offX       = model.rowOffsets[ri] ? CELL * 2 : 0; // half-brick = 2 cells
      const y          = ri * (ROW_H + JOINT);

      for (let ci = 0; ci < colLimit; ci++) {
        for (let di = 0; di < model.depths; di++) {
          const bt = model.rows[ri]?.[ci]?.[di];
          if (!bt || bt === BrickType.Empty) continue;

          const [bcw, bcd] = brickCells(bt, model.doors);
          let bw = bcw * CELL - JOINT;
          let bd = bcd * CELL - JOINT;
          let bh = ROW_H;
          if (bt === BrickType.VerticalStretcher) { bh = CELL * 2; bd = CELL * 2 - JOINT; }

          const x = ci * CELL + JOINT / 2 + offX;
          const z = di * CELL + JOINT / 2;

          if (isDoorBrick(bt)) {
            // рисуем только от нижнего ряда двери (чтобы не дублировать)
            const prevSame = ri > 0 && model.rows[ri - 1]?.[ci]?.[di] === bt;
            if (prevSame) { /* уже нарисовано снизу */ }
            else {
              const tmpl = model.doors.find(d => d.id === doorTemplateId(bt));
              if (tmpl) {
                const totalH = tmpl.heightRows * ROW_H + (tmpl.heightRows - 1) * JOINT;
                const barD   = JOINT * 2.5;
                const doorMat = new THREE.MeshStandardMaterial({
                  color: 0x446688, roughness: 0.4, metalness: 0.8,
                });

                if (tmpl.brickBase === 'Тычок') {
                  // bars along Z (depth), thin in X — offset shifts X position
                  const xOff = tmpl.offsetX === 'left'   ? 0
                             : tmpl.offsetX === 'right'  ? bw - barD
                             : (bw - barD) / 2;
                  for (let c = 0; c < tmpl.cols; c++) {
                    if (!tmpl.shape[c]?.some(v => v)) continue;
                    const bzPos = z + c * CELL;
                    const bar = new THREE.Mesh(
                      new THREE.BoxGeometry(barD, totalH, CELL), doorMat,
                    );
                    bar.position.set(x + xOff + barD / 2, y + totalH / 2, bzPos + CELL / 2);
                    bar.castShadow    = true;
                    bar.receiveShadow = true;
                    this.group.add(bar);
                  }
                } else {
                  // Ложок: bars along X, thin in Z — offset shifts Z position
                  const bzOff = tmpl.offsetX === 'left'   ? 0
                              : tmpl.offsetX === 'right'  ? bd - barD
                              : (bd - barD) / 2;
                  for (let c = 0; c < tmpl.cols; c++) {
                    if (!tmpl.shape[c]?.some(v => v)) continue;
                    const bx = x + c * CELL;
                    const bar = new THREE.Mesh(
                      new THREE.BoxGeometry(CELL, totalH, barD), doorMat,
                    );
                    bar.position.set(bx + CELL / 2, y + totalH / 2, z + bzOff + barD / 2);
                    bar.castShadow    = true;
                    bar.receiveShadow = true;
                    this.group.add(bar);
                  }
                }
              }
            }
          } else if (bt === BrickType.Grate) {
            // решетка: прутья вдоль X, расположены внизу кирпича
            const barH  = ROW_H * 0.28;           // высота прутьев
            const barD  = CELL * 0.28;             // толщина прута по Z
            const nBars = 4;                       // количество прутьев
            const step  = bd / nBars;              // шаг между прутьями
            const grateMat = new THREE.MeshStandardMaterial({
              color: 0x555555, roughness: 0.5, metalness: 0.7,
            });
            for (let b = 0; b < nBars; b++) {
              const bz = z + step * b + (step - barD) / 2;
              const bar = new THREE.Mesh(
                new THREE.BoxGeometry(bw, barH, barD), grateMat,
              );
              bar.position.set(x + bw / 2, y + barH / 2, bz + barD / 2);
              bar.castShadow    = true;
              bar.receiveShadow = true;
              this.group.add(bar);
            }
          } else {
            const mats = bt === BrickType.Hole ? faceMats(C_HOLE) : faceMats(palette);
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), mats);
            mesh.position.set(x + bw / 2, y + bh / 2, z + bd / 2);
            mesh.castShadow    = true;
            mesh.receiveShadow = true;
            this.group.add(mesh);
          }
        }
      }

      // mortar between touching brick faces (same row + row above)
      if (showMortar) {
        const mortarMat = new THREE.MeshStandardMaterial({ color: 0x7a7060, roughness: 1 });

        // horizontal joints between this row and the next
        if (ri < rowCount - 1) {
          const offX2   = model.rowOffsets[ri + 1] ? CELL * 2 : 0;
          const mortarY = y + ROW_H + JOINT / 2;

          // collect footprints of bricks in the next row
          type Rect = { x0: number; x1: number; z0: number; z1: number };
          const below: Rect[] = [];
          for (let ci2 = 0; ci2 < model.cols; ci2++) {
            for (let di2 = 0; di2 < model.depths; di2++) {
              const btB = model.rows[ri + 1]?.[ci2]?.[di2];
              if (!btB || btB === BrickType.Empty || btB === BrickType.Hole) continue;
              const [bwB, bdB] = brickCells(btB, model.doors);
              below.push({
                x0: ci2 * CELL + JOINT / 2 + offX2,
                x1: ci2 * CELL + JOINT / 2 + offX2 + bwB * CELL - JOINT,
                z0: di2 * CELL + JOINT / 2,
                z1: di2 * CELL + JOINT / 2 + bdB * CELL - JOINT,
              });
            }
          }

          // for each brick in current row, intersect with bricks below
          for (let ci = 0; ci < model.cols; ci++) {
            for (let di = 0; di < model.depths; di++) {
              const btA = model.rows[ri]?.[ci]?.[di];
              if (!btA || btA === BrickType.Empty || btA === BrickType.Hole) continue;
              const [bwA, bdA] = brickCells(btA, model.doors);
              const ax0 = ci * CELL + JOINT / 2 + offX;
              const ax1 = ax0 + bwA * CELL - JOINT;
              const az0 = di * CELL + JOINT / 2;
              const az1 = az0 + bdA * CELL - JOINT;

              for (const b of below) {
                const ix0 = Math.max(ax0, b.x0), ix1 = Math.min(ax1, b.x1);
                const iz0 = Math.max(az0, b.z0), iz1 = Math.min(az1, b.z1);
                if (ix1 <= ix0 || iz1 <= iz0) continue;
                const m = new THREE.Mesh(
                  new THREE.BoxGeometry(ix1 - ix0, JOINT, iz1 - iz0), mortarMat);
                m.position.set((ix0 + ix1) / 2, mortarY, (iz0 + iz1) / 2);
                this.group.add(m);
              }
            }
          }
        }
        for (let ci = 0; ci < model.cols; ci++) {
          for (let di = 0; di < model.depths; di++) {
            const bt = model.rows[ri]?.[ci]?.[di];
            if (!bt || bt === BrickType.Empty || bt === BrickType.Hole) continue;
            const [bw, bd] = brickCells(bt, model.doors);

            // X-joint: right neighbour starts exactly where this brick ends
            const rBt = model.rows[ri]?.[ci + bw]?.[di];
            if (rBt && rBt !== BrickType.Empty && rBt !== BrickType.Hole) {
              const [, bd2] = brickCells(rBt, model.doors);
              const mDepth = Math.min(bd, bd2) * CELL - JOINT;
              const mx = (ci + bw) * CELL + offX;
              const mz = di * CELL + JOINT / 2;
              const m = new THREE.Mesh(new THREE.BoxGeometry(JOINT, ROW_H, mDepth), mortarMat);
              m.position.set(mx, y + ROW_H / 2, mz + mDepth / 2);
              this.group.add(m);
            }

            // Z-joint: front neighbour starts exactly where this brick ends
            const fBt = model.rows[ri]?.[ci]?.[di + bd];
            if (fBt && fBt !== BrickType.Empty && fBt !== BrickType.Hole) {
              const [bw2] = brickCells(fBt, model.doors);
              const mWidth = Math.min(bw, bw2) * CELL - JOINT;
              const mx = ci * CELL + offX + JOINT / 2;
              const mz = (di + bd) * CELL;
              const m = new THREE.Mesh(new THREE.BoxGeometry(mWidth, ROW_H, JOINT), mortarMat);
              m.position.set(mx + mWidth / 2, y + ROW_H / 2, mz);
              this.group.add(m);
            }
          }
        }
      }
    }
  }
}
