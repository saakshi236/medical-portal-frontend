import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/class/doctor';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';
import { PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  p: number = 1;
  doctors: Doctor[];
  cacheDoc: Doctor[];
  doctorDropdownValue: String;
  doctorObj: Doctor = new Doctor();
  count: Number = new Number();
  constructor(private doctorService: DoctorServiceService,
    private router: Router, private route: ActivatedRoute, private patientService: PatientServiceService) {
  }

  ngOnInit() {
    this.getDoctorsList();
  }

  private getDoctorsList() {
    this.doctorService.findAll().subscribe(data => {
      this.doctors = data;
      this.cacheDoc = data;
    });
  }

  updateFormValue(id: number) {
    this.router.navigate(['update-doctor', id]);
  }

  deleteDoctor(id: number) {
    this.doctorService.deleteDoctor(id).subscribe(data => {
      console.log(data);
      this.getDoctorsList();
    })
    alert('Record Deleted');
    this.router.navigate(['home']);
  }

  filterDoctors(filterVal: any) {
    this.doctorService.getDoctorDetailsByName(filterVal).subscribe(data => {
      this.doctorObj = data;
    }, error => console.log(error));

    this.patientService.getPatientCount(filterVal).subscribe(number => {
      this.count = number;
    }, error => console.log(error));
  }
}
