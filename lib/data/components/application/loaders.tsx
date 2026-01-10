import { IconLoader } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const loaders: ComponentType = {
  slug: 'loaders',
  name: 'Loaders',
  icon: <IconLoader stroke={1.5} />,
  description: 'Loading indicators and spinners for async states',
  variants: [
    {
      id: 'loader-basic',
      name: 'Basic Loader',
      code: `<div class="flex space-x-2 justify-center items-center">
  <svg class="size-12 text-gray-400 dark:text-gray-500 animate animate-spin [animation-duration:1.5s]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6l0 -3" /><path d="M16.25 7.75l2.15 -2.15" /><path d="M18 12l3 0" /><path d="M16.25 16.25l2.15 2.15" /><path d="M12 18l0 3" /><path d="M7.75 16.25l-2.15 2.15" /><path d="M6 12l-3 0" /><path d="M7.75 7.75l-2.15 -2.15" /></svg>
</div>`,
    },
    {
      id: 'loader-simple-spinner',
      name: 'Simple Spinner',
      code: `<div class="flex space-x-2 justify-center items-center">
  <svg class="size-10 animate animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title-04a desc-04a" aria-live="polite" aria-busy="true">
    <circle cx="12" cy="12" r="10" class="stroke-slate-200 dark:stroke-slate-600" stroke-width="4" />
    <path d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2" class="stroke-lime-600 dark:stroke-lime-500" stroke-width="4" />
  </svg>
</div>`,
    },
    {
      id: 'loader-inner-spinner',
      name: 'Inner Spinner',
      code: `<div class="flex space-x-2 justify-center items-center">
  <svg class="size-12 text-lime-600 dark:text-lime-500 animate animate-spin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M6 12a6 6 0 0 0 6 6" /></svg>
</div>`,
    },
    {
      id: 'loader-joko-spinner',
      name: 'Joko Spinner',
      code: `<div class="flex space-x-1 justify-center items-end">
  <svg class="size-12 text-lime-600 dark:text-lime-500 animate-spin [animation-duration:2s]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M12 2a3 3 0 0 1 3 3c0 .562 -.259 1.442 -.776 2.64l-.724 1.36l1.76 -1.893c.499 -.6 .922 -1 1.27 -1.205a2.968 2.968 0 0 1 4.07 1.099a3.011 3.011 0 0 1 -1.09 4.098c-.374 .217 -.99 .396 -1.846 .535l-2.664 .366l2.4 .326c1 .145 1.698 .337 2.11 .576a3.011 3.011 0 0 1 1.09 4.098a2.968 2.968 0 0 1 -4.07 1.098c-.348 -.202 -.771 -.604 -1.27 -1.205l-1.76 -1.893l.724 1.36c.516 1.199 .776 2.079 .776 2.64a3 3 0 0 1 -6 0c0 -.562 .259 -1.442 .776 -2.64l.724 -1.36l-1.76 1.893c-.499 .601 -.922 1 -1.27 1.205a2.968 2.968 0 0 1 -4.07 -1.098a3.011 3.011 0 0 1 1.09 -4.098c.374 -.218 .99 -.396 1.846 -.536l2.664 -.366l-2.4 -.325c-1 -.145 -1.698 -.337 -2.11 -.576a3.011 3.011 0 0 1 -1.09 -4.099a2.968 2.968 0 0 1 4.07 -1.099c.348 .203 .771 .604 1.27 1.205l1.76 1.894c-1 -2.292 -1.5 -3.625 -1.5 -4a3 3 0 0 1 3 -3" /></svg>
</div>`
    },
    {
      id: 'loader-dots',
      name: 'Bouncing Dots',
      code: `<div class="flex space-x-2 justify-center items-center h-8">
  <span class="sr-only">Loading...</span>
  <div class="h-3 w-3 bg-lime-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
  <div class="h-3 w-3 bg-lime-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
  <div class="h-3 w-3 bg-lime-600 rounded-full animate-bounce"></div>
</div>`,
    },
    {
      id: 'loader-pulse',
      name: 'Pulse Ring',
      code: `<div class="flex space-x-2 justify-center items-center h-8">
  <span class="relative flex h-8 w-8">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-8 w-8 bg-lime-500"></span>
  </span>
</div>`,
    },
    {
      id: 'loader-bars',
      name: 'Growing Bars',
      code: `<div class="flex space-x-1 justify-center items-end h-8">
  <div class="w-1.5 h-4 bg-lime-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.4s]"></div>
  <div class="w-1.5 h-6 bg-lime-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.2s]"></div>
  <div class="w-1.5 h-8 bg-lime-500 animate-[pulse_1s_ease-in-out_infinite]"></div>
  <div class="w-1.5 h-6 bg-lime-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.2s]"></div>
  <div class="w-1.5 h-4 bg-lime-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.4s]"></div>
</div>`
    }
  ],
};
