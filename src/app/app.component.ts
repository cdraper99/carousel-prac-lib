import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
