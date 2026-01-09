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
    {
      id: `alert-success-with-description`,
      name: 'Success Alert with Description',
      code: `<!-- Basic Success Alert -->
<div class="rounded-lg border border-lime-200 dark:border-lime-800 bg-lime-50 dark:bg-lime-900/30 p-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-lime-600 dark:text-lime-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium text-lime-800 dark:text-lime-300">Success!</h3>
      <div class="mt-2 text-sm text-lime-700 dark:text-lime-400">
        <p>Your changes have been saved successfully.</p>
      </div>
    </div>
  </div>
</div>`,
    },
    {
      id: `alert-info-with-action-description`,
      name: 'Info Alert with Actions and Description',
      code: `<!-- Alert with Actions -->
<div class="rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 p-4">
  <div class="flex items-start justify-between">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-blue-800 dark:text-blue-300">New feature available!</h3>
        <div class="mt-2 text-sm text-blue-700 dark:text-blue-400">
          <p>Try our new dashboard with improved analytics and reporting tools.</p>
        </div>
      </div>
    </div>
    <div class="ml-4 flex space-x-3">
      <button type="button" class="inline-flex text-sm font-medium text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200">
        Learn more
      </button>
      <button type="button" class="inline-flex text-sm font-medium text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200">
        Dismiss
      </button>
    </div>
  </div>
</div>`
    },
    {
      id: `error-alert-with-description`,
      name: 'Error Alert with Description',
      code: `<!-- Error Alert -->
<div class="rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 p-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-red-600 dark:text-red-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium text-red-800 dark:text-red-300">Error</h3>
      <div class="mt-2 text-sm text-red-700 dark:text-red-400">
        <ul role="list" class="list-disc pl-5 space-y-1">
          <li>Your password must be at least 8 characters</li>
          <li>Your password must include a special character</li>
        </ul>
      </div>
    </div>
  </div>
</div>`,
    },
    {
      id: `banner-alert-ads`,
      name: 'Banner Alert with Call to Action',
      code: `<!-- Banner Alert -->
<div class="bg-gradient-to-r from-lime-500 to-lime-600 dark:from-lime-600 dark:to-lime-700">
  <div class="container mx-auto px-4 py-3">
    <div class="flex flex-col sm:flex-row items-center justify-between">
      <div class="flex items-center">
        <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732L9.854 6.6 10.033 2.744A1 1 0 0112 2z" clip-rule="evenodd" />
        </svg>
        <p class="ml-2 text-sm font-medium text-white text-center sm:text-left">
          Limited time offer! Get 50% off on all annual plans.
        </p>
      </div>
      <div class="mt-2 sm:mt-0">
        <button class="bg-white text-lime-600 hover:bg-lime-50 px-4 py-1.5 text-sm font-medium rounded-md transition-colors duration-300">
          Claim offer
        </button>
      </div>
    </div>
  </div>
</div>`,
    }
  ],
};
