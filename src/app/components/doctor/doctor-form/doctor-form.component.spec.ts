import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';

import { DoctorFormComponent } from './doctor-form.component';

describe('DoctorFormComponent', () => {
  let component: DoctorFormComponent;
  let fixture: ComponentFixture<DoctorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorFormComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DoctorServiceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', () => {
    const service: DoctorServiceService = TestBed.get(DoctorServiceService);
    expect(service).toBeTruthy();
  });

  it('should have save function', () => {
    const service: DoctorServiceService = TestBed.get(DoctorServiceService);
    expect(service.save).toBeTruthy();
  });
});
