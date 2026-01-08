import { IconUserCircle } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const avatars: ComponentType = {
  slug: 'avatars',
  name: 'Avatars',
  icon: <IconUserCircle stroke={ 1.5} />,
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
};
