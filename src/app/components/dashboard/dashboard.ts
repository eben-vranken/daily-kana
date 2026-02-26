import { Component } from '@angular/core';
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
  languageCards: LanguageCard[] = [
    {
      title: 'Japanese',
      description: 'Practice kana and everyday phrases to build reading confidence quickly.',
      icon: faToriiGate,
      iconClass: 'text-red-500 bg-red-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
    },
    {
      title: 'English',
      description: 'Build clear speaking and writing skills for real daily communication.',
      icon: faBook,
      iconClass: 'text-blue-500 bg-blue-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
    },
    {
      title: 'Spanish',
      description: 'Learn practical vocabulary and phrases for travel and conversations.',
      icon: faLandmark,
      iconClass: 'text-orange-500 bg-orange-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
    },
    {
      title: 'German',
      description: 'Strengthen grammar fundamentals and useful expressions step by step.',
      icon: faLanguage,
      iconClass: 'text-yellow-600 bg-yellow-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
    },
    {
      title: 'Mandarin Chinese',
      description: 'Get familiar with tones, common characters, and beginner sentence patterns.',
      icon: faDragon,
      iconClass: 'text-rose-600 bg-rose-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
    },
    {
      title: 'French',
      description: 'Practice pronunciation and core phrases used in everyday situations.',
      icon: faWineGlass,
      iconClass: 'text-indigo-500 bg-indigo-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
    },
  ];
}
