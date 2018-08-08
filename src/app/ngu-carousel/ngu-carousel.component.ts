import { Component, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselService, NguCarouselStore } from '../../../node_modules/@ngu/carousel';

@Component({
  selector: 'app-ngu-carousel',
  templateUrl: './ngu-carousel.component.html',
  styleUrls: ['./ngu-carousel.component.css']
})
export class NguCarouselComponent implements OnInit {

  private carouselToken: string;

  public carouselTileItems: Array<any>;
  public carouselTile: NguCarousel;

  constructor(private carousel: NguCarouselService) { }

  ngOnInit() {
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.carouselTile = {
      grid: { xs: 2, sm: 3, md: 5, lg: 5, all: 0 },
      slide: 1,
      speed: 400,
      loop: true,
      interval: 2000,
      animation: 'lazy',
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      easing: 'ease'
    };
  }

  initDataFn(key: NguCarouselStore) {
    this.carouselToken = key.token;
  }

  resetFn() {
    this.carousel.reset(this.carouselToken);
  }

  moveToSlide() {
    this.carousel.moveToSlide(this.carouselToken, 2, false);
  }

  log(tile) {
    console.log(tile);
    this.carousel.moveToSlide(this.carouselToken, tile, true);
  }

  public carouselTileLoad(evt: any) {

    // const len = this.carouselTileItems.length;
    // if (len <= 30) {
    //   for (let i = len; i < len + 10; i++) {
    //     this.carouselTileItems.push(i);
    //   }
    // }

  }

  // carouselLoad will trigger this funnction when your load value reaches
  // it is helps to load the data by parts to increase the performance of the app
  // must use feature to all carousel


}
