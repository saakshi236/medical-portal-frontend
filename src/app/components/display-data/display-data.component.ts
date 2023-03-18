import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/class/doctor';
import { Patient } from 'src/app/class/patient';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';
import { PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  doctors: Doctor[];
  patients: Patient[];
  constructor(private patientService: PatientServiceService, private doctorService: DoctorServiceService) { }

  ngOnInit(): void {

    this.doctorService.findAll().subscribe(data => {
      this.doctors = data;
    });

    this.patientService.findAll().subscribe(data => {
      this.patients = data;
    });
  }
}
