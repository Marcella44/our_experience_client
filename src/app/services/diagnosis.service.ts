import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Diagnosis } from '../models/diagnosis';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  constructor(private http: HttpClient) {}

  indexOfDiagnoses(): Observable<Diagnosis[]> {
    return this.http.get<Diagnosis[]>('http://localhost:3000/diagnoses');
  }
}
