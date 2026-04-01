import { MenuItem, Review } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Atlantic Lobster Risotto',
    description: 'Butter-poached Nova Scotia lobster, saffron-infused arborio rice, and shaved Grana Padano.',
    price: 42.00,
    category: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '2',
    name: 'Heritage Bison Tartare',
    description: 'Alberta bison, quail egg yolk, caper berries, and toasted artisanal sourdough.',
    price: 24.00,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3',
    name: 'Okanagan Peach Galette',
    description: 'Flaky pastry filled with sun-ripened BC peaches, served with lavender honey gelato.',
    price: 16.00,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '4',
    name: 'Pacific Halibut',
    description: 'Pan-seared wild-caught halibut, pea purée, mint oil, and roasted fingerling potatoes.',
    price: 38.00,
    category: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '5',
    name: 'Quebec Duck Confit',
    description: 'Slow-cooked duck leg, cherry gastrique, and parsnip silk.',
    price: 36.00,
    category: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '6',
    name: 'Northern Lights Spritz',
    description: 'Local gin, elderflower liqueur, sparkling wine, and a hint of spruce tip syrup.',
    price: 18.00,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '7',
    name: 'Wild Mushroom Soup',
    description: 'Foraged chanterelles, truffle cream, and crispy leeks.',
    price: 18.00,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '8',
    name: 'Maple Glazed Salmon',
    description: 'Wild BC salmon, dark maple glaze, asparagus, and wild rice pilaf.',
    price: 34.00,
    category: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '9',
    name: 'Saskatoon Berry Tart',
    description: 'Sweet pastry, wild Saskatoon berries, and vanilla bean chantilly.',
    price: 14.00,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '10',
    name: 'Icewine Poached Pears',
    description: 'Niagara icewine, cinnamon, star anise, and mascarpone cream.',
    price: 15.00,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '11',
    name: 'Canadian Old Fashioned',
    description: 'Rye whiskey, maple syrup, walnut bitters, and a cedar-smoked orange peel.',
    price: 20.00,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1200'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Alexandra Sterling',
    rating: 5,
    comment: 'mswills demo is a masterclass in Canadian fine dining. The Lobster Risotto was the highlight of our evening.',
    date: 'March 2024',
    avatar: 'https://i.pravatar.cc/150?u=alexandra'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    rating: 5,
    comment: 'Impeccable service and flavors that truly represent our land. A must-visit for anyone in Toronto.',
    date: 'February 2024',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    id: '3',
    name: 'Elena Rossi',
    rating: 5,
    comment: 'The attention to detail is remarkable. From the plating to the wine pairings, everything was perfect.',
    date: 'January 2024',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];
