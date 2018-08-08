import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { AppComponent } from './app.component';
import { CarouselamosComponent } from './carousel-amos/carouselamos/carouselamos.component';
import { NguCarouselComponent } from './ngu-carousel/ngu-carousel.component';
import { NguCarouselModule } from '@ngu/carousel';
import { BodCarouselComponent } from './bod-carousel/bod-carousel.component';
import { MatButtonModule } from '../../node_modules/@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    CarouselamosComponent,
    NguCarouselComponent,
    BodCarouselComponent,
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    NguCarouselModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
