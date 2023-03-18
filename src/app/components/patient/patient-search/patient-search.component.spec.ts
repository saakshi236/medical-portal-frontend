import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PatientServiceService } from 'src/app/service/patient-service.service';

import { PatientSearchComponent } from './patient-search.component';

describe('PatientSearchComponent', () => {
  let component: PatientSearchComponent;
  let fixture: ComponentFixture<PatientSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientSearchComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [PatientServiceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', () => {
    const service: PatientServiceService = TestBed.get(PatientServiceService);
    expect(service).toBeTruthy();
  });

  it('should have getPatientById function', () => {
    const service: PatientServiceService = TestBed.get(PatientServiceService);
    expect(service.getPatientById).toBeTruthy();
  });

  it('should have getDoctorsName function', () => {
    const service: PatientServiceService = TestBed.get(PatientServiceService);
    expect(service.getDoctorsName).toBeTruthy();
  });
});
