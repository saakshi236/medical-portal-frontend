import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './components/doctor/doctor-list/doctor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorServiceService } from './service/doctor-service.service';
import { DoctorFormComponent } from './components/doctor/doctor-form/doctor-form.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { UpdateDoctorDetailsComponent } from './components/doctor/update-doctor-details/update-doctor-details.component';
import { ActivatedRoute } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { PatientDisplayComponent } from './components/patient/patient-display/patient-display.component';
import { PatientSearchComponent } from './components/patient/patient-search/patient-search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PatientServiceService } from './service/patient-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    DoctorFormComponent,
    UpdateDoctorDetailsComponent,
    PatientDisplayComponent,
    PatientSearchComponent,
    HomepageComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NoopAnimationsModule,
    NgbModule,
    HttpClientModule,
    RouterTestingModule
  ],
  providers: [DoctorServiceService,
    PatientServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
