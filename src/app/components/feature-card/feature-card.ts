import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import type { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-feature',
  standalone: true,
  templateUrl: './feature-card.html',
  imports: [FaIconComponent],
  host: { class: 'block' },
})
export class FeatureCardComponent {
  @Input() icon: any;
  @Input() iconSize: SizeProp = 'xl';
  @Input() iconClass: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
