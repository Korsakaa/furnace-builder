export enum BrickType {
  Empty             = 'Empty',
  FullStretcher     = 'FullStretcher',
  FullHeader        = 'FullHeader',
  ThreeQuarter      = 'ThreeQuarter',
  ThreeQuarterHeader = 'ThreeQuarterHeader',
  Quarter           = 'Quarter',
  QuarterHeader     = 'QuarterHeader',
  Half              = 'Half',
  HalfLong          = 'HalfLong',
  HalfLongHeader    = 'HalfLongHeader',
  Hole              = 'Hole',
  VerticalStretcher = 'VerticalStretcher',
  Grate             = 'Grate',
  Slab              = 'Slab',
  // Chamfer (45° corner cut, half of shorter side)
  ChamferTL         = 'ChamferTL',   // Ложок, top-left  corner cut
  ChamferTR         = 'ChamferTR',   // Ложок, top-right
  ChamferBR         = 'ChamferBR',   // Ложок, bottom-right
  ChamferBL         = 'ChamferBL',   // Ложок, bottom-left
  ChamferHeaderTL   = 'ChamferHeaderTL', // Тычок variants
  ChamferHeaderTR   = 'ChamferHeaderTR',
  ChamferHeaderBR   = 'ChamferHeaderBR',
  ChamferHeaderBL   = 'ChamferHeaderBL',
  // Chamfer variant 2 — cx=bw/2, cz=bd/2 (half of each side independently)
  ChamferTL2        = 'ChamferTL2',
  ChamferTR2        = 'ChamferTR2',
  ChamferBR2        = 'ChamferBR2',
  ChamferBL2        = 'ChamferBL2',
  ChamferHeaderTL2  = 'ChamferHeaderTL2',
  ChamferHeaderTR2  = 'ChamferHeaderTR2',
  ChamferHeaderBR2  = 'ChamferHeaderBR2',
  ChamferHeaderBL2  = 'ChamferHeaderBL2',
  // Wedge bricks — клиновой кирпич, одна сторона полная, другая на нет
  WedgeL            = 'WedgeL',          // Ложок, высокий слева, клин вправо
  WedgeR            = 'WedgeR',          // Ложок, высокий справа, клин влево
  WedgeHeaderF      = 'WedgeHeaderF',    // Тычок, высокий спереди, клин назад
  WedgeHeaderB      = 'WedgeHeaderB',    // Тычок, высокий сзади, клин вперёд
  // Half-diagonal bricks — половинка по диагонали (2×2 cells, triangular prism)
  HalfDiagTL        = 'HalfDiagTL',   // треугольник: TL–TR–BL (верхний левый)
  HalfDiagTR        = 'HalfDiagTR',   // треугольник: TL–TR–BR (верхний правый)
  HalfDiagBR        = 'HalfDiagBR',   // треугольник: TR–BR–BL (нижний правый)
  HalfDiagBL        = 'HalfDiagBL',   // треугольник: TL–BR–BL (нижний левый)
  // Half-length wedge bricks — клин 1/2 длины (2×2 cells)
  WedgeHalfL        = 'WedgeHalfL',
  WedgeHalfR        = 'WedgeHalfR',
  WedgeHalfHeaderF  = 'WedgeHalfHeaderF',
  WedgeHalfHeaderB  = 'WedgeHalfHeaderB',
  // Mid-wedge bricks — полный кирпич, срез с середины до угла (4×2 / 2×4)
  WedgeMidL         = 'WedgeMidL',         // Ложок, нож слева, полный справа
  WedgeMidR         = 'WedgeMidR',         // Ложок, нож справа, полный слева
  WedgeMidHeaderF   = 'WedgeMidHeaderF',   // Тычок, нож спереди, полный сзади
  WedgeMidHeaderB   = 'WedgeMidHeaderB',   // Тычок, нож сзади, полный спереди
}

export enum BondPattern {
  Chain = 'Chain',
  Cross = 'Cross',
}

// ── Door templates ────────────────────────────────────────────────────────────
export interface DoorTemplate {
  id: string;
  name: string;
  cols: number;        // width in grid cells (X, horizontal)
  heightRows: number;  // height in brick rows (Y, vertical — how many rows the door spans)
  depth: number;       // Z depth in cells: 2 for Ложок, 4 for Тычок
  offsetX: 'left' | 'center' | 'right';  // alignment within brick slot
  brickBase: 'Ложок' | 'Тычок';
  shape: boolean[][];  // [col][rowInDoor] — front view, true = frame material
}

export function isChamferBrick(bt: string): boolean { return bt.startsWith('Chamfer'); }
export function chamferCorner(bt: string): 'TL'|'TR'|'BR'|'BL' {
  return bt.replace('ChamferHeader', '').replace('Chamfer', '').replace(/\d+$/, '') as 'TL'|'TR'|'BR'|'BL';
}
/** Возвращает [cx, cz] — катеты треугольника среза в единицах bw/bd */
export function chamferLegs(bt: string, bw: number, bd: number): [number, number] {
  if (bt.endsWith('2')) return [bw / 2, bd / 2];
  const cs = Math.min(bw, bd);
  return [cs, cs];
}

export function isHalfDiagBrick(bt: string): boolean { return bt.startsWith('HalfDiag'); }
export function halfDiagVariant(bt: string): 'TL'|'TR'|'BR'|'BL' {
  return bt.slice(8) as 'TL'|'TR'|'BR'|'BL';
}

export function isWedgeBrick(bt: string): boolean { return bt.startsWith('Wedge'); }
export function wedgeTaper(bt: string): 'L'|'R'|'F'|'B'|'ML'|'MR'|'MF'|'MB' {
  if (bt === BrickType.WedgeR || bt === BrickType.WedgeHalfR) return 'R';
  if (bt === BrickType.WedgeHeaderF || bt === BrickType.WedgeHalfHeaderF) return 'F';
  if (bt === BrickType.WedgeHeaderB || bt === BrickType.WedgeHalfHeaderB) return 'B';
  if (bt === BrickType.WedgeMidL) return 'ML';
  if (bt === BrickType.WedgeMidR) return 'MR';
  if (bt === BrickType.WedgeMidHeaderF) return 'MF';
  if (bt === BrickType.WedgeMidHeaderB) return 'MB';
  return 'L';
}

export function doorBrickType(id: string): string  { return `door:${id}`; }
export function isDoorBrick(bt: string): boolean   { return bt.startsWith('door:'); }
export function doorTemplateId(bt: string): string { return bt.slice(5); }

// ── Box (rectangular object) templates ────────────────────────────────────────
export interface BoxTemplate {
  id: string;
  name: string;
  cols: number;       // width in grid cells
  depths: number;     // depth in grid cells
  heightRows: number; // height in brick rows
  color: string;      // CSS hex color, e.g. '#c87840'
}

export function boxBrickType(id: string): string  { return `box:${id}`; }
export function isBoxBrick(bt: string): boolean   { return bt.startsWith('box:'); }
export function boxTemplateId(bt: string): string { return bt.slice(4); }

// ── Model ────────────────────────────────────────────────────────────────────
export interface RowGroup {
  id: string;
  name: string;
  color: string;
}

export interface BrickModel {
  rows: string[][][];     // [row][col][dep]  — BrickType, door:id, or box:id
  rowOffsets: boolean[];
  rowHidden:  boolean[];  // true = row hidden from 3D view
  rowGroups:  RowGroup[];
  rowGroupIds: (string | null)[];  // per-row group id, null = main (no group)
  cols: number;
  depths: number;
  doors: DoorTemplate[];
  boxes: BoxTemplate[];
}

export function createModel(cols: number, depths: number): BrickModel {
  const emptyRow = () =>
    Array.from({ length: cols }, () =>
      Array.from({ length: depths }, () => BrickType.Empty as string)
    );
  return {
    rows: [emptyRow(), emptyRow(), emptyRow()],
    rowOffsets: [false, false, false],
    rowHidden:  [false, false, false],
    rowGroups:  [],
    rowGroupIds: [null, null, null],
    cols,
    depths,
    doors: [],
    boxes: [],
  };
}

export function addRow(m: BrickModel): void {
  const emptyRow = () =>
    Array.from({ length: m.cols }, () =>
      Array.from({ length: m.depths }, () => BrickType.Empty as string)
    );
  m.rows.push(emptyRow());
  m.rowOffsets.push(false);
  m.rowHidden.push(false);
  m.rowGroupIds.push(null);
}

export function setBrick(m: BrickModel, row: number, col: number, depth: number, bt: string): void {
  if (row < m.rows.length && col < m.cols && depth < m.depths)
    m.rows[row][col][depth] = bt;
}

export function getBrick(m: BrickModel, row: number, col: number, depth: number): string {
  return m.rows[row][col][depth];
}

export function brickCount(m: BrickModel): number {
  return m.rows.flat(2).filter(b => b !== BrickType.Empty).length;
}

export function brickCells(bt: string, doors?: DoorTemplate[], boxes?: BoxTemplate[]): [number, number] {
  if (isDoorBrick(bt) && doors) {
    const tmpl = doors.find(d => d.id === doorTemplateId(bt));
    if (tmpl) {
      if (tmpl.brickBase === 'Тычок') return [2, tmpl.cols];
      return [tmpl.cols, 2];
    }
  }
  if (isBoxBrick(bt) && boxes) {
    const tmpl = boxes.find(b => b.id === boxTemplateId(bt));
    if (tmpl) return [tmpl.cols, tmpl.depths];
  }
  switch (bt) {
    case BrickType.FullStretcher:     return [4, 2];
    case BrickType.FullHeader:        return [2, 4];
    case BrickType.ThreeQuarter:       return [3, 2];
    case BrickType.ThreeQuarterHeader: return [2, 3];
    case BrickType.Quarter:            return [1, 2];
    case BrickType.QuarterHeader:      return [2, 1];
    case BrickType.Half:            return [2, 2];
    case BrickType.HalfLong:        return [4, 1];
    case BrickType.HalfLongHeader:  return [1, 4];
    case BrickType.Hole:              return [2, 2];
    case BrickType.VerticalStretcher: return [4, 2];
    case BrickType.Grate:             return [4, 2];
    case BrickType.Slab:              return [4, 2];
    // Chamfer Ложок — same footprint as FullStretcher
    case BrickType.ChamferTL: case BrickType.ChamferTR:
    case BrickType.ChamferBR: case BrickType.ChamferBL: return [4, 2];
    // Chamfer Тычок — same footprint as FullHeader
    case BrickType.ChamferHeaderTL: case BrickType.ChamferHeaderTR:
    case BrickType.ChamferHeaderBR: case BrickType.ChamferHeaderBL: return [2, 4];
    case BrickType.ChamferTL2: case BrickType.ChamferTR2:
    case BrickType.ChamferBR2: case BrickType.ChamferBL2: return [4, 2];
    case BrickType.ChamferHeaderTL2: case BrickType.ChamferHeaderTR2:
    case BrickType.ChamferHeaderBR2: case BrickType.ChamferHeaderBL2: return [2, 4];
    case BrickType.WedgeL: case BrickType.WedgeR: return [4, 2];
    case BrickType.WedgeHeaderF: case BrickType.WedgeHeaderB: return [2, 4];
    case BrickType.HalfDiagTL: case BrickType.HalfDiagTR:
    case BrickType.HalfDiagBR: case BrickType.HalfDiagBL: return [2, 2];
    case BrickType.WedgeHalfL: case BrickType.WedgeHalfR:
    case BrickType.WedgeHalfHeaderF: case BrickType.WedgeHalfHeaderB: return [2, 2];
    case BrickType.WedgeMidL: case BrickType.WedgeMidR: return [4, 2];
    case BrickType.WedgeMidHeaderF: case BrickType.WedgeMidHeaderB: return [2, 4];
    default: return [4, 2];
  }
}

export function resizeModel(m: BrickModel, newCols: number, newDepths: number): void {
  for (const row of m.rows) {
    while (row.length < newCols)
      row.push(Array.from({ length: newDepths }, () => BrickType.Empty as string));
    row.length = newCols;
    for (const col of row) {
      while (col.length < newDepths) col.push(BrickType.Empty);
      col.length = newDepths;
    }
  }
  m.cols = newCols;
  m.depths = newDepths;
}

export function fillRowWithBond(m: BrickModel, row: number, bond: BondPattern): void {
  clearRow(m, row);
  m.rowOffsets[row] = row % 2 === 1;
  const bt = bond === BondPattern.Cross && row % 5 === 0
    ? BrickType.FullHeader : BrickType.FullStretcher;
  const [bw, bd] = brickCells(bt);
  for (let d = 0; d < m.depths; d += bd)
    for (let c = 0; c < m.cols; c += bw)
      setBrick(m, row, c, d, bt);
}

export function clearRow(m: BrickModel, row: number): void {
  for (let c = 0; c < m.cols; c++)
    for (let d = 0; d < m.depths; d++)
      setBrick(m, row, c, d, BrickType.Empty);
}

export function serializeModel(m: BrickModel): string {
  return JSON.stringify(m, null, 2);
}

export function deserializeModel(json: string): BrickModel {
  const m = JSON.parse(json) as BrickModel;
  if (!m.rowOffsets)  m.rowOffsets  = new Array(m.rows.length).fill(false);
  m.rowOffsets.length = m.rows.length;
  if (!m.doors)      m.doors      = [];
  if (!m.boxes)      m.boxes      = [];
  if (!m.rowHidden)  m.rowHidden  = new Array(m.rows.length).fill(false);
  m.rowHidden.length = m.rows.length;
  if (!m.rowGroups)   m.rowGroups   = [];
  if (!m.rowGroupIds) m.rowGroupIds = new Array(m.rows.length).fill(null);
  m.rowGroupIds.length = m.rows.length;
  return m;
}
