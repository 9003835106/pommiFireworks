import { AfterViewInit, Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';

interface Triangle {
  x: number;
  y: number;
  baseY: number;
  size: number;
  angle: number;
  speed: number;
  hue: number;
  bouncePhase: number;
}

@Component({
  selector: 'app-triangle-canvas',
  templateUrl: './triangle-canvas.component.html',
  styleUrls: ['./triangle-canvas.component.css']
})
export class TriangleCanvasComponent implements AfterViewInit, OnDestroy {

  @ViewChild('myCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private animationId: any;
  private triangles: Triangle[] = [];

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    for (let i = 0; i < 25; i++) {
      this.triangles.push({
        x: 100 + i * 70,
        y: Math.random ()+250,
        baseY: 200,
        size: 68,
        angle: 0,
        speed: 0.01 + Math.random() * 0.03,
        hue: Math.floor(Math.random() * 360),
        bouncePhase: Math.random() * Math.PI * 2
      });
    }

    this.animate();
  }

  drawTriangle(t: Triangle): void {
    const ctx = this.ctx;
    const color = `hsl(${t.hue}, 100%, 50%)`;

    ctx.save();
    ctx.translate(t.x, t.y);
    ctx.rotate(t.angle);

    ctx.beginPath();
    ctx.moveTo(0, -t.size);
    ctx.lineTo(-t.size, t.size);
    ctx.lineTo(t.size, t.size);
    ctx.closePath();

    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.fillStyle ='red';
    ctx.font='22px Arial';
    ctx.textAlign='center';
    ctx.fillText('POMMI',(t.size/3)-25,t.size/3)

    ctx.restore();
  }

  animate(): void {
    this.ctx.clearRect(0, 0, 1510, 400);

    for (let t of this.triangles) {
      t.angle += t.speed;
      t.hue = (t.hue + 1) % 360;

      // Bouncing motion using sine wave
      t.bouncePhase += 0.05;
      t.y = t.baseY + Math.sin(t.bouncePhase) * 140;

      this.drawTriangle(t);
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
  }
}
