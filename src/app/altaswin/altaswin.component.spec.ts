import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaswinComponent } from './altaswin.component';

describe('AltaswinComponent', () => {
  let component: AltaswinComponent;
  let fixture: ComponentFixture<AltaswinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaswinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaswinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
