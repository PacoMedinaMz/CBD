import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaswinComponent } from './consultaswin.component';

describe('ConsultaswinComponent', () => {
  let component: ConsultaswinComponent;
  let fixture: ComponentFixture<ConsultaswinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaswinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaswinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
