import { Component, input, signal, computed } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleUp, faCaretRight, faCaretUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'faq-item',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './faq-item.html'
})
export class FaqItemComponent {
    question = input.required<string>();
    answer = input.required<string>();

    isOpen = signal(false);

    icon: IconDefinition = faAngleUp;
    iconSize: any = 'lg';

    iconClass = computed(() =>
        `text-black-600 transition-transform duration-200 ${this.isOpen() ? 'rotate-180' : 'rotate-0'}`
    );

    toggle(): void {
        this.isOpen.update(val => !val);
    }
}