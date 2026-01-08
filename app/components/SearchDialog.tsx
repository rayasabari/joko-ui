'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IconSearch, IconX } from '@tabler/icons-react';
import { applicationComponents, marketingComponents } from '@/lib/data/components';
import ComponentCard from './ComponentCard';

interface ComponentDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComponentDialog({ isOpen, onClose }: ComponentDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const allComponents = [
    ...applicationComponents.map((comp) => ({
      ...comp,
      category: 'application'
    })),
    ...marketingComponents.map((comp) => ({
      ...comp,
      category: 'marketing'
    }))
  ];

  const filteredComponents = allComponents.filter(comp =>
    comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const dialogContent = (
    <>
      {/* Blur Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      >
        <div
          className="bg-white dark:bg-gray-800 w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden rounded-xl shadow-lg animate-in fade-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Search */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-foreground">
                Browse Components
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <IconX size={24} className="text-muted-foreground" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <IconSearch
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
                autoFocus
              />
            </div>
          </div>

          {/* Components List */}
          <div className="flex-1 overflow-y-auto p-6">
            {filteredComponents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredComponents.map((component) => (
                  <div key={`${component.category}-${component.slug}`} onClick={onClose}>
                    <ComponentCard
                      title={component.name}
                      count={component.variants.length}
                      icon={component.icon}
                      href={`/components/${component.category}/${component.slug}`}
                      description={component.description}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  No components found
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
                  Try adjusting your search query or browse all available components
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border bg-muted/30">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''} available
              </span>
              <span className="text-xs">
                Press <kbd className="px-2 py-1 rounded bg-background border border-border">ESC</kbd> to close
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(dialogContent, document.body);
}
