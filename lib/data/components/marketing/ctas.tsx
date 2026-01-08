import { IconSpeakerphone } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const ctas: ComponentType = {
  slug: 'ctas',
  name: 'CTAs',
  icon: <IconSpeakerphone stroke={ 1.5} />,
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
};
