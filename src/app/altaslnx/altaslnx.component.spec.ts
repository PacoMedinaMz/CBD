import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaslnxComponent } from './altaslnx.component';

describe('AltaslnxComponent', () => {
  let component: AltaslnxComponent;
  let fixture: ComponentFixture<AltaslnxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaslnxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaslnxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
