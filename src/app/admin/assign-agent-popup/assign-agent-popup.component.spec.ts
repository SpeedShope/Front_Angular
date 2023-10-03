import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAgentPopupComponent } from './assign-agent-popup.component';

describe('AssignAgentPopupComponent', () => {
  let component: AssignAgentPopupComponent;
  let fixture: ComponentFixture<AssignAgentPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignAgentPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignAgentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
