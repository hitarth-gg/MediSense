import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {/* Debug indicator */}
      <span className="text-xs text-muted-foreground">
        {isDarkMode ? 'Dark' : 'Light'}
      </span>
      <button
        onClick={toggleTheme}
        className={`
          relative inline-flex h-9 w-9 items-center justify-center rounded-full 
          transition-all duration-300 ease-in-out
          ${isDarkMode 
            ? 'bg-secondary hover:bg-secondary/80 text-amber-400 hover:text-amber-300' 
            : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
          }
          hover:scale-110 active:scale-95 shadow-md hover:shadow-lg
        `}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
      <div className="relative h-5 w-5">
        <Sun 
          className={`
            absolute inset-0 h-5 w-5 transition-all duration-300
            ${isDarkMode 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'
            }
          `} 
        />

        <Moon 
          className={`
            absolute inset-0 h-5 w-5 transition-all duration-300
            ${isDarkMode 
              ? '-rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
            }
          `} 
        />

      </div>
    </button>
    </div>
  );
}
