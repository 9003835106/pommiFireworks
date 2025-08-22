import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChakkarComponent } from './chakkar.component';

describe('ChakkarComponent', () => {
  let component: ChakkarComponent;
  let fixture: ComponentFixture<ChakkarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChakkarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChakkarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
