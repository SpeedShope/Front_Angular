import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryagentFormComponent } from './deliveryagent-form.component';

describe('DeliveryagentFormComponent', () => {
  let component: DeliveryagentFormComponent;
  let fixture: ComponentFixture<DeliveryagentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryagentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryagentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
