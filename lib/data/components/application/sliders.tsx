import { IconAdjustmentsHorizontal } from '@tabler/icons-react';
import { ComponentType } from '../types';

// Base range reset: removes native styling so the track/thumb can be customised (WebKit + Firefox)
const base = `w-full cursor-pointer appearance-none rounded-full bg-transparent focus:outline-none [&::-moz-range-track]:bg-transparent`;

// 20px thumb (default)
const thumb = `[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-lime-600 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition [&::-webkit-slider-thumb]:hover:scale-110 focus-visible:[&::-webkit-slider-thumb]:ring-4 focus-visible:[&::-webkit-slider-thumb]:ring-lime-300/60 dark:[&::-webkit-slider-thumb]:border-lime-300 dark:[&::-webkit-slider-thumb]:bg-[#1e293b] dark:focus-visible:[&::-webkit-slider-thumb]:ring-lime-300/30 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-lime-600 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-md dark:[&::-moz-range-thumb]:border-lime-300 dark:[&::-moz-range-thumb]:bg-[#1e293b]`;

// Filled track driven by the --v custom property (0-100)
const fill = `bg-[linear-gradient(to_right,var(--color-lime-600)_calc(var(--v)*1%),var(--color-gray-200)_calc(var(--v)*1%))] dark:bg-[linear-gradient(to_right,var(--color-lime-300)_calc(var(--v)*1%),var(--color-gray-700)_calc(var(--v)*1%))]`;

// Keeps --v in sync with the current value
const sync = `this.parentNode.style.setProperty('--v',(this.value-this.min)/(this.max-this.min)*100)`;

export const sliders: ComponentType = {
  slug: 'sliders',
  name: 'Sliders',
  icon: <IconAdjustmentsHorizontal stroke={1.5} />,
  description: 'Range inputs for selecting a value or a range, with filled tracks, tooltips, steps and icons.',
  variants: [
    {
      id: 'slider-default',
      name: 'Default',
      code: `<div class="w-full max-w-md">
  <label for="slider-default" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Brightness</label>
  <input id="slider-default" type="range" min="0" max="100" value="50" class="h-2 w-full cursor-pointer accent-lime-600 dark:accent-lime-300" />
  <div class="mt-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
    <span>0%</span>
    <span>100%</span>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'slider-filled-track',
      name: 'Filled Track',
      code: `<div class="w-full max-w-md" style="--v:65">
  <div class="mb-3 flex items-center justify-between">
    <label for="slider-filled" class="text-sm font-medium text-gray-900 dark:text-white">Opacity</label>
    <output class="rounded-md bg-lime-100 px-2 py-0.5 text-xs font-semibold text-lime-700 dark:bg-lime-900/30 dark:text-lime-300">65%</output>
  </div>
  <input id="slider-filled" type="range" min="0" max="100" value="65"
    oninput="${sync};this.parentNode.querySelector('output').textContent=this.value+'%'"
    class="h-2 ${base} ${fill} ${thumb}" />
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'slider-tooltip',
      name: 'Value Tooltip',
      code: `<div class="w-full max-w-md pt-10">
  <div class="relative" style="--v:40">
    <span class="pointer-events-none absolute -top-10 left-[calc(var(--v)*1%+10px-var(--v)*0.2px)] -translate-x-1/2 rounded-lg bg-gray-900 px-2 py-1 text-xs font-semibold text-white shadow-lg after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-gray-900 dark:bg-lime-300 dark:text-gray-900 dark:after:border-t-lime-300">40</span>
    <input type="range" min="0" max="100" value="40" aria-label="Volume"
      oninput="${sync};this.previousElementSibling.textContent=this.value"
      class="block h-2 ${base} ${fill} ${thumb}" />
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'slider-sizes',
      name: 'Sizes & States',
      code: `<div class="w-full max-w-md space-y-6">
  <div style="--v:30">
    <label class="mb-2 block text-xs font-medium text-gray-500 dark:text-gray-400">Small</label>
    <input type="range" min="0" max="100" value="30" oninput="${sync}"
      class="h-1 ${base} ${fill} [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-lime-600 [&::-webkit-slider-thumb]:shadow dark:[&::-webkit-slider-thumb]:bg-lime-300 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-lime-600 dark:[&::-moz-range-thumb]:bg-lime-300" />
  </div>
  <div style="--v:55">
    <label class="mb-2 block text-xs font-medium text-gray-500 dark:text-gray-400">Medium</label>
    <input type="range" min="0" max="100" value="55" oninput="${sync}"
      class="h-2 ${base} ${fill} ${thumb}" />
  </div>
  <div style="--v:80">
    <label class="mb-2 block text-xs font-medium text-gray-500 dark:text-gray-400">Large</label>
    <input type="range" min="0" max="100" value="80" oninput="${sync}"
      class="h-3 ${base} ${fill} [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-lime-600 [&::-webkit-slider-thumb]:shadow-lg dark:[&::-webkit-slider-thumb]:border-[#1e293b] dark:[&::-webkit-slider-thumb]:bg-lime-300 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-lime-600 [&::-moz-range-thumb]:shadow-lg dark:[&::-moz-range-thumb]:border-[#1e293b] dark:[&::-moz-range-thumb]:bg-lime-300" />
  </div>
  <div style="--v:45">
    <label class="mb-2 block text-xs font-medium text-gray-400 dark:text-gray-500">Disabled</label>
    <input type="range" min="0" max="100" value="45" disabled
      class="h-2 w-full cursor-not-allowed appearance-none rounded-full bg-gray-200 opacity-60 dark:bg-gray-700 [&::-moz-range-track]:bg-transparent [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-300 [&::-webkit-slider-thumb]:bg-white dark:[&::-webkit-slider-thumb]:border-gray-600 dark:[&::-webkit-slider-thumb]:bg-gray-800 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-gray-300 [&::-moz-range-thumb]:bg-white dark:[&::-moz-range-thumb]:border-gray-600 dark:[&::-moz-range-thumb]:bg-gray-800" />
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'slider-steps',
      name: 'Steps with Ticks',
      code: `<div class="w-full max-w-md" style="--v:50">
  <label for="slider-steps" class="mb-3 block text-sm font-medium text-gray-900 dark:text-white">Experience level</label>
  <input id="slider-steps" type="range" min="0" max="100" step="25" value="50" oninput="${sync}"
    class="block h-2 ${base} ${fill} ${thumb}" />
  <div class="mt-2 flex justify-between px-2.5 text-xs text-gray-500 dark:text-gray-400">
    <span class="relative flex w-0 flex-col items-center"><span class="mb-1 h-1.5 w-px bg-gray-300 dark:bg-gray-600"></span>Intern</span>
    <span class="relative flex w-0 flex-col items-center"><span class="mb-1 h-1.5 w-px bg-gray-300 dark:bg-gray-600"></span>Junior</span>
    <span class="relative flex w-0 flex-col items-center"><span class="mb-1 h-1.5 w-px bg-gray-300 dark:bg-gray-600"></span>Mid</span>
    <span class="relative flex w-0 flex-col items-center"><span class="mb-1 h-1.5 w-px bg-gray-300 dark:bg-gray-600"></span>Senior</span>
    <span class="relative flex w-0 flex-col items-center"><span class="mb-1 h-1.5 w-px bg-gray-300 dark:bg-gray-600"></span>Lead</span>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'slider-icons',
      name: 'With Icons',
      code: `<div class="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
  <div class="flex items-center gap-3" style="--v:70">
    <svg class="h-5 w-5 flex-none text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5L6 9H2v6h4l5 4V5z" /></svg>
    <input type="range" min="0" max="100" value="70" aria-label="Volume"
      oninput="${sync};this.parentNode.querySelector('output').textContent=this.value"
      class="h-1.5 ${base} ${fill} ${thumb}" />
    <svg class="h-5 w-5 flex-none text-lime-600 dark:text-lime-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" /></svg>
    <output class="w-8 flex-none text-right text-sm font-semibold tabular-nums text-gray-900 dark:text-white">70</output>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'slider-dual-range',
      name: 'Dual Range',
      code: `<div class="w-full max-w-md">
  <div class="mb-4 flex items-center justify-between">
    <span class="text-sm font-medium text-gray-900 dark:text-white">Price range</span>
    <span class="text-sm text-gray-500 dark:text-gray-400"><span data-min class="font-semibold text-gray-900 dark:text-white">$200</span> – <span data-max class="font-semibold text-gray-900 dark:text-white">$750</span></span>
  </div>
  <div class="relative h-5" style="--a:20;--b:75">
    <div class="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    <div class="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-lime-600 dark:bg-lime-300 left-[calc(var(--a)*1%+10px-var(--a)*0.2px)] right-[calc(100%-var(--b)*1%-10px+var(--b)*0.2px)]"></div>
    <input type="range" min="0" max="1000" step="10" value="200" aria-label="Minimum price"
      oninput="this.value=Math.min(this.value,this.nextElementSibling.value-50);this.parentNode.style.setProperty('--a',this.value/10);this.closest('.max-w-md').querySelector('[data-min]').textContent='$'+this.value"
      class="pointer-events-none absolute inset-0 h-5 ${base} ${thumb} [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto" />
    <input type="range" min="0" max="1000" step="10" value="750" aria-label="Maximum price"
      oninput="this.value=Math.max(this.value,+this.previousElementSibling.value+50);this.parentNode.style.setProperty('--b',this.value/10);this.closest('.max-w-md').querySelector('[data-max]').textContent='$'+this.value"
      class="pointer-events-none absolute inset-0 h-5 ${base} ${thumb} [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto" />
  </div>
  <div class="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
    <span>$0</span>
    <span>$1,000</span>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
  ],
};
