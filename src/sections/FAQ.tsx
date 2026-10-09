import React, { useState } from 'react';
import { AccordionItem } from '../components/AccordionItem';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqList = [
    {
      question: "What is Rebuild?",
      answer: "Rebuild is a minimal, distraction-free Android application designed to help you regain your routine, build daily discipline, and track your consistency over a focused 21-day period."
    },
    {
      question: "How do I download and install the APK?",
      answer: "Click any 'Download APK' button on this website to open our official Google Drive sharing link. Once the APK file downloads to your Android device, tap open the file. If your device prompts that installation from unknown sources is blocked, go to Settings -> Security (or browser permissions) and enable 'Allow from this source'."
    },
    {
      question: "Is Rebuild available on iPhone?",
      answer: "Rebuild is currently developed exclusively for Android devices. An iOS version or progressive web app is under consideration for future expansion, but not available at this moment."
    },
    {
      question: "Is the app free?",
      answer: "Yes, Rebuild is 100% free to download and install. There are no mandatory subscriptions or paywalls to start your 21-day routine commitment."
    },
    {
      question: "What happens if I miss a day?",
      answer: "Rebuild focuses on momentum over perfection. If you miss a day, the app allows you to log an honest reflection, adjust your daily load, and resume your commitment immediately without penalty or guilt."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-graph-grid sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Everything you need to know about downloading, installing, and using the Rebuild Android app.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqList.map((item, idx) => (
            <AccordionItem
              key={idx}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
