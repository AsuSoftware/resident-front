import { TestBed } from '@angular/core/testing';

import { CreateAssociationService } from './create-association.service';

describe('CreateAssociationService', () => {
  let service: CreateAssociationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAssociationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
