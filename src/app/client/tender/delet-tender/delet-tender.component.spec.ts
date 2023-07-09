import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletTenderComponent } from './delet-tender.component';

describe('DeletTenderComponent', () => {
  let component: DeletTenderComponent;
  let fixture: ComponentFixture<DeletTenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletTenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
