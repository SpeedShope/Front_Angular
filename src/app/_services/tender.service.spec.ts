import { TestBed } from '@angular/core/testing';

import { tender } from './tender.service';

describe('tender', () => {
  let service: tender;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(tender);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
