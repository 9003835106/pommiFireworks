import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCanvasComponent } from './circle-canvas.component';

describe('CircleCanvasComponent', () => {
  let component: CircleCanvasComponent;
  let fixture: ComponentFixture<CircleCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
