import { Component, inject } from '@angular/core';
import { Card } from '../card/card';
import {
  faBook,
  faDragon,
  faLandmark,
  faLanguage,
  faToriiGate,
  faWineGlass,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AuthService } from '../../services/auth.service';

type LanguageCard = {
  title: string;
  description: string;
  icon: IconDefinition;
  iconClass: string;
};

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  imports: [Card],
})
export class Dashboard {
  authService = inject(AuthService);

  languageCards: LanguageCard[] = [
    {
      title: 'Japanese',
      description: 'High-context language with nuanced politeness levels.',
      icon: faToriiGate,
      iconClass:
        'text-red-500 bg-red-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
    },
    {
      title: 'English',
      description: 'Global language with wide regional variation.',
      icon: faBook,
      iconClass:
        'text-blue-500 bg-blue-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
    },
    {
      title: 'Spanish',
      description: 'Rich regional styles across Spain and Latin America.',
      icon: faLandmark,
      iconClass:
        'text-orange-500 bg-orange-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
    },
    {
      title: 'German',
      description: 'Structured grammar and precise sentence logic.',
      icon: faLanguage,
      iconClass:
        'text-yellow-600 bg-yellow-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
    },
    {
      title: 'Mandarin',
      description: 'Character-based writing with concise expression.',
      icon: faDragon,
      iconClass:
        'text-rose-600 bg-rose-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
    },
    {
      title: 'French',
      description: 'Formal and informal registers with distinct style.',
      icon: faWineGlass,
      iconClass:
        'text-indigo-500 bg-indigo-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
    },
  ];
}
