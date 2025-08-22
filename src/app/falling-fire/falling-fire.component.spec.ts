import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallingFireComponent } from './falling-fire.component';

describe('FallingFireComponent', () => {
  let component: FallingFireComponent;
  let fixture: ComponentFixture<FallingFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FallingFireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FallingFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
