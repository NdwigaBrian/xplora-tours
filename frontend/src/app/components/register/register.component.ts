import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  name: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register({ email: this.email, password: this.password, name: this.name }).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
