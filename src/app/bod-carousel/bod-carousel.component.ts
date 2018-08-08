import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bod-carousel',
  templateUrl: './bod-carousel.component.html',
  styleUrls: ['./bod-carousel.component.scss']
})
export class BodCarouselComponent implements OnInit {

  @Input() itemArray: Array<any>;
  displayedItems: Array<any>;

  constructor() { }

  ngOnInit() {
    this.displayedItems = this.itemArray.slice(0, 5);
  }

}
