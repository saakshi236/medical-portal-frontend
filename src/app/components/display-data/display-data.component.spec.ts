import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';
import { PatientServiceService } from 'src/app/service/patient-service.service';

import { DisplayDataComponent } from './display-data.component';

describe('DisplayDataComponent', () => {
  let component: DisplayDataComponent;
  let fixture: ComponentFixture<DisplayDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayDataComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DoctorServiceService, PatientServiceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDataComponent);
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

  it('should be created', () => {
    const service: DoctorServiceService = TestBed.get(DoctorServiceService);
    expect(service).toBeTruthy();
  });

  it('should have getPatientById function', () => {
    const service: PatientServiceService = TestBed.get(PatientServiceService);
    expect(service.getPatientById).toBeTruthy();
  });

  it('should have findAll function', () => {
    const service: DoctorServiceService = TestBed.get(DoctorServiceService);
    expect(service.findAll).toBeTruthy();
  });
});
