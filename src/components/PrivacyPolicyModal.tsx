import React from 'react';
import { X, ShieldCheck, Lock, EyeOff } from 'lucide-react';
import { APP_CONFIG } from '../config/app';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-y-auto text-zinc-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-700 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-mono flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight">Privacy Policy</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Rebuild App Privacy & Commitment</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <p>
            At <strong>{APP_CONFIG.name}</strong>, we believe personal transformation requires complete trust and privacy. Your daily routines, personal goals, and reflection notes belong entirely to you.
          </p>

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-white text-xs">Local Data Storage</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Rebuild stores your progress, 21-day matrix state, and task completions locally on your Android device. We do not transmit your habit data to external tracking servers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-zinc-200 dark:border-zinc-700/50">
              <EyeOff className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-white text-xs">No Invasive Tracking or Ads</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  We do not sell user data, sell ad spots, or utilize invasive analytics software. The app is focused entirely on routine building and individual discipline.
                </p>
              </div>
            </div>
          </div>

          <h4 className="font-semibold text-zinc-900 dark:text-white pt-2">Contact Us</h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            If you have questions regarding privacy or app permissions, reach out to us at{' '}
            <a href={`mailto:${APP_CONFIG.contactEmail}`} className="text-blue-600 dark:text-blue-400 font-mono underline font-medium">
              {APP_CONFIG.contactEmail}
            </a>.
          </p>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-bold hover:opacity-90 transition-opacity"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
