import { IconPremiumRights } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const pricing: ComponentType = {
  slug: 'pricing',
  name: 'Pricing',
  icon: <IconPremiumRights stroke={ 1.5} />,
description: 'Pricing tables and cards for SaaS products',
  variants: [
    {
      id: 'pricing-simple',
      name: 'Simple Pricing',
      code: `<div class="max-w-sm mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Pro Plan</h3>
  <p class="text-gray-600 dark:text-gray-400 mb-6">For growing businesses</p>
  <div class="mb-6">
    <span class="text-5xl font-bold text-gray-900 dark:text-white">$29</span>
    <span class="text-gray-600 dark:text-gray-400">/month</span>
  </div>
  <ul class="space-y-3 mb-8">
    <li class="flex items-center gap-3 text-gray-600 dark:text-gray-300">
      <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      Unlimited projects
    </li>
    <li class="flex items-center gap-3 text-gray-600 dark:text-gray-300">
      <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      Priority support
    </li>
    <li class="flex items-center gap-3 text-gray-600 dark:text-gray-300">
      <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      Advanced analytics
    </li>
  </ul>
  <button class="w-full py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors">
    Get Started
  </button>
</div>`,
    },
    {
      id: 'pricing-featured',
      name: 'Featured Pricing',
      code: `<div class="max-w-sm mx-auto relative">
  <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-lime-600 to-lime-600 text-white text-sm font-medium rounded-full">
    Most Popular
  </div>
  <div class="p-8 bg-gradient-to-br from-lime-600 to-lime-600 rounded-2xl shadow-2xl">
    <h3 class="text-xl font-semibold text-white mb-2">Enterprise</h3>
    <p class="text-lime-200 mb-6">For large teams</p>
    <div class="mb-6">
      <span class="text-5xl font-bold text-white">$99</span>
      <span class="text-lime-200">/month</span>
    </div>
    <ul class="space-y-3 mb-8">
      <li class="flex items-center gap-3 text-white">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        Everything in Pro
      </li>
      <li class="flex items-center gap-3 text-white">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        Custom integrations
      </li>
      <li class="flex items-center gap-3 text-white">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        Dedicated support
      </li>
    </ul>
    <button class="w-full py-3 bg-white text-lime-600 font-semibold rounded-lg hover:bg-lime-50 transition-colors">
      Contact Sales
    </button>
  </div>
</div>`,
    },
  ],
};
