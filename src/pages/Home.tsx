import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../sections/Hero';
import { WhyRebuild } from '../sections/WhyRebuild';
import { Features } from '../sections/Features';
import { HowItWorks } from '../sections/HowItWorks';
import { Story } from '../sections/Story';
import { AppPreview } from '../sections/AppPreview';
import { DownloadSection } from '../sections/Download';
import { FAQ } from '../sections/FAQ';
import { Footer } from '../components/Footer';
import { DownloadModal } from '../components/DownloadModal';
import { PrivacyPolicyModal } from '../components/PrivacyPolicyModal';
import { handleDirectDownload } from '../config/app';

export const Home: React.FC = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Theme Management (Dark mode default or stored setting)
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('rebuild-theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('rebuild-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('rebuild-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const onDownloadTrigger = () => {
    handleDirectDownload(() => setDownloadModalOpen(true));
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-blue-600 text-white selection:text-zinc-950 transition-colors duration-300">
      
      {/* Fixed Navigation Bar */}
      <Navbar
        onOpenDownload={onDownloadTrigger}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Page Content Sections */}
      <main>
        <Hero onOpenDownload={onDownloadTrigger} />
        <WhyRebuild />
        <Features />
        <HowItWorks onOpenDownload={onDownloadTrigger} />
        <Story />
        <AppPreview />
        <DownloadSection onOpenDownload={onDownloadTrigger} />
        <FAQ />
      </main>

      {/* Page Footer */}
      <Footer
        onOpenDownload={onDownloadTrigger}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
      />

      {/* Interactive Dialog Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

    </div>
  );
};
