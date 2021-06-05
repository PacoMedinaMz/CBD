import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioswinComponent } from './cambioswin.component';

describe('CambioswinComponent', () => {
  let component: CambioswinComponent;
  let fixture: ComponentFixture<CambioswinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioswinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioswinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
