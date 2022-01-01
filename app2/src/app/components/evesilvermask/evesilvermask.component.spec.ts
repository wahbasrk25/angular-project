import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvesilvermaskComponent } from './evesilvermask.component';

describe('EvesilvermaskComponent', () => {
  let component: EvesilvermaskComponent;
  let fixture: ComponentFixture<EvesilvermaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvesilvermaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvesilvermaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
