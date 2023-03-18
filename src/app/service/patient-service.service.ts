import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../class/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private patientUrl: string;
  constructor(private http: HttpClient) {
    this.patientUrl = 'http://localhost:8090/patients';
  }

  public getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.patientUrl}/${id}`);
  }

  public getDoctorsName(id: number) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(`${this.patientUrl}/doctor/${id}`, { headers, responseType: 'text' });
  }

  public save(patient: Patient) {
    return this.http.post<Patient>(this.patientUrl, patient);
  }

  public getPatientCount(id: number) {
    return this.http.get<Number>(`${this.patientUrl}/count/${id}`);
  }

  public findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl);
  }
}
