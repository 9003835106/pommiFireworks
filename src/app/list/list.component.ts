import { Component } from '@angular/core';

import { CircleCanvasComponent } from "../circle-canvas/circle-canvas.component";

@Component({
  selector: 'app-list',
  imports: [CircleCanvasComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}
