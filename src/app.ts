import {
  BrickModel, BrickType, BondPattern,
  createModel, addRow, brickCount,
  resizeModel, fillRowWithBond, clearRow,
  serializeModel, deserializeModel,
  isDoorBrick, doorTemplateId, brickCells, chamferLegs, chamferCorner,
} from './model.js';
import { Renderer3D     } from './renderer3d.js';
import { GridEditor     } from './gridEditor.js';
import { DoorEditorModal } from './doorEditor.js';
import { BoxEditorModal  } from './boxEditor.js';

const STATIC_TOOL_LABELS: Record<string, string> = {
  [BrickType.Empty]:             'Нет',
  [BrickType.FullStretcher]:     'Ложок',
  [BrickType.FullHeader]:        'Тычок',
  [BrickType.ThreeQuarter]:       '3/4 Ложок',
  [BrickType.ThreeQuarterHeader]: '3/4 Тычок',
  [BrickType.Quarter]:            '1/4 Ложок',
  [BrickType.QuarterHeader]:      '1/4 Тычок',
  [BrickType.Half]:               '1/2',
  [BrickType.HalfLong]:           '1/2 Ложок вдоль',
  [BrickType.HalfLongHeader]:     '1/2 Тычок вдоль',
  [BrickType.ChamferTL]:          'Срез ↖ Ложок',
  [BrickType.ChamferTR]:          'Срез ↗ Ложок',
  [BrickType.ChamferBR]:          'Срез ↘ Ложок',
  [BrickType.ChamferBL]:          'Срез ↙ Ложок',
  [BrickType.ChamferHeaderTL]:    'Срез ↖ Тычок',
  [BrickType.ChamferHeaderTR]:    'Срез ↗ Тычок',
  [BrickType.ChamferHeaderBR]:    'Срез ↘ Тычок',
  [BrickType.ChamferHeaderBL]:    'Срез ↙ Тычок',
  [BrickType.ChamferTL2]:         'Срез½ ↖ Ложок',
  [BrickType.ChamferTR2]:         'Срез½ ↗ Ложок',
  [BrickType.ChamferBR2]:         'Срез½ ↘ Ложок',
  [BrickType.ChamferBL2]:         'Срез½ ↙ Ложок',
  [BrickType.ChamferHeaderTL2]:   'Срез½ ↖ Тычок',
  [BrickType.ChamferHeaderTR2]:   'Срез½ ↗ Тычок',
  [BrickType.ChamferHeaderBR2]:   'Срез½ ↘ Тычок',
  [BrickType.ChamferHeaderBL2]:   'Срез½ ↙ Тычок',
  [BrickType.WedgeL]:             'Клин Лж →',
  [BrickType.WedgeR]:             'Клин Лж ←',
  [BrickType.WedgeHeaderF]:       'Клин Тч ↓',
  [BrickType.WedgeHeaderB]:       'Клин Тч ↑',
  [BrickType.WedgeHalfL]:         'Клин½ Лж →',
  [BrickType.WedgeHalfR]:         'Клин½ Лж ←',
  [BrickType.WedgeHalfHeaderF]:   'Клин½ Тч ↓',
  [BrickType.WedgeHalfHeaderB]:   'Клин½ Тч ↑',
  [BrickType.HalfDiagTL]:        'Диаг ↖',
  [BrickType.HalfDiagTR]:        'Диаг ↗',
  [BrickType.HalfDiagBR]:        'Диаг ↘',
  [BrickType.HalfDiagBL]:        'Диаг ↙',
  [BrickType.WedgeMidR]:         'Клин½→ Лж',
  [BrickType.WedgeMidL]:         'Клин←½ Лж',
  [BrickType.WedgeMidHeaderF]:   'Клин½↓ Тч',
  [BrickType.WedgeMidHeaderB]:   'Клин↑½ Тч',
  [BrickType.Hole]:              'Отверстие',
  [BrickType.VerticalStretcher]: 'На ребро',
  [BrickType.Grate]:             'Решетка',
  [BrickType.Slab]:              'Плита',
};

export class App {
  private model:       BrickModel;
  private renderer3d:  Renderer3D;
  private gridEditor:  GridEditor;
  private doorEditor:  DoorEditorModal;
  private boxEditor:   BoxEditorModal;
  private history:     string[] = [];
  private historyPtr   = -1;
  private _histLocked  = false;
  private selectedRow  = 0;
  private selectedTool: string = BrickType.FullStretcher;
  private selectedBond = BondPattern.Chain;
  private showMortar   = false;
  private sliceRow     = -1;
  private sliceCol     = -1;
  private selectedGroupId: string | null = null;
  private countsScope: 'all' | 'group' | 'row' = 'all';
  private readonly GROUP_COLORS = ['#e05540','#e09030','#50a840','#4090d0','#9040c0','#40b0b0','#d040a0'];

  constructor() {
    this.model = createModel(60, 30); // 60 cells = 15 bricks wide, 30 cells = 15 brick-depths

    this.renderer3d = new Renderer3D(document.getElementById('viewport')!);
    this.gridEditor = new GridEditor(
      document.getElementById('grid-canvas') as HTMLCanvasElement,
      this.model
    );
    this.gridEditor.selectedRow  = this.selectedRow;
    this.gridEditor.selectedTool = this.selectedTool;
    this.gridEditor.onChange   = () => { this.refresh3d(); this.refreshCounts(); this.refreshStatus(); this.refreshRowList(); };
    this.gridEditor.onPaintEnd = () => { this.pushHistory(); };
    this.gridEditor.onToolChange = (tool: string) => { this.selectTool(tool); };
    this.gridEditor.onResize = (newCols: number, newDepths: number) => {
      resizeModel(this.model, newCols, newDepths);
      const inpC = document.getElementById('inp-cols')   as HTMLInputElement;
      const inpD = document.getElementById('inp-depths') as HTMLInputElement;
      if (inpC) inpC.value = String(newCols / 4);
      if (inpD) inpD.value = String(newDepths / 2);
      this.pushHistory();
      this.refreshAll();
    };

    this.doorEditor = new DoorEditorModal(this.model);
    this.doorEditor.onDoorCreated = (bt: string) => {
      if (bt) this.selectTool(bt);
      this.refreshDoorButtons();
      this.refreshAll();
    };

    this.boxEditor = new BoxEditorModal(this.model);
    this.boxEditor.onBoxCreated = (bt: string) => {
      if (bt) this.selectTool(bt);
      this.refreshBoxButtons();
      this.refreshAll();
    };

    this.renderer3d.bindControls();
    this.bindUI();
    this.addBrickIcons();
    this.refreshAll();

    // initial history snapshot
    this.pushHistory();

    // global keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && !e.shiftKey && e.key === 'z') { e.preventDefault(); this.undo(); }
      if (e.ctrlKey && (e.key === 'y' || (e.shiftKey && e.key === 'z'))) { e.preventDefault(); this.redo(); }
    });
  }

  // ── brick icons ──────────────────────────────────────────────────────────
  private addBrickIcons() {
    const CELL = 6; // px per cell in icon
    const COLORS: Record<string, string> = {
      [BrickType.FullStretcher]:      '#d27846',
      [BrickType.FullHeader]:         '#4688d2',
      [BrickType.ThreeQuarter]:       '#be6b41',
      [BrickType.ThreeQuarterHeader]: '#3a7ac2',
      [BrickType.Quarter]:            '#b05a30',
      [BrickType.QuarterHeader]:      '#2a68b8',
      [BrickType.Half]:               '#a85a32',
      [BrickType.HalfLong]:           '#c87850',
      [BrickType.HalfLongHeader]:     '#5090d0',
      [BrickType.ChamferTL]:          '#e07838',
      [BrickType.ChamferTR]:          '#e07838',
      [BrickType.ChamferBR]:          '#e07838',
      [BrickType.ChamferBL]:          '#e07838',
      [BrickType.ChamferHeaderTL]:    '#e07838',
      [BrickType.ChamferHeaderTR]:    '#e07838',
      [BrickType.ChamferHeaderBR]:    '#e07838',
      [BrickType.ChamferHeaderBL]:    '#e07838',
      [BrickType.ChamferTL2]:         '#e07838',
      [BrickType.ChamferTR2]:         '#e07838',
      [BrickType.ChamferBR2]:         '#e07838',
      [BrickType.ChamferBL2]:         '#e07838',
      [BrickType.ChamferHeaderTL2]:   '#e07838',
      [BrickType.ChamferHeaderTR2]:   '#e07838',
      [BrickType.ChamferHeaderBR2]:   '#e07838',
      [BrickType.ChamferHeaderBL2]:   '#e07838',
      [BrickType.WedgeL]:             '#5fa040',
      [BrickType.WedgeR]:             '#5fa040',
      [BrickType.WedgeHeaderF]:       '#3080a8',
      [BrickType.WedgeHeaderB]:       '#3080a8',
      [BrickType.WedgeHalfL]:         '#5fa040',
      [BrickType.WedgeHalfR]:         '#5fa040',
      [BrickType.WedgeHalfHeaderF]:   '#3080a8',
      [BrickType.WedgeHalfHeaderB]:   '#3080a8',
      [BrickType.HalfDiagTL]:        '#a050c0',
      [BrickType.HalfDiagTR]:        '#a050c0',
      [BrickType.HalfDiagBR]:        '#a050c0',
      [BrickType.HalfDiagBL]:        '#a050c0',
      [BrickType.WedgeMidR]:         '#70b850',
      [BrickType.WedgeMidL]:         '#70b850',
      [BrickType.WedgeMidHeaderF]:   '#4098c8',
      [BrickType.WedgeMidHeaderB]:   '#4098c8',
      [BrickType.Hole]:               '#19120c',
      [BrickType.VerticalStretcher]:  '#5aab58',
      [BrickType.Grate]:              '#3a3a3a',
      [BrickType.Slab]:               '#1a1a1a',
    };

    document.querySelectorAll<HTMLElement>('#tool-panel .btn-tool[data-tool]').forEach(btn => {
      const bt = btn.dataset.tool!;
      if (isDoorBrick(bt) || !(bt in COLORS)) return;

      const [bw, bd] = brickCells(bt);
      const W = bw * CELL;
      const H = bd * CELL;

      const canvas = document.createElement('canvas');
      canvas.width  = W;
      canvas.height = H;
      canvas.style.display = 'block';
      canvas.style.imageRendering = 'pixelated';
      canvas.style.flexShrink = '0';

      const ctx = canvas.getContext('2d')!;
      const color = COLORS[bt];

      // Срез — рисуем пятиугольник
      if (bt.startsWith('Chamfer')) {
        const corner = chamferCorner(bt);
        const [rawCx, rawCz] = chamferLegs(bt, bw, bd);
        const cx = rawCx * CELL, cz = rawCz * CELL;
        ctx.fillStyle = color;
        ctx.beginPath();
        if      (corner === 'TL') { ctx.moveTo(cx,0); ctx.lineTo(W,0); ctx.lineTo(W,H); ctx.lineTo(0,H); ctx.lineTo(0,cz); }
        else if (corner === 'TR') { ctx.moveTo(0,0); ctx.lineTo(W-cx,0); ctx.lineTo(W,cz); ctx.lineTo(W,H); ctx.lineTo(0,H); }
        else if (corner === 'BR') { ctx.moveTo(0,0); ctx.lineTo(W,0); ctx.lineTo(W,H-cz); ctx.lineTo(W-cx,H); ctx.lineTo(0,H); }
        else                      { ctx.moveTo(0,0); ctx.lineTo(W,0); ctx.lineTo(W,H); ctx.lineTo(cx,H); ctx.lineTo(0,H-cz); }
        ctx.closePath(); ctx.fill();
        ctx.strokeStyle = '#321a08'; ctx.lineWidth = 1; ctx.stroke();
        btn.appendChild(canvas);
        return;
      }

      // Клин — рисуем профиль вид спереди (треугольник или трапеция)
      if (bt.startsWith('Wedge')) {
        ctx.fillStyle = color;
        ctx.beginPath();
        if      (bt === 'WedgeL' || bt === 'WedgeHalfL')             { ctx.moveTo(0,H); ctx.lineTo(W,H); ctx.lineTo(0,0); }
        else if (bt === 'WedgeR' || bt === 'WedgeHalfR')             { ctx.moveTo(0,H); ctx.lineTo(W,H); ctx.lineTo(W,0); }
        else if (bt === 'WedgeHeaderF' || bt === 'WedgeHalfHeaderF') { ctx.moveTo(0,H); ctx.lineTo(W,H); ctx.lineTo(0,0); }
        else if (bt === 'WedgeHeaderB' || bt === 'WedgeHalfHeaderB') { ctx.moveTo(0,H); ctx.lineTo(W,H); ctx.lineTo(W,0); }
        // Клин с середины: трапеция (левая половина — прямоугольник, правая — треугольник)
        else if (bt === 'WedgeMidR') {
          ctx.moveTo(0,0); ctx.lineTo(W/2,0); ctx.lineTo(W,H); ctx.lineTo(0,H);
        }
        else if (bt === 'WedgeMidL') {
          ctx.moveTo(W/2,0); ctx.lineTo(W,0); ctx.lineTo(W,H); ctx.lineTo(0,H);
        }
        else if (bt === 'WedgeMidHeaderF') {
          // полный снизу, клин от середины к верхнему углу (↓)
          ctx.moveTo(0,H/2); ctx.lineTo(W,0); ctx.lineTo(W,H); ctx.lineTo(0,H);
        }
        else { // WedgeMidHeaderB — полный сверху, клин от середины к нижнему углу (↑)
          ctx.moveTo(0,0); ctx.lineTo(W,0); ctx.lineTo(W,H/2); ctx.lineTo(0,H);
        }
        ctx.closePath(); ctx.fill();
        ctx.strokeStyle = '#0a2a12'; ctx.lineWidth = 1; ctx.stroke();
        btn.appendChild(canvas);
        return;
      }

      // Диагональ — треугольник по диагонали кирпича
      if (bt.startsWith('HalfDiag')) {
        const v = bt.slice(8) as 'TL'|'TR'|'BR'|'BL';
        ctx.fillStyle = color;
        ctx.beginPath();
        if      (v === 'TL') { ctx.moveTo(0,0); ctx.lineTo(W,0); ctx.lineTo(0,H); }
        else if (v === 'TR') { ctx.moveTo(0,0); ctx.lineTo(W,0); ctx.lineTo(W,H); }
        else if (v === 'BR') { ctx.moveTo(W,0); ctx.lineTo(W,H); ctx.lineTo(0,H); }
        else                 { ctx.moveTo(0,0); ctx.lineTo(W,H); ctx.lineTo(0,H); }
        ctx.closePath(); ctx.fill();
        ctx.strokeStyle = '#4a1a60'; ctx.lineWidth = 1; ctx.stroke();
        btn.appendChild(canvas);
        return;
      }

      ctx.fillStyle = color;
      ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = '#321a08';
      ctx.lineWidth = 1;
      ctx.strokeRect(0.5, 0.5, W - 1, H - 1);

      // Отверстие — крест
      if (bt === BrickType.Hole) {
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(2, 2); ctx.lineTo(W - 2, H - 2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(W - 2, 2); ctx.lineTo(2, H - 2); ctx.stroke();
      }
      // Решетка — горизонтальные прутья
      if (bt === BrickType.Grate) {
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 1;
        for (let i = 1; i <= 3; i++) {
          const y = H * i / 4;
          ctx.beginPath(); ctx.moveTo(1, y); ctx.lineTo(W - 1, y); ctx.stroke();
        }
        for (let i = 1; i <= 6; i++) {
          const x = W * i / 7;
          ctx.beginPath(); ctx.moveTo(x, 1); ctx.lineTo(x, H - 1); ctx.stroke();
        }
      }
      // Плита — сплошной тёмный квадрат (no extra markings needed, color alone is sufficient)
      // На ребро — пунктир по длине
      if (bt === BrickType.VerticalStretcher) {
        ctx.strokeStyle = 'rgba(0,0,0,0.35)';
        ctx.setLineDash([2, 2]);
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.stroke();
        ctx.setLineDash([]);
      }

      btn.appendChild(canvas);
    });
  }

  // ── full refresh ─────────────────────────────────────────────────────────
  private refreshAll() {
    this.refresh3d();
    this.refreshGrid();
    this.refreshGroupBar();
    this.refreshRowList();
    this.refreshStatus();
    this.refreshCounts();
    (this as any)._resetSlice?.();
  }

  private refresh3d() { this.renderer3d.update(this.model, this.selectedRow, this.showMortar, this.sliceRow, this.sliceCol); }

  // ── history (undo / redo) ─────────────────────────────────────────────────
  pushHistory() {
    if (this._histLocked) return;
    this.history = this.history.slice(0, this.historyPtr + 1);
    this.history.push(serializeModel(this.model));
    if (this.history.length > 60) this.history.shift();
    this.historyPtr = this.history.length - 1;
    this._updateUndoButtons();
  }

  private _restoreFromHistory(json: string) {
    this._histLocked = true;
    this.model = deserializeModel(json);
    this.gridEditor.setModel(this.model);
    (this.doorEditor as any).model = this.model;
    this.boxEditor.setModel(this.model);
    this.refreshDoorButtons();
    this.refreshBoxButtons();
    this.refreshAll();
    this._histLocked = false;
    this._updateUndoButtons();
  }

  undo() {
    if (this.historyPtr <= 0) return;
    this.historyPtr--;
    this._restoreFromHistory(this.history[this.historyPtr]);
  }

  redo() {
    if (this.historyPtr >= this.history.length - 1) return;
    this.historyPtr++;
    this._restoreFromHistory(this.history[this.historyPtr]);
  }

  private _updateUndoButtons() {
    const btnUndo = document.getElementById('btn-undo') as HTMLButtonElement | null;
    const btnRedo = document.getElementById('btn-redo') as HTMLButtonElement | null;
    if (btnUndo) btnUndo.disabled = this.historyPtr <= 0;
    if (btnRedo) btnRedo.disabled = this.historyPtr >= this.history.length - 1;
  }

  private selectTool(bt: string) {
    this.selectedTool = bt;
    this.gridEditor.selectedTool = bt;
    document.querySelectorAll('.btn-tool[data-tool]').forEach(b => b.classList.remove('active'));
    document.querySelector(`.btn-tool[data-tool="${bt}"]`)?.classList.add('active');
    this.refreshStatus();
  }

  private refreshDoorButtons() {
    const panel = document.getElementById('door-buttons')!;
    panel.innerHTML = this.model.doors.map(d => `
      <button class="btn-tool${this.selectedTool === `door:${d.id}` ? ' active' : ''}"
              data-tool="door:${d.id}">${d.name}</button>
    `).join('');
    panel.querySelectorAll('.btn-tool[data-tool]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectTool((btn as HTMLElement).dataset.tool!);
      });
    });
  }
  private refreshBoxButtons() {
    const panel = document.getElementById('box-buttons')!;
    panel.innerHTML = this.model.boxes.map(b => `
      <button class="btn-tool${this.selectedTool === `box:${b.id}` ? ' active' : ''}"
              data-tool="box:${b.id}"
              style="border-left: 4px solid ${b.color};">${b.name}</button>
    `).join('');
    panel.querySelectorAll('.btn-tool[data-tool]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectTool((btn as HTMLElement).dataset.tool!);
      });
    });
  }
  private refreshGrid()   { this.gridEditor.showMortar = this.showMortar; this.gridEditor.draw(); }
  private refreshGroupBar() {
    const bar = document.getElementById('group-bar');
    if (!bar) return;
    bar.innerHTML = '';

    const makeChip = (label: string, active: boolean, color: string | null, onClick: () => void, onDel?: () => void) => {
      const chip = document.createElement('div');
      chip.className = 'group-chip' + (active ? ' g-active' : '');
      if (color) chip.style.borderLeftColor = color;
      const nameSpan = document.createElement('span');
      nameSpan.className = 'gc-name';
      nameSpan.textContent = label;
      chip.appendChild(nameSpan);
      if (onDel) {
        const del = document.createElement('button');
        del.className = 'gc-del';
        del.textContent = '×';
        del.addEventListener('click', (e) => { e.stopPropagation(); onDel(); });
        chip.appendChild(del);
      }
      chip.addEventListener('click', onClick);
      return chip;
    };

    // "Все" chip
    bar.appendChild(makeChip('Все', this.selectedGroupId === null, null, () => {
      this.selectedGroupId = null;
      this.countsScope = 'all';
      this.refreshGroupBar();
      this.refreshRowList();
      this.refreshCounts();
    }));

    // User groups
    for (const g of this.model.rowGroups) {
      bar.appendChild(makeChip(g.name, this.selectedGroupId === g.id, g.color, () => {
        this.selectedGroupId = g.id;
        this.countsScope = 'group';
        this.refreshGroupBar();
        this.refreshRowList();
        this.refreshCounts();
      }, () => {
        this.model.rowGroupIds = this.model.rowGroupIds.map(gid => gid === g.id ? null : gid);
        this.model.rowGroups   = this.model.rowGroups.filter(grp => grp.id !== g.id);
        if (this.selectedGroupId === g.id) { this.selectedGroupId = null; this.countsScope = 'all'; }
        this.pushHistory();
        this.refreshGroupBar();
        this.refreshRowList();
        this.refreshCounts();
      }));
    }

    // "+" button
    const addBtn = document.createElement('div');
    addBtn.className = 'group-chip-add';
    addBtn.textContent = '+ Группа';
    addBtn.title = 'Создать группу';
    addBtn.addEventListener('click', () => {
      const name = prompt('Название группы:');
      if (!name?.trim()) return;
      const color = this.GROUP_COLORS[this.model.rowGroups.length % this.GROUP_COLORS.length];
      const id = `g${Date.now()}`;
      this.model.rowGroups.push({ id, name: name.trim(), color });
      this.selectedGroupId = id;
      this.countsScope = 'group';
      this.pushHistory();
      this.refreshGroupBar();
      this.refreshRowList();
      this.refreshCounts();
    });
    bar.appendChild(addBtn);
  }

  private refreshCounts() {
    const LABELS: Record<string, string> = {
      [BrickType.FullStretcher]:     'Ложок',
      [BrickType.FullHeader]:        'Тычок',
      [BrickType.ThreeQuarter]:       '3/4 Ложок',
      [BrickType.ThreeQuarterHeader]: '3/4 Тычок',
      [BrickType.Quarter]:            '1/4 Ложок',
      [BrickType.QuarterHeader]:      '1/4 Тычок',
      [BrickType.Half]:               '1/2',
      [BrickType.HalfLong]:           '1/2 Ложок вдоль',
      [BrickType.HalfLongHeader]:     '1/2 Тычок вдоль',
      [BrickType.ChamferTL]:          'Срез ↖ Ложок',
      [BrickType.ChamferTR]:          'Срез ↗ Ложок',
      [BrickType.ChamferBR]:          'Срез ↘ Ложок',
      [BrickType.ChamferBL]:          'Срез ↙ Ложок',
      [BrickType.ChamferHeaderTL]:    'Срез ↖ Тычок',
      [BrickType.ChamferHeaderTR]:    'Срез ↗ Тычок',
      [BrickType.ChamferHeaderBR]:    'Срез ↘ Тычок',
      [BrickType.ChamferHeaderBL]:    'Срез ↙ Тычок',
      [BrickType.ChamferTL2]:         'Срез½ ↖ Ложок',
      [BrickType.ChamferTR2]:         'Срез½ ↗ Ложок',
      [BrickType.ChamferBR2]:         'Срез½ ↘ Ложок',
      [BrickType.ChamferBL2]:         'Срез½ ↙ Ложок',
      [BrickType.ChamferHeaderTL2]:   'Срез½ ↖ Тычок',
      [BrickType.ChamferHeaderTR2]:   'Срез½ ↗ Тычок',
      [BrickType.ChamferHeaderBR2]:   'Срез½ ↘ Тычок',
      [BrickType.ChamferHeaderBL2]:   'Срез½ ↙ Тычок',
      [BrickType.WedgeL]:             'Клин Лж →',
      [BrickType.WedgeR]:             'Клин Лж ←',
      [BrickType.WedgeHeaderF]:       'Клин Тч ↓',
      [BrickType.WedgeHeaderB]:       'Клин Тч ↑',
      [BrickType.WedgeHalfL]:         'Клин½ Лж →',
      [BrickType.WedgeHalfR]:         'Клин½ Лж ←',
      [BrickType.WedgeHalfHeaderF]:   'Клин½ Тч ↓',
      [BrickType.WedgeHalfHeaderB]:   'Клин½ Тч ↑',
      [BrickType.HalfDiagTL]:        'Диаг ↖',
      [BrickType.HalfDiagTR]:        'Диаг ↗',
      [BrickType.HalfDiagBR]:        'Диаг ↘',
      [BrickType.HalfDiagBL]:        'Диаг ↙',
      [BrickType.WedgeMidR]:         'Клин½→ Лж',
      [BrickType.WedgeMidL]:         'Клин←½ Лж',
      [BrickType.WedgeMidHeaderF]:   'Клин½↓ Тч',
      [BrickType.WedgeMidHeaderB]:   'Клин↑½ Тч',
      [BrickType.Hole]:              'Отверстие',
      [BrickType.VerticalStretcher]: 'На ребро',
      [BrickType.Grate]:             'Решетка',
      [BrickType.Slab]:              'Плита',
    };
    for (const d of this.model.doors) LABELS[`door:${d.id}`] = d.name;

    // Determine which rows to count
    let rowIndices: number[];
    if (this.countsScope === 'row') {
      rowIndices = [this.selectedRow];
    } else if (this.countsScope === 'group' && this.selectedGroupId !== null) {
      rowIndices = this.model.rowGroupIds
        .map((gid, idx) => gid === this.selectedGroupId ? idx : -1)
        .filter(idx => idx >= 0);
    } else {
      rowIndices = this.model.rows.map((_, idx) => idx);
    }

    // Update header label
    const grpName = this.model.rowGroups.find(g => g.id === this.selectedGroupId)?.name;
    const scopeLabel =
      this.countsScope === 'row'   ? ` · Ряд ${this.selectedRow + 1}` :
      this.countsScope === 'group' ? ` · ${grpName ?? ''}` : '';
    const h3 = document.querySelector<HTMLElement>('#brick-counts-panel h3');
    if (h3) h3.textContent = `РАСХОД${scopeLabel}`;

    const counts: Record<string, number> = {};
    let total = 0;
    for (const ri of rowIndices)
      for (const col of this.model.rows[ri])
        for (const bt of col)
          if (bt !== BrickType.Empty) {
            counts[bt] = (counts[bt] ?? 0) + 1;
            total++;
          }

    const el = document.getElementById('brick-counts')!;
    el.innerHTML = Object.keys(counts)
      .map(bt => `
        <div class="count-item">
          <span class="ct-label">${LABELS[bt] ?? bt}</span>
          <span class="ct-val">${counts[bt]}</span>
        </div>`)
      .join('') +
      (total ? `<div class="count-total"><span>Итого</span><span>${total}</span></div>` : '');
  }

  private refreshStatus() {
    const el = document.getElementById('status')!;
    let toolName = STATIC_TOOL_LABELS[this.selectedTool] ?? '';
    if (!toolName && isDoorBrick(this.selectedTool)) {
      const tmpl = this.model.doors.find(d => d.id === doorTemplateId(this.selectedTool));
      toolName = tmpl?.name ?? 'Дверца';
    }
    el.textContent =
      `Ряд: ${this.selectedRow + 1}/${this.model.rows.length}  |  ` +
      `Кирпичей: ${brickCount(this.model)}  |  ` +
      `Инструмент: ${toolName}`;
  }

  // ── row list ─────────────────────────────────────────────────────────────
  private refreshRowList() {
    const list = document.getElementById('row-list')!;
    list.innerHTML = '';
    for (let i = 0; i < this.model.rows.length; i++) {
      const hasHeader = this.model.rows[i].flat().some(b => b === BrickType.FullHeader);
      const badge = hasHeader ? 'тыч' : 'лож';
      const off   = this.model.rowOffsets[i];

      const hidden = this.model.rowHidden[i];

      const gid   = this.model.rowGroupIds[i];
      const grp   = this.model.rowGroups.find(g => g.id === gid);
      const inSelGroup = this.selectedGroupId !== null && gid === this.selectedGroupId;
      const dotColor   = grp ? grp.color : (this.selectedGroupId !== null ? '#2a2016' : '#383028');

      const item = document.createElement('div');
      item.className = 'row-item' + (i === this.selectedRow ? ' selected' : '') + (hidden ? ' row-hidden' : '');
      item.innerHTML = `
        <div class="row-group-dot ${inSelGroup ? 'in-grp' : ''}" style="background:${dotColor};${this.selectedGroupId !== null ? 'cursor:pointer;' : ''}"></div>
        <span>Ряд ${i + 1}</span>
        <span class="badge">${badge}</span>
        <button class="btn-offset ${off ? 'on' : ''}" data-row="${i}" title="Смещение на ½ кирпича">
          ${off ? '½→' : '0'}
        </button>
        <button class="btn-eye ${hidden ? 'hidden' : ''}" data-row="${i}" title="${hidden ? 'Показать ряд' : 'Скрыть ряд'}">
          ${hidden ? '🙈' : '👁'}
        </button>`;

      // Group dot toggle
      if (this.selectedGroupId !== null) {
        item.querySelector('.row-group-dot')!.addEventListener('click', (e) => {
          e.stopPropagation();
          this.model.rowGroupIds[i] = this.model.rowGroupIds[i] === this.selectedGroupId ? null : this.selectedGroupId;
          this.pushHistory();
          this.refreshRowList();
          this.refreshCounts();
        });
      }

      item.querySelectorAll('span').forEach(s => s.addEventListener('click', () => {
        this.selectedRow = i;
        this.gridEditor.selectedRow = i;
        this.countsScope = 'row';
        this.refreshAll();
      }));
      item.querySelector('.btn-offset')!.addEventListener('click', (e) => {
        e.stopPropagation();
        this.model.rowOffsets[i] = !this.model.rowOffsets[i];
        this.refreshAll();
      });
      item.querySelector('.btn-eye')!.addEventListener('click', (e) => {
        e.stopPropagation();
        this.model.rowHidden[i] = !this.model.rowHidden[i];
        this.refresh3d();
        this.refreshRowList();
      });
      list.appendChild(item);
    }
    // scroll selected row into view
    const selected = list.querySelector('.selected');
    selected?.scrollIntoView({ block: 'nearest' });
  }

  // ── toolbar binding ───────────────────────────────────────────────────────
  private bindUI() {
    // Tool buttons (static)
    document.querySelectorAll('.btn-tool[data-tool]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectTool((btn as HTMLElement).dataset.tool!);
      });
    });

    // Undo / redo buttons
    document.getElementById('btn-undo')!.addEventListener('click', () => this.undo());
    document.getElementById('btn-redo')!.addEventListener('click', () => this.redo());

    // Door editor button
    document.getElementById('btn-door-editor')!.addEventListener('click', () => {
      this.doorEditor.open();
    });

    // Box editor button
    document.getElementById('btn-box-editor')!.addEventListener('click', () => {
      this.boxEditor.open();
    });

    // Bond buttons
    document.querySelectorAll('.btn-tool[data-bond]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedBond = (btn as HTMLElement).dataset.bond as BondPattern;
        document.querySelectorAll('.btn-tool[data-bond]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Fill / clear
    document.getElementById('btn-fill')!.addEventListener('click', () => {
      fillRowWithBond(this.model, this.selectedRow, this.selectedBond);
      this.pushHistory();
      this.refreshAll();
    });
    document.getElementById('btn-clear')!.addEventListener('click', () => {
      clearRow(this.model, this.selectedRow);
      this.pushHistory();
      this.refreshAll();
    });

    // Coord calc modal
    const coordModal    = document.getElementById('coord-modal')!;
    const coordAxisBtns = coordModal.querySelectorAll<HTMLElement>('.coord-axis-btn');
    const coordScopeBtns= coordModal.querySelectorAll<HTMLElement>('.coord-scope-btn');
    const coordGroupRow = document.getElementById('coord-group-row')!;
    const coordManualRow= document.getElementById('coord-manual-row')!;
    const coordGroupSel = document.getElementById('coord-group-sel') as HTMLSelectElement;
    const coordAxisLabel= document.getElementById('coord-axis-label')!;
    let coordAxis: 'X'|'Y' = 'X';
    let coordScope: 'all'|'group'|'manual' = 'all';

    document.getElementById('btn-coord-calc')!.addEventListener('click', () => {
      // populate group select
      coordGroupSel.innerHTML = '';
      for (const g of this.model.rowGroups) {
        const opt = document.createElement('option');
        opt.value = g.id; opt.textContent = g.name;
        coordGroupSel.appendChild(opt);
      }
      coordModal.style.display = 'flex';
    });
    document.getElementById('coord-btn-close')!.addEventListener('click', () => {
      coordModal.style.display = 'none';
    });
    coordModal.addEventListener('click', (e) => {
      if (e.target === coordModal) coordModal.style.display = 'none';
    });

    coordAxisBtns.forEach(btn => btn.addEventListener('click', () => {
      coordAxisBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      coordAxis = btn.dataset.axis as 'X'|'Y';
      coordAxisLabel.textContent = `Позиция ${coordAxis}:`;
      const inp = document.getElementById('coord-inp-pos') as HTMLInputElement;
      inp.max = String(coordAxis === 'X' ? Math.floor(this.model.cols / 4) : Math.floor(this.model.depths / 2));
    }));

    coordScopeBtns.forEach(btn => btn.addEventListener('click', () => {
      coordScopeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      coordScope = btn.dataset.scope as 'all'|'group'|'manual';
      coordGroupRow.style.display  = coordScope === 'group'  ? 'flex' : 'none';
      coordManualRow.style.display = coordScope === 'manual' ? 'flex' : 'none';
    }));

    document.getElementById('coord-btn-calc')!.addEventListener('click', () => {
      const pos = parseInt((document.getElementById('coord-inp-pos') as HTMLInputElement).value) - 1;
      const m   = this.model;

      // Determine which rows to include
      let rowIndices: number[];
      if (coordScope === 'all') {
        rowIndices = m.rows.map((_, i) => i);
      } else if (coordScope === 'group') {
        const gid = coordGroupSel.value;
        rowIndices = m.rows.map((_, i) => i).filter(i => m.rowGroupIds[i] === gid);
      } else {
        const txt = (document.getElementById('coord-inp-rows') as HTMLInputElement).value;
        rowIndices = [];
        for (const part of txt.split(',')) {
          const range = part.trim().split('-').map(s => parseInt(s.trim()) - 1);
          if (range.length === 2) for (let i = range[0]; i <= range[1]; i++) { if (i >= 0 && i < m.rows.length) rowIndices.push(i); }
          else if (range.length === 1 && !isNaN(range[0]) && range[0] >= 0 && range[0] < m.rows.length) rowIndices.push(range[0]);
        }
      }

      // Count bricks crossing the coordinate line
      // For axis X: pos is in brick units → cell pos = pos*4; brick crosses if ci <= cellPos < ci+bcw
      // For axis Y: pos is in brick units → cell pos = pos*2; brick crosses if di <= cellPos < di+bcd
      const counts: Map<string, Map<number, number>> = new Map(); // bt → rowIdx → count
      const cellPos = coordAxis === 'X' ? pos * 4 : pos * 2;

      for (const ri of rowIndices) {
        if (ri < 0 || ri >= m.rows.length) continue;
        for (let ci = 0; ci < m.cols; ci++) {
          for (let di = 0; di < m.depths; di++) {
            const bt = m.rows[ri][ci][di];
            if (!bt || bt === BrickType.Empty) continue;
            const [bcw, bcd] = brickCells(bt, m.doors, m.boxes);
            const start = coordAxis === 'X' ? ci : di;
            const size  = coordAxis === 'X' ? bcw : bcd;
            // Only count the anchor cell (top-left of the brick)
            if (start !== (coordAxis === 'X' ? ci : di)) continue;
            if (cellPos < start || cellPos >= start + size) continue;
            // Make sure this is the anchor cell (not a continuation)
            if (coordAxis === 'X' && ci !== (Math.floor(ci / bcw) * bcw)) continue;
            if (coordAxis === 'Y' && di !== (Math.floor(di / bcd) * bcd)) continue;
            if (!counts.has(bt)) counts.set(bt, new Map());
            const byRow = counts.get(bt)!;
            byRow.set(ri, (byRow.get(ri) ?? 0) + 1);
          }
        }
      }

      // Render table
      const tbody = document.getElementById('coord-result-body')!;
      tbody.innerHTML = '';
      const LABELS: Record<string, string> = { ...STATIC_TOOL_LABELS };
      for (const d of m.doors) LABELS[`door:${d.id}`] = d.name;
      for (const b of m.boxes) LABELS[`box:${b.id}`]  = b.name;

      let grandTotal = 0;
      // Flatten and group by brick type
      const byType: Map<string, number> = new Map();
      const byTypeRow: Map<string, string[]> = new Map();
      for (const [bt, byRow] of counts) {
        let total = 0;
        const rowLabels: string[] = [];
        for (const [ri, cnt] of byRow) {
          total += cnt;
          rowLabels.push(`Р${ri + 1}×${cnt}`);
        }
        byType.set(bt, total);
        byTypeRow.set(bt, rowLabels);
        grandTotal += total;
      }

      if (byType.size === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="3" style="color:#6a6050;text-align:center;">Кирпичей не найдено</td>`;
        tbody.appendChild(tr);
      } else {
        for (const [bt, total] of byType) {
          const tr = document.createElement('tr');
          tr.innerHTML = `<td>${LABELS[bt] ?? bt}</td><td style="color:#8a8070;font-size:11px;">${byTypeRow.get(bt)!.join(', ')}</td><td>${total}</td>`;
          tbody.appendChild(tr);
        }
        const tTotal = document.createElement('tr');
        tTotal.className = 'total-row';
        tTotal.innerHTML = `<td>Итого</td><td></td><td>${grandTotal}</td>`;
        tbody.appendChild(tTotal);
      }

      document.getElementById('coord-result')!.style.display = 'block';
    });

    // Grid size
    const inpCols   = document.getElementById('inp-cols')   as HTMLInputElement;
    const inpDepths = document.getElementById('inp-depths') as HTMLInputElement;
    inpCols.addEventListener('change', () => {
      const bricks = Math.max(2, Math.min(120, parseInt(inpCols.value) || 20));
      inpCols.value = String(bricks);
      resizeModel(this.model, bricks * 4, this.model.depths);
      this.pushHistory();
      this.refreshAll();
    });
    inpDepths.addEventListener('change', () => {
      const bricks = Math.max(1, Math.min(60, parseInt(inpDepths.value) || 8));
      inpDepths.value = String(bricks);
      resizeModel(this.model, this.model.cols, bricks * 2);
      this.pushHistory();
      this.refreshAll();
    });

    // Add row
    document.getElementById('btn-add-row')!.addEventListener('click', () => {
      addRow(this.model);
      const newIdx = this.model.rows.length - 1;
      if (this.selectedGroupId !== null) this.model.rowGroupIds[newIdx] = this.selectedGroupId;
      this.selectedRow = newIdx;
      this.gridEditor.selectedRow = this.selectedRow;
      this.pushHistory();
      this.refreshAll();
      (this as any)._resetSlice?.();
    });

    // Export PNG (all rows)
    document.getElementById('btn-export-png')!.addEventListener('click', () => {
      this.gridEditor.exportAllRows();
    });

    // Export 3D view PNG
    document.getElementById('btn-export-3d')!.addEventListener('click', () => {
      this.renderer3d.exportPNG();
    });

    // Иконка на кнопке "Со срезом"
    (() => {
      const btn = document.getElementById('btn-chamfer-toggle')!;
      const W = 24, H = 12, cs = 6;
      const cv = document.createElement('canvas');
      cv.width = W; cv.height = H;
      cv.style.display = 'block'; cv.style.margin = '0 auto';
      const cx = cv.getContext('2d')!;
      cx.fillStyle = '#e07838';
      cx.beginPath();
      cx.moveTo(cs, 0); cx.lineTo(W, 0); cx.lineTo(W, H); cx.lineTo(0, H); cx.lineTo(0, cs);
      cx.closePath(); cx.fill();
      cx.strokeStyle = '#321a08'; cx.lineWidth = 1; cx.stroke();
      btn.style.display = 'flex'; btn.style.flexDirection = 'column';
      btn.style.alignItems = 'center'; btn.style.gap = '3px';
      btn.appendChild(cv);
    })();

    // Chamfer section toggle
    document.getElementById('btn-chamfer-toggle')!.addEventListener('click', () => {
      const panel = document.getElementById('chamfer-panel')!;
      const open = panel.style.display !== 'none';
      panel.style.display = open ? 'none' : 'block';
      document.getElementById('btn-chamfer-toggle')!.textContent = open ? 'Со срезом ▾' : 'Со срезом ▲';
    });

    // Slice Y slider (rows)
    const sliceSlider = document.getElementById('slice-slider') as HTMLInputElement;
    const sliceLabel  = document.getElementById('slice-label')!;
    const updateSlice = () => {
      const total = this.model.rows.length;
      sliceSlider.max   = String(total);
      sliceSlider.value = String(total);
      sliceLabel.textContent = `Y ${total}/${total}`;
      this.sliceRow = -1;
    };
    sliceSlider.addEventListener('input', () => {
      const val   = parseInt(sliceSlider.value);
      const total = this.model.rows.length;
      sliceLabel.textContent = `Y ${val}/${total}`;
      this.sliceRow = val >= total ? -1 : val;
      this.refresh3d();
    });

    // Slice X slider (columns)
    const sliceXSlider = document.getElementById('sliceX-slider') as HTMLInputElement;
    const sliceXLabel  = document.getElementById('sliceX-label')!;
    const updateSliceX = () => {
      const total = this.model.cols;
      sliceXSlider.max   = String(total);
      sliceXSlider.value = String(total);
      sliceXLabel.textContent = `X ${total}/${total}`;
      this.sliceCol = -1;
    };
    sliceXSlider.addEventListener('input', () => {
      const val   = parseInt(sliceXSlider.value);
      const total = this.model.cols;
      sliceXLabel.textContent = `X ${val}/${total}`;
      this.sliceCol = val >= total ? -1 : val;
      this.refresh3d();
    });

    // expose resets
    (this as any)._resetSlice = () => { updateSlice(); updateSliceX(); };

    // Mortar toggle
    (document.getElementById('chk-mortar') as HTMLInputElement).addEventListener('change', (e) => {
      this.showMortar = (e.target as HTMLInputElement).checked;
      this.refreshAll();
    });

    // New project
    document.getElementById('btn-new')!.addEventListener('click', () => {
      if (!confirm('Создать новый проект? Несохранённые изменения будут потеряны.')) return;
      const cols   = this.model.cols;
      const depths = this.model.depths;
      this.model = createModel(cols, depths);
      this.selectedRow = 0;
      this.gridEditor.setModel(this.model);
      (this.doorEditor as any).model = this.model;
      this.boxEditor.setModel(this.model);
      this.gridEditor.selectedRow = 0;
      this.refreshDoorButtons();
      this.refreshBoxButtons();
      this.history = [serializeModel(this.model)];
      this.historyPtr = 0;
      this._updateUndoButtons();
      this.refreshAll();
    });

    // Save
    document.getElementById('btn-save')!.addEventListener('click', async () => {
      const json = serializeModel(this.model);
      if ((window as any).__TAURI_INTERNALS__) {
        // Tauri: нативный диалог сохранения + Rust-команда записи
        const { save }   = await import('@tauri-apps/plugin-dialog');
        const { invoke } = await import('@tauri-apps/api/core');
        const path = await save({
          defaultPath: 'furnace.json',
          filters: [{ name: 'JSON', extensions: ['json'] }],
        });
        if (path) await invoke('save_file', { path, content: json });
      } else {
        // Браузер: скачать файл
        const blob = new Blob([json], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'furnace.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
      }
    });

    // Load
    document.getElementById('btn-load')!.addEventListener('click', () => {
      (document.getElementById('file-input') as HTMLInputElement).click();
    });
    document.getElementById('file-input')!.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      file.text().then(json => {
        this.model = deserializeModel(json);
        this.gridEditor.setModel(this.model);
        // re-bind editors to new model
        (this.doorEditor as any).model = this.model;
        this.boxEditor.setModel(this.model);
        this.selectedRow = 0;
        this.gridEditor.selectedRow = 0;
        const inp = document.getElementById('inp-cols') as HTMLInputElement;
        const ind = document.getElementById('inp-depths') as HTMLInputElement;
        inp.value = String(Math.round(this.model.cols / 4));
        ind.value = String(Math.round(this.model.depths / 2));
        this.refreshDoorButtons();
        this.refreshBoxButtons();
        this.refreshAll();
        // reset history to the loaded state
        this.history = [serializeModel(this.model)];
        this.historyPtr = 0;
        this._updateUndoButtons();
      });
    });
  }
}
