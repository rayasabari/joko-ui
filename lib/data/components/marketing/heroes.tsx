import { IconDeviceDesktop } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const heroes: ComponentType = {
  slug: 'heroes',
  name: 'Hero Sections',
  icon: <IconDeviceDesktop stroke={ 1.5} />,
description: 'Eye-catching hero sections for landing pages',
  variants: [
    {
      id: 'hero-simple',
      name: 'Simple Hero',
      code: `<section class="py-20 px-6">
  <div class="max-w-4xl mx-auto text-center">
    <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
      Build Beautiful Websites
      <span class="text-lime-600 dark:text-lime-400"> Faster</span>
    </h1>
    <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
      Free Tailwind CSS components to help you create stunning websites without starting from scratch.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#" class="w-full sm:w-auto px-8 py-4 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors">
        Get Started
      </a>
      <a href="#" class="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-lime-600 hover:text-lime-600 dark:hover:border-lime-400 dark:hover:text-lime-400 transition-colors">
        Learn More
      </a>
    </div>
  </div>
</section>`,
    },
    {
      id: 'hero-gradient',
      name: 'Gradient Hero',
      code: `<section class="relative py-24 px-6 bg-gradient-to-br from-lime-600 via-green-600 to-emerald-600 overflow-hidden">
  <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
  <div class="relative max-w-4xl mx-auto text-center">
    <span class="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium mb-6">
      ✨ New components added weekly
    </span>
    <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
      Design Without Limits
    </h1>
    <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
      Premium quality Tailwind CSS components that make your projects stand out.
    </p>
    <a href="#" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-lime-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
      Explore Components
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
      </svg>
    </a>
  </div>
</section>`,
    },
    {
      id: 'hero-glass',
      name: 'Glass Hero',
      code: `<section class="relative py-24 px-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
  <div class="absolute inset-0">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500 rounded-full blur-3xl opacity-20"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500 rounded-full blur-3xl opacity-20"></div>
  </div>
  <div class="relative max-w-4xl mx-auto">
    <div class="backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-3xl p-12 text-center shadow-2xl">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        The Future of Web Design
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
        Modern glassmorphism components for next-generation web experiences.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#" class="w-full sm:w-auto px-8 py-4 bg-lime-600 text-white font-semibold rounded-xl hover:bg-lime-700 transition-colors shadow-lg">
          Start Building
        </a>
        <a href="#" class="w-full sm:w-auto px-8 py-4 bg-gray-100 dark:bg-white/10 backdrop-blur text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
          View Examples
        </a>
      </div>
    </div>
  </div>
</section>`,
    },
  ],
};
