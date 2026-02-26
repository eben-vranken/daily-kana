import { Component, inject, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('keepitpaid');

  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.registerAuthStateListener();
    void this.authService.initializeAuth();
  }
}
