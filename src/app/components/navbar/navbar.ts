import { Component, inject, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  imports: [RouterLink, FontAwesomeModule],
})
export class Navbar {
  @Input() authService: any;

  faMoneyBill = faMoneyBill;

  router = inject(Router);

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
