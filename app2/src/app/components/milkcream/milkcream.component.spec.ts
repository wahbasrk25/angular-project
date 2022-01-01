import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkcreamComponent } from './milkcream.component';

describe('MilkcreamComponent', () => {
  let component: MilkcreamComponent;
  let fixture: ComponentFixture<MilkcreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkcreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkcreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
