import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-price-card',
  standalone: true,
  templateUrl: './price-card.html',
  imports: [CommonModule, RouterLink, FaIconComponent],
  host: { class: 'block' },
})
export class PriceCardComponent {
  @Input() title!: string;
  @Input() subheading!: string;
  @Input() price!: string;
  @Input() features!: string[];
  @Input() ctaText: string = 'Subscribe Now';
  @Input() ctaLink: string = '/signup';
  @Input() highlight: boolean = false;
  faCheck = faCheckCircle;
}
