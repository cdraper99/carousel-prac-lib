import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselamosComponent } from './carouselamos.component';

describe('CarouselamosComponent', () => {
  let component: CarouselamosComponent;
  let fixture: ComponentFixture<CarouselamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
