import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsdbComponent } from './windowsdb.component';

describe('WindowsdbComponent', () => {
  let component: WindowsdbComponent;
  let fixture: ComponentFixture<WindowsdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowsdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
