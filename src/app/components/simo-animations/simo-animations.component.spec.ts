import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimoAnimationsComponent } from './simo-animations.component';

describe('SimoAnimationsComponent', () => {
  let component: SimoAnimationsComponent;
  let fixture: ComponentFixture<SimoAnimationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimoAnimationsComponent]
    });
    fixture = TestBed.createComponent(SimoAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
