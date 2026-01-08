import { applicationComponents } from './application';
import { marketingComponents } from './marketing';
import { ComponentCategory, ComponentType } from './types';
import { IconLayoutGrid, IconChartLine } from '@tabler/icons-react';

export * from './types';
export { applicationComponents } from './application';
export { marketingComponents } from './marketing';

// Helper functions
export function getAllComponents(): ComponentCategory[] {
  return [
    {
      slug: 'application',
      name: 'Application',
      icon: <IconLayoutGrid stroke={ 1.5} />,
    description: 'UI components for building modern web applications',
    components: applicationComponents,
    },
{
  slug: 'marketing',
    name: 'Marketing',
      icon: <IconChartLine stroke={ 1.5 } />,
  description: 'Marketing and landing page components',
    components: marketingComponents,
    },
  ];
}

export function getComponentBySlug(category: string, slug: string): ComponentType | undefined {
  const components = category === 'application' ? applicationComponents : marketingComponents;
  return components.find((c) => c.slug === slug);
}

export function getComponentsByCategory(category: string): ComponentType[] {
  return category === 'application' ? applicationComponents : marketingComponents;
}

export function getTotalComponentCount(): number {
  const appCount = applicationComponents.reduce((acc, c) => acc + c.variants.length, 0);
  const marketingCount = marketingComponents.reduce((acc, c) => acc + c.variants.length, 0);
  return appCount + marketingCount;
}
