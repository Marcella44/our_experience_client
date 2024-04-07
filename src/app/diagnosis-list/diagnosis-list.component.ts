import { Component } from '@angular/core';
import { Diagnosis } from '../models/diagnosis';
import { DiagnosisService } from '../services/diagnosis.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diagnosis-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagnosis-list.component.html',
  styleUrl: './diagnosis-list.component.scss'
})
export class DiagnosisListComponent {
  diagnoses: Diagnosis[] = [];

  constructor(private diagnosisService: DiagnosisService) {}

  ngOnInit(): void {
    this.diagnosisService
      .indexOfDiagnoses()
      .subscribe((diagnosis) => (this.diagnoses = diagnosis));
  }


}
