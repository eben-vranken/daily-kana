import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.html',
  imports: [ReactiveFormsModule],
})
export class Signup {
  fb = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string | null = null;

  onSubmit(): void {
    const rawForm = this.form.getRawValue();
    this.authService
      .signup(rawForm.email, rawForm.username, rawForm.password)
      .subscribe((result) => {
        if (result.error) {
          this.errorMessage = result.error.message;
        } else {
          this.router.navigateByUrl('/');
        }
      });
  }
}
