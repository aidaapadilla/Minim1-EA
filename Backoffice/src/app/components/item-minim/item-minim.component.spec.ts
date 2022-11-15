import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMinimComponent } from './item-minim.component';

describe('ItemMinimComponent', () => {
  let component: ItemMinimComponent;
  let fixture: ComponentFixture<ItemMinimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMinimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMinimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
