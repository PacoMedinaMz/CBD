import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxdbComponent } from './linuxdb.component';

describe('LinuxdbComponent', () => {
  let component: LinuxdbComponent;
  let fixture: ComponentFixture<LinuxdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinuxdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
