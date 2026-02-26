import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../card/card';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faPlane,
  faTrain,
  faCompass,
  faTaxi,
  faBus,
  faUtensils,
  faCoffee,
  faIceCream,
  faLeaf,
  faReceipt,
  faStore,
  faTshirt,
  faPills,
  faGift,
  faExchangeAlt,
  faBed,
  faWrench,
  faWifi,
  faClock,
  faMapMarkerAlt,
  faUserFriends,
  faComments,
  faCamera,
  faHandPaper,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

type Scenario = {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  estimatedTime: string;
  icon: IconDefinition;
  iconClass: string;
};

type Category = {
  id: string;
  name: string;
  description: string;
  scenarios: Scenario[];
};

@Component({
  selector: 'chat',
  templateUrl: './chat.html',
  imports: [Card],
})
export class Chat {
  route = inject(ActivatedRoute);

  selectedLanguage = this.route.snapshot.queryParamMap.get('language') ?? 'Unknown language';

  categories: Category[] = [
    {
      id: 'travel-transportation',
      name: 'Travel & Transportation',
      description: 'Navigate airports, trains, and getting around the city',
      scenarios: [
        {
          id: 'buying-train-ticket',
          title: 'Buying a Train Ticket',
          description: 'Purchase a ticket at the train station and ask about departure times',
          difficulty: 'beginner',
          estimatedTime: '10-12 minutes',
          icon: faTrain,
          iconClass:
            'text-blue-500 bg-blue-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'asking-directions',
          title: 'Asking for Directions',
          description: 'Stop a local on the street and ask how to get to a nearby landmark',
          difficulty: 'beginner',
          estimatedTime: '8-10 minutes',
          icon: faCompass,
          iconClass:
            'text-green-500 bg-green-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'taxi-ride',
          title: 'Taking a Taxi',
          description:
            'Give the driver your destination and handle basic conversation during the ride',
          difficulty: 'beginner',
          estimatedTime: '10-12 minutes',
          icon: faTaxi,
          iconClass:
            'text-yellow-500 bg-yellow-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'airport-checkin',
          title: 'Airport Check-in',
          description:
            'Check in for your flight and answer questions about luggage and seat preference',
          difficulty: 'beginner',
          estimatedTime: '12-15 minutes',
          icon: faPlane,
          iconClass:
            'text-sky-500 bg-sky-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'bus-confusion',
          title: 'Confused About the Bus Route',
          description: 'Ask the bus driver if this bus goes to your destination',
          difficulty: 'beginner',
          estimatedTime: '8-10 minutes',
          icon: faBus,
          iconClass:
            'text-orange-500 bg-orange-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
      ],
    },
    {
      id: 'food-dining',
      name: 'Food & Dining',
      description: 'Order meals, handle restaurant situations, and discuss food preferences',
      scenarios: [
        {
          id: 'ordering-restaurant',
          title: 'Ordering at a Restaurant',
          description: 'Look at the menu, ask questions, and place your order with the waiter',
          difficulty: 'beginner',
          estimatedTime: '12-15 minutes',
          icon: faUtensils,
          iconClass:
            'text-red-500 bg-red-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'cafe-coffee-order',
          title: 'Ordering Coffee at a Café',
          description: 'Order a drink and maybe a pastry at a local coffee shop',
          difficulty: 'beginner',
          estimatedTime: '8-10 minutes',
          icon: faCoffee,
          iconClass:
            'text-amber-700 bg-amber-700/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'street-food-vendor',
          title: 'Buying from a Street Food Vendor',
          description: 'Point at food, ask what it is, and complete the purchase',
          difficulty: 'beginner',
          estimatedTime: '8-10 minutes',
          icon: faIceCream,
          iconClass:
            'text-pink-500 bg-pink-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'dietary-restrictions',
          title: 'Explaining Dietary Restrictions',
          description:
            'Tell the server about your allergies or dietary preferences before ordering',
          difficulty: 'beginner',
          estimatedTime: '10-12 minutes',
          icon: faLeaf,
          iconClass:
            'text-green-600 bg-green-600/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'splitting-the-bill',
          title: 'Paying and Splitting the Bill',
          description: 'Ask for the check and figure out how to split it with your friend',
          difficulty: 'beginner',
          estimatedTime: '8-10 minutes',
          icon: faReceipt,
          iconClass:
            'text-gray-600 bg-gray-600/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
      ],
    },
    {
      id: 'shopping-services',
      name: 'Shopping & Services',
      description: 'Buy goods, exchange items, and interact with shop staff',
      scenarios: [
        {
          id: 'convenience-store',
          title: 'Shopping at a Convenience Store',
          description: 'Ask where something is located and complete your purchase',
          difficulty: 'beginner',
          estimatedTime: '8-10 minutes',
          icon: faStore,
          iconClass:
            'text-indigo-500 bg-indigo-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'clothing-store-size',
          title: 'Finding Your Size at a Clothing Store',
          description: 'Ask if they have your size and try something on',
          difficulty: 'beginner',
          estimatedTime: '10-12 minutes',
          icon: faTshirt,
          iconClass:
            'text-purple-500 bg-purple-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'pharmacy-medicine',
          title: 'Buying Medicine at a Pharmacy',
          description: 'Describe your symptoms and ask the pharmacist for a recommendation',
          difficulty: 'beginner',
          estimatedTime: '10-12 minutes',
          icon: faPills,
          iconClass:
            'text-teal-500 bg-teal-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'souvenir-shopping',
          title: 'Buying Souvenirs',
          description: 'Browse a souvenir shop and ask about prices and what items represent',
          difficulty: 'beginner',
          estimatedTime: '10-12 minutes',
          icon: faGift,
          iconClass:
            'text-rose-500 bg-rose-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'returning-item',
          title: 'Returning a Defective Item',
          description:
            "Explain that something you bought doesn't work and ask for a refund or exchange",
          difficulty: 'beginner',
          estimatedTime: '12-15 minutes',
          icon: faExchangeAlt,
          iconClass:
            'text-red-600 bg-red-600/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
      ],
    },
    {
      id: 'accommodation',
      name: 'Accommodation',
      description: 'Check in, ask for help, and handle hotel or hostel situations',
      scenarios: [
        {
          id: 'hotel-checkin',
          title: 'Checking into a Hotel',
          description: 'Provide your reservation details and ask about breakfast times',
          difficulty: 'beginner',
          estimatedTime: '10-12 minutes',
          icon: faBed,
          iconClass:
            'text-blue-600 bg-blue-600/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'room-problem',
          title: 'Reporting a Room Problem',
          description: "Call the front desk because the air conditioning isn't working",
          difficulty: 'beginner',
          estimatedTime: '10-12 minutes',
          icon: faWrench,
          iconClass:
            'text-gray-500 bg-gray-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'asking-wifi',
          title: 'Asking About WiFi',
          description: 'Ask the hotel staff for the WiFi password and help connecting',
          difficulty: 'beginner',
          estimatedTime: '8-10 minutes',
          icon: faWifi,
          iconClass:
            'text-cyan-500 bg-cyan-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'late-checkout',
          title: 'Requesting Late Checkout',
          description: 'Ask if you can check out a few hours later than the standard time',
          difficulty: 'beginner',
          estimatedTime: '8-10 minutes',
          icon: faClock,
          iconClass:
            'text-amber-500 bg-amber-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'hotel-recommendations',
          title: 'Asking for Local Recommendations',
          description: 'Ask the concierge for restaurant or attraction recommendations nearby',
          difficulty: 'beginner',
          estimatedTime: '10-12 minutes',
          icon: faMapMarkerAlt,
          iconClass:
            'text-red-500 bg-red-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
      ],
    },
    {
      id: 'social-basics',
      name: 'Social Basics',
      description: 'Make small talk, introduce yourself, and handle casual interactions',
      scenarios: [
        {
          id: 'introducing-yourself',
          title: 'Introducing Yourself',
          description: 'Meet someone new at a hostel and exchange basic information',
          difficulty: 'beginner',
          estimatedTime: '10-12 minutes',
          icon: faUserFriends,
          iconClass:
            'text-violet-500 bg-violet-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'making-small-talk',
          title: 'Small Talk with a Local',
          description: 'Chat with an elderly shopkeeper about the weather and your visit',
          difficulty: 'beginner',
          estimatedTime: '10-12 minutes',
          icon: faComments,
          iconClass:
            'text-blue-400 bg-blue-400/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'asking-photo',
          title: 'Asking Someone to Take Your Photo',
          description: 'Politely ask a stranger to take a picture of you at a tourist spot',
          difficulty: 'beginner',
          estimatedTime: '8-10 minutes',
          icon: faCamera,
          iconClass:
            'text-slate-600 bg-slate-600/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'apologizing-mistake',
          title: 'Apologizing for a Mistake',
          description: 'You accidentally bumped into someone - apologize appropriately',
          difficulty: 'beginner',
          estimatedTime: '8-10 minutes',
          icon: faHandPaper,
          iconClass:
            'text-orange-400 bg-orange-400/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
        {
          id: 'complimenting-someone',
          title: 'Giving a Compliment',
          description:
            'Compliment someone on their clothing or accessories in a culturally appropriate way',
          difficulty: 'beginner',
          estimatedTime: '8-10 minutes',
          icon: faHeart,
          iconClass:
            'text-pink-500 bg-pink-500/25 p-1 rounded aspect-square w-min flex items-center justify-center',
        },
      ],
    },
  ];
}
