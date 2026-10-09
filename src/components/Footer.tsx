import React from 'react';
import { Logo } from './Logo';
import { Download, Mail, ArrowUp } from 'lucide-react';
import { APP_CONFIG } from '../config/app';

interface FooterProps {
  onOpenDownload: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload, onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Rebuild your routine, regain your focus, and become consistent again — one day at a time. Designed for high-intent Android users seeking clarity and daily momentum.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-600 text-white animate-pulse"></span>
              <span>Android Exclusive Release · {APP_CONFIG.version}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="#why-rebuild" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Why Rebuild?
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  App Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#preview" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Interactive Dashboard
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Actions & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-white">
              Download & Support
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Get the official Android APK file directly via our verified Google Drive distribution link.
            </p>

            <button
              onClick={onOpenDownload}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-bold border border-zinc-800 dark:border-zinc-200 font-bold text-xs shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download Rebuild APK</span>
            </button>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <a href={`mailto:${APP_CONFIG.contactEmail}`} className="hover:underline">
                {APP_CONFIG.contactEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {currentYear} Rebuild App. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-zinc-300 dark:text-zinc-800">•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
