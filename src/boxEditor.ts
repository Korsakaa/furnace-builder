import { BrickModel, BoxTemplate, boxBrickType } from './model.js';

const PRESET_COLORS = [
  '#c87840', '#4888d8', '#60b050', '#c84040',
  '#a060c0', '#50b8c0', '#d0a030', '#888888',
];

export class BoxEditorModal {
  private modal: HTMLElement;
  private boxCounter = 1;

  onBoxCreated?: (bt: string) => void;

  setModel(m: BrickModel) { this.model = m; }

  constructor(private model: BrickModel) {
    this.modal = document.getElementById('box-modal')!;
    this.bindEvents();
  }

  open() {
    this.refreshBoxList();
    this.modal.style.display = 'flex';
  }

  close() {
    this.modal.style.display = 'none';
  }

  // ── events ────────────────────────────────────────────────────────────────
  private bindEvents() {
    // color swatches
    document.querySelectorAll<HTMLElement>('.box-color-swatch').forEach(sw => {
      sw.addEventListener('click', () => {
        document.querySelectorAll('.box-color-swatch').forEach(s => s.classList.remove('active'));
        sw.classList.add('active');
        const inp = document.getElementById('box-inp-color') as HTMLInputElement;
        inp.value = sw.dataset.color!;
      });
    });

    // sync color input ↔ swatches
    const inpColor = document.getElementById('box-inp-color') as HTMLInputElement;
    inpColor.addEventListener('input', () => {
      document.querySelectorAll('.box-color-swatch').forEach(s => s.classList.remove('active'));
    });

    // create
    document.getElementById('box-btn-create')!.addEventListener('click', () => {
      const name  = (document.getElementById('box-inp-name') as HTMLInputElement).value.trim()
                    || `Объект ${this.boxCounter}`;
      const cols  = Math.max(1, Math.min(120, parseInt((document.getElementById('box-inp-cols') as HTMLInputElement).value) || 4));
      const deps  = Math.max(1, Math.min(60,  parseInt((document.getElementById('box-inp-depths') as HTMLInputElement).value) || 4));
      const rows  = Math.max(1, Math.min(40,  parseInt((document.getElementById('box-inp-rows') as HTMLInputElement).value) || 3));
      const color = (document.getElementById('box-inp-color') as HTMLInputElement).value || '#c87840';

      const id = `bx${Date.now()}`;
      const tmpl: BoxTemplate = { id, name, cols, depths: deps, heightRows: rows, color };
      this.model.boxes.push(tmpl);
      this.boxCounter++;
      (document.getElementById('box-inp-name') as HTMLInputElement).value = `Объект ${this.boxCounter}`;
      this.refreshBoxList();
      this.onBoxCreated?.(boxBrickType(id));
    });

    // close
    document.getElementById('box-btn-close')!.addEventListener('click', () => this.close());
    this.modal.addEventListener('click', e => {
      if (e.target === this.modal) this.close();
    });
  }

  // ── list ──────────────────────────────────────────────────────────────────
  refreshBoxList() {
    const list = document.getElementById('box-list')!;
    if (this.model.boxes.length === 0) {
      list.innerHTML = '<div style="color:#6a6050;font-size:11px;padding:4px;">Нет созданных объектов</div>';
      return;
    }
    list.innerHTML = this.model.boxes.map(b => `
      <div class="box-list-item">
        <span class="box-color-dot" style="background:${b.color};"></span>
        <span>${b.name} &nbsp;<span style="color:#6a6050;font-size:10px;">${b.cols}×${b.depths} яч · ${b.heightRows} р.</span></span>
        <div style="display:flex;gap:4px;">
          <button class="box-select-btn" data-bt="box:${b.id}">Выбрать</button>
          <button class="box-delete-btn" data-id="${b.id}" style="background:#4a1010;border-color:#803030;color:#d07070;">✕</button>
        </div>
      </div>
    `).join('');

    list.querySelectorAll<HTMLElement>('.box-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.onBoxCreated?.(btn.dataset.bt!);
        this.close();
      });
    });

    list.querySelectorAll<HTMLElement>('.box-delete-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id!;
        const bt = `box:${id}`;
        for (const row of this.model.rows)
          for (const col of row)
            for (let d = 0; d < col.length; d++)
              if (col[d] === bt) col[d] = 'Empty';
        this.model.boxes = this.model.boxes.filter(b => b.id !== id);
        this.refreshBoxList();
        this.onBoxCreated?.('');
      });
    });
  }
}
