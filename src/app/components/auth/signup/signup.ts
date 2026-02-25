import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, ReactiveFormsModule, AbstractControl, Validators, ValidationErrors } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirm = control.get('confirmPassword')?.value;
  return password === confirm ? null : { passwordMismatch: true };
}

@Component({
  selector: 'signup',
  templateUrl: './signup.html',
  imports: [ReactiveFormsModule, RouterLink],
})
export class Signup {
  fb = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
    validators: passwordMatchValidator
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

  onGoogleAuth(): void {
    this.authService.signInWithGoogle().subscribe({
      next: (result) => {
        if (result.error) {
          this.errorMessage = result.error.message;
        }
      },
      error: (err) => {
        this.errorMessage = 'Failed to initialize Google authentication.';
      }
    })
  }
}