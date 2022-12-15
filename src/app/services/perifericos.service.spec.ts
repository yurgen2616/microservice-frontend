import { TestBed } from '@angular/core/testing';

import { PerifericosService } from './perifericos.service';

describe('PerifericosService', () => {
  let service: PerifericosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerifericosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
