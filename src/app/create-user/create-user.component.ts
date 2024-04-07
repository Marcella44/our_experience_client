import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

    user = {
      email: '',
      password: '',
      password_confirmation: '',
    };

    constructor(private authService: AuthenticationService, private router: Router) {}

    onSubmit() {
      if (this.user.password === this.user.password_confirmation) {
        this.authService.createUser(this.user).subscribe({
          next: (res: any) => {
            console.log('User created', res);
            this.router.navigate(['/login']);
          },
          error: (error: any) => {
            console.error('Sign up failed', error);

          },
        });
      } else {
        console.error('Passwords do not match');
      }
    }
  }

