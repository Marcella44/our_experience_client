import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  login() {
		this.authService.login(this.email, this.password).subscribe({
			next: (res: any) => {
				console.log('Logged in with token:', res.token);
				this.authService.setToken(res.token);
				this.router.navigate(['/diagnosis-list']);
			},
			error: (error: any) => {
				console.error('Login error', error);
			},
		});
	}
}
