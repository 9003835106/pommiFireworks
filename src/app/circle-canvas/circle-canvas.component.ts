import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Color4Component } from "../color4/color4.component";
import { Color3Component } from "../color3/color3.component";
import { Color2Component } from "../color2/color2.component";
import { Color5Component } from "../color5/color5.component";


@Component({
  selector: 'app-circle-canvas',
  templateUrl: './circle-canvas.component.html',
  styleUrls: ['./circle-canvas.component.css'],
  imports: [Color4Component, Color3Component, Color2Component, Color5Component]
})
export class CircleCanvasComponent implements AfterViewInit {
  @ViewChild('myCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  circles: any[] = [];

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    // Create 10 random circles
    for (let i = 0; i < 196; i++) {
      this.circles.push({
        x: Math.random() * 1510,
        y: Math.random() * 1100,
        radius: 20 + Math.random() * 10,
        dx: -2 + Math.random() * 4, // Speed X
        dy: -2 + Math.random() * 4, // Speed Y
        color: this.getRandomColor()
      });
    }

    this.animate();
  }

  private drawCircles(): void {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, 1510, 1100);

    for (let c of this.circles) {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
      ctx.stroke();

      // Move
      c.x += c.dx;
      c.y += c.dy;

      // Bounce
      if (c.x + c.radius > 1510 || c.x - c.radius < 0) c.dx = -c.dx;
      if (c.y + c.radius > 1100 || c.y - c.radius < 0) c.dy = -c.dy;
    }
  }

  private animate(): void {
    this.drawCircles();
    requestAnimationFrame(() => this.animate());
  }

  private getRandomColor(): string {
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'cyan','yellow','skyblue','violet','darkmagenta','deeppink','deepskyblue','lime','maroon','magenta','navy','orangered','tomato'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
