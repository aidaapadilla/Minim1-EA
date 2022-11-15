import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaMinimComponent } from './llista-minim.component';

describe('LlistaMinimComponent', () => {
  let component: LlistaMinimComponent;
  let fixture: ComponentFixture<LlistaMinimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaMinimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaMinimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
