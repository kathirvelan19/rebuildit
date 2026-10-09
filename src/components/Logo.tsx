import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div className={`relative ${iconSizes[size]} flex items-center justify-center`}>
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-500/30 rounded-xl blur-md"></div>
        
        {/* Main Logo Container */}
        <div className="relative w-full h-full bg-zinc-950 dark:bg-zinc-900 rounded-xl p-1.5 border border-zinc-800 dark:border-zinc-700/60 shadow-md flex items-center justify-center group overflow-hidden">
          {/* Accent corner light */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500/20 rounded-full blur-xs"></div>
          
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transition-transform duration-300 group-hover:scale-105">
            {/* Geometric R & Upward Momentum Arc */}
            <path
              d="M10 32V8H22C26.4183 8 30 11.5817 30 16C30 20.4183 26.4183 24 22 24H18"
              stroke="#2563eb"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 22L30 34"
              stroke="#2563eb"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Momentum dot representing Day 21 target */}
            <circle cx="30" cy="8" r="3" fill="#2563eb" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-extrabold tracking-tight text-zinc-900 dark:text-white ${textSizes[size]}`}>
            Rebuild<span className="text-blue-600 font-black">.</span>
          </span>
          {size !== 'sm' && (
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mt-0.5">
              21 Days Routine
            </span>
          )}
        </div>
      )}
    </div>
  );
};

