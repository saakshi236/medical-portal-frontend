import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { DoctorFormComponent } from './components/doctor/doctor-form/doctor-form.component';
import { DoctorListComponent } from './components/doctor/doctor-list/doctor-list.component';
import { UpdateDoctorDetailsComponent } from './components/doctor/update-doctor-details/update-doctor-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PatientDisplayComponent } from './components/patient/patient-display/patient-display.component';
import { PatientSearchComponent } from './components/patient/patient-search/patient-search.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'list-doctors', component: DoctorListComponent },
  { path: 'add-doctor', component: DoctorFormComponent },
  { path: 'update-doctor/:id', component: UpdateDoctorDetailsComponent },
  { path: 'patient-search', component: PatientSearchComponent },
  { path: 'add-patient', component: PatientDisplayComponent },
  { path: 'data', component: DisplayDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
