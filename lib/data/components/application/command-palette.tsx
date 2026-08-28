import { IconCommand } from "@tabler/icons-react";
import { ComponentType } from "../types";

export const command_palette: ComponentType = {
  slug: "command-palette",
  name: "Command Palette",
  icon: <IconCommand stroke={1.5} />,
  description:
    "Quickly search, navigate, and execute actions from a keyboard-friendly command menu.",
  variants: [
    {
      id: "basic-command-palette",
      name: "Basic",
      code: `<div class="w-full max-w-xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-900 dark:bg-gray-900">
  <div class="flex items-center gap-3 border-b border-zinc-200 px-4 dark:border-zinc-800">
    <svg class="size-5 shrink-0 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
    </svg>

    <input type="text" placeholder="Search..." class="h-14 flex-1 bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-white" />

    <kbd class="hidden rounded-md border border-zinc-200 bg-zinc-100 px-2 py-1 text-xs text-zinc-500 sm:block dark:border-zinc-700 dark:bg-gray-900 dark:text-zinc-400"> ESC </kbd>
  </div>

  <div class="p-2">
    <p class="px-3 py-2 text-xs font-medium tracking-wider text-zinc-400 uppercase">Navigation</p>

    <button class="flex w-full items-center gap-3 rounded-lg bg-lime-50 px-3 py-2.5 text-left text-sm text-lime-700 dark:bg-lime-950/40 dark:text-lime-400">
      <span class="flex size-8 items-center justify-center rounded-md bg-lime-600 text-white shadow-sm dark:bg-lime-500">
        <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="m3 11 9-8 9 8M5 10v10h14V10" />
        </svg>
      </span>

      <span class="flex-1 font-medium">Dashboard</span>

      <kbd class="text-xs text-lime-600 dark:text-lime-400">⌘ D</kbd>
    </button>

    <button class="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white">
      <span class="flex size-8 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800">
        <svg class="size-4 text-zinc-500 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 9v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </span>
      <span class="flex-1">Customers</span>

      <kbd class="text-xs text-zinc-400">⌘ C</kbd>
    </button>

    <button class="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white">
      <span class="flex size-8 items-center justify-center rounded-md bg-zinc-100 dark:bg-gray-900">
        <svg class="size-4 text-zinc-500 dark:text-zinc-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.2 7.2 0 0 0-1.7-.98L14.5 2.42A.49.49 0 0 0 14 2h-4a.49.49 0 0 0-.49.42L9.13 5.07c-.61.25-1.18.58-1.7.98l-2.49-1a.49.49 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.64l2.11 1.65c-.04.32-.08.65-.08.98s.03.66.08.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.12.21.37.3.61.22l2.49-1c.52.4 1.09.73 1.7.98l.38 2.65c.04.24.25.42.49.42h4c.24 0 .45-.18.49-.42l.38-2.65c.61-.25 1.18-.58 1.7-.98l2.49 1c.23.08.49-.01.61-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z" />
        </svg>
      </span>

      <kbd class="text-xs text-zinc-400">⌘ S</kbd>
    </button>

    <p class="mt-3 px-3 py-2 text-xs font-medium tracking-wider text-zinc-400 uppercase">Actions</p>

    <button class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white">
      <span class="flex size-8 items-center justify-center rounded-md bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"> + </span>

      <span class="flex-1">Create project</span>
    </button>
  </div>

  <div class="flex items-center gap-4 border-t border-zinc-200 px-4 py-3 text-xs text-zinc-400 dark:border-zinc-800">
    <span>↑↓ Navigate</span>
    <span>↵ Select</span>
    <span>ESC Close</span>
  </div>
</div>`,
      contributor: "yuxxeun",
    },
  ],
};
