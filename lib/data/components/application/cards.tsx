import { IconCards } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const cards: ComponentType = {
  slug: 'cards',
  name: 'Cards',
  icon: <IconCards stroke={ 1.5} />,
description: 'Versatile card components for displaying content',
  variants: [
    {
      id: 'card-simple',
      name: 'Simple Card',
      code: `<div class="max-w-sm p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800">
  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Card Title</h3>
  <p class="text-gray-600 dark:text-gray-300">This is a simple card component with a clean design.</p>
</div>`,
    },
    {
      id: 'card-image',
      name: 'Image Card',
      code: `<div class="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800">
  <div class="h-48 bg-gradient-to-br from-lime-500 to-lime-600"></div>
  <div class="p-6">
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Image Card</h3>
    <p class="text-gray-600 dark:text-gray-300">A card with an image header section.</p>
  </div>
</div>`,
    },
    {
      id: 'card-glass',
      name: 'Glass Card',
      code: `<div class="max-w-sm p-6 backdrop-blur-lg bg-gray-900/5 dark:bg-white/10 rounded-xl border border-gray-900/10 dark:border-white/20 shadow-xl">
  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Glass Card</h3>
  <p class="text-gray-700 dark:text-gray-200">A beautiful glassmorphism card design.</p>
</div>`,
    },
    {
      id: 'card-hover',
      name: 'Hover Card',
      code: `<div class="max-w-sm p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 dark:bg-gray-800 cursor-pointer group">
  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">Hover Card</h3>
  <p class="text-gray-600 dark:text-gray-300">Hover me for a nice effect!</p>
</div>`,
    },
  ],
};
