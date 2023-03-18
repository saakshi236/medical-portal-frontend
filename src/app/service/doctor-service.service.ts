import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../class/doctor';

@Injectable({
  providedIn: 'root'
})

export class DoctorServiceService {
  private doctorUrl: string;
  constructor(private http: HttpClient) {
    this.doctorUrl = 'http://localhost:8090/doctors';
  }

  public findAll(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorUrl);
  }

  public save(doctor: Doctor) {
    return this.http.post<Doctor>(this.doctorUrl, doctor);
  }

  public getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.doctorUrl}/${id}`);
  }

  public updateDoctor(id: number, doctor: Doctor) {
    return this.http.put(`${this.doctorUrl}/${id}`, doctor);
  }

  public deleteDoctor(id: number): Observable<Object> {
    return this.http.delete(`${this.doctorUrl}/${id}`);
  }

  public getDoctorDetailsByName(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.doctorUrl}/details/${id}`);
  }
}
