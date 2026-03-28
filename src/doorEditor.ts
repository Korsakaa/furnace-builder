import { BrickModel, DoorTemplate, doorBrickType } from './model.js';

const CELL = 18;   // px per cell in door editor

export class DoorEditorModal {
  private modal: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private shape: boolean[][] = [];
  private cols = 4;
  private depths = 4;
  private painting = false;
  private paintValue = true;
  private doorCounter = 1;

  onDoorCreated?: (bt: string) => void;  // called after door added to model

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
      Array.from({ length: this.depths }, () => false)
    );
  }

  private resizeShape(newCols: number, newDepths: number) {
    const old = this.shape;
    this.cols   = newCols;
    this.depths = newDepths;
    this.shape  = Array.from({ length: newCols }, (_, c) =>
      Array.from({ length: newDepths }, (_, d) => old[c]?.[d] ?? false)
    );
  }

  // ── canvas drawing ────────────────────────────────────────────────────────
  private resizeCanvas() {
    const W = this.cols   * CELL + 1;
    const H = this.depths * CELL + 1;
    this.canvas.width  = W;
    this.canvas.height = H;
    this.canvas.style.width  = W + 'px';
    this.canvas.style.height = H + 'px';
  }

  private drawCanvas() {
    const { ctx, cols, depths } = this;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let c = 0; c < cols; c++) {
      for (let d = 0; d < depths; d++) {
        const x = c * CELL, y = d * CELL;
        ctx.fillStyle = this.shape[c][d] ? '#5a8090' : '#1e1a14';
        ctx.fillRect(x + 1, y + 1, CELL - 1, CELL - 1);
      }
    }
    // grid lines
    ctx.strokeStyle = '#3a3020';
    ctx.lineWidth   = 1;
    for (let c = 0; c <= cols; c++) {
      ctx.beginPath();
      ctx.moveTo(c * CELL + 0.5, 0);
      ctx.lineTo(c * CELL + 0.5, depths * CELL);
      ctx.stroke();
    }
    for (let d = 0; d <= depths; d++) {
      ctx.beginPath();
      ctx.moveTo(0, d * CELL + 0.5);
      ctx.lineTo(cols * CELL, d * CELL + 0.5);
      ctx.stroke();
    }
  }

  // ── events ────────────────────────────────────────────────────────────────
  private cellAt(e: MouseEvent): [number, number] {
    const r = this.canvas.getBoundingClientRect();
    return [
      Math.floor((e.clientX - r.left) / CELL),
      Math.floor((e.clientY - r.top)  / CELL),
    ];
  }

  private toggleCell(c: number, d: number, val: boolean) {
    if (c < 0 || c >= this.cols || d < 0 || d >= this.depths) return;
    this.shape[c][d] = val;
    this.drawCanvas();
  }

  private bindEvents() {
    this.canvas.addEventListener('mousedown', e => {
      e.preventDefault();
      const [c, d] = this.cellAt(e);
      this.paintValue = e.button === 2 ? false : !this.shape[c]?.[d];
      this.painting   = true;
      this.toggleCell(c, d, this.paintValue);
    });
    this.canvas.addEventListener('mousemove', e => {
      if (!this.painting) return;
      const [c, d] = this.cellAt(e);
      this.toggleCell(c, d, this.paintValue);
    });
    window.addEventListener('mouseup', () => { this.painting = false; });
    this.canvas.addEventListener('contextmenu', e => e.preventDefault());

    // size inputs
    const inpCols   = document.getElementById('door-inp-cols')   as HTMLInputElement;
    const inpDepths = document.getElementById('door-inp-depths') as HTMLInputElement;
    const applySize = () => {
      const c = Math.max(1, Math.min(16, parseInt(inpCols.value)   || this.cols));
      const d = Math.max(1, Math.min(12, parseInt(inpDepths.value) || this.depths));
      inpCols.value   = String(c);
      inpDepths.value = String(d);
      this.resizeShape(c, d);
      this.resizeCanvas();
      this.drawCanvas();
    };
    document.getElementById('door-btn-resize')!.addEventListener('click', applySize);

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
        cols:   this.cols,
        depths: this.depths,
        shape:  this.shape.map(col => [...col]),
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
      <div class="door-list-item" data-id="${d.id}">
        <span>${d.name} (${d.cols}×${d.depths})</span>
        <button class="door-select-btn" data-bt="door:${d.id}">Выбрать</button>
      </div>
    `).join('');

    list.querySelectorAll('.door-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.onDoorCreated?.(  (btn as HTMLElement).dataset.bt!);
        this.close();
      });
    });
  }
}
