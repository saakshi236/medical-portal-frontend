import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PatientServiceService } from 'src/app/service/patient-service.service';

import { PatientDisplayComponent } from './patient-display.component';

describe('PatientDisplayComponent', () => {
  let component: PatientDisplayComponent;
  let fixture: ComponentFixture<PatientDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDisplayComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [PatientServiceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDisplayComponent);
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

  it('should have save function', () => {
    const service: PatientServiceService = TestBed.get(PatientServiceService);
    expect(service.save).toBeTruthy();
  });
});
