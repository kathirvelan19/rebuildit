import React from 'react';
import { Target, Compass, RefreshCw, Zap, Sparkles } from 'lucide-react';

export const WhyRebuild: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: "Eliminate Overwhelm",
      description: "Stop cluttering your day with endless to-do lists that generate guilt. Focus on 2-3 core habits that actually move your life forward."
    },
    {
      icon: Compass,
      title: "21-Day Commitment",
      description: "Psychological studies show 21 days is the exact window required to wire new neural pathways. One focused sprint to change your baseline."
    },
    {
      icon: RefreshCw,
      title: "Routine Recovery",
      description: "Fell off track? Rebuild provides a structured daily reset mechanism so a single missed day never spirals into a ruined week."
    },
    {
      icon: Zap,
      title: "Action Over Analysis",
      description: "No complex configuration or setup paralysis. Open the Android app, check your daily protocol, and execute with zero friction."
    }
  ];

  return (
    <section id="why-rebuild" className="py-20 bg-graph-grid sm:py-28 relative bg-stone-100/60 dark:bg-zinc-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Rebuild Was Created</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Break the cycle of unfinished habits.
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Most productivity apps overwhelm you with setup options, tracking charts, and notifications. Rebuild was created to do the exact opposite: strip away the noise and bring back your natural discipline.
          </p>
        </div>

        {/* Featured Quote Highlight Banner */}
        <div className="mb-16 max-w-4xl mx-auto relative group">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center shadow-xl space-y-3">
            <span className="text-4xl font-serif text-blue-600 dark:text-blue-400 leading-none select-none">&ldquo;</span>
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-snug">
              You don&apos;t need a perfect plan. <br className="hidden sm:inline" />
              <span className="text-gradient-blue">You need a fresh start.</span>
            </p>
            <span className="block text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 pt-2">
              — The Rebuild Philosophy
            </span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800/80 shadow-xs hover:shadow-lg hover:border-blue-500/40 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 font-mono flex items-center justify-center font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
