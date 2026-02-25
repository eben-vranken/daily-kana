import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Footer } from "../../footer/footer";

@Component({
  selector: 'login',
  templateUrl: './login.html',
  imports: [ReactiveFormsModule, RouterLink, Footer],
})
export class Login {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string | null = null;

  onSubmit(): void {
    const rawForm = this.form.getRawValue();
    this.authService.login(rawForm.email, rawForm.password).subscribe((result) => {
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
