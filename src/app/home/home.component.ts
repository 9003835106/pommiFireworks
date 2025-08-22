import { Component,AfterViewInit,ViewChild,ElementRef,OnDestroy } from '@angular/core';
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { CommonModule} from '@angular/common';

import { ChakkarComponent } from "../chakkar/chakkar.component";
import { ChakkarEffectComponent } from "../chakkar-effect/chakkar-effect.component";
import { Color2Component } from "../color2/color2.component";
import { Color3Component } from "../color3/color3.component";
import { Color4Component } from "../color4/color4.component";




@Component({
  selector: 'app-home',
  imports: [CommonModule, ChakkarComponent, ChakkarEffectComponent, Color2Component, Color3Component, Color4Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
   cards = [
      {
        title: 'POMMI  WALA',
        text: '100 wala , 200 wala , 500 wala, 1000 wala , 5000 wala',
        image: 'assets/3.jpeg'  },// or use a full URL

    {
      title: 'POMMI CHAKKAR',
      text: 'Small Chakkar, Big Chakkar , Deluxe Chakkar',
      image: 'assets/5.jpeg'  // or use a full

     },
     {
      title: 'POMMI  ROCKET',
      text: 'Baby Rocket, Rocket Bomb , Deluxe Rocket',
      image: 'assets/10.jpeg'   // or use a full

     },
     {
      title: 'POMMI  POTS',
      text: 'Small Pots , Big Pots , Colour Pots',
      image: 'assets/6.jpeg'   // or use a full
     },
     {
      title: 'POMMI  BOMB',
      text: 'Atom Bomb , Hydrogen Bomb',
      image: 'assets/4.jpeg'   // or use a full
     },
     {
      title: 'POMMI  TWINKLE',
      text: 'Small Twinkle , Big Twinkle ',
      image: 'assets/8.jpeg'   // or use a full
     }
   ]
}
