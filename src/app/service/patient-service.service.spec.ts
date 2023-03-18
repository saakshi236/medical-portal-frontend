import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PatientServiceService } from './patient-service.service';

describe('PatientServiceService', () => {
  let service: PatientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule, RouterTestingModule], });
    service = TestBed.inject(PatientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
