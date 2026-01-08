import { IconLoader2 } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const progress: ComponentType = {
  slug: 'progress',
  name: 'Progress',
  icon: <IconLoader2 stroke={ 1.5} />,
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
};
