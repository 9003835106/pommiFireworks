import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Color3Component } from './color3.component';

describe('Color3Component', () => {
  let component: Color3Component;
  let fixture: ComponentFixture<Color3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Color3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Color3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
