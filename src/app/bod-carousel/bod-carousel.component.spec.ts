import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodCarouselComponent } from './bod-carousel.component';

describe('BodCarouselComponent', () => {
  let component: BodCarouselComponent;
  let fixture: ComponentFixture<BodCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
