import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/class/doctor';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';

@Component({
  selector: 'app-update-doctor-details',
  templateUrl: './update-doctor-details.component.html',
  styleUrls: ['./update-doctor-details.component.css']
})
export class UpdateDoctorDetailsComponent implements OnInit {
  newString: String;
  id: number;
  doctorUpdate: Doctor = new Doctor();
  constructor(private doctorService: DoctorServiceService,
    private route: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.doctorService.getDoctorById(this.id).subscribe(data => {
      this.doctorUpdate = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.newString = this.selectedOptions().toString();
    this.doctorUpdate.specialisation = this.newString;
    this.doctorService.updateDoctor(this.id, this.doctorUpdate).subscribe(data => {
      this.goToEmployeeList();
    }, error => console.log(error));
  }

  goToEmployeeList() {
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
