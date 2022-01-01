import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvegoldenmaskComponent } from './evegoldenmask.component';

describe('EvegoldenmaskComponent', () => {
  let component: EvegoldenmaskComponent;
  let fixture: ComponentFixture<EvegoldenmaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvegoldenmaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvegoldenmaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
