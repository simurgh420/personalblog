import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-6 h-6 rounded-full
                 transition-all duration-300
                 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700
                 group"
    >
      {/* خورشید */}
      <Sun
        className={`absolute h-5 w-5 text-yellow-500 transition-all duration-500 
        ${
          theme === 'dark'
            ? 'opacity-0 rotate-90 scale-0'
            : 'opacity-100 rotate-0 scale-100'
        }`}
      />
      {/* ماه */}
      <Moon
        className={`absolute h-3 w-3 text-blue-400 transition-all duration-500 
        ${
          theme === 'light'
            ? 'opacity-0 -rotate-90 scale-0'
            : 'opacity-100 rotate-0 scale-100'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
