import { IconForms } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const forms: ComponentType = {
  slug: 'forms',
  name: 'Forms',
  icon: <IconForms stroke={ 1.5} />,
description: 'Form input components with modern styling',
  variants: [
    {
      id: 'input-basic',
      name: 'Basic Input',
      code: `<div class="max-w-sm">
  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
  <input type="email" placeholder="Enter your email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-lime-800 dark:placeholder-gray-400"/>
</div>`,
    },
    {
      id: 'input-icon',
      name: 'Input with Icon',
      code: `<div class="max-w-sm">
  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search</label>
  <div class="relative">
    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>
    <input type="text" placeholder="Search..." class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"/>
  </div>
</div>`,
    },
    {
      id: 'input-floating',
      name: 'Floating Label Input',
      code: `<div class="relative max-w-sm">
  <input type="text" id="floating" placeholder=" " class="peer w-full px-4 py-3 pt-6 rounded-lg border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all dark:bg-gray-800 dark:border-gray-600 dark:text-white"/>
  <label for="floating" class="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-lime-600 dark:peer-focus:text-lime-400 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">Username</label>
</div>`,
    },
    {
      id: 'select-basic',
      name: 'Select Input',
      code: `<div class="max-w-sm">
  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Country</label>
  <select class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all appearance-none bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white cursor-pointer">
    <option>Select a country</option>
    <option>Indonesia</option>
    <option>Malaysia</option>
    <option>Singapore</option>
  </select>
</div>`,
    },
  ],
};
