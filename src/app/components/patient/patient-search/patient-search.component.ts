import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from 'src/app/class/patient';
import { PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {
  patientId: number;
  patientObj: Patient = new Patient();
  docName: any;
  constructor(private service: PatientServiceService) { }

  ngOnInit(): void {
  }

  searchPatient() {
    this.service.getPatientById(this.patientId).subscribe(data => {
      this.patientObj = data;
    }, error => console.log(error));

    this.service.getDoctorsName(this.patientId).subscribe(any => {
      this.docName = any;
    }, error => console.log(error));
  }
}
