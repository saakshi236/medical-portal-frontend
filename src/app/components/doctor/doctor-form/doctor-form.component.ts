import { Component, Directive, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/class/doctor';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {
  newString: String;
  doctor: Doctor;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorServiceService) {
    this.doctor = new Doctor();
  }
  ngOnInit(): void {

  }

  onSubmit() {
    alert("Entry has been saved!");
    this.newString = this.selectedOptions().toString();
    this.doctor.specialisation = this.newString;
    this.doctorService.save(this.doctor).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/list-doctors']);
  }

  options = [
    { name: 'Surgery', value: 'Surgery', checked: false },
    { name: 'General Medicine', value: 'General Medicine', checked: false },
    { name: 'Neuro', value: 'Neuro', checked: false },
    { name: 'ENT', value: 'ENT', checked: false },
    { name: 'Obstetrics & Gynaecology', value: 'Obstetrics & Gynaecology', checked: false },
    { name: 'Anatomy', value: 'Anatomy', checked: false },
    { name: 'Ophthalmology', value: 'Ophthalmology', checked: false },
    { name: 'Anesthesiology', value: 'Anesthesiology', checked: false },
    { name: 'Orthopedics', value: 'Orthopedics', checked: false }
  ]

  selectedOptions() {
    return this.options
      .filter(opt => opt.checked)
      .map(opt => opt.value)
  }


}
