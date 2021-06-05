import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioslnxComponent } from './cambioslnx.component';

describe('CambioslnxComponent', () => {
  let component: CambioslnxComponent;
  let fixture: ComponentFixture<CambioslnxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioslnxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioslnxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
