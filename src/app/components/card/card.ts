import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import type { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'card',
  standalone: true,
  templateUrl: './card.html',
  imports: [FaIconComponent],
  host: { class: 'block' },
})
export class Card {
  @Input() icon: any;
  @Input() iconSize: SizeProp = 'xl';
  @Input() iconClass: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}