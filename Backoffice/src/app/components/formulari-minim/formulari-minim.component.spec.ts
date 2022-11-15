import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariMinimComponent } from './formulari-minim.component';

describe('FormulariMinimComponent', () => {
  let component: FormulariMinimComponent;
  let fixture: ComponentFixture<FormulariMinimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariMinimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariMinimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
