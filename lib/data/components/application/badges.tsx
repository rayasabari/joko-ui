import { IconTag } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const badges: ComponentType = {
  slug: 'badges',
  name: 'Badges',
  icon: <IconTag stroke={ 1.5} />,
description: 'Badge and tag components for labels and status',
  variants: [
    {
      id: 'badge-solid',
      name: 'Solid Badges',
      code: `<div class="flex flex-wrap gap-2">
  <span class="px-3 py-1 text-sm font-medium rounded-full bg-indigo-600 text-white">Primary</span>
  <span class="px-3 py-1 text-sm font-medium rounded-full bg-green-600 text-white">Success</span>
  <span class="px-3 py-1 text-sm font-medium rounded-full bg-yellow-500 text-white">Warning</span>
  <span class="px-3 py-1 text-sm font-medium rounded-full bg-red-600 text-white">Error</span>
</div>`,
    },
    {
      id: 'badge-outline',
      name: 'Outline Badges',
      code: `<div class="flex flex-wrap gap-2">
  <span class="px-3 py-1 text-sm font-medium rounded-full border-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400">Primary</span>
  <span class="px-3 py-1 text-sm font-medium rounded-full border-2 border-green-600 text-green-600 dark:border-green-400 dark:text-green-400">Success</span>
  <span class="px-3 py-1 text-sm font-medium rounded-full border-2 border-yellow-500 text-yellow-600 dark:border-yellow-400 dark:text-yellow-400">Warning</span>
  <span class="px-3 py-1 text-sm font-medium rounded-full border-2 border-red-600 text-red-600 dark:border-red-400 dark:text-red-400">Error</span>
</div>`,
    },
    {
      id: 'badge-soft',
      name: 'Soft Badges',
      code: `<div class="flex flex-wrap gap-2">
  <span class="px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">Primary</span>
  <span class="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">Success</span>
  <span class="px-3 py-1 text-sm font-medium rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">Warning</span>
  <span class="px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">Error</span>
</div>`,
    },
    {
      id: 'badge-dot',
      name: 'Dot Badges',
      code: `<div class="flex flex-wrap gap-3">
  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
    <span class="w-2 h-2 rounded-full bg-green-500"></span>
    Online
  </span>
  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
    <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
    Away
  </span>
  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
    <span class="w-2 h-2 rounded-full bg-red-500"></span>
    Offline
  </span>
</div>`,
    },
  ],
};
