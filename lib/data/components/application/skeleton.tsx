import { IconLoader3 } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const skeleton: ComponentType = {
  slug: 'skeleton',
  name: 'Skeleton',
  icon: <IconLoader3 stroke={ 1.5} />,
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
};
