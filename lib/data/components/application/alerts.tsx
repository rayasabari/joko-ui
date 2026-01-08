import { IconBell } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const alerts: ComponentType = {
  slug: 'alerts',
  name: 'Alerts',
  icon: <IconBell stroke={ 1.5} />,
description: 'Alert and notification components for user feedback',
  variants: [
    {
      id: 'alert-info',
      name: 'Info Alert',
      code: `<div class="p-4 rounded-lg bg-blue-50 border border-blue-200 dark:bg-blue-900/30 dark:border-blue-800">
  <div class="flex items-center gap-3">
    <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <p class="text-blue-800 dark:text-blue-200 font-medium">This is an informational alert message.</p>
  </div>
</div>`,
    },
    {
      id: 'alert-success',
      name: 'Success Alert',
      code: `<div class="p-4 rounded-lg bg-green-50 border border-green-200 dark:bg-green-900/30 dark:border-green-800">
  <div class="flex items-center gap-3">
    <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
    </svg>
    <p class="text-green-800 dark:text-green-200 font-medium">Success! Your changes have been saved.</p>
  </div>
</div>`,
    },
    {
      id: 'alert-warning',
      name: 'Warning Alert',
      code: `<div class="p-4 rounded-lg bg-yellow-50 border border-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-800">
  <div class="flex items-center gap-3">
    <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
    </svg>
    <p class="text-yellow-800 dark:text-yellow-200 font-medium">Warning! Please review before proceeding.</p>
  </div>
</div>`,
    },
    {
      id: 'alert-error',
      name: 'Error Alert',
      code: `<div class="p-4 rounded-lg bg-red-50 border border-red-200 dark:bg-red-900/30 dark:border-red-800">
  <div class="flex items-center gap-3">
    <svg class="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
    <p class="text-red-800 dark:text-red-200 font-medium">Error! Something went wrong.</p>
  </div>
</div>`,
    },
  ],
};
