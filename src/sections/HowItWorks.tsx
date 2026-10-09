import React from 'react';
import { Target, CheckCircle, TrendingUp, Download, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenDownload: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDownload }) => {
  const steps = [
    {
      number: "01",
      icon: Target,
      title: "Choose your goals",
      description: "Set 1 to 3 core daily commitments during onboarding. Keep your focus sharp on what truly matters to you right now."
    },
    {
      number: "02",
      icon: CheckCircle,
      title: "Complete your daily tasks",
      description: "Execute your protocol day by day. Mark off tasks as you finish them and watch your 21-day streak matrix illuminate."
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Review progress & keep growing",
      description: "Perform quick evening reflections to inspect your consistency score, celebrate small wins, and lock in lasting habits."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-graph-grid sm:py-28 relative bg-stone-100/60 dark:bg-zinc-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <span>Simple 3-Step Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            How Rebuild Works
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            No complicated dashboards or steep learning curves. Just three clear steps toward building a disciplined routine.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent -translate-y-6 z-0"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="relative z-10 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 space-y-6 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-blue-600 dark:text-blue-400/80 group-hover:text-blue-400 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 group-hover:bg-blue-600 text-white group-hover:text-zinc-950 flex items-center justify-center transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 font-mono gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner inside How It Works */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-bold border border-zinc-800 dark:border-zinc-200 font-bold text-sm shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Start Your Step 1 Today — Download APK</span>
          </button>
        </div>

      </div>
    </section>
  );
};
