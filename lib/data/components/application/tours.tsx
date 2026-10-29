import { IconRoute } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const tours: ComponentType = {
  slug: 'tours',
  name: 'Tours',
  icon: <IconRoute stroke={1.5} />,
  description: 'Guided tour popovers, spotlights and onboarding cards to walk users through your product.',
  variants: [
    {
      id: 'tour-step-popover',
      name: 'Step Popover',
      code: `<div class="flex items-center justify-center py-16">
  <div class="relative">
    <button class="inline-flex items-center gap-2 rounded-xl bg-lime-600 px-5 py-3 text-sm font-semibold text-white shadow-lg ring-4 ring-lime-500/30">
      Create project
    </button>

    <!-- Popover -->
    <div class="absolute top-full left-1/2 mt-4 w-72 -translate-x-1/2">
      <svg class="absolute bottom-full left-1/2 -mb-px -translate-x-1/2" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0L16 8H0L8 0Z" fill="currentColor" class="text-white dark:text-gray-900" />
      </svg>
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-xl dark:border-gray-800 dark:bg-gray-900">
        <p class="text-xs font-semibold uppercase tracking-wider text-lime-600 dark:text-lime-400">Step 1 of 4</p>
        <h3 class="mt-1 text-base font-bold text-gray-900 dark:text-white">Start a new project</h3>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Click here to create your first project and invite your team.</p>
        <div class="mt-4 flex items-center justify-between">
          <button class="text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Skip</button>
          <button class="rounded-lg bg-lime-600 px-4 py-2 text-sm font-semibold text-white hover:bg-lime-700">Next</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="h-40"></div>`,
    },
    {
      id: 'tour-spotlight',
      name: 'Spotlight Overlay',
      code: `<div class="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-950">
  <!-- Fake page content -->
  <div class="flex items-center justify-between">
    <div class="h-4 w-24 rounded bg-gray-200 dark:bg-gray-800"></div>
    <div class="flex gap-3">
      <div class="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800"></div>
      <div class="relative">
        <!-- Highlighted element: the huge shadow dims everything else -->
        <div class="relative z-10 h-8 w-8 rounded-full bg-lime-500 ring-4 ring-white shadow-[0_0_0_9999px_rgba(0,0,0,0.6)] dark:ring-gray-900"></div>
        <!-- Popover -->
        <div class="absolute right-0 top-full z-20 mt-4 w-64 rounded-2xl bg-white p-4 shadow-2xl dark:bg-gray-900">
          <h3 class="text-sm font-bold text-gray-900 dark:text-white">Your profile</h3>
          <p class="mt-1 text-xs text-gray-600 dark:text-gray-400">Manage your account and preferences from here.</p>
          <div class="mt-3 flex items-center justify-between">
            <span class="text-xs text-gray-500 dark:text-gray-400">3 / 5</span>
            <div class="flex gap-2">
              <button class="rounded-lg px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">Back</button>
              <button class="rounded-lg bg-lime-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-lime-700">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-8 grid grid-cols-3 gap-4">
    <div class="h-24 rounded-xl bg-gray-200 dark:bg-gray-800"></div>
    <div class="h-24 rounded-xl bg-gray-200 dark:bg-gray-800"></div>
    <div class="h-24 rounded-xl bg-gray-200 dark:bg-gray-800"></div>
  </div>
  <div class="h-32"></div>
</div>`,
    },
    {
      id: 'tour-welcome',
      name: 'Welcome Modal',
      code: `<div class="flex items-center justify-center p-6">
  <div class="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-xl dark:border-gray-800 dark:bg-gray-900">
    <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 text-lime-600 dark:bg-lime-900/30 dark:text-lime-400">
      <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h2 class="mt-5 text-xl font-bold text-gray-900 dark:text-white">Welcome aboard!</h2>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Take a quick 1-minute tour to learn the essentials and get productive faster.</p>
    <div class="mt-6 flex flex-col gap-2 sm:flex-row-reverse">
      <button class="flex-1 rounded-xl bg-lime-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-lime-700">Start tour</button>
      <button class="flex-1 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">Maybe later</button>
    </div>
  </div>
</div>`,
    },
    {
      id: 'tour-progress-dots',
      name: 'Progress Dots Card',
      code: `<div class="flex items-center justify-center p-6">
  <div class="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-5 shadow-xl dark:border-gray-800 dark:bg-gray-900">
    <div class="flex items-start justify-between">
      <h3 class="text-base font-bold text-gray-900 dark:text-white">Invite your team</h3>
      <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" aria-label="Close tour">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Collaborate better by adding teammates to your workspace.</p>
    <div class="mt-5 flex items-center justify-between">
      <div class="flex items-center gap-1.5">
        <span class="h-2 w-2 rounded-full bg-lime-600"></span>
        <span class="h-2 w-2 rounded-full bg-lime-600"></span>
        <span class="h-2 w-6 rounded-full bg-lime-600"></span>
        <span class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></span>
        <span class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></span>
      </div>
      <div class="flex gap-2">
        <button class="rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">Back</button>
        <button class="rounded-lg bg-lime-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-lime-700">Next</button>
      </div>
    </div>
  </div>
</div>`,
    },
    {
      id: 'tour-checklist',
      name: 'Onboarding Checklist',
      code: `<div class="flex items-center justify-center p-6">
  <div class="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-5 shadow-xl dark:border-gray-800 dark:bg-gray-900">
    <div class="flex items-center justify-between">
      <h3 class="text-base font-bold text-gray-900 dark:text-white">Getting started</h3>
      <span class="text-xs font-semibold text-lime-600 dark:text-lime-400">2 / 4</span>
    </div>
    <div class="mt-3 h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-800">
      <div class="h-1.5 w-1/2 rounded-full bg-lime-500"></div>
    </div>
    <ul class="mt-4 space-y-3">
      <li class="flex items-center gap-3">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-lime-500 text-white">
          <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
        </span>
        <span class="text-sm text-gray-400 line-through">Create your account</span>
      </li>
      <li class="flex items-center gap-3">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-lime-500 text-white">
          <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
        </span>
        <span class="text-sm text-gray-400 line-through">Set up your profile</span>
      </li>
      <li class="flex items-center gap-3">
        <span class="h-5 w-5 rounded-full border-2 border-lime-500"></span>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Invite a teammate</span>
      </li>
      <li class="flex items-center gap-3">
        <span class="h-5 w-5 rounded-full border-2 border-gray-300 dark:border-gray-700"></span>
        <span class="text-sm text-gray-600 dark:text-gray-400">Launch your first project</span>
      </li>
    </ul>
  </div>
</div>`,
    },
  ],
};
