import { Component, inject, Input, signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faMoneyBill, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  imports: [RouterLink, FontAwesomeModule],
})
export class Navbar {
  @Input() authService: any;

  isMenuOpen = signal(false);

  faMoneyBill = faMoneyBill;
  faBars = faBars;
  faXmark = faXmark;

  toggleMenu() {
    this.isMenuOpen.update(val => !val);

    const isOpen = this.isMenuOpen();
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }

  router = inject(Router);

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
