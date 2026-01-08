import { IconToggleRight } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const buttons: ComponentType = {
  slug: 'buttons',
  name: 'Buttons',
  icon: <IconToggleRight stroke={ 1.5} />,
description: 'Beautiful button components with various styles and states',
  variants: [
    {
      id: 'btn-primary',
      name: 'Primary Button',
      code: `<button class="px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-200">
  Primary Button
</button>`,
    },
    {
      id: 'btn-secondary',
      name: 'Secondary Button',
      code: `<button class="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
  Secondary Button
</button>`,
    },
    {
      id: 'btn-outline',
      name: 'Outline Button',
      code: `<button class="px-6 py-3 border-2 border-lime-600 text-lime-600 font-semibold rounded-lg hover:bg-lime-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-200 dark:border-lime-400 dark:text-lime-400 dark:hover:bg-lime-500 dark:hover:text-white">
  Outline Button
</button>`,
    },
    {
      id: 'btn-gradient',
      name: 'Gradient Button',
      code: `<button class="px-6 py-3 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-200">
  Gradient Button
</button>`,
    },
    {
      id: 'btn-glass',
      name: 'Glass Button',
      code: `<button class="px-6 py-3 backdrop-blur-md bg-gray-900/10 border border-gray-900/20 text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-gray-900/20 focus:outline-none focus:ring-2 focus:ring-gray-500/50 transition-all duration-200 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20">
  Glass Button
</button>`,
    },
    {
      id: 'btn-icon',
      name: 'Icon Button',
      code: `<button class="inline-flex items-center gap-2 px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-200">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
  </svg>
  Add Item
</button>`,
    },
    {
      id: 'btn-pulse',
      name: 'Pulse Button',
      code: `<button class="relative px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg overflow-hidden group focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-300 hover:bg-lime-700">
  <span class="relative z-10">Pulse Button</span>
  <div class="absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-30 group-hover:animate-ping rounded-lg"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</button>`,
    },
    {
      id: 'btn-ripple',
      name: 'Ripple Button',
      code: `<button class="relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg overflow-hidden group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95">
  <span class="relative z-10">Ripple Button</span>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] rounded-full bg-white/40 pointer-events-none transform scale-100 opacity-0 transition-all duration-700 ease-out group-active:scale-0 group-active:opacity-100 group-active:transition-none"></div>
</button>`,
    },
    {
      id: 'btn-floating',
      name: 'Floating Button',
      code: `<button class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all duration-500 hover:-translate-y-2 hover:rotate-1 active:translate-y-0 active:rotate-0 active:scale-95 group">
  <span class="inline-block group-hover:animate-bounce">✨</span>
  Floating Button
  <span class="inline-block group-hover:animate-bounce animation-delay-150">🚀</span>
</button>`,
    },
    {
      id: 'btn-retro',
      name: 'Retro Button',
      code: `<button class="px-5 py-2.5 bg-yellow-400 text-black font-black text-lg border-3 border-black rounded-lg shadow-[0.1em_0.1em_0px_0px_black] hover:shadow-[0.15em_0.15em_0px_0px_black] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-[0.05em_0.05em_0px_0px_black] active:translate-x-0.5 active:translate-y-0.5 transition-all duration-150 cursor-pointer dark:bg-yellow-300 dark:text-gray-900">
  Retro Button
</button>`,
    },
  ],
};
