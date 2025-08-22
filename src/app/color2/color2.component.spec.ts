import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Color2Component } from './color2.component';

describe('Color2Component', () => {
  let component: Color2Component;
  let fixture: ComponentFixture<Color2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Color2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Color2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
