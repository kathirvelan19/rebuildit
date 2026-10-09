import React, { useState } from 'react';
import { Download, ExternalLink, ShieldCheck, AlertCircle, Copy, Check, Info, Smartphone, X } from 'lucide-react';
import { APP_CONFIG, getGoogleDriveDirectDownloadUrl } from '../config/app';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const directUrl = getGoogleDriveDirectDownloadUrl(APP_CONFIG.GOOGLE_DRIVE_FILE_ID);
  const isMissingFileId = !directUrl;

  const handleDownloadClick = () => {
    if (directUrl) {
      window.location.href = directUrl;
    }
  };

  const copyConfigPath = () => {
    navigator.clipboard.writeText('src/config/app.ts');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden text-zinc-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top subtle glow */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-700 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-mono flex items-center justify-center font-bold">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight">Download Rebuild APK</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Android APK · Version {APP_CONFIG.version}</p>
          </div>
        </div>

        {isMissingFileId ? (
          <div className="my-4 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-sm space-y-3">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-600 dark:text-amber-400">Google Drive File ID Required</h4>
                <p className="mt-1 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Please configure your Google Drive APK File ID in the configuration file to enable direct downloads.
                </p>
              </div>
            </div>

            <div className="p-3 bg-zinc-900 dark:bg-zinc-950 rounded-xl border border-zinc-800 text-zinc-200 text-xs font-mono">
              <div className="flex justify-between items-center mb-1 text-zinc-400 text-[11px]">
                <span>Config File Location</span>
                <button 
                  onClick={copyConfigPath}
                  className="flex items-center gap-1 text-blue-400 hover:underline cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? 'Copied!' : 'Copy Path'}
                </button>
              </div>
              <p className="text-blue-400 font-semibold">src/config/app.ts</p>
              <p className="text-zinc-400 mt-1 overflow-x-auto text-[11px]">
                GOOGLE_DRIVE_FILE_ID = &quot;YOUR_FILE_ID&quot;
              </p>
            </div>
          </div>
        ) : (
          <div className="my-4 space-y-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Initiating official Google Drive direct download for the Rebuild APK file.
            </p>

            <button
              onClick={handleDownloadClick}
              className="w-full py-4 px-6 rounded-2xl bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-bold border border-zinc-800 dark:border-zinc-200 font-bold text-base shadow-lg shadow-blue-500/20 flex items-center justify-center gap-3 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-5 h-5" />
              <span>Download Rebuild APK ({APP_CONFIG.fileSize})</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
            </button>
          </div>
        )}

        {/* Security & Installation Notice */}
        <div className="mt-5 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 text-xs space-y-2">
          <div className="flex items-center gap-2 font-semibold text-zinc-800 dark:text-zinc-200">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Android Security & Installation Guide</span>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Android devices require manual permission to install apps outside the Play Store. When opening the downloaded APK, tap <strong>&quot;Allow from this source&quot;</strong> or enable <strong>&quot;Install unknown apps&quot;</strong> in your browser settings.
          </p>
          <div className="pt-1 flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-700/50">
            <Info className="w-3.5 h-3.5 text-zinc-400" />
            <span>Hosted via Google Drive direct download. Compatible with Android devices.</span>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
