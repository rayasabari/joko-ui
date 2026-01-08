import React from 'react';

// Type definitions for components
export interface ComponentVariant {
  id: string;
  name: string;
  code: string;
}

export interface ComponentType {
  slug: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  variants: ComponentVariant[];
}

export interface ComponentCategory {
  slug: string;
  name: string;
  icon?: React.ReactNode;
  description: string;
  components: ComponentType[];
}
