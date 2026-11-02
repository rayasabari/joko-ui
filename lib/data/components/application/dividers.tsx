import { IconSeparator } from '@tabler/icons-react';
import { ComponentType } from '../types';

const line = 'w-full border-t border-gray-200 dark:border-gray-700';
const bar = 'flex-1 border-t border-gray-200 dark:border-gray-700';
const label = 'text-sm font-medium text-gray-500 dark:text-gray-400';

export const dividers: ComponentType = {
  slug: 'dividers',
  name: 'Dividers',
  icon: <IconSeparator stroke={1.5} />,
  description: 'Horizontal and vertical separators with labels, icons, buttons and gradients to organise content.',
  variants: [
    {
      id: 'divider-default',
      name: 'Default',
      code: `<div class="w-full max-w-md space-y-4">
  <p class="text-sm text-gray-700 dark:text-gray-300">Content above the divider.</p>
  <hr class="${line}" />
  <p class="text-sm text-gray-700 dark:text-gray-300">Content below the divider.</p>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'divider-with-text',
      name: 'With Text',
      code: `<div class="w-full max-w-md space-y-8">
  <div class="flex items-center gap-4" role="separator">
    <span class="${bar}"></span>
    <span class="${label}">OR</span>
    <span class="${bar}"></span>
  </div>
  <div class="flex items-center gap-4" role="separator">
    <span class="${label}">Continue with</span>
    <span class="${bar}"></span>
  </div>
  <div class="flex items-center gap-4" role="separator">
    <span class="${bar}"></span>
    <span class="${label}">Today</span>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'divider-with-icon',
      name: 'With Icon',
      code: `<div class="w-full max-w-md">
  <div class="flex items-center gap-4" role="separator">
    <span class="${bar}"></span>
    <span class="flex h-9 w-9 items-center justify-center rounded-full bg-lime-100 text-lime-700 dark:bg-lime-300/10 dark:text-lime-300">
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.5a.56.56 0 011.04 0l2.13 5.11 5.52.44c.5.04.7.66.32.99l-4.2 3.6 1.28 5.38a.56.56 0 01-.84.61L12 16.77l-4.73 2.9a.56.56 0 01-.84-.61l1.28-5.38-4.2-3.6a.56.56 0 01.32-.99l5.52-.44 2.13-5.11z" /></svg>
    </span>
    <span class="${bar}"></span>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'divider-with-button',
      name: 'With Button',
      code: `<div class="w-full max-w-md">
  <div class="flex items-center gap-4" role="separator">
    <span class="${bar}"></span>
    <button type="button" class="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3.5 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition hover:border-lime-600 hover:text-lime-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-lime-300 dark:hover:text-lime-300 dark:focus-visible:ring-lime-300">
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14M5 12h14" /></svg>
      Add item
    </button>
    <span class="${bar}"></span>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'divider-styles',
      name: 'Line Styles',
      code: `<div class="w-full max-w-md space-y-6">
  <div>
    <p class="mb-2 text-xs ${label}">Dashed</p>
    <hr class="w-full border-t border-dashed border-gray-300 dark:border-gray-600" />
  </div>
  <div>
    <p class="mb-2 text-xs ${label}">Dotted</p>
    <hr class="w-full border-t-2 border-dotted border-gray-300 dark:border-gray-600" />
  </div>
  <div>
    <p class="mb-2 text-xs ${label}">Thick</p>
    <hr class="w-full border-t-4 border-gray-200 dark:border-gray-700" />
  </div>
  <div>
    <p class="mb-2 text-xs ${label}">Accent</p>
    <hr class="w-full border-t-2 border-lime-600 dark:border-lime-300" />
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'divider-gradient',
      name: 'Gradient',
      code: `<div class="w-full max-w-md space-y-6">
  <div class="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>
  <div class="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-lime-600 to-transparent dark:via-lime-300"></div>
  <div class="h-1 w-full rounded-full bg-gradient-to-r from-lime-600 to-lime-200 dark:from-lime-300 dark:to-lime-300/0"></div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'divider-vertical',
      name: 'Vertical',
      code: `<div class="flex h-6 items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
  <span>Overview</span>
  <span class="h-full w-px bg-gray-200 dark:bg-gray-700" role="separator" aria-orientation="vertical"></span>
  <span>Activity</span>
  <span class="h-full w-px bg-gray-200 dark:bg-gray-700" role="separator" aria-orientation="vertical"></span>
  <span class="text-lime-700 dark:text-lime-300">Settings</span>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'divider-section-title',
      name: 'Section Title',
      code: `<div class="w-full max-w-md">
  <div class="flex items-center">
    <span class="bg-white pr-3 text-base font-semibold text-gray-900 dark:bg-transparent dark:text-lime-300">Recent projects</span>
    <span class="${bar}"></span>
    <a href="#" class="pl-3 text-sm font-medium text-lime-700 hover:underline dark:text-lime-300">View all</a>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
  ],
};
