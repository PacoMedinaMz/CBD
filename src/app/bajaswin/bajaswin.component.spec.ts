import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaswinComponent } from './bajaswin.component';

describe('BajaswinComponent', () => {
  let component: BajaswinComponent;
  let fixture: ComponentFixture<BajaswinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaswinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaswinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
