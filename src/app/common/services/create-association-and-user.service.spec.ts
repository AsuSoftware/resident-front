import { TestBed } from '@angular/core/testing';

import { CreateAssociationAndUserService } from './create-association-and-user.service';

describe('CreateAssociationAndUserService', () => {
  let service: CreateAssociationAndUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAssociationAndUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
