import { TestBed } from '@angular/core/testing';

import { AddToCardService } from './add-to-card.service';

describe('AddToCardService', () => {
  let service: AddToCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
