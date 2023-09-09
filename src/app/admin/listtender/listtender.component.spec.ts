import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtenderComponent } from './listtender.component';

describe('ListtenderComponent', () => {
  let component: ListtenderComponent;
  let fixture: ComponentFixture<ListtenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListtenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
