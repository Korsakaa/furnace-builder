import { BrickModel, DoorTemplate, doorBrickType } from './model.js';

const CELL    = 18;   // px per cell in door editor canvas
const ROW_PX  = 24;   // px per brick-row in canvas (taller than a cell to look realistic)

export class DoorEditorModal {
  private modal:  HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx:    CanvasRenderingContext2D;

  private shape: boolean[][] = [];   // [col][rowInDoor]
  private cols       = 4;
  private heightRows = 3;
  private depth      = 2;
  private brickBase: 'Ложок' | 'Тычок' = 'Ложок';
  private offsetX: 'left' | 'center' | 'right' = 'left';
  private painting   = false;
  private paintValue = true;
  private doorCounter = 1;

  onDoorCreated?: (bt: string) => void;

  constructor(private model: BrickModel) {
    this.modal  = document.getElementById('door-modal')!;
    this.canvas = document.getElementById('door-editor-canvas') as HTMLCanvasElement;
    this.ctx    = this.canvas.getContext('2d')!;
    this.initShape();
    this.bindEvents();
  }

  open() {
    this.refreshDoorList();
    this.modal.style.display = 'flex';
    this.resizeCanvas();
    this.drawCanvas();
  }

  close() {
    this.modal.style.display = 'none';
  }

  // ── shape helpers ─────────────────────────────────────────────────────────
  private initShape() {
    this.shape = Array.from({ length: this.cols }, () =>
      Array.from({ length: this.heightRows }, () => true)
    );
  }

  private resizeShape(newCols: number, newRows: number) {
    const old = this.shape;
    this.cols       = newCols;
    this.heightRows = newRows;
    this.shape = Array.from({ length: newCols }, (_, c) =>
      Array.from({ length: newRows }, (_, r) => old[c]?.[r] ?? true)
    );
  }

  // ── canvas ────────────────────────────────────────────────────────────────
  private resizeCanvas() {
    const W = this.cols       * CELL  + 1;
    const H = this.heightRows * ROW_PX + 1;
    this.canvas.width  = W;
    this.canvas.height = H;
    this.canvas.style.width  = W + 'px';
    this.canvas.style.height = H + 'px';
  }

  private drawCanvas() {
    const { ctx, cols, heightRows } = this;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < heightRows; r++) {
        // rows drawn top-to-bottom (r=0 = top row of door)
        const x = c * CELL;
        const y = r * ROW_PX;
        ctx.fillStyle = this.shape[c][r] ? '#6aaabf' : '#1a1410';
        ctx.fillRect(x + 1, y + 1, CELL - 1, ROW_PX - 1);
      }
    }

    // grid lines
    ctx.strokeStyle = '#3a3020';
    ctx.lineWidth   = 1;
    for (let c = 0; c <= cols; c++) {
      ctx.beginPath();
      ctx.moveTo(c * CELL + 0.5, 0);
      ctx.lineTo(c * CELL + 0.5, heightRows * ROW_PX);
      ctx.stroke();
    }
    for (let r = 0; r <= heightRows; r++) {
      ctx.beginPath();
      ctx.moveTo(0, r * ROW_PX + 0.5);
      ctx.lineTo(cols * CELL, r * ROW_PX + 0.5);
      ctx.stroke();
    }
  }

  // ── mouse/touch events ────────────────────────────────────────────────────
  private cellAt(e: MouseEvent): [number, number] {
    const rect = this.canvas.getBoundingClientRect();
    return [
      Math.floor((e.clientX - rect.left)  / CELL),
      Math.floor((e.clientY - rect.top)   / ROW_PX),
    ];
  }

  private toggleCell(c: number, r: number, val: boolean) {
    if (c < 0 || c >= this.cols || r < 0 || r >= this.heightRows) return;
    this.shape[c][r] = val;
    this.drawCanvas();
  }

  private bindEvents() {
    this.canvas.addEventListener('mousedown', e => {
      e.preventDefault();
      const [c, r] = this.cellAt(e);
      this.paintValue = e.button === 2 ? false : !(this.shape[c]?.[r]);
      this.painting   = true;
      this.toggleCell(c, r, this.paintValue);
    });
    this.canvas.addEventListener('mousemove', e => {
      if (!this.painting) return;
      const [c, r] = this.cellAt(e);
      this.toggleCell(c, r, this.paintValue);
    });
    window.addEventListener('mouseup', () => { this.painting = false; });
    this.canvas.addEventListener('contextmenu', e => e.preventDefault());

    // Brick base buttons
    document.querySelectorAll('.door-base-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.brickBase = (btn as HTMLElement).dataset.base as 'Ложок' | 'Тычок';
        this.depth = this.brickBase === 'Ложок' ? 2 : 4;
        document.querySelectorAll('.door-base-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Offset buttons
    document.querySelectorAll('.door-offset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.offsetX = (btn as HTMLElement).dataset.offset as 'left' | 'center' | 'right';
        document.querySelectorAll('.door-offset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // cols / rows inputs
    const inpCols = document.getElementById('door-inp-cols')   as HTMLInputElement;
    const inpRows = document.getElementById('door-inp-rows')   as HTMLInputElement;
    const applyResize = () => {
      const c = Math.max(1, Math.min(16, parseInt(inpCols.value) || this.cols));
      const r = Math.max(1, Math.min(12, parseInt(inpRows.value) || this.heightRows));
      inpCols.value = String(c);
      inpRows.value = String(r);
      this.resizeShape(c, r);
      this.resizeCanvas();
      this.drawCanvas();
    };
    document.getElementById('door-btn-resize')!.addEventListener('click', applyResize);
    inpCols.addEventListener('input', applyResize);
    inpRows.addEventListener('input', applyResize);

    // clear
    document.getElementById('door-btn-clear')!.addEventListener('click', () => {
      this.initShape();
      this.drawCanvas();
    });

    // create
    document.getElementById('door-btn-create')!.addEventListener('click', () => {
      const nameInp = document.getElementById('door-inp-name') as HTMLInputElement;
      const name    = nameInp.value.trim() || `Дверца ${this.doorCounter}`;
      const id      = `d${Date.now()}`;
      const tmpl: DoorTemplate = {
        id,
        name,
        cols:       this.cols,
        heightRows: this.heightRows,
        depth:      this.depth,
        brickBase:  this.brickBase,
        offsetX:    this.offsetX,
        shape:      this.shape.map(col => [...col]),
      };
      this.model.doors.push(tmpl);
      this.doorCounter++;
      nameInp.value = `Дверца ${this.doorCounter}`;
      this.refreshDoorList();
      this.onDoorCreated?.(doorBrickType(id));
    });

    // close
    document.getElementById('door-btn-close')!.addEventListener('click', () => this.close());
    this.modal.addEventListener('click', e => {
      if (e.target === this.modal) this.close();
    });
  }

  // ── door list ─────────────────────────────────────────────────────────────
  refreshDoorList() {
    const list = document.getElementById('door-list')!;
    if (this.model.doors.length === 0) {
      list.innerHTML = '<div style="color:#6a6050;font-size:11px;padding:4px;">Нет созданных дверец</div>';
      return;
    }
    list.innerHTML = this.model.doors.map(d => `
      <div class="door-list-item">
        <span>${d.name} &nbsp;<span style="color:#6a6050;font-size:10px;">${d.brickBase} · ${d.cols}×${d.heightRows}р · ${d.offsetX === 'left' ? '←' : '→'}</span></span>
        <div style="display:flex;gap:4px;">
          <button class="door-select-btn" data-bt="door:${d.id}">Выбрать</button>
          <button class="door-delete-btn" data-id="${d.id}" style="background:#4a1010;border-color:#803030;color:#d07070;">✕</button>
        </div>
      </div>
    `).join('');

    list.querySelectorAll('.door-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.onDoorCreated?.((btn as HTMLElement).dataset.bt!);
        this.close();
      });
    });

    list.querySelectorAll('.door-delete-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = (btn as HTMLElement).dataset.id!;
        const bt = `door:${id}`;
        for (const row of this.model.rows)
          for (const col of row)
            for (let d = 0; d < col.length; d++)
              if (col[d] === bt) col[d] = 'Empty';
        this.model.doors = this.model.doors.filter(d => d.id !== id);
        this.refreshDoorList();
        this.onDoorCreated?.('');  // signal refresh
      });
    });
  }
}
