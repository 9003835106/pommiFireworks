import { Component } from '@angular/core';

import { FlowerpotsComponent } from "../flowerpots/flowerpots.component";
import { ChakkarEffectComponent } from "../chakkar-effect/chakkar-effect.component";

@Component({
  selector: 'app-about-us',
  imports: [FlowerpotsComponent, ChakkarEffectComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
