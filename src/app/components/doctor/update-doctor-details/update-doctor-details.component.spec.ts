import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';

import { UpdateDoctorDetailsComponent } from './update-doctor-details.component';

describe('UpdateDoctorDetailsComponent', () => {
  let component: UpdateDoctorDetailsComponent;
  let fixture: ComponentFixture<UpdateDoctorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDoctorDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DoctorServiceService, {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get(): string {
                return '123';
              },
            },
          },
        },
      },]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDoctorDetailsComponent);
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

  it('should have updateDoctor function', () => {
    const service: DoctorServiceService = TestBed.get(DoctorServiceService);
    expect(service.updateDoctor).toBeTruthy();
  });
});
