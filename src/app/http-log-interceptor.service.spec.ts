import { TestBed, inject } from '@angular/core/testing';

import { HttpLogInterceptorService } from './http-log-interceptor.service';

describe('HttpLogInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpLogInterceptorService]
    });
  });

  it('should be created', inject([HttpLogInterceptorService], (service: HttpLogInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
