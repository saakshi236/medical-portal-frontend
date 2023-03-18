import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DoctorListComponent } from './doctor-list.component';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('DoctorListComponent', () => {
  let component: DoctorListComponent;
  let fixture: ComponentFixture<DoctorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DoctorServiceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorListComponent);
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

  it('should have findAll function', () => {
    const service: DoctorServiceService = TestBed.get(DoctorServiceService);
    expect(service.findAll).toBeTruthy();
  });

  it('should have deleteDoctor function', () => {
    const service: DoctorServiceService = TestBed.get(DoctorServiceService);
    expect(service.deleteDoctor).toBeTruthy();
  });
});
