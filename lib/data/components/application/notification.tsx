import { IconBell } from "@tabler/icons-react";
import { ComponentType } from "../types";

export const notification: ComponentType = {
  slug: "notification",
  name: "Notification",
  icon: <IconBell stroke={1.5} />,
  description:
    "Display alerts, updates, and activity messages in a compact notification panel.",
  variants: [
    {
      id: "basic-notification",
      name: "Basic Notification",
      code: `<div class="w-full max-w-sm overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
  <div class="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
    <h3 class="text-sm font-semibold text-zinc-900 dark:text-white">Notifications</h3>

    <button class="text-xs font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">Mark all as read</button>
  </div>

  <!-- Unread -->
  <button class="flex w-full gap-3 border-b border-zinc-100 bg-green-50/50 p-4 text-left transition hover:bg-green-50 dark:border-zinc-900 dark:bg-green-950/20 dark:hover:bg-green-950/30">
    <div class="relative shrink-0">
      <div class="flex size-9 items-center justify-center rounded-full bg-green-600 text-sm font-medium text-white dark:bg-green-500">J</div>

      <span class="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-white bg-green-500 dark:border-zinc-950"></span>
    </div>

    <div class="min-w-0 flex-1">
      <p class="text-sm text-zinc-700 dark:text-zinc-300">
        <strong class="font-medium text-zinc-900 dark:text-white"> John </strong>
        mentioned you in a comment.
      </p>

      <time class="mt-1 block text-xs text-zinc-400"> 5 minutes ago </time>
    </div>
  </button>

  <!-- Read -->
  <button class="flex w-full gap-3 border-b border-zinc-100 p-4 text-left transition hover:bg-zinc-50 dark:border-zinc-900 dark:hover:bg-zinc-900">
    <div class="flex size-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm dark:bg-zinc-800">✓</div>

    <div class="min-w-0 flex-1">
      <p class="text-sm text-zinc-700 dark:text-zinc-300">Your payment was successfully processed.</p>

      <time class="mt-1 block text-xs text-zinc-400"> 30 minutes ago </time>
    </div>
  </button>

  <button class="w-full p-3 text-center text-sm font-medium text-zinc-600 transition hover:bg-zinc-50 hover:text-green-600 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-green-400">View all notifications</button>
</div>`,
      contributor: "yuxxeun",
    },
  ],
};
