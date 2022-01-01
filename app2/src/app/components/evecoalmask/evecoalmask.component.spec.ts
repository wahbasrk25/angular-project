import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvecoalmaskComponent } from './evecoalmask.component';

describe('EvecoalmaskComponent', () => {
  let component: EvecoalmaskComponent;
  let fixture: ComponentFixture<EvecoalmaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvecoalmaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvecoalmaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
