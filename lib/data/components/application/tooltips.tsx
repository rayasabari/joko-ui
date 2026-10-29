import { ComponentType } from "../types";

export const tooltips: ComponentType = {
  slug: "tooltips",
  name: "Tooltips",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  ),
  description:
    "Sleek, animated tooltips to provide additional context on hover.",
  variants: [
    {
      id: "tooltip-premium",
      name: "Premium Dark Tooltip",
      code: `<div class="flex items-center justify-center py-10">
  <div class="group relative inline-block">
    <button class="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
      <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
      Hover for info
    </button>
    
    <!-- Tooltip -->
    <div class="absolute bottom-full left-1/2 mb-3 -translate-x-1/2 translate-y-2 scale-95 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 pointer-events-none">
      <div class="relative rounded-xl bg-gray-900 px-4 py-2 text-xs font-bold text-white shadow-2xl dark:bg-gray-800">
        <span class="block whitespace-nowrap">Great! You discovered the tooltip.</span>
        <!-- Arrow -->
        <svg class="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6L0 0H12L6 6Z" fill="currentColor" class="text-gray-900 dark:text-gray-800" />
        </svg>
      </div>
    </div>
  </div>
</div>`,
      contributor: "faishalmhmd",
    },
    {
      id: "tooltip-colored",
      name: "Lime Accent Tooltip",
      code: `<div class="flex items-center justify-center py-10">
  <div class="group relative inline-block">
    <button class="inline-flex items-center gap-2 rounded-xl border-2 border-lime-500 bg-transparent px-6 py-3 text-sm font-bold text-lime-600 transition-all hover:bg-lime-50 dark:text-lime-400 dark:hover:bg-lime-900/20">
      Settings
    </button>
    
    <!-- Tooltip -->
    <div class="absolute top-full left-1/2 mt-3 -translate-x-1/2 -translate-y-2 scale-95 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 pointer-events-none">
      <div class="relative rounded-xl bg-lime-600 px-4 py-2 text-xs font-bold text-white shadow-xl">
        Manage your preferences
        <!-- Arrow -->
        <svg class="absolute bottom-full left-1/2 -translate-x-1/2 -mb-0.5" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0L12 6H0L6 0Z" fill="currentColor" class="text-lime-600" />
        </svg>
      </div>
    </div>
  </div>
</div>`,
      contributor: "faishalmhmd",
    },
  ],
};
