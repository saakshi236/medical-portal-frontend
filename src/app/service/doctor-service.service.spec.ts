import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DoctorServiceService } from './doctor-service.service';

describe('DoctorServiceService', () => {
  let service: DoctorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule, RouterTestingModule], });
    service = TestBed.inject(DoctorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
