import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-chakkar',
  templateUrl: './chakkar.component.html',
  styleUrls: ['./chakkar.component.css']
})
export class ChakkarComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;
  particles: any[] = [];
  angle = 0;

  ngAfterViewInit(): void {
    
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    canvas.addEventListener('click', (e) => this.spawnChakkar(e.offsetX, e.offsetY)
    );
    this.animate();
  }

  spawnChakkar(x: number, y: number) {
    for (let i = 0; i < 7000; i++) {
      const angle = (Math.PI * 2 * i) / 100;
      this.particles.push({
        x,
        y,
        angle,
        radius:-110,
        speed: Math.random() * 29 + 1,
        life: 1000,
        color: `hsl(${Math.random() * 60}, 100%, 50%)`
      });
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    const ctx = this.ctx;
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, 1400, 300);

    this.angle += 0.1;

    for (let p of this.particles) {
      p.radius += p.speed;
      const dx = Math.cos(p.angle + this.angle) * p.radius;
      const dy = Math.sin(p.angle + this.angle) * p.radius;
      ctx.beginPath();
      ctx.arc(p.x + dx, p.y + dy, 2, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.life--;
    }

    this.particles = this.particles.filter((p) => p.life > 0);
  }
}
