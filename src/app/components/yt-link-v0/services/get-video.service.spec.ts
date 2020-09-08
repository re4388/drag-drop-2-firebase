import { TestBed } from '@angular/core/testing';

import { GetVideoService } from './get-video.service';

describe('GetVideoService', () => {
  let service: GetVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
