import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleCanvasComponent } from './triangle-canvas.component';

describe('TriangleCanvasComponent', () => {
  let component: TriangleCanvasComponent;
  let fixture: ComponentFixture<TriangleCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriangleCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriangleCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
