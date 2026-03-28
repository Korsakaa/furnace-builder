import { BrickModel, BrickType, DoorTemplate, brickCells, setBrick, isDoorBrick, doorTemplateId } from './model.js';

const SC       = 16;   // pixels per cell (1 brick = 4×2 cells)
const LABEL_W  = 60;
const ROW_GAP  = 18;

const ALL_BRICK_TYPES: string[] = [
  BrickType.FullStretcher, BrickType.FullHeader,
  BrickType.ThreeQuarter,  BrickType.Half,
  BrickType.Hole,          BrickType.VerticalStretcher,
  BrickType.Grate,
];

function allTypes(model: BrickModel): string[] {
  return [...ALL_BRICK_TYPES, ...model.doors.map(d => `door:${d.id}`)];
}

// ── colours ─────────────────────────────────────────────────────────────────
function brickFill(bt: string, gray: boolean): string {
  if (gray) return '#6e6e6e';
  if (isDoorBrick(bt)) return '#2a4a5a';
  switch (bt) {
    case BrickType.FullStretcher:     return '#d27846';
    case BrickType.FullHeader:        return '#4688d2';
    case BrickType.ThreeQuarter:      return '#be6b41';
    case BrickType.Half:              return '#a85a32';
    case BrickType.Hole:              return '#19120c';
    case BrickType.VerticalStretcher: return '#5aab58';
    case BrickType.Grate:             return '#3a3a3a';
    default: return 'transparent';
  }
}
function brickBorder(gray: boolean): string { return gray ? '#444' : '#321a08'; }

// ── find the brick whose footprint covers cell (col, dep) ────────────────────
function findBrickStart(
  model: BrickModel, row: number, col: number, dep: number
): [number, number] | null {
  for (const bt of allTypes(model)) {
    const [bw, bd] = brickCells(bt, model.doors);
    for (let dc = 0; dc < bw; dc++) {
      for (let dd = 0; dd < bd; dd++) {
        const sc = col - dc, sd = dep - dd;
        if (sc >= 0 && sd >= 0 && sc < model.cols && sd < model.depths &&
            model.rows[row]?.[sc]?.[sd] === bt)
          return [sc, sd];
      }
    }
  }
  return null;
}

// ── place brick, clearing any overlap ────────────────────────────────────────
function placeBrick(
  model: BrickModel, row: number, col: number, dep: number, bt: BrickType
): void {
  if (col < 0 || dep < 0 || col >= model.cols || dep >= model.depths) return;
  const [bw, bd] = brickCells(bt);
  const cleared = new Set<string>();
  for (let dc = 0; dc < bw; dc++) {
    for (let dd = 0; dd < bd; dd++) {
      const c = col + dc, d = dep + dd;
      if (c >= model.cols || d >= model.depths) continue;
      const s = findBrickStart(model, row, c, d);
      if (s) {
        const key = `${s[0]},${s[1]}`;
        if (!cleared.has(key)) { setBrick(model, row, s[0], s[1], BrickType.Empty); cleared.add(key); }
      }
    }
  }
  setBrick(model, row, col, dep, bt);
}

// ── axis coordinate labels ───────────────────────────────────────────────────
function drawAxes(
  ctx: CanvasRenderingContext2D,
  ox: number, oy: number,
  cols: number, depths: number,
  offPx: number
) {
  ctx.font = '8px monospace';

  // X axis — brick numbers every 4 cells, centered on each brick
  ctx.fillStyle = '#7a6a50';
  ctx.textAlign = 'center';
  for (let c = 0; c < cols; c += 4) {
    ctx.fillText(String(c / 4 + 1), ox + c * SC + offPx + SC * 2, oy - 2);
  }

  // Y axis — depth positions every 2 cells, right-aligned before grid
  ctx.fillStyle = '#4a6a7a';
  ctx.textAlign = 'right';
  for (let d = 0; d < depths; d += 2) {
    ctx.fillText(String(d / 2 + 1), ox - 3, oy + d * SC + SC + 3);
  }

  ctx.textAlign = 'left';
}

// ── grid background ──────────────────────────────────────────────────────────
function drawBg(
  ctx: CanvasRenderingContext2D, ox: number, oy: number, cols: number, depths: number
) {
  const w = cols * SC, h = depths * SC;
  ctx.fillStyle = '#1e1710';
  ctx.fillRect(ox, oy, w, h);

  for (let i = 1; i < cols; i++) {
    const x = ox + i * SC;
    ctx.beginPath(); ctx.moveTo(x, oy); ctx.lineTo(x, oy + h);
    if (i % 4 === 0) { ctx.strokeStyle = 'rgba(108,84,50,0.75)'; ctx.lineWidth = 1; }
    else             { ctx.strokeStyle = 'rgba(82,64,38,0.35)';  ctx.lineWidth = 0.5; }
    ctx.stroke();
  }
  for (let i = 1; i < depths; i++) {
    const y = oy + i * SC;
    ctx.beginPath(); ctx.moveTo(ox, y); ctx.lineTo(ox + w, y);
    if (i % 2 === 0) { ctx.strokeStyle = 'rgba(108,84,50,0.75)'; ctx.lineWidth = 1; }
    else             { ctx.strokeStyle = 'rgba(82,64,38,0.35)';  ctx.lineWidth = 0.5; }
    ctx.stroke();
  }

  // center dashed line (wall mid-plane)
  if (depths >= 2) {
    const cy = oy + Math.floor(depths / 2) * SC;
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = 'rgba(215,178,65,0.85)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(ox, cy); ctx.lineTo(ox + w, cy); ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.strokeStyle = '#735c38'; ctx.lineWidth = 1.5;
  ctx.strokeRect(ox, oy, w, h);
}

// ── draw bricks of one row (no background) ───────────────────────────────────
function drawBricks(
  ctx: CanvasRenderingContext2D, model: BrickModel,
  row: number, ox: number, oy: number, gray: boolean, mortar = false
) {
  const offPx = model.rowOffsets[row] ? SC * 2 : 0;
  const m = 2;
  for (let col = 0; col < model.cols; col++) {
    for (let dep = 0; dep < model.depths; dep++) {
      const bt = model.rows[row]?.[col]?.[dep];
      if (!bt || bt === BrickType.Empty) continue;
      const [bw, bd] = brickCells(bt, model.doors);
      const sx = ox + col * SC + offPx + m;
      const sy = oy + dep * SC + m;
      const pw = bw * SC - 2 * m;
      const ph = bd * SC - 2 * m;

      ctx.fillStyle = brickFill(bt, gray);
      ctx.beginPath(); ctx.roundRect(sx, sy, pw, ph, 2); ctx.fill();
      ctx.strokeStyle = brickBorder(gray); ctx.lineWidth = 1.5; ctx.stroke();

      // дверца — рисуем форму из shape (фронтальный вид, row=0 сверху)
      if (isDoorBrick(bt) && !gray) {
        const tmpl = model.doors.find(d => d.id === doorTemplateId(bt));
        if (tmpl) {
          ctx.save();
          ctx.beginPath(); ctx.roundRect(sx, sy, pw, ph, 2); ctx.clip();
          // В top-down редакторе показываем срез shape по строке 0 (низ двери)
          for (let c = 0; c < tmpl.cols; c++) {
            const hasFrame = tmpl.shape[c]?.some(v => v) ?? false;
            const cx = sx + c * SC - m + 1;
            ctx.fillStyle = hasFrame ? '#6aaabf' : '#111a20';
            ctx.fillRect(cx, sy + m - 1, SC - 2, ph);
          }
          // индикатор смещения
          ctx.fillStyle = 'rgba(255,200,80,0.5)';
          const indicatorX = tmpl.offsetX === 'left' ? sx : sx + pw - 4;
          ctx.fillRect(indicatorX, sy, 4, ph);
          ctx.restore();
        }
      }

      // решетка — горизонтальные прутья
      if (bt === BrickType.Grate && !gray) {
        const bars = 4;
        const gap  = ph / (bars + 1);
        ctx.save();
        ctx.beginPath(); ctx.roundRect(sx, sy, pw, ph, 2); ctx.clip();
        ctx.strokeStyle = '#888';
        ctx.lineWidth   = 2;
        for (let i = 1; i <= bars; i++) {
          const barY = sy + gap * i;
          ctx.beginPath(); ctx.moveTo(sx + 2, barY); ctx.lineTo(sx + pw - 2, barY); ctx.stroke();
        }
        // вертикальные прутья
        const vbars = 7;
        const vgap  = pw / (vbars + 1);
        ctx.lineWidth = 1.5;
        for (let i = 1; i <= vbars; i++) {
          const barX = sx + vgap * i;
          ctx.beginPath(); ctx.moveTo(barX, sy + 2); ctx.lineTo(barX, sy + ph - 2); ctx.stroke();
        }
        ctx.restore();
      }
    }
  }
}

// ── draw one row (background + optional gray underlay + bricks) ───────────────
function drawRow(
  ctx: CanvasRenderingContext2D, model: BrickModel,
  row: number, ox: number, oy: number, gray: boolean,
  underlayRow?: number, mortar = false
) {
  drawBg(ctx, ox, oy, model.cols, model.depths);

  ctx.save();
  ctx.beginPath();
  ctx.rect(ox, oy, model.cols * SC, model.depths * SC);
  ctx.clip();

  if (underlayRow !== undefined) {
    ctx.globalAlpha = 0.45;
    drawBricks(ctx, model, underlayRow, ox, oy, true);
    ctx.globalAlpha = 1.0;
  }

  drawBricks(ctx, model, row, ox, oy, gray, mortar);
  ctx.restore();
}

// ── hit: pixel → (col, dep) ──────────────────────────────────────────────────
function hit(
  px: number, py: number, ox: number, oy: number,
  offset: boolean, cols: number, depths: number
): [number, number] | null {
  const offPx = offset ? SC * 2 : 0;
  const lx = px - ox - offPx;
  const ly = py - oy;
  if (lx < 0 || ly < 0) return null;
  const col = Math.floor(lx / SC);
  const dep = Math.floor(ly / SC);
  if (col >= 0 && col < cols && dep >= 0 && dep < depths) return [col, dep];
  return null;
}

// ── GridEditor class ──────────────────────────────────────────────────────────
export class GridEditor {
  private canvas:  HTMLCanvasElement;
  private ctx:     CanvasRenderingContext2D;
  private model:   BrickModel;
  selectedRow  = 0;
  selectedTool: string = BrickType.FullStretcher;
  showMortar   = false;
  onChange?:     () => void;
  onToolChange?: (tool: string) => void;

  private paintDown  = false;
  private eraseDown  = false;
  private currentOrigin = { x: 0, y: 0 };
  private lastPlaced: { col: number; dep: number } | null = null;

  constructor(canvas: HTMLCanvasElement, model: BrickModel) {
    this.canvas = canvas;
    this.ctx    = canvas.getContext('2d')!;
    this.model  = model;
    this.setupEvents();
    this.setupKeyboard();
  }

  setModel(model: BrickModel) { this.model = model; }

  // ── drawing ───────────────────────────────────────────────────────────────
  draw() {
    const model  = this.model;
    const cols   = model.cols;
    const depths = model.depths;
    const gw     = cols * SC;
    const gh     = depths * SC;
    const hasPrev = this.selectedRow > 0;

    const dpr = window.devicePixelRatio || 1;

    const HINTS_H = 36;
    let totalH = 8;
    totalH += 14 + gh + 8 + HINTS_H;
    const totalW = LABEL_W + gw + 12;

    if (this.canvas.width  !== Math.round(totalW * dpr) ||
        this.canvas.height !== Math.round(totalH * dpr)) {
      this.canvas.width  = Math.round(totalW * dpr);
      this.canvas.height = Math.round(totalH * dpr);
      this.canvas.style.width  = totalW + 'px';
      this.canvas.style.height = totalH + 'px';
      this.ctx.scale(dpr, dpr);
    }

    const ctx  = this.ctx;
    ctx.clearRect(0, 0, totalW, totalH);

    const baseX = LABEL_W;
    let curY = 8;

    // current row label
    ctx.fillStyle = '#dcb070'; ctx.font = 'bold 11px monospace';
    const offMark = model.rowOffsets[this.selectedRow] ? ' [½→]' : '';
    ctx.fillText(`Ряд ${this.selectedRow + 1}${offMark}`, 4, curY + 11);
    curY += 14;

    // axis coordinate labels
    const offPx = model.rowOffsets[this.selectedRow] ? SC * 2 : 0;
    drawAxes(ctx, baseX, curY, cols, depths, offPx);

    this.currentOrigin = { x: baseX, y: curY };
    const underlay = hasPrev ? this.selectedRow - 1 : undefined;
    drawRow(ctx, model, this.selectedRow, baseX, curY, false, underlay, this.showMortar);
    curY += gh + 10;

    // hotkey hints
    ctx.fillStyle = '#5a5040';
    ctx.font = '10px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('← → ↑ ↓  следующий кирпич', LABEL_W, curY + 11);
    ctx.fillText('ПКМ  стереть  |  Ctrl▶  Ложок ↔ Тычок', LABEL_W, curY + 24);
  }

  // ── input ─────────────────────────────────────────────────────────────────
  private setupEvents() {
    const canvas = this.canvas;

    const paint = (e: MouseEvent, erase: boolean) => {
      const rect = canvas.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      const { x, y } = this.currentOrigin;
      const result = hit(px, py, x, y,
        this.model.rowOffsets[this.selectedRow],
        this.model.cols, this.model.depths);
      if (!result) return;
      const [col, dep] = result;

      if (erase) {
        const s = findBrickStart(this.model, this.selectedRow, col, dep);
        if (s) setBrick(this.model, this.selectedRow, s[0], s[1], BrickType.Empty);
      } else {
        placeBrick(this.model, this.selectedRow, col, dep, this.selectedTool);
        this.lastPlaced = { col, dep };
      }
      this.draw();
      this.onChange?.();
    };

    canvas.addEventListener('mousedown', (e) => {
      if (e.button === 0) { this.paintDown = true; paint(e, false); }
      if (e.button === 2) { this.eraseDown = true; paint(e, true);  }
    });
    canvas.addEventListener('mousemove', (e) => {
      if (this.paintDown) paint(e, false);
      if (this.eraseDown) paint(e, true);
    });
    canvas.addEventListener('mouseup',    () => { this.paintDown = false; this.eraseDown = false; });
    canvas.addEventListener('mouseleave', () => { this.paintDown = false; this.eraseDown = false; });
    canvas.addEventListener('contextmenu', e => e.preventDefault());
  }

  // ── export all rows as PNG images ────────────────────────────────────────
  exportAllRows(): void {
    const model  = this.model;
    const cols   = model.cols;
    const depths = model.depths;
    const gw     = cols   * SC;
    const gh     = depths * SC;
    const PAD    = 8;
    const LABELH = 16;
    const W = LABEL_W + gw + PAD;
    const H = PAD + LABELH + gh + PAD;

    model.rows.forEach((_row, ri) => {
      const canvas = document.createElement('canvas');
      canvas.width  = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d')!;

      const gridX   = LABEL_W;
      const gridY   = PAD + LABELH;
      const offPx   = model.rowOffsets[ri] ? SC * 2 : 0;

      // background
      ctx.fillStyle = '#1a1410';
      ctx.fillRect(0, 0, W, H);

      // row label
      ctx.fillStyle = '#dcb070';
      ctx.font = 'bold 11px monospace';
      const offMark = model.rowOffsets[ri] ? ' [½→]' : '';
      ctx.fillText(`Ряд ${ri + 1}${offMark}`, 4, PAD + 11);

      // axis coordinates
      drawAxes(ctx, gridX, gridY, cols, depths, offPx);

      // grid background + previous row underlay + current row
      drawRow(ctx, model, ri, gridX, gridY, false, ri > 0 ? ri - 1 : undefined);

      // download with stagger so browser doesn't block
      canvas.toBlob(blob => {
        if (!blob) return;
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `row_${String(ri + 1).padStart(3, '0')}.png`;
        setTimeout(() => {
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(a.href);
        }, ri * 120);
      });
    });
  }

  // ── keyboard: arrow keys repeat last brick ────────────────────────────────
  private setupKeyboard() {
    const DIRS: Record<string, [number, number]> = {
      ArrowRight: [ 1,  0],
      ArrowLeft:  [-1,  0],
      ArrowDown:  [ 0,  1],
      ArrowUp:    [ 0, -1],
    };

    window.addEventListener('keydown', (e) => {
      if (document.activeElement instanceof HTMLInputElement) return;

      // Right Ctrl — toggle Ложок ↔ Тычок
      if (e.key === 'Control' && e.location === 2) {
        const next = this.selectedTool === BrickType.FullStretcher
          ? BrickType.FullHeader : BrickType.FullStretcher;
        this.selectedTool = next;
        this.onToolChange?.(next);
        return;
      }

      const dir = DIRS[e.key];
      if (!dir) return;
      e.preventDefault();

      const [bw, bd] = brickCells(this.selectedTool, this.model.doors);
      let col: number, dep: number;

      if (this.lastPlaced) {
        col = this.lastPlaced.col + dir[0] * bw;
        dep = this.lastPlaced.dep + dir[1] * bd;
      } else {
        // No last brick — start from top-left corner
        col = dir[0] < 0 ? this.model.cols - bw : 0;
        dep = dir[1] < 0 ? this.model.depths - bd : 0;
      }

      if (col < 0 || dep < 0 || col >= this.model.cols || dep >= this.model.depths) return;

      placeBrick(this.model, this.selectedRow, col, dep, this.selectedTool);
      this.lastPlaced = { col, dep };
      this.draw();
      this.onChange?.();
    });
  }
}
