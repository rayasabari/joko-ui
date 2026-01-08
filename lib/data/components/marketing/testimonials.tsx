import { IconMessageCircle2 } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const testimonials: ComponentType = {
  slug: 'testimonials',
  name: 'Testimonials',
  icon: <IconMessageCircle2 stroke={ 1.5} />,
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
};
