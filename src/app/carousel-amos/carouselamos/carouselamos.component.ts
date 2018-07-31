import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carouselamos',
  templateUrl: './carouselamos.component.html',
  styleUrls: ['./carouselamos.component.css']
})
export class CarouselamosComponent {

  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/arsenal-players/amn.png' },
      { name: 'assets/arsenal-players/hb.jpg' },
      { name: 'assets/arsenal-players/laca.jpg' },
      { name: 'assets/arsenal-players/ozil.jpg' },
      { name: 'assets/arsenal-players/rambo.jpg' },
      { name: 'assets/arsenal-players/reiss.jpg' }
    ];
  }

  log(item) {
    console.log(item);
  }

}
