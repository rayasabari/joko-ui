'use client';

import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import CodeBlock from './CodeBlock';

import {
  IconDeviceMobile,
  IconDeviceTablet,
  IconDeviceLaptop,
  IconDeviceDesktop,
  IconMaximize,
  IconEye,
  IconCode
} from '@tabler/icons-react';

interface ComponentPreviewProps {
  children: React.ReactNode;
  title?: string;
  code?: string;
}

type PreviewSize = 'mobile' | 'sm' | 'md' | 'lg' | 'full';
type Tab = 'preview' | 'code';

const sizeConfig: Record<PreviewSize, { width: string; label: string; icon: React.ReactNode }> = {
  mobile: { width: '320px', label: 'Mobile', icon: <IconDeviceMobile size={16} stroke={1.5} /> },
  sm: { width: '640px', label: 'Small', icon: <IconDeviceTablet size={16} stroke={1.5} /> },
  md: { width: '768px', label: 'Medium', icon: <IconDeviceLaptop size={16} stroke={1.5} /> },
  lg: { width: '1024px', label: 'Large', icon: <IconDeviceDesktop size={16} stroke={1.5} /> },
  full: { width: '100%', label: 'Full', icon: <IconMaximize size={16} stroke={1.5} /> },
};

export default function ComponentPreview({ children, code }: ComponentPreviewProps) {
  const [size, setSize] = useState<PreviewSize>('full');
  const [activeTab, setActiveTab] = useState<Tab>('preview');
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const copyToClipboard = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="preview-container overflow-hidden rounded-xl border border-border bg-card">
      {/* Header with tabs */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-1">
          {/* Tabs */}
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2
              ${activeTab === 'preview'
                ? 'dark:bg-gray-700 bg-gray-200 dark:text-white'
                : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            title="Preview"
          >
            <IconEye size={16} stroke={1.5} />
            <span>Preview</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2
              ${activeTab === 'code'
                ? 'dark:bg-gray-700 bg-gray-200 dark:text-white'
                : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            title="HTML"
          >
            <IconCode size={16} stroke={1.5} />
            <span>HTML</span>
          </button>

          {/* Copy Button (Desktop View) - Only visible in code mode */}
          {activeTab === 'code' && (
            <div className="hidden sm:flex items-center gap-1 ml-auto">
              <button
                onClick={copyToClipboard}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all
                ${copied
                    ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                    : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="hidden sm:inline">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Size Controls - Only visible in preview mode */}
        {activeTab === 'preview' ? (
          <div className="hidden sm:flex items-center gap-1 ml-auto">
            {(Object.keys(sizeConfig) as PreviewSize[]).map((sizeKey) => (
              <button
                key={sizeKey}
                onClick={() => setSize(sizeKey)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all
                  ${size === sizeKey
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                title={sizeConfig[sizeKey].label}
              >
                <span className="hidden sm:inline">{sizeConfig[sizeKey].label}</span>
              </button>
            ))}
          </div>
        ) : (
          // Copy button (Mobile View) - Only visible in code mode
          <div className="flex items-center gap-1 ml-auto">
            <button
              onClick={copyToClipboard}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all sm:hidden
                ${copied
                  ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                  : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
                }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="relative">
        {activeTab === 'preview' ? (
          <div className={`preview-frame overflow-x-auto min-h-[300px] flex items-center justify-center p-8 ${theme === 'dark' ? 'dark bg-[#1e293b]' : 'bg-[#f8fafc]'}`}>
            <div
              className="w-full transition-all duration-300 ease-in-out mx-auto"
              style={{ maxWidth: sizeConfig[size].width }}
            >
              {children}
            </div>
          </div>
        ) : (
          <div>
            {code && <CodeBlock code={code} language="html" />}
          </div>
        )}
      </div>
    </div>
  );
}
