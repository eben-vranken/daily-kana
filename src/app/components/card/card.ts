import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import type { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Params, RouterLink } from '@angular/router';

@Component({
  selector: 'card',
  standalone: true,
  templateUrl: './card.html',
  imports: [FaIconComponent, RouterLink],
  host: { class: 'block h-full' },
})
export class Card {
  @Input() icon: any;
  @Input() iconSize: SizeProp = 'xl';
  @Input() iconClass: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() routerLink: string | unknown[] | null = null;
  @Input() queryParams: Params | null = null;
}