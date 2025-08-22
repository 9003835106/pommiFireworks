import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerpotsComponent } from './flowerpots.component';

describe('FlowerpotsComponent', () => {
  let component: FlowerpotsComponent;
  let fixture: ComponentFixture<FlowerpotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerpotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
