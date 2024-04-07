import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiagnosisListComponent } from './diagnosis-list/diagnosis-list.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DiagnosisListComponent, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'our_experience_client';
}
