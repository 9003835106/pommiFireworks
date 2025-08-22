import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Color4Component } from './color4.component';

describe('Color4Component', () => {
  let component: Color4Component;
  let fixture: ComponentFixture<Color4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Color4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Color4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
