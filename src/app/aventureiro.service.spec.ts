import { TestBed } from '@angular/core/testing';

import { AventureiroService } from './aventureiro.service';

describe('AventureiroService', () => {
  let service: AventureiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AventureiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
