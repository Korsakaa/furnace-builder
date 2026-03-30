import {
  BrickModel,
  BrickType,
  DoorTemplate,
  brickCells,
  setBrick,
  addRow,
  isDoorBrick,
  doorTemplateId,
  isChamferBrick,
  chamferCorner,
  chamferLegs,
  isWedgeBrick,
  wedgeTaper,
  isBoxBrick,
  boxTemplateId,
  isHalfDiagBrick,
  halfDiagVariant,
} from "./model.js";

const SC = 16; // pixels per cell (1 brick = 4×2 cells)
const LABEL_W = 60;
const ROW_GAP = 18;

const ALL_BRICK_TYPES: string[] = [
  BrickType.FullStretcher,
  BrickType.FullHeader,
  BrickType.ThreeQuarter,
  BrickType.ThreeQuarterHeader,
  BrickType.Quarter,
  BrickType.QuarterHeader,
  BrickType.Half,
  BrickType.HalfLong,
  BrickType.HalfLongHeader,
  BrickType.ChamferTL,
  BrickType.ChamferTR,
  BrickType.ChamferBR,
  BrickType.ChamferBL,
  BrickType.ChamferHeaderTL,
  BrickType.ChamferHeaderTR,
  BrickType.ChamferHeaderBR,
  BrickType.ChamferHeaderBL,
  BrickType.ChamferTL2,
  BrickType.ChamferTR2,
  BrickType.ChamferBR2,
  BrickType.ChamferBL2,
  BrickType.ChamferHeaderTL2,
  BrickType.ChamferHeaderTR2,
  BrickType.ChamferHeaderBR2,
  BrickType.ChamferHeaderBL2,
  BrickType.WedgeL,
  BrickType.WedgeR,
  BrickType.WedgeHeaderF,
  BrickType.WedgeHeaderB,
  BrickType.HalfDiagTL,
  BrickType.HalfDiagTR,
  BrickType.HalfDiagBR,
  BrickType.HalfDiagBL,
  BrickType.WedgeHalfL,
  BrickType.WedgeHalfR,
  BrickType.WedgeHalfHeaderF,
  BrickType.WedgeHalfHeaderB,
  BrickType.WedgeMidL,
  BrickType.WedgeMidR,
  BrickType.WedgeMidHeaderF,
  BrickType.WedgeMidHeaderB,
  BrickType.Hole,
  BrickType.VerticalStretcher,
  BrickType.Grate,
  BrickType.Slab,
];

function allTypes(model: BrickModel): string[] {
  return [
    ...ALL_BRICK_TYPES,
    ...model.doors.map((d) => `door:${d.id}`),
    ...model.boxes.map((b) => `box:${b.id}`),
  ];
}

// ── colours ─────────────────────────────────────────────────────────────────
function brickFill(bt: string, gray: boolean, model?: BrickModel): string {
  if (gray) return "#6e6e6e";
  if (isDoorBrick(bt)) return "#2a4a5a";
  if (isBoxBrick(bt) && model) {
    const tmpl = model.boxes.find(b => b.id === boxTemplateId(bt));
    if (tmpl) return tmpl.color;
  }
  switch (bt) {
    case BrickType.FullStretcher:
      return "#d27846";
    case BrickType.FullHeader:
      return "#4688d2";
    case BrickType.ThreeQuarter:
      return "#be6b41";
    case BrickType.ThreeQuarterHeader:
      return "#3a7ac2";
    case BrickType.Quarter:
      return "#b05a30";
    case BrickType.QuarterHeader:
      return "#2a68b8";
    case BrickType.Half:
      return "#a85a32";
    case BrickType.HalfLong:
      return "#c87850";
    case BrickType.HalfLongHeader:
      return "#5090d0";
    case BrickType.ChamferTL:
    case BrickType.ChamferTR:
    case BrickType.ChamferBR:
    case BrickType.ChamferBL:
      return "#e07838";
    case BrickType.ChamferHeaderTL:
    case BrickType.ChamferHeaderTR:
    case BrickType.ChamferHeaderBR:
    case BrickType.ChamferHeaderBL:
      return "#e07838";
    case BrickType.ChamferTL2:
    case BrickType.ChamferTR2:
    case BrickType.ChamferBR2:
    case BrickType.ChamferBL2:
      return "#e07838";
    case BrickType.ChamferHeaderTL2:
    case BrickType.ChamferHeaderTR2:
    case BrickType.ChamferHeaderBR2:
    case BrickType.ChamferHeaderBL2:
      return "#e07838";
    case BrickType.HalfDiagTL: case BrickType.HalfDiagTR:
    case BrickType.HalfDiagBR: case BrickType.HalfDiagBL:
      return "#a050c0";
    case BrickType.WedgeHalfL: case BrickType.WedgeHalfR:
      return "#5fa040";
    case BrickType.WedgeHalfHeaderF: case BrickType.WedgeHalfHeaderB:
      return "#3080a8";
    case BrickType.WedgeMidL: case BrickType.WedgeMidR:
      return "#70b850";
    case BrickType.WedgeMidHeaderF: case BrickType.WedgeMidHeaderB:
      return "#4098c8";
    case BrickType.Hole:
      return "#19120c";
    case BrickType.VerticalStretcher:
      return "#5aab58";
    case BrickType.Grate:
      return "#3a3a3a";
    case BrickType.Slab:
      return "#1a1a1a";
    default:
      return "transparent";
  }
}
function brickBorder(gray: boolean): string {
  return gray ? "#444" : "#321a08";
}

// ── find the brick whose footprint covers cell (col, dep) ────────────────────
function findBrickStart(
  model: BrickModel,
  row: number,
  col: number,
  dep: number,
): [number, number] | null {
  for (const bt of allTypes(model)) {
    const [bw, bd] = brickCells(bt, model.doors, model.boxes);
    for (let dc = 0; dc < bw; dc++) {
      for (let dd = 0; dd < bd; dd++) {
        const sc = col - dc,
          sd = dep - dd;
        if (
          sc >= 0 &&
          sd >= 0 &&
          sc < model.cols &&
          sd < model.depths &&
          model.rows[row]?.[sc]?.[sd] === bt
        )
          return [sc, sd];
      }
    }
  }
  return null;
}

// Возвращает true, если ячейка (dc,dd) относительно начала кирпича попадает в треугольник среза
function isInChamferCut(
  dc: number,
  dd: number,
  bw: number,
  bd: number,
  corner: string,
  hx: number,
  hz: number,
): boolean {
  const cx = dc + 0.5, cz = dd + 0.5;
  if (corner === "TL") return cx / hx + cz / hz <= 1;
  if (corner === "TR") return (bw - cx) / hx + cz / hz <= 1;
  if (corner === "BR") return (bw - cx) / hx + (bd - cz) / hz <= 1;
  /* BL */ return cx / hx + (bd - cz) / hz <= 1;
}

// ── place brick in one row, clearing overlaps ────────────────────────────────
function placeBrickInRow(
  model: BrickModel,
  row: number,
  col: number,
  dep: number,
  bt: string,
): void {
  if (row < 0 || row >= model.rows.length) return;
  if (col < 0 || dep < 0 || col >= model.cols || dep >= model.depths) return;
  const [bw, bd] = brickCells(bt, model.doors, model.boxes);
  const newCorner = isChamferBrick(bt) ? chamferCorner(bt) : null;
  const [newHx, newHz] = newCorner ? chamferLegs(bt, bw, bd) : [0, 0];
  const cleared = new Set<string>();
  for (let dc = 0; dc < bw; dc++) {
    for (let dd = 0; dd < bd; dd++) {
      const c = col + dc, d = dep + dd;
      if (c >= model.cols || d >= model.depths) continue;
      // Ячейка в зоне среза нового кирпича — пусто, не стираем
      if (newCorner && isInChamferCut(dc, dd, bw, bd, newCorner, newHx, newHz)) continue;
      const s = findBrickStart(model, row, c, d);
      if (s) {
        const key = `${s[0]},${s[1]}`;
        if (!cleared.has(key)) {
          const existing = model.rows[row]?.[s[0]]?.[s[1]];
          // Ставим срез — не стираем соседний если ячейка в зоне его среза
          if (newCorner && existing && isChamferBrick(existing)) {
            const [exBw, exBd] = brickCells(existing, model.doors, model.boxes);
            const [exHx, exHz] = chamferLegs(existing, exBw, exBd);
            if (isInChamferCut(c - s[0], d - s[1], exBw, exBd, chamferCorner(existing), exHx, exHz)) {
              cleared.add(key);
              continue;
            }
          }
          setBrick(model, row, s[0], s[1], BrickType.Empty);
          cleared.add(key);
        }
      }
    }
  }
  setBrick(model, row, col, dep, bt);
}

// ── place brick (multi-row for doors) ────────────────────────────────────────
function placeBrick(
  model: BrickModel,
  row: number,
  col: number,
  dep: number,
  bt: string,
): void {
  placeBrickInRow(model, row, col, dep, bt);

  // doors / boxes span multiple rows upward
  if (isDoorBrick(bt)) {
    const tmpl = model.doors.find((d) => d.id === doorTemplateId(bt));
    if (tmpl) {
      for (let dr = 1; dr < tmpl.heightRows; dr++) {
        placeBrickInRow(model, row + dr, col, dep, bt);
      }
    }
  }
  if (isBoxBrick(bt)) {
    const tmpl = model.boxes.find((b) => b.id === boxTemplateId(bt));
    if (tmpl) {
      // auto-add rows if the box height exceeds current row count
      while (model.rows.length < row + tmpl.heightRows) addRow(model);
      for (let dr = 1; dr < tmpl.heightRows; dr++) {
        placeBrickInRow(model, row + dr, col, dep, bt);
      }
    }
  }
}

// ── erase brick (clears all rows for multi-row doors) ────────────────────────
function eraseBrick(
  model: BrickModel,
  row: number,
  col: number,
  dep: number,
): void {
  const s = findBrickStart(model, row, col, dep);
  if (!s) return;
  const bt = model.rows[row]?.[s[0]]?.[s[1]];
  if (!bt || bt === BrickType.Empty) return;

  setBrick(model, row, s[0], s[1], BrickType.Empty);

  // erase all rows of multi-row door / box
  if (isDoorBrick(bt)) {
    const tmpl = model.doors.find((d) => d.id === doorTemplateId(bt));
    if (tmpl) {
      for (let dr = 1; dr < tmpl.heightRows; dr++) {
        const r = row + dr;
        if (r < model.rows.length && model.rows[r]?.[s[0]]?.[s[1]] === bt)
          setBrick(model, r, s[0], s[1], BrickType.Empty);
      }
    }
  }
  if (isBoxBrick(bt)) {
    const tmpl = model.boxes.find((b) => b.id === boxTemplateId(bt));
    if (tmpl) {
      for (let dr = 1; dr < tmpl.heightRows; dr++) {
        const r = row + dr;
        if (r < model.rows.length && model.rows[r]?.[s[0]]?.[s[1]] === bt)
          setBrick(model, r, s[0], s[1], BrickType.Empty);
      }
    }
  }
}

// ── axis coordinate labels ───────────────────────────────────────────────────
function drawAxes(
  ctx: CanvasRenderingContext2D,
  ox: number,
  oy: number,
  cols: number,
  depths: number,
  offPx: number,
) {
  ctx.font = "8px monospace";

  // X axis — brick numbers every 4 cells, centered on each brick
  ctx.fillStyle = "#7a6a50";
  ctx.textAlign = "center";
  for (let c = 0; c < cols; c += 4) {
    ctx.fillText(String(c / 4 + 1), ox + c * SC + offPx + SC * 2, oy - 2);
  }

  // Y axis — depth positions every 2 cells, right-aligned before grid
  ctx.fillStyle = "#4a6a7a";
  ctx.textAlign = "right";
  for (let d = 0; d < depths; d += 2) {
    ctx.fillText(String(d / 2 + 1), ox - 3, oy + d * SC + SC + 3);
  }

  ctx.textAlign = "left";
}

// ── grid background ──────────────────────────────────────────────────────────
function drawBg(
  ctx: CanvasRenderingContext2D,
  ox: number,
  oy: number,
  cols: number,
  depths: number,
) {
  const w = cols * SC,
    h = depths * SC;
  ctx.fillStyle = "#1e1710";
  ctx.fillRect(ox, oy, w, h);

  for (let i = 1; i < cols; i++) {
    const x = ox + i * SC;
    ctx.beginPath();
    ctx.moveTo(x, oy);
    ctx.lineTo(x, oy + h);
    if (i % 4 === 0) {
      ctx.strokeStyle = "rgba(108,84,50,0.75)";
      ctx.lineWidth = 1;
    } else {
      ctx.strokeStyle = "rgba(82,64,38,0.35)";
      ctx.lineWidth = 0.5;
    }
    ctx.stroke();
  }
  for (let i = 1; i < depths; i++) {
    const y = oy + i * SC;
    ctx.beginPath();
    ctx.moveTo(ox, y);
    ctx.lineTo(ox + w, y);
    if (i % 2 === 0) {
      ctx.strokeStyle = "rgba(108,84,50,0.75)";
      ctx.lineWidth = 1;
    } else {
      ctx.strokeStyle = "rgba(82,64,38,0.35)";
      ctx.lineWidth = 0.5;
    }
    ctx.stroke();
  }

  // center dashed line (wall mid-plane)
  if (depths >= 2) {
    const cy = oy + Math.floor(depths / 2) * SC;
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = "rgba(215,178,65,0.85)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ox, cy);
    ctx.lineTo(ox + w, cy);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.strokeStyle = "#735c38";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(ox, oy, w, h);
}

// ── draw bricks of one row (no background) ───────────────────────────────────
function drawBricks(
  ctx: CanvasRenderingContext2D,
  model: BrickModel,
  row: number,
  ox: number,
  oy: number,
  gray: boolean,
  mortar = false,
) {
  const offPx = model.rowOffsets[row] ? SC * 2 : 0;
  const m = 2;
  for (let col = 0; col < model.cols; col++) {
    for (let dep = 0; dep < model.depths; dep++) {
      const bt = model.rows[row]?.[col]?.[dep];
      if (!bt || bt === BrickType.Empty) continue;
      const [bw, bd] = brickCells(bt, model.doors, model.boxes);
      const sx = ox + col * SC + offPx + m;
      const sy = oy + dep * SC + m;
      const pw = bw * SC - 2 * m;
      const ph = bd * SC - 2 * m;

      ctx.fillStyle = brickFill(bt, gray, model);
      if (isChamferBrick(bt)) {
        const corner = chamferCorner(bt);
        const [rawCx, rawCz] = chamferLegs(bt, bw, bd);
        const cx = rawCx * SC, cz = rawCz * SC;
        ctx.beginPath();
        if (corner === "TL") {
          ctx.moveTo(sx + cx, sy);
          ctx.lineTo(sx + pw, sy);
          ctx.lineTo(sx + pw, sy + ph);
          ctx.lineTo(sx, sy + ph);
          ctx.lineTo(sx, sy + cz);
        } else if (corner === "TR") {
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + pw - cx, sy);
          ctx.lineTo(sx + pw, sy + cz);
          ctx.lineTo(sx + pw, sy + ph);
          ctx.lineTo(sx, sy + ph);
        } else if (corner === "BR") {
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + pw, sy);
          ctx.lineTo(sx + pw, sy + ph - cz);
          ctx.lineTo(sx + pw - cx, sy + ph);
          ctx.lineTo(sx, sy + ph);
        } else {
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + pw, sy);
          ctx.lineTo(sx + pw, sy + ph);
          ctx.lineTo(sx + cx, sy + ph);
          ctx.lineTo(sx, sy + ph - cz);
        }
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = brickBorder(gray);
        ctx.lineWidth = 1.5;
        ctx.stroke();
      } else if (isWedgeBrick(bt)) {
        // Клин: заливаем прямоугольник, диагональная линия показывает направление клина
        const taper = wedgeTaper(bt);
        ctx.beginPath();
        ctx.roundRect(sx, sy, pw, ph, 2);
        ctx.fill();
        // Полупрозрачный треугольник на "тонкой" стороне
        ctx.fillStyle = gray
          ? "rgba(255,255,255,0.18)"
          : "rgba(255,255,255,0.30)";
        ctx.beginPath();
        if (taper === "L") {
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + pw, sy);
          ctx.lineTo(sx + pw, sy + ph);
        } // тонкий справа
        else if (taper === "R") {
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx, sy + ph);
          ctx.lineTo(sx + pw, sy + ph);
        } // тонкий слева
        else if (taper === "F") {
          ctx.moveTo(sx, sy + ph);
          ctx.lineTo(sx + pw, sy + ph);
          ctx.lineTo(sx + pw, sy);
        } // тонкий спереди (верх)
        else if (taper === "B") {
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + pw, sy);
          ctx.lineTo(sx, sy + ph);
        } // тонкий сзади (низ)
        else if (taper === "MR") {
          ctx.moveTo(sx + pw / 2, sy);
          ctx.lineTo(sx + pw, sy);
          ctx.lineTo(sx + pw, sy + ph);
        } // клин с середины вправо
        else if (taper === "ML") {
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + pw / 2, sy);
          ctx.lineTo(sx, sy + ph);
        } // клин с середины влево
        else if (taper === "MF") {
          ctx.moveTo(sx + pw, sy + ph / 2);
          ctx.lineTo(sx + pw, sy);
          ctx.lineTo(sx, sy);
        } // клин с середины вперёд
        else if (taper === "MB") {
          ctx.moveTo(sx, sy + ph / 2);
          ctx.lineTo(sx, sy + ph);
          ctx.lineTo(sx + pw, sy + ph);
        } // клин с середины назад
        ctx.closePath();
        ctx.fill();
        // Диагональная линия — профиль наклонной крышки
        ctx.strokeStyle = gray
          ? "rgba(180,180,180,0.7)"
          : "rgba(255,255,255,0.65)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 2]);
        ctx.beginPath();
        if (taper === "L") {
          ctx.moveTo(sx, sy + ph);
          ctx.lineTo(sx + pw, sy);
        } else if (taper === "R") {
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + pw, sy + ph);
        } else if (taper === "F") {
          ctx.moveTo(sx + pw, sy + ph);
          ctx.lineTo(sx, sy);
        } else if (taper === "B") {
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + pw, sy + ph);
        } else if (taper === "MR") {
          ctx.moveTo(sx + pw / 2, sy);
          ctx.lineTo(sx + pw, sy + ph);
        } else if (taper === "ML") {
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + pw / 2, sy + ph);
        } else if (taper === "MF") {
          ctx.moveTo(sx, sy + ph / 2);
          ctx.lineTo(sx + pw, sy);
        } else if (taper === "MB") {
          ctx.moveTo(sx, sy + ph / 2);
          ctx.lineTo(sx + pw, sy + ph);
        }
        ctx.stroke();
        // Линия раздела (середина кирпича)
        if (taper === "MR" || taper === "ML") {
          ctx.beginPath();
          ctx.moveTo(sx + pw / 2, sy);
          ctx.lineTo(sx + pw / 2, sy + ph);
          ctx.stroke();
        } else if (taper === "MF" || taper === "MB") {
          ctx.beginPath();
          ctx.moveTo(sx, sy + ph / 2);
          ctx.lineTo(sx + pw, sy + ph / 2);
          ctx.stroke();
        }
        ctx.setLineDash([]);
        ctx.strokeStyle = brickBorder(gray);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(sx, sy, pw, ph, 2);
        ctx.stroke();
      } else if (isHalfDiagBrick(bt)) {
        const v = halfDiagVariant(bt);
        ctx.beginPath();
        if      (v === 'TL') { ctx.moveTo(sx,      sy);      ctx.lineTo(sx + pw, sy);      ctx.lineTo(sx,      sy + ph); }
        else if (v === 'TR') { ctx.moveTo(sx,      sy);      ctx.lineTo(sx + pw, sy);      ctx.lineTo(sx + pw, sy + ph); }
        else if (v === 'BR') { ctx.moveTo(sx + pw, sy);      ctx.lineTo(sx + pw, sy + ph); ctx.lineTo(sx,      sy + ph); }
        else                 { ctx.moveTo(sx,      sy);      ctx.lineTo(sx + pw, sy + ph); ctx.lineTo(sx,      sy + ph); }
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = brickBorder(gray);
        ctx.lineWidth = 1.5;
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.roundRect(sx, sy, pw, ph, 2);
        ctx.fill();
        ctx.strokeStyle = brickBorder(gray);
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // дверца — рисуем форму из shape (вид сверху)
      if (isDoorBrick(bt) && !gray) {
        const tmpl = model.doors.find((d) => d.id === doorTemplateId(bt));
        if (tmpl) {
          ctx.save();
          ctx.beginPath();
          ctx.roundRect(sx, sy, pw, ph, 2);
          ctx.clip();

          if (tmpl.brickBase === "Тычок") {
            // Тычок: колонки shape — слои по глубине (Y в виде сверху)
            for (let c = 0; c < tmpl.cols; c++) {
              const hasFrame = tmpl.shape[c]?.some((v) => v) ?? false;
              const cy = sy + c * SC - m + 1;
              ctx.fillStyle = hasFrame ? "#6aaabf" : "#111a20";
              ctx.fillRect(sx + m - 1, cy, pw, SC - 2);
            }
            // индикатор смещения: вертикальная полоска слева/центр/справа
            ctx.fillStyle = "rgba(255,200,80,0.6)";
            const indX =
              tmpl.offsetX === "right"
                ? sx + pw - 3
                : tmpl.offsetX === "center"
                  ? sx + pw / 2 - 1
                  : sx;
            ctx.fillRect(indX, sy, 3, ph);
          } else {
            // Ложок: колонки shape — полосы по ширине (X)
            for (let c = 0; c < tmpl.cols; c++) {
              const hasFrame = tmpl.shape[c]?.some((v) => v) ?? false;
              const cx = sx + c * SC - m + 1;
              ctx.fillStyle = hasFrame ? "#6aaabf" : "#111a20";
              ctx.fillRect(cx, sy + m - 1, SC - 2, ph);
            }
            // индикатор смещения: горизонтальная полоска сверху/центр/снизу
            ctx.fillStyle = "rgba(255,200,80,0.6)";
            const indY =
              tmpl.offsetX === "right"
                ? sy + ph - 3
                : tmpl.offsetX === "center"
                  ? sy + ph / 2 - 1
                  : sy;
            ctx.fillRect(sx, indY, pw, 3);
          }

          ctx.restore();
        }
      }

      // объект-прямоугольник — имя + рамка
      if (isBoxBrick(bt) && !gray) {
        const tmpl = model.boxes.find(b => b.id === boxTemplateId(bt));
        if (tmpl) {
          ctx.save();
          ctx.beginPath();
          ctx.roundRect(sx, sy, pw, ph, 2);
          ctx.clip();
          // semi-transparent overlay so bricks beneath show through slightly
          ctx.fillStyle = 'rgba(0,0,0,0.22)';
          ctx.fillRect(sx, sy, pw, ph);
          // name label
          ctx.fillStyle = 'rgba(255,255,255,0.85)';
          ctx.font = 'bold 9px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(tmpl.name, sx + pw / 2, sy + ph / 2 + 3, pw - 4);
          ctx.restore();
        }
      }

      // решетка — горизонтальные прутья
      if (bt === BrickType.Grate && !gray) {
        const bars = 4;
        const gap = ph / (bars + 1);
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(sx, sy, pw, ph, 2);
        ctx.clip();
        ctx.strokeStyle = "#888";
        ctx.lineWidth = 2;
        for (let i = 1; i <= bars; i++) {
          const barY = sy + gap * i;
          ctx.beginPath();
          ctx.moveTo(sx + 2, barY);
          ctx.lineTo(sx + pw - 2, barY);
          ctx.stroke();
        }
        // вертикальные прутья
        const vbars = 7;
        const vgap = pw / (vbars + 1);
        ctx.lineWidth = 1.5;
        for (let i = 1; i <= vbars; i++) {
          const barX = sx + vgap * i;
          ctx.beginPath();
          ctx.moveTo(barX, sy + 2);
          ctx.lineTo(barX, sy + ph - 2);
          ctx.stroke();
        }
        ctx.restore();
      }
    }
  }
}

// ── draw one row (background + optional gray underlay + bricks) ───────────────
function drawRow(
  ctx: CanvasRenderingContext2D,
  model: BrickModel,
  row: number,
  ox: number,
  oy: number,
  gray: boolean,
  underlayRow?: number,
  mortar = false,
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
  px: number,
  py: number,
  ox: number,
  oy: number,
  offset: boolean,
  cols: number,
  depths: number,
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
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private model: BrickModel;
  selectedRow = 0;
  selectedTool: string = BrickType.FullStretcher;
  showMortar = false;
  onChange?: () => void;
  onToolChange?: (tool: string) => void;
  onPaintEnd?: () => void;

  private paintDown = false;
  private eraseDown = false;
  private _painted  = false;
  private currentOrigin = { x: 0, y: 0 };
  private lastPlaced: { col: number; dep: number } | null = null;
  onResize?: (cols: number, depths: number) => void;
  private _dimColBox: { x: number; y: number; w: number; h: number } | null = null;
  private _dimDepBox: { x: number; y: number; w: number; h: number } | null = null;

  constructor(canvas: HTMLCanvasElement, model: BrickModel) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.model = model;
    this.setupEvents();
    this.setupKeyboard();
  }

  setModel(model: BrickModel) {
    this.model = model;
  }

  // ── drawing ───────────────────────────────────────────────────────────────
  draw() {
    const model = this.model;
    const cols = model.cols;
    const depths = model.depths;
    const gw = cols * SC;
    const gh = depths * SC;
    const hasPrev = this.selectedRow > 0;

    const dpr = window.devicePixelRatio || 1;

    const HINTS_H = 36;
    let totalH = 8;
    totalH += 14 + gh + 8 + HINTS_H;
    const totalW = LABEL_W + gw + 12;

    if (
      this.canvas.width !== Math.round(totalW * dpr) ||
      this.canvas.height !== Math.round(totalH * dpr)
    ) {
      this.canvas.width = Math.round(totalW * dpr);
      this.canvas.height = Math.round(totalH * dpr);
      this.canvas.style.width = totalW + "px";
      this.canvas.style.height = totalH + "px";
      this.ctx.scale(dpr, dpr);
    }

    const ctx = this.ctx;
    ctx.clearRect(0, 0, totalW, totalH);

    const baseX = LABEL_W;
    let curY = 8;

    // current row label
    ctx.fillStyle = "#dcb070";
    ctx.font = "bold 11px monospace";
    const offMark = model.rowOffsets[this.selectedRow] ? " [½→]" : "";
    ctx.fillText(`Ряд ${this.selectedRow + 1}${offMark}`, 4, curY + 11);
    curY += 14;

    // axis coordinate labels
    const offPx = model.rowOffsets[this.selectedRow] ? SC * 2 : 0;
    drawAxes(ctx, baseX, curY, cols, depths, offPx);

    this.currentOrigin = { x: baseX, y: curY };
    const underlay = hasPrev ? this.selectedRow - 1 : undefined;
    drawRow(
      ctx,
      model,
      this.selectedRow,
      baseX,
      curY,
      false,
      underlay,
      this.showMortar,
    );

    // dimension labels at bottom-left corner of grid (clickable)
    ctx.font = "bold 10px monospace";
    const pad = 4;
    const labelY = curY + gh - 16;
    const labelH = 14;

    const colStr  = `X: ${cols / 4}`;
    const depStr  = `Y: ${depths / 2}`;
    const twCol = ctx.measureText(colStr).width;
    const twDep = ctx.measureText(depStr).width;
    const gap = 6;

    const boxColX = baseX + 2;
    const boxDepX = boxColX + pad * 2 + twCol + gap;

    // backgrounds
    ctx.fillStyle = "rgba(20,14,8,0.72)";
    ctx.fillRect(boxColX, labelY, twCol + pad * 2, labelH);
    ctx.fillRect(boxDepX, labelY, twDep + pad * 2, labelH);

    // text
    ctx.fillStyle = "#c8a860";
    ctx.textAlign = "left";
    ctx.fillText(colStr, boxColX + pad, labelY + labelH - 3);
    ctx.fillText(depStr, boxDepX + pad, labelY + labelH - 3);

    // store hit-test boxes in CSS pixels
    this._dimColBox = { x: boxColX, y: labelY, w: twCol + pad * 2, h: labelH };
    this._dimDepBox = { x: boxDepX, y: labelY, w: twDep + pad * 2, h: labelH };

    curY += gh + 10;

    // hotkey hints
    ctx.fillStyle = "#5a5040";
    ctx.font = "10px monospace";
    ctx.textAlign = "left";
    ctx.fillText("← → ↑ ↓  следующий кирпич", LABEL_W, curY + 11);
    ctx.fillText("ПКМ  стереть  |  Ctrl▶  Ложок ↔ Тычок", LABEL_W, curY + 24);
  }

  // ── input ─────────────────────────────────────────────────────────────────
  private setupEvents() {
    const canvas = this.canvas;

    const paint = (e: MouseEvent, erase: boolean) => {
      const rect = canvas.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      const { x, y } = this.currentOrigin;
      const result = hit(
        px,
        py,
        x,
        y,
        this.model.rowOffsets[this.selectedRow],
        this.model.cols,
        this.model.depths,
      );
      if (!result) return;
      const [col, dep] = result;

      if (erase) {
        eraseBrick(this.model, this.selectedRow, col, dep);
      } else {
        placeBrick(this.model, this.selectedRow, col, dep, this.selectedTool);
        this.lastPlaced = { col, dep };
      }
      this._painted = true;
      this.draw();
      this.onChange?.();
    };

    canvas.addEventListener("mousedown", (e) => {
      if (e.button === 0) {
        const rect = canvas.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;

        if (this._dimColBox && px >= this._dimColBox.x && px <= this._dimColBox.x + this._dimColBox.w &&
            py >= this._dimColBox.y && py <= this._dimColBox.y + this._dimColBox.h) {
          this._showDimInput('cols', e.clientX, e.clientY);
          return;
        }
        if (this._dimDepBox && px >= this._dimDepBox.x && px <= this._dimDepBox.x + this._dimDepBox.w &&
            py >= this._dimDepBox.y && py <= this._dimDepBox.y + this._dimDepBox.h) {
          this._showDimInput('depths', e.clientX, e.clientY);
          return;
        }

        this._painted = false;
        this.paintDown = true;
        paint(e, false);
      }
      if (e.button === 2) {
        this._painted = false;
        this.eraseDown = true;
        paint(e, true);
      }
    });
    canvas.addEventListener("mousemove", (e) => {
      if (this.paintDown) paint(e, false);
      if (this.eraseDown) paint(e, true);
    });
    canvas.addEventListener("mouseup", () => {
      if (this._painted) this.onPaintEnd?.();
      this._painted  = false;
      this.paintDown = false;
      this.eraseDown = false;
    });
    canvas.addEventListener("mouseleave", () => {
      if (this._painted) this.onPaintEnd?.();
      this._painted  = false;
      this.paintDown = false;
      this.eraseDown = false;
    });
    canvas.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  // ── floating dim-input ───────────────────────────────────────────────────
  private _showDimInput(which: 'cols' | 'depths', clientX: number, clientY: number): void {
    const cur = which === 'cols'
      ? this.model.cols / 4
      : this.model.depths / 2;
    const max = which === 'cols' ? 120 : 60;
    const min = which === 'cols' ? 2 : 1;

    const inp = document.createElement('input');
    inp.type = 'number';
    inp.value = String(cur);
    inp.min = String(min);
    inp.max = String(max);
    Object.assign(inp.style, {
      position: 'fixed',
      left: clientX + 'px',
      top:  (clientY - 22) + 'px',
      width: '52px',
      padding: '2px 5px',
      background: '#1e1810',
      border: '1px solid #c8a860',
      borderRadius: '4px',
      color: '#c8a860',
      fontSize: '12px',
      fontFamily: 'monospace',
      zIndex: '9999',
      outline: 'none',
    });
    document.body.appendChild(inp);
    inp.select();

    const commit = () => {
      const v = Math.max(min, Math.min(max, parseInt(inp.value) || cur));
      inp.remove();
      if (v === cur) return;
      const newCols   = which === 'cols'   ? v * 4 : this.model.cols;
      const newDepths = which === 'depths' ? v * 2 : this.model.depths;
      this.onResize?.(newCols, newDepths);
    };
    inp.addEventListener('blur', commit);
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { inp.blur(); }
      if (e.key === 'Escape') { inp.remove(); }
    });
  }

  // ── export all rows as PNG images ────────────────────────────────────────
  exportAllRows(): void {
    const model = this.model;
    const cols = model.cols;
    const depths = model.depths;
    const gw = cols * SC;
    const gh = depths * SC;
    const PAD = 8;
    const LABELH = 16;
    const W = LABEL_W + gw + PAD;
    const H = PAD + LABELH + gh + PAD;

    model.rows.forEach((_row, ri) => {
      const canvas = document.createElement("canvas");
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext("2d")!;

      const gridX = LABEL_W;
      const gridY = PAD + LABELH;
      const offPx = model.rowOffsets[ri] ? SC * 2 : 0;

      // background
      ctx.fillStyle = "#1a1410";
      ctx.fillRect(0, 0, W, H);

      // row label
      ctx.fillStyle = "#dcb070";
      ctx.font = "bold 11px monospace";
      const offMark = model.rowOffsets[ri] ? " [½→]" : "";
      ctx.fillText(`Ряд ${ri + 1}${offMark}`, 4, PAD + 11);

      // axis coordinates
      drawAxes(ctx, gridX, gridY, cols, depths, offPx);

      // grid background + previous row underlay + current row
      drawRow(ctx, model, ri, gridX, gridY, false, ri > 0 ? ri - 1 : undefined);

      // download with stagger so browser doesn't block
      canvas.toBlob((blob) => {
        if (!blob) return;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `row_${String(ri + 1).padStart(3, "0")}.png`;
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
      ArrowRight: [1, 0],
      ArrowLeft: [-1, 0],
      ArrowDown: [0, 1],
      ArrowUp: [0, -1],
    };

    window.addEventListener("keydown", (e) => {
      if (document.activeElement instanceof HTMLInputElement) return;

      // Right Ctrl — toggle Ложок ↔ Тычок
      if (e.key === "Control" && e.location === 2) {
        const next =
          this.selectedTool === BrickType.FullStretcher
            ? BrickType.FullHeader
            : BrickType.FullStretcher;
        this.selectedTool = next;
        this.onToolChange?.(next);
        return;
      }

      const dir = DIRS[e.key];
      if (!dir) return;
      e.preventDefault();

      const [bw, bd] = brickCells(this.selectedTool, this.model.doors, this.model.boxes);
      let col: number, dep: number;

      if (this.lastPlaced) {
        col = this.lastPlaced.col + dir[0] * bw;
        dep = this.lastPlaced.dep + dir[1] * bd;
      } else {
        // No last brick — start from top-left corner
        col = dir[0] < 0 ? this.model.cols - bw : 0;
        dep = dir[1] < 0 ? this.model.depths - bd : 0;
      }

      if (
        col < 0 ||
        dep < 0 ||
        col >= this.model.cols ||
        dep >= this.model.depths
      )
        return;

      placeBrick(this.model, this.selectedRow, col, dep, this.selectedTool);
      this.lastPlaced = { col, dep };
      this.draw();
      this.onChange?.();
    });
  }
}
