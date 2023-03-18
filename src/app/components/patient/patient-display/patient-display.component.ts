import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Doctor } from 'src/app/class/doctor';
import { Patient } from 'src/app/class/patient';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';
import { PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-patient-display',
  templateUrl: './patient-display.component.html',
  styleUrls: ['./patient-display.component.css']
})
export class PatientDisplayComponent implements OnInit {
  patient: Patient;
  doctors: Doctor[];
  cacheDoc: Doctor[];
  dateValue: number;
  date: { year: number, month: number };
  constructor(private patientService: PatientServiceService,
    private doctorService: DoctorServiceService, private router: Router, private calendar: NgbCalendar) {
    this.patient = new Patient();
  }

  ngOnInit(): void {
    this.getDoctorsList();
  }

  onSubmit() {
    console.log(this.patient.id + " " + this.patient.name + " " + this.patient.doctor + " " + this.patient.dateOfVisit);
    this.patientService.save(this.patient).subscribe(result => this.gotoUserList());
    console.log(this.patient);
  }

  gotoUserList() {
    alert("Entry has been saved!");
    this.router.navigate(['/patient-search']);
  }

  private getDoctorsList() {
    this.doctorService.findAll().subscribe(data => {
      this.doctors = data;
      this.cacheDoc = data;
    });
  }
}
