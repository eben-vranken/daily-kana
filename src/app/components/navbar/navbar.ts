import { Component, inject, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  imports: [RouterLink],
})
export class Navbar {
  @Input() authService: any;

  router = inject(Router);

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
