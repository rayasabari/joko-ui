# 🧩 Adding Components & Variants

### 1️⃣ Adding a New Variant to an Existing Component
1. Locate the component file in `lib/data/components/[category]/[component].tsx` (e.g., `lib/data/components/application/buttons.tsx`).
2. Add a new object to the `variants` array:
   ```typescript
   {
     id: 'variant-slug',
     name: 'Variant Name',
     code: `<button class="...">...</button>`, // HTML code with Tailwind classes
   }
   ```

### 2️⃣ Adding a New Component to an Existing Category
1. Create a new file: `lib/data/components/[category]/[slug].tsx`.
2. Define the component using `ComponentType`:
   ```typescript
   import { ComponentType } from '../types';
   export const myComponent: ComponentType = {
     slug: 'my-component',
     name: 'My Component',
     icon: <IconName stroke={1.5} />, // Import icon from @tabler/icons-react
     description: 'Description of the component',
     variants: [ ... ]
   };
   ```
3. Register the component in `lib/data/components/[category]/index.ts`:
   - Import your component.
   - Add it to the exported array (e.g., `applicationComponents`).

### 3️⃣ Adding a New Category
1. Create a new folder: `lib/data/components/[new-category]`.
2. Create component files inside this folder (see step 2).
3. Create an `index.ts` file in the new folder to export the components array.
4. Update `lib/data/components/index.tsx`:
   - Import the new category array.
   - Import a suitable icon for the category.
   - Add the new category object to the `getAllComponents` function.
   - Update helper functions: `getComponentBySlug`, `getComponentsByCategory`, and `getTotalComponentCount` to include the new category.
