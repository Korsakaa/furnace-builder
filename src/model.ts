export enum BrickType {
  Empty             = 'Empty',
  FullStretcher     = 'FullStretcher',
  FullHeader        = 'FullHeader',
  ThreeQuarter      = 'ThreeQuarter',
  Half              = 'Half',
  Hole              = 'Hole',
  VerticalStretcher = 'VerticalStretcher',
  Grate             = 'Grate',
}

export enum BondPattern {
  Chain = 'Chain',
  Cross = 'Cross',
}

// ── Door templates ────────────────────────────────────────────────────────────
export interface DoorTemplate {
  id: string;
  name: string;
  cols: number;          // width in grid cells
  depths: number;        // depth in grid cells
  shape: boolean[][];    // [col][dep] — true = frame material
}

export function doorBrickType(id: string): string  { return `door:${id}`; }
export function isDoorBrick(bt: string): boolean   { return bt.startsWith('door:'); }
export function doorTemplateId(bt: string): string { return bt.slice(5); }

// ── Model ────────────────────────────────────────────────────────────────────
export interface BrickModel {
  rows: string[][][];     // [row][col][dep]  — BrickType or door:id
  rowOffsets: boolean[];
  cols: number;
  depths: number;
  doors: DoorTemplate[];
}

export function createModel(cols: number, depths: number): BrickModel {
  const emptyRow = () =>
    Array.from({ length: cols }, () =>
      Array.from({ length: depths }, () => BrickType.Empty as string)
    );
  return {
    rows: [emptyRow(), emptyRow(), emptyRow()],
    rowOffsets: [false, false, false],
    cols,
    depths,
    doors: [],
  };
}

export function addRow(m: BrickModel): void {
  const emptyRow = () =>
    Array.from({ length: m.cols }, () =>
      Array.from({ length: m.depths }, () => BrickType.Empty as string)
    );
  m.rows.push(emptyRow());
  m.rowOffsets.push(false);
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

export function brickCells(bt: string, doors?: DoorTemplate[]): [number, number] {
  if (isDoorBrick(bt) && doors) {
    const tmpl = doors.find(d => d.id === doorTemplateId(bt));
    if (tmpl) return [tmpl.cols, tmpl.depths];
  }
  switch (bt) {
    case BrickType.FullStretcher:     return [4, 2];
    case BrickType.FullHeader:        return [2, 4];
    case BrickType.ThreeQuarter:      return [3, 2];
    case BrickType.Half:              return [2, 2];
    case BrickType.Hole:              return [2, 2];
    case BrickType.VerticalStretcher: return [4, 2];
    case BrickType.Grate:             return [4, 2];
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
  if (!m.rowOffsets) m.rowOffsets = new Array(m.rows.length).fill(false);
  m.rowOffsets.length = m.rows.length;
  if (!m.doors) m.doors = [];
  return m;
}
