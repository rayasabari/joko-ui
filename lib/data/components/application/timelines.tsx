import { IconTimeline } from '@tabler/icons-react';
import { ComponentType } from '../types';

const check = `<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>`;

export const timelines: ComponentType = {
  slug: 'timelines',
  name: 'Timelines',
  icon: <IconTimeline stroke={1.5} />,
  description: 'Vertical, horizontal and activity timelines to show progress, history and events in order.',
  variants: [
    {
      id: 'timeline-simple-vertical',
      name: 'Simple Vertical',
      code: `<ol class="relative ml-3 border-l border-gray-200 dark:border-gray-600">
  <li class="mb-10 ml-6">
    <span class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-lime-500 dark:border-[#1e293b]"></span>
    <time class="text-xs font-medium text-gray-500 dark:text-gray-400">January 2026</time>
    <h3 class="mt-1 text-base font-semibold text-gray-900 dark:text-white">Project kickoff</h3>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Defined scope, goals and assembled the core team.</p>
  </li>
  <li class="mb-10 ml-6">
    <span class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-lime-500 dark:border-[#1e293b]"></span>
    <time class="text-xs font-medium text-gray-500 dark:text-gray-400">March 2026</time>
    <h3 class="mt-1 text-base font-semibold text-gray-900 dark:text-white">Beta release</h3>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Invited the first 500 users to test the platform.</p>
  </li>
  <li class="ml-6">
    <span class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-300 dark:border-[#1e293b] dark:bg-gray-500"></span>
    <time class="text-xs font-medium text-gray-500 dark:text-gray-400">June 2026</time>
    <h3 class="mt-1 text-base font-semibold text-gray-900 dark:text-white">Public launch</h3>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Open to everyone with full documentation.</p>
  </li>
</ol>`,
      contributor: 'rayasabari',
    },
    {
      id: 'timeline-icons',
      name: 'With Icons',
      code: `<ol class="space-y-0">
  <li class="relative flex gap-4 pb-8">
    <span class="absolute left-4 top-8 -ml-px h-full w-0.5 bg-lime-500"></span>
    <span class="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-lime-600 text-white ring-4 ring-white dark:ring-[#1e293b]">${check}</span>
    <div class="pt-1">
      <p class="text-sm font-semibold text-gray-900 dark:text-white">Order placed</p>
      <p class="text-sm text-gray-500 dark:text-gray-400">Mon, Nov 2 · 09:14</p>
    </div>
  </li>
  <li class="relative flex gap-4 pb-8">
    <span class="absolute left-4 top-8 -ml-px h-full w-0.5 bg-lime-500"></span>
    <span class="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-lime-600 text-white ring-4 ring-white dark:ring-[#1e293b]">${check}</span>
    <div class="pt-1">
      <p class="text-sm font-semibold text-gray-900 dark:text-white">Payment confirmed</p>
      <p class="text-sm text-gray-500 dark:text-gray-400">Mon, Nov 2 · 09:16</p>
    </div>
  </li>
  <li class="relative flex gap-4 pb-8">
    <span class="absolute left-4 top-8 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-600"></span>
    <span class="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-lime-600 bg-white text-lime-600 ring-4 ring-white dark:bg-[#1e293b] dark:ring-[#1e293b]">
      <span class="h-2 w-2 rounded-full bg-lime-600"></span>
    </span>
    <div class="pt-1">
      <p class="text-sm font-semibold text-lime-700 dark:text-lime-300">Out for delivery</p>
      <p class="text-sm text-gray-500 dark:text-gray-400">In progress</p>
    </div>
  </li>
  <li class="relative flex gap-4">
    <span class="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-gray-300 bg-white ring-4 ring-white dark:border-gray-500 dark:bg-[#1e293b] dark:ring-[#1e293b]"></span>
    <div class="pt-1">
      <p class="text-sm font-semibold text-gray-500 dark:text-gray-400">Delivered</p>
      <p class="text-sm text-gray-400 dark:text-gray-500">Estimated Wed, Nov 4</p>
    </div>
  </li>
</ol>`,
      contributor: 'rayasabari',
    },
    {
      id: 'timeline-activity-feed',
      name: 'Activity Feed',
      code: `<div class="flow-root">
  <ul class="-mb-8">
    <li class="relative pb-8">
      <span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-600"></span>
      <div class="relative flex items-start gap-3">
        <img class="h-8 w-8 rounded-full bg-gray-100 ring-4 ring-white dark:ring-[#1e293b]" src="https://i.pravatar.cc/64?img=12" alt="Avatar" />
        <div class="min-w-0 flex-1 pt-1">
          <p class="text-sm text-gray-600 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Maya Chen</span> commented on <span class="font-medium text-lime-700 dark:text-lime-300">Design tokens</span></p>
          <div class="mt-2 rounded-xl border border-gray-200 bg-white p-3 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300">Looks great, let's ship it after the contrast review.</div>
          <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">2 hours ago</p>
        </div>
      </div>
    </li>
    <li class="relative pb-8">
      <span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-600"></span>
      <div class="relative flex items-start gap-3">
        <span class="flex h-8 w-8 items-center justify-center rounded-full bg-lime-100 text-lime-700 ring-4 ring-white dark:bg-lime-900/30 dark:text-lime-300 dark:ring-[#1e293b]">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg>
        </span>
        <div class="min-w-0 flex-1 pt-1">
          <p class="text-sm text-gray-600 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Leo Park</span> opened pull request <span class="font-medium text-lime-700 dark:text-lime-300">#142</span></p>
          <p class="mt-1 text-xs text-gray-500">5 hours ago</p>
        </div>
      </div>
    </li>
    <li class="relative pb-8">
      <div class="relative flex items-start gap-3">
        <span class="flex h-8 w-8 items-center justify-center rounded-full bg-lime-600 text-white ring-4 ring-white dark:ring-[#1e293b]">${check}</span>
        <div class="min-w-0 flex-1 pt-1">
          <p class="text-sm text-gray-600 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Sam Ortiz</span> completed <span class="font-medium text-gray-900 dark:text-white">Onboarding flow</span></p>
          <p class="mt-1 text-xs text-gray-500">Yesterday</p>
        </div>
      </div>
    </li>
  </ul>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'timeline-horizontal',
      name: 'Horizontal Steps',
      code: `<ol class="flex w-full items-start">
  <li class="relative flex-1">
    <div class="flex items-center">
      <span class="z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-lime-600 text-white">${check}</span>
      <span class="h-0.5 w-full bg-lime-600"></span>
    </div>
    <div class="mt-3 pr-4">
      <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Plan</h3>
      <p class="text-xs text-gray-500 dark:text-gray-400">Research &amp; scoping</p>
    </div>
  </li>
  <li class="relative flex-1">
    <div class="flex items-center">
      <span class="z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-lime-600 text-white">${check}</span>
      <span class="h-0.5 w-full bg-lime-600"></span>
    </div>
    <div class="mt-3 pr-4">
      <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Design</h3>
      <p class="text-xs text-gray-500 dark:text-gray-400">Wireframes &amp; UI</p>
    </div>
  </li>
  <li class="relative flex-1">
    <div class="flex items-center">
      <span class="z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-lime-600 bg-white dark:bg-[#1e293b]"><span class="h-2.5 w-2.5 rounded-full bg-lime-600"></span></span>
      <span class="h-0.5 w-full bg-gray-200 dark:bg-gray-600"></span>
    </div>
    <div class="mt-3 pr-4">
      <h3 class="text-sm font-semibold text-lime-700 dark:text-lime-300">Build</h3>
      <p class="text-xs text-gray-500 dark:text-gray-400">In progress</p>
    </div>
  </li>
  <li class="relative flex-none">
    <div class="flex items-center">
      <span class="z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-gray-300 bg-white dark:border-gray-500 dark:bg-[#1e293b]"></span>
    </div>
    <div class="mt-3">
      <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Launch</h3>
      <p class="text-xs text-gray-400 dark:text-gray-500">Upcoming</p>
    </div>
  </li>
</ol>`,
      contributor: 'rayasabari',
    },
    {
      id: 'timeline-alternating',
      name: 'Alternating Cards',
      code: `<div class="relative mx-auto max-w-3xl">
  <div class="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-600 md:left-1/2 md:-translate-x-1/2"></div>
  <ul class="space-y-10">
    <li class="relative md:grid md:grid-cols-2 md:gap-12">
      <span class="absolute left-4 top-5 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-lime-500 dark:border-[#1e293b] md:left-1/2"></span>
      <div class="ml-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-600 dark:bg-gray-900 md:ml-0 md:text-right">
        <time class="text-xs font-semibold uppercase tracking-wider text-lime-600 dark:text-lime-300">2023</time>
        <h3 class="mt-1 text-base font-bold text-gray-900 dark:text-white">Company founded</h3>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Started with three people and a big idea.</p>
      </div>
      <div class="hidden md:block"></div>
    </li>
    <li class="relative md:grid md:grid-cols-2 md:gap-12">
      <span class="absolute left-4 top-5 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-lime-500 dark:border-[#1e293b] md:left-1/2"></span>
      <div class="hidden md:block"></div>
      <div class="ml-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-600 dark:bg-gray-900 md:ml-0">
        <time class="text-xs font-semibold uppercase tracking-wider text-lime-600 dark:text-lime-300">2024</time>
        <h3 class="mt-1 text-base font-bold text-gray-900 dark:text-white">Series A</h3>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Raised funding and grew the team to 40.</p>
      </div>
    </li>
    <li class="relative md:grid md:grid-cols-2 md:gap-12">
      <span class="absolute left-4 top-5 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-lime-500 dark:border-[#1e293b] md:left-1/2"></span>
      <div class="ml-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-600 dark:bg-gray-900 md:ml-0 md:text-right">
        <time class="text-xs font-semibold uppercase tracking-wider text-lime-600 dark:text-lime-300">2025</time>
        <h3 class="mt-1 text-base font-bold text-gray-900 dark:text-white">Global expansion</h3>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Opened offices across three continents.</p>
      </div>
      <div class="hidden md:block"></div>
    </li>
  </ul>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'timeline-status-badges',
      name: 'Status Badges',
      code: `<ol class="relative ml-3 border-l-2 border-dashed border-gray-200 dark:border-gray-600">
  <li class="mb-8 ml-6">
    <span class="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-lime-600 ring-4 ring-white dark:ring-[#1e293b]"></span>
    <div class="flex flex-wrap items-center gap-2">
      <h3 class="text-sm font-semibold text-gray-900 dark:text-white">v2.4.0 released</h3>
      <span class="rounded-full bg-lime-100 px-2 py-0.5 text-xs font-medium text-lime-700 dark:bg-lime-900/30 dark:text-lime-300">Completed</span>
    </div>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">New dashboard, faster search and bug fixes.</p>
    <time class="mt-1 block text-xs text-gray-500">Oct 28, 2026</time>
  </li>
  <li class="mb-8 ml-6">
    <span class="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 ring-4 ring-white dark:ring-[#1e293b]"></span>
    <div class="flex flex-wrap items-center gap-2">
      <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Security audit</h3>
      <span class="rounded-full bg-lime-50 px-2 py-0.5 text-xs font-medium text-lime-700 ring-1 ring-inset ring-lime-600/30 dark:bg-lime-950 dark:text-lime-300 dark:ring-lime-300/30">In progress</span>
    </div>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Third-party penetration testing underway.</p>
    <time class="mt-1 block text-xs text-gray-500">Nov 2, 2026</time>
  </li>
  <li class="ml-6">
    <span class="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-gray-300 ring-4 ring-white dark:bg-gray-500 dark:ring-[#1e293b]"></span>
    <div class="flex flex-wrap items-center gap-2">
      <h3 class="text-sm font-semibold text-gray-900 dark:text-white">v3.0 roadmap</h3>
      <span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-600 dark:text-gray-400">Planned</span>
    </div>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Plugin system and team workspaces.</p>
    <time class="mt-1 block text-xs text-gray-500">Q1 2027</time>
  </li>
</ol>`,
      contributor: 'rayasabari',
    },
    {
      id: 'timeline-compact-changelog',
      name: 'Compact Changelog',
      code: `<div class="space-y-6">
  <div class="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-6">
    <div class="sm:text-right">
      <time class="text-sm font-semibold text-gray-900 dark:text-white">Nov 2</time>
      <p class="text-xs text-gray-500">2026</p>
    </div>
    <div class="relative border-l border-gray-200 pl-6 dark:border-gray-600">
      <span class="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-lime-500 ring-4 ring-white dark:ring-[#1e293b]"></span>
      <span class="rounded-md bg-lime-100 px-1.5 py-0.5 text-xs font-semibold text-lime-700 dark:bg-lime-900/30 dark:text-lime-300">v2.4.0</span>
      <ul class="mt-2 list-disc space-y-1 pl-4 text-sm text-gray-600 marker:text-lime-500 dark:text-gray-400">
        <li>Added dark mode across all pages</li>
        <li>Improved table performance by 3x</li>
        <li>Fixed sidebar flicker on load</li>
      </ul>
    </div>
  </div>
  <div class="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-6">
    <div class="sm:text-right">
      <time class="text-sm font-semibold text-gray-900 dark:text-white">Oct 14</time>
      <p class="text-xs text-gray-500">2026</p>
    </div>
    <div class="relative border-l border-gray-200 pl-6 dark:border-gray-600">
      <span class="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-gray-300 ring-4 ring-white dark:bg-gray-500 dark:ring-[#1e293b]"></span>
      <span class="rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-semibold text-gray-600 dark:bg-gray-600 dark:text-gray-400">v2.3.0</span>
      <ul class="mt-2 list-disc space-y-1 pl-4 text-sm text-gray-600 marker:text-gray-400 dark:text-gray-400">
        <li>Introduced command palette</li>
        <li>New CSV export option</li>
      </ul>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
  ],
};
