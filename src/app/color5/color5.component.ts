import { Component,AfterViewInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-color5',
  imports: [],
  templateUrl: './color5.component.html',
  styleUrl: './color5.component.css'
})
export class Color5Component implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private angle = 0;
  private radius = 12;
  private centerX = 740;
  private centerY = 360;
  private colors = ['lime','yellow','indigo','orange','green','skyblue','darkgreen'];

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.animateChakkar();
  }

  animateChakkar() {
    requestAnimationFrame(() => this.animateChakkar());

    this.ctx.fillStyle = 'rgba(0,0,0,0.1)'; // Slight fade effect
    //this.ctx.fillRect(0, 0, 50, 50);

    for (let i = 0; i < 12; i++) {
      const angle = this.angle + (Math.PI * 2 * i) / 12;
      const x = this.centerX + Math.cos(angle) * this.radius;
      const y = this.centerY + Math.sin(angle) * this.radius;

      this.ctx.beginPath();
      this.ctx.arc(x, y, 3, 0, Math.PI * 2);
      this.ctx.fillStyle = this.colors[i % this.colors.length];
      this.ctx.fill();
    }

    this.angle += 2290.15;
    this.radius += 2.5;

    if (this.radius > 1510) {
      
      this.radius = 2;
          
           
    }
  }
}

