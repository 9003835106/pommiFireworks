import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChakkarEffectComponent } from './chakkar-effect.component';

describe('ChakkarEffectComponent', () => {
  let component: ChakkarEffectComponent;
  let fixture: ComponentFixture<ChakkarEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChakkarEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChakkarEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
