import React from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg tracking-tight">{question}</span>
        <div className={`p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-mono' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div className="px-5 sm:px-6 pb-6 pt-0 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/60 animate-in fade-in duration-200">
          <p className="pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
};
