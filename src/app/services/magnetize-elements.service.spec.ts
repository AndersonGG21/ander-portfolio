import { TestBed } from '@angular/core/testing';

import { MagnetizeElementsService } from './magnetize-elements.service';

describe('MagnetizeElementsService', () => {
  let service: MagnetizeElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagnetizeElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
