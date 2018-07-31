import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguCarouselComponent } from './ngu-carousel.component';

describe('NguCarouselComponent', () => {
  let component: NguCarouselComponent;
  let fixture: ComponentFixture<NguCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
