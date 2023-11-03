```javascript
import { writable } from 'svelte/store';

// Define the initial blocks
const initialBlocks = [
  {
    id: 1,
    type: 'Hero',
    content: 'Welcome to our website!',
    elements: {
      IFrame: null,
      button: 'Learn More',
      image: 'hero.jpg',
      icon: 'home'
    }
  },
  {
    id: 2,
    type: 'Feature',
    content: 'Our main features',
    elements: {
      IFrame: null,
      button: 'See Features',
      image: 'features.jpg',
      icon: 'star'
    }
  },
  {
    id: 3,
    type: 'CTA',
    content: 'Join us today!',
    elements: {
      IFrame: null,
      button: 'Sign Up',
      image: 'cta.jpg',
      icon: 'user-plus'
    }
  },
  // Add more blocks as needed
];

// Create the blocks store
export const blocks = writable(initialBlocks);
```