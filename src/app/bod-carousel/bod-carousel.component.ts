import { Component, OnInit, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-bod-carousel',
  templateUrl: './bod-carousel.component.html',
  styleUrls: ['./bod-carousel.component.scss']
})
export class BodCarouselComponent implements OnInit {

  // items to display
  @Input() itemArray: Array<any>;
  // 5 items to be displayed
  displayedItems: Array<any>;
  // index to display items by
  index: number;

  constructor() { }

  ngOnInit() {
    this.displayedItems = this.itemArray.slice(0, 5);
  }

  updateDisplayedItems(index, array) {

  }

}
