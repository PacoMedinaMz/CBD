import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaslnxComponent } from './bajaslnx.component';

describe('BajaslnxComponent', () => {
  let component: BajaslnxComponent;
  let fixture: ComponentFixture<BajaslnxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaslnxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaslnxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
