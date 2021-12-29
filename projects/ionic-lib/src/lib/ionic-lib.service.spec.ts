import { TestBed } from '@angular/core/testing';

import { IonicLibService } from './ionic-lib.service';

describe('IonicLibService', () => {
  let service: IonicLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
