import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTenderComponent } from './get-tender.component';

describe('GetTenderComponent', () => {
  let component: GetTenderComponent;
  let fixture: ComponentFixture<GetTenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
