import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Color5Component } from './color5.component';

describe('Color5Component', () => {
  let component: Color5Component;
  let fixture: ComponentFixture<Color5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Color5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Color5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
