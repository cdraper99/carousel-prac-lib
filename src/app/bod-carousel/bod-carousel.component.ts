import { Component, OnInit, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

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
  index = 0;

  constructor() { }

  ngOnInit() {
    this.displayedItems = this.itemArray.slice(0, 5);
  }

  getDistanceFromEnd(index, array) {
    const remainder = index % array.length;
    const imageIndex = Math.floor(remainder >= 0 ? remainder : remainder + array.length);

    return array[imageIndex];
  }

  updateCarousel(array: Array<any>, index) {
    return array.slice(index, index + 5);
  }

  next() {
    this.index++;
    // this.displayedItems = this.getDistanceFromEnd(this.index, this.itemArray);
    console.log(this.index);
    console.log(this.getDistanceFromEnd(this.index, this.itemArray));
    console.log(this.displayedItems);
    console.log(this.itemArray);
    
    if (this.displayedItems)

    this.displayedItems = this.updateCarousel(this.itemArray, this.index);

  }

  previous() {
    this.index--;
    // this.displayedItems = this.getDistanceFromEnd(this.index, this.itemArray);
    console.log(this.index);
    console.log(this.getDistanceFromEnd(this.index, this.itemArray));
    console.log(this.displayedItems);
    console.log(this.itemArray);
    
    this.displayedItems = this.updateCarousel(this.itemArray, this.index);

  }

}
