import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTenderComponent } from './detail-tender.component';

describe('DetailTenderComponent', () => {
  let component: DetailTenderComponent;
  let fixture: ComponentFixture<DetailTenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
