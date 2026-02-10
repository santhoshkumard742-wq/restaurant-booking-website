
import React from 'react';
import { Utensils, Award, Coffee, Zap } from 'lucide-react';
import { MenuItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Truffle Mushroom Soup',
    description: 'Creamy mushroom blend infused with white truffle oil.',
    price: '$12.00',
    category: 'starters',
    image: 'https://picsum.photos/seed/soup/400/300'
  },
  {
    id: '2',
    name: 'Grilled Salmon Steak',
    description: 'Fresh Atlantic salmon with lemon butter sauce and asparagus.',
    price: '$28.00',
    category: 'main',
    image: 'https://picsum.photos/seed/salmon/400/300'
  },
  {
    id: '3',
    name: 'Molten Lava Cake',
    description: 'Rich dark chocolate cake with a gooey warm center.',
    price: '$10.00',
    category: 'desserts',
    image: 'https://picsum.photos/seed/dessert/400/300'
  },
  {
    id: '4',
    name: 'Saffron Risotto',
    description: 'Arborio rice cooked with premium saffron and parmesan.',
    price: '$22.00',
    category: 'main',
    image: 'https://picsum.photos/seed/risotto/400/300'
  },
  {
    id: '5',
    name: 'Calamari Fritti',
    description: 'Golden fried squid rings served with garlic aioli.',
    price: '$14.00',
    category: 'starters',
    image: 'https://picsum.photos/seed/calamari/400/300'
  },
  {
    id: '6',
    name: 'Pistachio Baklava',
    description: 'Crispy layers of filo pastry filled with crushed pistachios.',
    price: '$9.00',
    category: 'desserts',
    image: 'https://picsum.photos/seed/baklava/400/300'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'James Wilson',
    role: 'Food Enthusiast',
    comment: 'The best fine dining experience I have had in years. The saffron risotto was divine!',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Parker',
    role: 'Travel Blogger',
    comment: 'The ambience is unmatched. Perfect for a romantic dinner date.',
    rating: 5
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Local Resident',
    comment: 'Exceptional service and the ingredients were clearly very fresh. Highly recommended.',
    rating: 4
  }
];

export const FEATURES = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: 'Fresh Ingredients',
    description: 'We source only the finest, organic ingredients from local farms daily.'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Experienced Chefs',
    description: 'Our culinary team brings decades of international fine dining expertise.'
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: 'Cozy Ambience',
    description: 'Elegant interiors designed for your ultimate comfort and relaxation.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Fast Service',
    description: 'Prompt and attentive service without compromising on quality.'
  }
];

export const TIME_SLOTS = [
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
  '09:00 PM', '09:30 PM', '10:00 PM'
];
