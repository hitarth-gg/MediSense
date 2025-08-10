import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export default function DebugTheme() {
  const { isDarkMode } = useTheme();

  return (
    <div className="fixed top-0 right-0 z-50 p-4 max-w-sm bg-white dark:bg-gray-900 border-2 border-red-500 text-black dark:text-white shadow-lg">
      <div className="space-y-2 text-sm">
        <div className="font-bold text-red-600 dark:text-red-400">Theme Debug Info</div>
        <div className="text-gray-800 dark:text-gray-200">isDarkMode: {isDarkMode ? 'true' : 'false'}</div>
        <div className="text-gray-800 dark:text-gray-200">HTML class: {document.documentElement.className}</div>
        
        {/* CSS Variable Tests */}
        <div className="space-y-1">
          <div className="font-medium text-blue-600 dark:text-blue-400">CSS Variables:</div>
          <div style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }} className="p-2 border border-gray-300 dark:border-gray-600">
            Background: var(--color-background)
          </div>
          <div style={{ color: 'var(--color-foreground)' }} className="p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
            Foreground: var(--color-foreground)
          </div>
          <div style={{ backgroundColor: 'var(--color-muted)', color: 'var(--color-muted-foreground)' }} className="p-2 border border-gray-300 dark:border-gray-600">
            Muted: var(--color-muted)
          </div>
        </div>

        {/* Tailwind Class Tests */}
        <div className="space-y-1">
          <div className="font-medium text-green-600 dark:text-green-400">Tailwind Classes:</div>
          <div className="p-2 bg-background text-foreground border border-gray-300 dark:border-gray-600">
            bg-background text-foreground
          </div>
          <div className="p-2 bg-muted text-muted-foreground border border-gray-300 dark:border-gray-600">
            bg-muted text-muted-foreground  
          </div>
          <div className="p-2 bg-secondary text-secondary-foreground border border-gray-300 dark:border-gray-600">
            bg-secondary text-secondary-foreground
          </div>
        </div>

        {/* Force Colors Test */}
        <div className="space-y-1">
          <div className="font-medium text-purple-600 dark:text-purple-400">Force Colors:</div>
          <div className="p-2 border border-gray-300 dark:border-gray-600" style={{ backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb', color: isDarkMode ? '#f3f4f6' : '#111827' }}>
            Force: {isDarkMode ? 'dark bg, light text' : 'light bg, dark text'}
          </div>
        </div>
      </div>
    </div>
  );
}
