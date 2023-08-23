import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderPopupComponent } from './add-order-popup.component';

describe('AddOrderPopupComponent', () => {
  let component: AddOrderPopupComponent;
  let fixture: ComponentFixture<AddOrderPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrderPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
