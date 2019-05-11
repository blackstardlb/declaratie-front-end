import { TestBed, async, inject } from '@angular/core/testing';

import { IndiaGuyGuard } from './india-guy.guard';

describe('IndiaGuyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndiaGuyGuard]
    });
  });

  it('should ...', inject([IndiaGuyGuard], (guard: IndiaGuyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
