import React from 'react';
import {
  IconToggleRight,
  IconCards,
  IconBell,
  IconForms,
  IconTag,
  IconUserCircle,
  IconMessageCircle2,
  IconDeviceDesktop,
  IconSpeakerphone,
  IconLayoutBottombar,
  IconPremiumRights,
  IconLoader2,
  IconLoader3,
  IconLineHeight
} from '@tabler/icons-react';

// Type definitions for components
export interface ComponentVariant {
  id: string;
  name: string;
  code: string;
}

export interface ComponentType {
  slug: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  variants: ComponentVariant[];
}

export interface ComponentCategory {
  slug: string;
  name: string;
  description: string;
  components: ComponentType[];
}

// Application Components
export const applicationComponents: ComponentType[] = [
  {
    slug: 'buttons',
    name: 'Buttons',
    icon: <IconToggleRight stroke={1.5} />,
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
  },
  {
    slug: 'cards',
    name: 'Cards',
    icon: <IconCards stroke={1.5} />,
    description: 'Versatile card components for displaying content',
    variants: [
      {
        id: 'card-simple',
        name: 'Simple Card',
        code: `<div class="max-w-sm p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800">
  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Card Title</h3>
  <p class="text-gray-600 dark:text-gray-300">This is a simple card component with a clean design.</p>
</div>`,
      },
      {
        id: 'card-image',
        name: 'Image Card',
        code: `<div class="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800">
  <div class="h-48 bg-gradient-to-br from-lime-500 to-lime-600"></div>
  <div class="p-6">
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Image Card</h3>
    <p class="text-gray-600 dark:text-gray-300">A card with an image header section.</p>
  </div>
</div>`,
      },
      {
        id: 'card-glass',
        name: 'Glass Card',
        code: `<div class="max-w-sm p-6 backdrop-blur-lg bg-gray-900/5 dark:bg-white/10 rounded-xl border border-gray-900/10 dark:border-white/20 shadow-xl">
  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Glass Card</h3>
  <p class="text-gray-700 dark:text-gray-200">A beautiful glassmorphism card design.</p>
</div>`,
      },
      {
        id: 'card-hover',
        name: 'Hover Card',
        code: `<div class="max-w-sm p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 dark:bg-gray-800 cursor-pointer group">
  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">Hover Card</h3>
  <p class="text-gray-600 dark:text-gray-300">Hover me for a nice effect!</p>
</div>`,
      },
    ],
  },
  {
    slug: 'alerts',
    name: 'Alerts',
    icon: <IconBell stroke={1.5} />,
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
  },
  {
    slug: 'forms',
    name: 'Forms',
    icon: <IconForms stroke={1.5} />,
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
  },
  {
    slug: 'badges',
    name: 'Badges',
    icon: <IconTag stroke={1.5} />,
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
  },
  {
    slug: 'avatars',
    name: 'Avatars',
    icon: <IconUserCircle stroke={1.5} />,
    description: 'Avatar components for user profiles',
    variants: [
      {
        id: 'avatar-sizes',
        name: 'Avatar Sizes',
        code: `<div class="flex items-center gap-4">
  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-lime-500 to-lime-600 flex items-center justify-center text-white text-xs font-medium">JD</div>
  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-lime-500 to-lime-600 flex items-center justify-center text-white text-sm font-medium">JD</div>
  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 to-lime-600 flex items-center justify-center text-white font-medium">JD</div>
  <div class="w-16 h-16 rounded-full bg-gradient-to-br from-lime-500 to-lime-600 flex items-center justify-center text-white text-xl font-medium">JD</div>
</div>`,
      },
      {
        id: 'avatar-status',
        name: 'Avatar with Status',
        code: `<div class="flex items-center gap-4">
  <div class="relative">
    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 to-lime-600 flex items-center justify-center text-white font-medium">JD</div>
    <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
  </div>
  <div class="relative">
    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-medium">AB</div>
    <span class="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
  </div>
  <div class="relative">
    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-medium">CD</div>
    <span class="absolute bottom-0 right-0 w-3 h-3 bg-red-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
  </div>
</div>`,
      },
      {
        id: 'avatar-group',
        name: 'Avatar Group',
        code: `<div class="flex -space-x-3">
  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-lime-500 to-lime-600 flex items-center justify-center text-white text-sm font-medium ring-2 ring-white dark:ring-gray-800">A</div>
  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white text-sm font-medium ring-2 ring-white dark:ring-gray-800">B</div>
  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-medium ring-2 ring-white dark:ring-gray-800">C</div>
  <div class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm font-medium ring-2 ring-white dark:ring-gray-800">+5</div>
</div>`,
      },
    ],
  },
  {
    slug: 'progress',
    name: 'Progress',
    icon: <IconLoader2 stroke={1.5} />,
    description: 'Progress bar components to show task completion status',
    variants: [
      {
        id: 'progress-basic',
        name: 'Basic Progress',
        code: `<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-lime-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>`,
      },
      {
        id: 'progress-label',
        name: 'Progress with Label',
        code: `<div class="w-full">
  <div class="mb-1 flex justify-between">
    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Working on it...</span>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">70%</span>
  </div>
  <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 overflow-hidden">
    <div class="bg-lime-600 h-4 rounded-full text-[10px] font-bold text-white flex items-center justify-center transition-all duration-500" style="width: 70%">70%</div>
  </div>
</div>`,
      },
      {
        id: 'progress-animated',
        name: 'Animated Progress',
        code: `<div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden">
  <div class="bg-lime-600 h-full rounded-full relative overflow-hidden" style="width: 60%">
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
  </div>
</div>`,
      },
      {
        id: 'progress-gradient',
        name: 'Gradient Progress',
        code: `<div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden">
  <div class="bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 h-full rounded-full" style="width: 85%"></div>
</div>`,
      },
      {
        id: 'progress-sizes',
        name: 'Progress Sizes',
        code: `<div class="w-full space-y-4">
  <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
    <div class="bg-lime-600 h-1 rounded-full" style="width: 30%"></div>
  </div>
  <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
    <div class="bg-lime-600 h-3 rounded-full" style="width: 50%"></div>
  </div>
  <div class="w-full bg-gray-200 rounded-full h-6 dark:bg-gray-700">
    <div class="bg-lime-600 h-6 rounded-full" style="width: 70%"></div>
  </div>
</div>`,
      }
    ],
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    icon: <IconLoader3 stroke={1.5} />,
    description: 'Ghostly loading placeholders for content',
    variants: [
      {
        id: 'skeleton-basic',
        name: 'Basic Shapes',
        code: `<div class="flex flex-col gap-4 w-full max-w-sm">
  <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-48 animate-pulse"></div>
  <div class="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-full animate-pulse"></div>
  <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse"></div>
</div>`,
      },
      {
        id: 'skeleton-avatar',
        name: 'Profile Skeleton',
        code: `<div class="flex items-center gap-4 w-full max-w-sm">
  <div class="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse shrink-0"></div>
  <div class="flex-1 space-y-2">
    <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4 animate-pulse"></div>
    <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2 animate-pulse"></div>
  </div>
</div>`,
      },
      {
        id: 'skeleton-card',
        name: 'Card Skeleton',
        code: `<div class="w-full max-w-sm glass-card p-6 space-y-4">
  <div class="w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
  <div class="space-y-2">
    <div class="h-5 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5 animate-pulse"></div>
    <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse"></div>
    <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-2/3 animate-pulse"></div>
  </div>
  <div class="pt-4 flex justify-between">
    <div class="h-9 bg-gray-200 dark:bg-gray-700 rounded-lg w-24 animate-pulse"></div>
    <div class="h-9 bg-gray-200 dark:bg-gray-700 rounded-lg w-24 animate-pulse"></div>
  </div>
</div>`,
      },
      {
        id: 'skeleton-list',
        name: 'List Skeleton',
        code: `<div class="w-full max-w-sm space-y-6">
  <div class="flex items-start gap-3">
    <div class="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-sm mt-1 animate-pulse"></div>
    <div class="flex-1 space-y-2">
      <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse"></div>
      <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5 animate-pulse"></div>
    </div>
  </div>
  <div class="flex items-start gap-3">
    <div class="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-sm mt-1 animate-pulse"></div>
    <div class="flex-1 space-y-2">
      <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse"></div>
      <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5 animate-pulse"></div>
    </div>
  </div>
  <div class="flex items-start gap-3">
    <div class="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-sm mt-1 animate-pulse"></div>
    <div class="flex-1 space-y-2">
      <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse"></div>
      <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5 animate-pulse"></div>
    </div>
  </div>
</div>`,
      }
    ],
  },
];

// Marketing Components
export const marketingComponents: ComponentType[] = [
  {
    slug: 'heroes',
    name: 'Hero Sections',
    icon: <IconDeviceDesktop stroke={1.5} />,
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
  },
  {
    slug: 'ctas',
    name: 'CTAs',
    icon: <IconSpeakerphone stroke={1.5} />,
    description: 'Call-to-action sections to drive conversions',
    variants: [
      {
        id: 'cta-simple',
        name: 'Simple CTA',
        code: `<section class="py-16 px-6 bg-lime-600 dark:bg-lime-700">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
    <p class="text-lime-100 mb-8">Join thousands of developers building beautiful websites.</p>
    <a href="#" class="inline-block px-8 py-4 bg-white text-lime-600 font-semibold rounded-lg hover:bg-lime-50 transition-colors shadow-lg">
      Get Started Free
    </a>
  </div>
</section>`,
      },
      {
        id: 'cta-split',
        name: 'Split CTA',
        code: `<section class="py-16 px-6 bg-gray-50 dark:bg-gray-800">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    <div>
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Start your free trial</h2>
      <p class="text-gray-600 dark:text-gray-300">No credit card required. Cancel anytime.</p>
    </div>
    <div class="flex gap-4">
      <a href="#" class="px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors">
        Start Free Trial
      </a>
      <a href="#" class="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
        Contact Sales
      </a>
    </div>
  </div>
</section>`,
      },
      {
        id: 'cta-newsletter',
        name: 'Newsletter CTA',
        code: `<section class="py-16 px-6 bg-gradient-to-r from-lime-600 to-lime-600">
  <div class="max-w-2xl mx-auto text-center">
    <h2 class="text-3xl font-bold text-white mb-4">Subscribe to our newsletter</h2>
    <p class="text-lime-100 mb-8">Get the latest components and updates delivered to your inbox.</p>
    <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-white/50 ring-2 ring-white/40 focus:ring-2 focus:ring-white/50 focus:outline-none"/>
      <button type="submit" class="px-6 py-3 bg-white text-lime-600 font-semibold rounded-lg hover:bg-lime-50 transition-colors">
        Subscribe
      </button>
    </form>
  </div>
</section>`,
      },
    ],
  },
  {
    slug: 'footers',
    name: 'Footers',
    icon: <IconLayoutBottombar stroke={1.5} />,
    description: 'Footer sections for website navigation',
    variants: [
      {
        id: 'footer-simple',
        name: 'Simple Footer',
        code: `<footer class="py-8 px-6 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <p>© 2024 Your Company. All rights reserved.</p>
    <div class="flex gap-6">
      <a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a>
      <a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</a>
      <a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
    </div>
  </div>
</footer>`,
      },
      {
        id: 'footer-links',
        name: 'Links Footer',
        code: `<footer class="py-12 px-6 bg-gray-100 dark:bg-gray-900">
  <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <h3 class="text-gray-900 dark:text-white font-semibold mb-4">Product</h3>
      <ul class="space-y-2 text-gray-600 dark:text-gray-400">
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Features</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Changelog</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-gray-900 dark:text-white font-semibold mb-4">Company</h3>
      <ul class="space-y-2 text-gray-600 dark:text-gray-400">
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">About</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Careers</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-gray-900 dark:text-white font-semibold mb-4">Resources</h3>
      <ul class="space-y-2 text-gray-600 dark:text-gray-400">
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Documentation</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Help Center</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Guides</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-gray-900 dark:text-white font-semibold mb-4">Legal</h3>
      <ul class="space-y-2 text-gray-600 dark:text-gray-400">
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Cookies</a></li>
      </ul>
    </div>
  </div>
  <div class="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
    <p>© 2024 Your Company. All rights reserved.</p>
  </div>
</footer>`,
      },
      {
        id: 'footer-social',
        name: 'Social Footer',
        code: `<footer class="py-8 px-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <div class="flex items-center gap-2">
      <span class="text-2xl">🎨</span>
      <span class="font-bold text-gray-900 dark:text-white">Brand</span>
    </div>
    <div class="flex gap-4">
      <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-lime-600 hover:text-white transition-colors">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
      </a>
      <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-lime-600 hover:text-white transition-colors">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-lime-600 hover:text-white transition-colors">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </a>
    </div>
    <p class="text-gray-600 dark:text-gray-400 text-sm">© 2024 All rights reserved.</p>
  </div>
</footer>`,
      },
    ],
  },
  {
    slug: 'pricing',
    name: 'Pricing',
    icon: <IconPremiumRights stroke={1.5} />,
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
  },
  {
    slug: 'testimonials',
    name: 'Testimonials',
    icon: <IconMessageCircle2 stroke={1.5} />,
    description: 'Customer testimonial sections to build trust',
    variants: [
      {
        id: 'testimonial-simple',
        name: 'Simple Testimonial',
        code: `<section class="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800">
  <div class="max-w-4xl mx-auto text-center">
    <blockquote class="text-gray-900 dark:text-white italic text-base sm:text-lg mb-4 sm:mb-6 px-4">
      "This component library has transformed our development process. The quality and variety of components are unmatched!"
    </blockquote>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
      <img src="https://i.pravatar.cc/48?img=32" alt="Jane Doe" 
           class="w-10 h-10 sm:w-12 sm:h-12 rounded-full"/>
      <div class="text-center sm:text-left">
        <p class="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Jane Doe</p>
        <p class="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">CEO, Acme Corp</p>
      </div>
    </div>
  </div>
</section>`,
      },
      {
        id: 'testimonial-carousel',
        name: 'Testimonial Carousel',
        code: `<section class="py-12 sm:py-16 px-4 sm:px-6 bg-white dark:bg-gray-900">
  <div class="max-w-4xl mx-auto">
    <div class="overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-4 sm:gap-6 pb-4">
      <div class="min-w-[85vw] sm:min-w-[calc(50%-12px)] lg:min-w-full snap-start bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
        <blockquote class="text-gray-900 dark:text-white italic text-sm sm:text-lg mb-3 sm:mb-4">
          "An essential tool for our team. The components are easy to customize and integrate."
        </blockquote>
        <div class="flex items-center gap-3 sm:gap-4">
          <img src="https://i.pravatar.cc/48?img=45" alt="John Smith" 
               class="w-10 h-10 sm:w-12 sm:h-12 rounded-full"/>
          <div class="text-left">
            <p class="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">John Smith</p>
            <p class="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">CTO, Beta Inc</p>
          </div>
        </div>
      </div>
      <div class="min-w-[85vw] sm:min-w-[calc(50%-12px)] lg:min-w-full snap-start bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
        <blockquote class="text-gray-900 dark:text-white italic text-sm sm:text-lg mb-3 sm:mb-4">
          "The best Tailwind CSS component library I've used. It has saved us countless hours of development time."
        </blockquote>
        <div class="flex items-center gap-3 sm:gap-4">
          <img src="https://i.pravatar.cc/48?img=12" alt="Alice Johnson" 
               class="w-10 h-10 sm:w-12 sm:h-12 rounded-full"/>
          <div class="text-left">
            <p class="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Alice Johnson</p>
            <p class="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Lead Developer, Gamma LLC</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      },
      {
        id: 'testimonial-grid',
        name: 'Testimonial Grid',
        code: `<section class="py-12 sm:py-16 px-4 sm:px-6 bg-white dark:bg-gray-900">
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <!-- Testimonial 1 -->
      <div class="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm">
        <div class="flex items-center mb-3 sm:mb-4">
          <div class="flex text-yellow-400">
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          </div>
        </div>
        <blockquote class="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
          "Absolutely amazing! This library helped us ship features 3x faster than before. Highly recommended!"
        </blockquote>
        <div class="flex items-center gap-3 sm:gap-4">
          <img src="https://i.pravatar.cc/48?img=32" alt="Michael Chen" 
               class="w-8 h-8 sm:w-10 sm:h-10 rounded-full"/>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Michael Chen</p>
            <p class="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Product Manager</p>
          </div>
        </div>
      </div>

      <!-- Testimonial 2 -->
      <div class="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm">
        <div class="flex items-center mb-3 sm:mb-4">
          <div class="flex text-yellow-400">
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          </div>
        </div>
        <blockquote class="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
          "The documentation is superb and the components are production-ready. A game-changer for our startup."
        </blockquote>
        <div class="flex items-center gap-3 sm:gap-4">
          <img src="https://i.pravatar.cc/48?img=45" alt="Sarah Williams" 
               class="w-8 h-8 sm:w-10 sm:h-10 rounded-full"/>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Sarah Williams</p>
            <p class="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Frontend Lead</p>
          </div>
        </div>
      </div>

      <!-- Testimonial 3 -->
      <div class="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm">
        <div class="flex items-center mb-3 sm:mb-4">
          <div class="flex text-yellow-400">
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          </div>
        </div>
        <blockquote class="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
          "Clean, modern, and accessible. Our users love the experience these components provide."
        </blockquote>
        <div class="flex items-center gap-3 sm:gap-4">
          <img src="https://i.pravatar.cc/48?img=12" alt="David Kim" 
               class="w-8 h-8 sm:w-10 sm:h-10 rounded-full"/>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">David Kim</p>
            <p class="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      },
      {
        id: 'testimonial-with-header',
        name: 'With Headers',
        code: `<section class="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
  <div class="max-w-6xl mx-auto">

    <!-- Header -->
    <div class="text-center mb-8 sm:mb-12">
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        JokoUI Loved by developers worldwide
      </h2>
      <p class="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
        Join thousands of developers who have accelerated their projects with our component library
      </p>
    </div>

    <!-- Testimonials -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">


      <!-- Card -->
      <div class="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-5 sm:p-8 sm:grid-cols-3">
        <div class="flex items-start gap-3">
          <div class="flex-1">
            <p class="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              "As a solo developer, this library has been a lifesaver. I can now build professional-looking interfaces without spending weeks on design."
            </p>

            <div class="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/64?img=32"
                alt="Alex Morgan"
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-blue-100 dark:border-blue-800"
              />
              <div>
                <p class="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                  Alex Morgan
                </p>
                <p class="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                  Full Stack Developer
                </p>
                <p class="text-blue-600 dark:text-blue-400 text-xs sm:text-sm">
                  @alexmorgan
                </p>
              </div>
            </div>
          </div>

          <div class="hidden md:block text-blue-500 text-5xl opacity-10">"</div>
        </div>
      </div>

      <!-- Card -->
      <div class="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-5 sm:p-8 sm:grid-cols-3">
        <div class="flex items-start gap-3">
          <div class="flex-1">
            <p class="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              "Our team's productivity increased by 40% after adopting this component library. The consistency across projects is incredible."
            </p>

            <div class="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/64?img=45"
                alt="Lisa Rodriguez"
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-purple-100 dark:border-purple-800"
              />
              <div>
                <p class="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                  Lisa Rodriguez
                </p>
                <p class="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                  Engineering Manager
                </p>
                <p class="text-purple-600 dark:text-purple-400 text-xs sm:text-sm">
                  @lisarod
                </p>
              </div>
            </div>
          </div>

          <div class="hidden md:block text-purple-500 text-5xl opacity-10">"</div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      },
      {
        id: 'testimonial-minimal',
        name: 'Minimal Style',
        code: `<section class="py-12 sm:py-16 px-4 sm:px-6">
  <div class="max-w-3xl mx-auto">
    <div class="space-y-8 sm:space-y-12">
      <!-- Testimonial 1 -->
      <div class="relative pl-8 sm:pl-12">
        <div class="absolute left-0 top-0 text-gray-300 dark:text-gray-600 text-4xl sm:text-5xl">"</div>
        <blockquote class="text-lg sm:text-xl text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
          The attention to detail in these components is remarkable. Every interaction feels polished.
        </blockquote>
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Taylor Swift</p>
            <p class="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Design Director</p>
          </div>
        </div>
      </div>

      <!-- Testimonial 2 -->
      <div class="relative pl-8 sm:pl-12">
        <div class="absolute left-0 top-0 text-gray-300 dark:text-gray-600 text-4xl sm:text-5xl">"</div>
        <blockquote class="text-lg sm:text-xl text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
          Implementing complex UIs has never been easier. This library covers everything we need.
        </blockquote>
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-green-500 to-teal-500"></div>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Chris Evans</p>
            <p class="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Senior Engineer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      },
    ],
  },
  {
    slug: 'faq',
    name: 'FAQ',
    icon: <IconLineHeight stroke={1.5} />,
    description: 'FAQs for showing additional information.',
    variants: [
      {
        id: 'faq-simple',
        name: 'Simple FAQs',
        code: `<div class="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto space-y-3 md:space-y-4">

  <!-- Header Section -->
  <div class="mb-6 md:mb-8 text-center px-2">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-1 md:mb-2">
      FAQ
    </h2>
    <p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
       Frequently asked questions
    </p>
  </div>

  <!-- Item 1 -->
  <details class="group rounded-xl sm:rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-out">
    <summary class="flex cursor-pointer list-none items-center justify-between px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 hover:bg-lime-50 dark:hover:bg-lime-950/20 transition-colors duration-200 ease-out group-open:bg-lime-100 dark:group-open:bg-lime-950/30 group-open:border-b-2 group-open:border-lime-200 dark:group-open:border-lime-900">
      <span class="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        <span class="flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-950 text-lime-600 dark:text-lime-400 font-bold text-xs sm:text-sm">
          1
        </span>
        <span class="truncate sm:whitespace-normal">
          What is Tailwind CSS?
        </span>
      </span>
      <!-- Icon -->
      <svg class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 ml-2 text-lime-600 dark:text-lime-400 transition-transform duration-300 ease-out group-open:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed bg-gray-100 dark:bg-gray-800">
      Tailwind CSS is a utility-first CSS framework for building modern user
      interfaces quickly and consistently. It provides low-level utility
      classes that let you style components directly without writing custom CSS.
    </div>
  </details>

  <!-- Item 2 -->
  <details
    class="group rounded-xl sm:rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-out">
    <summary class="flex cursor-pointer list-none items-center justify-between px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 hover:bg-lime-50 dark:hover:bg-lime-950/20 transition-colors duration-200 ease-out group-open:bg-lime-100 dark:group-open:bg-lime-950/30 group-open:border-b-2 group-open:border-lime-200 dark:group-open:border-lime-900">
      <span class="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        <span class="flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-950 text-lime-600 dark:text-lime-400 font-bold text-xs sm:text-sm">
          2
        </span>
        <span class="truncate sm:whitespace-normal">
          Do I need JavaScript?
        </span>
      </span>
      <svg class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 ml-2 text-lime-600 dark:text-lime-400 transition-transform duration-300 ease-out group-open:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed bg-gray-100 dark:bg-gray-800">
      No. This accordion uses the native HTML
      <code class="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-lime-100 dark:bg-lime-950 text-lime-700 dark:text-lime-300 rounded font-mono text-xs sm:text-sm">
        &lt;details&gt;
      </code>
      element, which already provides built-in expand and collapse behavior
      without any additional JavaScript.
    </div>
  </details>

  <!-- Item 3 -->
  <details class="group rounded-xl sm:rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-out">
    <summary class="flex cursor-pointer list-none items-center justify-between px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 hover:bg-lime-50 dark:hover:bg-lime-950/20 transition-colors duration-200 ease-out group-open:bg-lime-100 dark:group-open:bg-lime-950/30 group-open:border-b-2 group-open:border-lime-200 dark:group-open:border-lime-900">
      <span class="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        <span class="flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-950 text-lime-600 dark:text-lime-400 font-bold text-xs sm:text-sm">
          3
        </span>
        <span class="truncate sm:whitespace-normal">
          Does it support dark mode?
        </span>
      </span>
      <svg class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 ml-2 text-lime-600 dark:text-lime-400 transition-transform duration-300 ease-out group-open:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed bg-gray-100 dark:bg-gray-800">
       Yes. It automatically follows Tailwind’s
      <code class="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-lime-100 dark:bg-lime-950 text-lime-700 dark:text-lime-300 rounded font-mono text-xs sm:text-sm">
        dark
      </code>
        mode. You can enable dark mode by adding the
      <code class="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-lime-100 dark:bg-lime-950 text-lime-700 dark:text-lime-300 rounded font-mono text-xs sm:text-sm">
        dark
      </code>
       class to the
      <code class="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-lime-100 dark:bg-lime-950 text-lime-700 dark:text-lime-300 rounded font-mono text-xs sm:text-sm">
        &lt;html&gt;
      </code>.
      element.
    </div>
  </details>
</div>`,
      },
    ],
  },
];

// Helper functions
export function getAllComponents(): ComponentCategory[] {
  return [
    {
      slug: 'application',
      name: 'Application',
      description: 'UI components for building modern web applications',
      components: applicationComponents,
    },
    {
      slug: 'marketing',
      name: 'Marketing',
      description: 'Marketing and landing page components',
      components: marketingComponents,
    },
  ];
}

export function getComponentBySlug(category: string, slug: string): ComponentType | undefined {
  const components = category === 'application' ? applicationComponents : marketingComponents;
  return components.find((c) => c.slug === slug);
}

export function getComponentsByCategory(category: string): ComponentType[] {
  return category === 'application' ? applicationComponents : marketingComponents;
}

export function getTotalComponentCount(): number {
  const appCount = applicationComponents.reduce((acc, c) => acc + c.variants.length, 0);
  const marketingCount = marketingComponents.reduce((acc, c) => acc + c.variants.length, 0);
  return appCount + marketingCount;
}
