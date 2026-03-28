import {
  BrickModel, BrickType, BondPattern,
  createModel, addRow, brickCount,
  resizeModel, fillRowWithBond, clearRow,
  serializeModel, deserializeModel,
  isDoorBrick, doorTemplateId,
} from './model.js';
import { Renderer3D     } from './renderer3d.js';
import { GridEditor     } from './gridEditor.js';
import { DoorEditorModal } from './doorEditor.js';

const STATIC_TOOL_LABELS: Record<string, string> = {
  [BrickType.Empty]:             'Нет',
  [BrickType.FullStretcher]:     'Ложок',
  [BrickType.FullHeader]:        'Тычок',
  [BrickType.ThreeQuarter]:      '3/4',
  [BrickType.Half]:              '1/2',
  [BrickType.Hole]:              'Отверстие',
  [BrickType.VerticalStretcher]: 'На ребро',
  [BrickType.Grate]:             'Решетка',
};

export class App {
  private model:       BrickModel;
  private renderer3d:  Renderer3D;
  private gridEditor:  GridEditor;
  private doorEditor:  DoorEditorModal;
  private selectedRow  = 0;
  private selectedTool: string = BrickType.FullStretcher;
  private selectedBond = BondPattern.Chain;
  private showMortar   = false;
  private sliceRow     = -1;
  private sliceCol     = -1;

  constructor() {
    this.model = createModel(60, 30); // 60 cells = 15 bricks wide, 30 cells = 15 brick-depths

    this.renderer3d = new Renderer3D(document.getElementById('viewport')!);
    this.gridEditor = new GridEditor(
      document.getElementById('grid-canvas') as HTMLCanvasElement,
      this.model
    );
    this.gridEditor.selectedRow  = this.selectedRow;
    this.gridEditor.selectedTool = this.selectedTool;
    this.gridEditor.onChange     = () => { this.refresh3d(); this.refreshCounts(); this.refreshStatus(); };
    this.gridEditor.onToolChange = (tool: string) => {
      this.selectTool(tool);
    };

    this.doorEditor = new DoorEditorModal(this.model);
    this.doorEditor.onDoorCreated = (bt: string) => {
      this.selectTool(bt);
      this.refreshDoorButtons();
      this.refreshAll();
    };

    this.renderer3d.bindControls();
    this.bindUI();
    this.refreshAll();
  }

  // ── full refresh ─────────────────────────────────────────────────────────
  private refreshAll() {
    this.refresh3d();
    this.refreshGrid();
    this.refreshRowList();
    this.refreshStatus();
    this.refreshCounts();
    (this as any)._resetSlice?.();
  }

  private refresh3d() { this.renderer3d.update(this.model, this.selectedRow, this.showMortar, this.sliceRow, this.sliceCol); }

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
  private refreshGrid()   { this.gridEditor.showMortar = this.showMortar; this.gridEditor.draw(); }
  private refreshCounts() {
    const LABELS: Record<string, string> = {
      [BrickType.FullStretcher]:     'Ложок',
      [BrickType.FullHeader]:        'Тычок',
      [BrickType.ThreeQuarter]:      '3/4',
      [BrickType.Half]:              '1/2',
      [BrickType.Hole]:              'Отверстие',
      [BrickType.VerticalStretcher]: 'На ребро',
      [BrickType.Grate]:             'Решетка',
    };
    for (const d of this.model.doors) LABELS[`door:${d.id}`] = d.name;

    const counts: Record<string, number> = {};
    let total = 0;
    for (const row of this.model.rows)
      for (const col of row)
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

      const item = document.createElement('div');
      item.className = 'row-item' + (i === this.selectedRow ? ' selected' : '');
      item.innerHTML = `
        <span>Ряд ${i + 1}</span>
        <span class="badge">${badge}</span>
        <button class="btn-offset ${off ? 'on' : ''}" data-row="${i}" title="Смещение на ½ кирпича">
          ${off ? '½→' : '0'}
        </button>`;

      item.querySelector('span')!.addEventListener('click', () => {
        this.selectedRow = i;
        this.gridEditor.selectedRow = i;
        this.refreshAll();
      });
      item.querySelectorAll('span').forEach(s => s.addEventListener('click', () => {
        this.selectedRow = i;
        this.gridEditor.selectedRow = i;
        this.refreshAll();
      }));
      item.querySelector('.btn-offset')!.addEventListener('click', (e) => {
        e.stopPropagation();
        this.model.rowOffsets[i] = !this.model.rowOffsets[i];
        this.refreshAll();
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

    // Door editor button
    document.getElementById('btn-door-editor')!.addEventListener('click', () => {
      this.doorEditor.open();
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
      this.refreshAll();
    });
    document.getElementById('btn-clear')!.addEventListener('click', () => {
      clearRow(this.model, this.selectedRow);
      this.refreshAll();
    });

    // Grid size
    const inpCols   = document.getElementById('inp-cols')   as HTMLInputElement;
    const inpDepths = document.getElementById('inp-depths') as HTMLInputElement;
    inpCols.addEventListener('change', () => {
      const bricks = Math.max(2, Math.min(120, parseInt(inpCols.value) || 20));
      inpCols.value = String(bricks);
      resizeModel(this.model, bricks * 4, this.model.depths);
      this.refreshAll();
    });
    inpDepths.addEventListener('change', () => {
      const bricks = Math.max(1, Math.min(60, parseInt(inpDepths.value) || 8));
      inpDepths.value = String(bricks);
      resizeModel(this.model, this.model.cols, bricks * 2);
      this.refreshAll();
    });

    // Add row
    document.getElementById('btn-add-row')!.addEventListener('click', () => {
      addRow(this.model);
      this.selectedRow = this.model.rows.length - 1;
      this.gridEditor.selectedRow = this.selectedRow;
      this.refreshAll();
      (this as any)._resetSlice?.();
    });

    // Export PNG
    document.getElementById('btn-export-png')!.addEventListener('click', () => {
      this.gridEditor.exportAllRows();
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
        // re-bind door editor to new model
        (this.doorEditor as any).model = this.model;
        this.selectedRow = 0;
        this.gridEditor.selectedRow = 0;
        const inp = document.getElementById('inp-cols') as HTMLInputElement;
        const ind = document.getElementById('inp-depths') as HTMLInputElement;
        inp.value = String(Math.round(this.model.cols / 4));
        ind.value = String(Math.round(this.model.depths / 2));
        this.refreshDoorButtons();
        this.refreshAll();
      });
    });
  }
}
