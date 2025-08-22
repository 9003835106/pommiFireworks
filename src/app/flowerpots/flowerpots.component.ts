import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


interface Sparkle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  dx: number;
  dy: number;
  life: number;
}

interface Bee {
  x: number;
  y: number;
  angle: number;
  speed: number;
  directionChange: number;
}

@Component({
  selector: 'app-flowerpots',
  templateUrl: './flowerpots.component.html',
  styleUrls: ['./flowerpots.component.css']
})
export class FlowerpotsComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private sparkles: Sparkle[] = [];
  private bees: Bee[] = [];

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    // Create 5 buzzing bees
    for (let i = 0; i < 450; i++) {
      this.bees.push({
        x: 200 + Math.random() * 300,
        y: 200 + Math.random() * 100,
        angle: Math.random() * Math.PI * 153,
        speed: 1 + Math.random(),
        directionChange: 0
      });
    }

    this.animate();
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.ctx.clearRect(0, 0, 1400, 290);

    this.drawFlowerPot(100,90);
    this.drawFlowerPot(200,90);
    this.drawFlowerPot(300,90);
    this.drawFlowerPot(400,90);
    this.drawFlowerPot(500,90);
    this.drawFlowerPot(600,90);
    this.drawFlowerPot(700,90);
    this.drawFlowerPot(800,90);
    this.drawFlowerPot(900,90);
    this.drawFlowerPot(1000,90);
    this.drawFlowerPot(1100,90);
    this.drawFlowerPot(1200,90);
    this.drawFlowerPot(1300,90);

    this.updateSparkles();
    this.updateBees();
  }

  drawFlowerPot(x: number, y: number) {
    const ctx = this.ctx;

    ctx.fillStyle = '#00aaffff';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 60, y);
    ctx.lineTo(x + 50, y + 40);
    ctx.lineTo(x + 10, y + 40);
    ctx.font="22px Times New Roman";
    ctx.strokeStyle='red';
    ctx.lineWidth=1;
    ctx.strokeText('POMMI',x-5,y+54);
    ctx.strokeText('POMMI',x+95,y+54);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = 'green';
    ctx.lineWidth = 9;
    ctx.beginPath();
    ctx.moveTo(x + 30, y);
    ctx.lineTo(x + 30, y - 50);
    ctx.stroke();

    for (let i = 0; i < 9; i++) {
      const angle = (i * Math.PI) / 3;
      const px = x + 35 + Math.cos(angle) * 15;
      const py = y - 50 + Math.sin(angle) * 15;
      ctx.beginPath();
      ctx.fillStyle = 'red';
      ctx.arc(px, py, 8, 0, Math.PI * 2);
      ctx.fill();

      this.addSparkle(px, py);
    }

    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.arc(x + 35, y - 50, 6, 0, Math.PI * 2);
    ctx.fill();
  }

  addSparkle(x: number, y: number) {
    if (Math.random() < 0.3) {
      this.sparkles.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        radius: Math.random() * 2 + 1,
        opacity: 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        life: 30 + Math.random() * 20
      });
    }
  }

  updateSparkles() {
    const ctx = this.ctx;
    this.sparkles = this.sparkles.filter(s => s.life > 0);
    for (let sparkle of this.sparkles) {
      sparkle.x += sparkle.dx;
      sparkle.y += sparkle.dy;
      sparkle.opacity = sparkle.life / 50;
      sparkle.life--;

      ctx.beginPath();
      ctx.globalAlpha = sparkle.opacity;
      ctx.fillStyle = 'yellow';
      ctx.arc(sparkle.x, sparkle.y, sparkle.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  updateBees() {
    const ctx = this.ctx;

    for (let bee of this.bees) {
      bee.directionChange += 0.05;
      if (bee.directionChange > 1) {
        bee.angle += (Math.random() - 0.5) * 0.5;
        bee.directionChange = 0;
      }

      bee.x += Math.cos(bee.angle) * bee.speed;
      bee.y += Math.sin(bee.angle) * bee.speed;

      // Keep bees within canvas
      if (bee.x < 0 || bee.x > 1400) bee.angle = Math.PI - bee.angle;
      if (bee.y < 0 || bee.y > 290) bee.angle = -bee.angle;

      // Draw bee (oval body)
      ctx.beginPath();
      ctx.fillStyle = 'black';
      ctx.ellipse(bee.x, bee.y, 4,2, 0, 0, Math.PI * 2);
      ctx.fill();

      // Draw stripes
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(bee.x - 3, bee.y - 3);
      ctx.lineTo(bee.x - 3, bee.y + 3);
      ctx.moveTo(bee.x, bee.y - 3);
      ctx.lineTo(bee.x, bee.y + 3);
      ctx.moveTo(bee.x + 3, bee.y - 3);
      ctx.lineTo(bee.x + 3, bee.y + 3);
      ctx.stroke();

      // Draw wings
      ctx.beginPath();
      ctx.fillStyle = 'rgba(141, 255, 154, 1)';
      ctx.ellipse(bee.x - 2, bee.y - 6, 3, 5, 0, 0, Math.PI * 2);
      ctx.ellipse(bee.x + 2, bee.y - 6, 3, 5, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
