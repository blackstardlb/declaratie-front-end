import { TestBed, async, inject } from '@angular/core/testing';

import { UnitManagerGuard } from './unit-manager.guard';

describe('UnitManagerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitManagerGuard]
    });
  });

  it('should ...', inject([UnitManagerGuard], (guard: UnitManagerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
