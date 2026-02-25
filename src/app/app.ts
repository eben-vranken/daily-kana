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
    this.authService.supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        this.authService.currentUser.set(null);
        return;
      }

      if (session?.user) {
        void this.authService.syncCurrentUser(session.user);
      }
    });
  }
}
