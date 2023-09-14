import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsDetailsAdminComponent } from './contracts-details-admin.component';

describe('ContractsDetailsAdminComponent', () => {
  let component: ContractsDetailsAdminComponent;
  let fixture: ComponentFixture<ContractsDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractsDetailsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractsDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
