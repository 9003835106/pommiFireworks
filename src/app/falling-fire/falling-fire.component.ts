import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-falling-fire',
  templateUrl: './falling-fire.component.html',
  styleUrls: ['./falling-fire.component.css']
})
export class FallingFireComponent implements AfterViewInit {
  @ViewChild('fireCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;
  particles: any[] = [];
  canvasWidth = 0;
  canvasHeight = 0;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();

    // Start animation
    this.animate();
  }

  @HostListener('window:resize')
  resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.canvasWidth = canvas.width = window.innerWidth;
    this.canvasHeight = canvas.height = window.innerHeight;
  }

  createParticle() {
    return {
      x: Math.random() * this.canvasWidth,
      y: -10,
      speedY: 9.3 + Math.random() * 3,
      radius: 2.5 + Math.random() * 1,
      color: `rgba(${255}, ${Math.floor(Math.random() * 250)}, 0, ${Math.random()})`
    };
  }

  animate = () => {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    // Add new particles
    if (this.particles.length < 9999999) {
      this.particles.push(this.createParticle());
    }

    for (let i = 0; i < this.particles.length; i++) {
      
    
      const p = this.particles[i];
      p.y += p.speedY;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.fill();
     
      // Remove if out of bounds
      if (p.y > this.canvasHeight) {
        this.particles.splice(i,1);
        i--;
      }
    }

    requestAnimationFrame(this.animate);
  };
}
