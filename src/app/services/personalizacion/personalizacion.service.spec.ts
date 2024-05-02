import { TestBed } from '@angular/core/testing';

import { PersonalizacionService } from './personalizacion.service';

describe('PersonalizacionService', () => {
  let service: PersonalizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
