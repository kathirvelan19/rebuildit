import React from 'react';
import { Download, ExternalLink, ShieldCheck, Smartphone, CheckCircle, Info } from 'lucide-react';
import { APP_CONFIG } from '../config/app';

interface DownloadProps {
  onOpenDownload: () => void;
}

export const DownloadSection: React.FC<DownloadProps> = ({ onOpenDownload }) => {
  return (
    <section id="download" className="py-20 bg-graph-grid sm:py-28 relative overflow-hidden bg-radial-gradient">
      
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-50 dark:bg-blue-950/30 dark:bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

          <div className="relative p-8 sm:p-14 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl text-center space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Official Android Release</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Your next 21 days can start today.
            </h2>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Take the first step toward a more focused, disciplined, and intentional routine.
            </p>

            {/* Main CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-bold border border-zinc-800 dark:border-zinc-200 font-bold text-base shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Download className="w-5 h-5" />
                <span>Download Rebuild APK ({APP_CONFIG.fileSize})</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </button>
            </div>

            {/* Note & Security details */}
            <div className="pt-4 space-y-3">
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Android APK · Android 8.0+ devices only</span>
              </p>

              <div className="max-w-xl mx-auto p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 text-left">
                <div className="flex items-center gap-2 font-bold text-zinc-800 dark:text-zinc-200">
                  <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Installation Permission Notice:</span>
                </div>
                <p className="leading-relaxed pl-6">
                  Android may request permission to &quot;Install apps from unknown sources&quot; when launching the downloaded APK file. Rebuild is distributed via an official Google Drive link. Enable browser installation permissions when prompted.
                </p>
              </div>
            </div>

            {/* Key feature chips */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Free to download
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Zero advertisements
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Offline habit tracking
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
