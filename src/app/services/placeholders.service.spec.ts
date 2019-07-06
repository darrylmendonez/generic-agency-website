import { TestBed } from '@angular/core/testing';

import { PlaceholdersService } from './placeholders.service';

describe('PlaceholdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceholdersService = TestBed.get(PlaceholdersService);
    expect(service).toBeTruthy();
  });
});
