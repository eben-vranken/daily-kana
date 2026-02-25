import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, ReactiveFormsModule, AbstractControl, Validators, ValidationErrors } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Footer } from "../../footer/footer";

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirm = control.get('confirmPassword')?.value;
  return password === confirm ? null : { passwordMismatch: true };
}

@Component({
  selector: 'signup',
  templateUrl: './signup.html',
  imports: [ReactiveFormsModule, RouterLink, Footer],
})
export class Signup {
  fb = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    acceptedTerms: [false, Validators.requiredTrue],
  }, {
    validators: passwordMatchValidator
  });
  errorMessage: string | null = null;

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

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