import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaslnxComponent } from './consultaslnx.component';

describe('ConsultaslnxComponent', () => {
  let component: ConsultaslnxComponent;
  let fixture: ComponentFixture<ConsultaslnxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaslnxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaslnxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
