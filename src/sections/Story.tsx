import React from 'react';
import { Heart, Compass, ShieldAlert, Award } from 'lucide-react';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-graph-grid sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Story Text */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Sincere & Relatable</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
              Built out of a genuine need for focus and routine recovery.
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              We live in a world designed to fragment our attention. Between endless phone notifications, doom-scrolling, and unrealistic self-improvement expectations, most people start every Monday with grandiose plans only to burn out by Thursday.
            </p>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Rebuild was born out of personal frustration with overly complex productivity trackers that demand hours of customization. We needed a simple Android application that acts like a trusted anchor — reminding us to show up for 21 days straight and focus on what truly matters.
            </p>

            {/* MANDATORY STATEMENT CALLOUT BOX */}
            <div className="p-6 sm:p-8 rounded-3xl bg-blue-50 dark:bg-blue-950/30 border border-blue-500/30 text-zinc-900 dark:text-white relative space-y-2">
              <div className="w-1.5 h-full bg-blue-600 text-white absolute left-0 top-0 rounded-l-3xl"></div>
              <p className="text-base sm:text-lg font-bold italic leading-snug">
                &ldquo;Rebuild is not about changing your whole life overnight. It&apos;s about making one meaningful choice today, and choosing again tomorrow.&rdquo;
              </p>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 font-mono">
                — Core Rebuild Principle
              </p>
            </div>

          </div>

          {/* Right Visual Stats & Values */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6">
              <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Our Core Principles</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-mono flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Consistency Over Perfection</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      A missed day is a data point, not a failure. Get back on track immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="w-8 h-8 rounded-xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-mono flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Zero Digital Noise</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      No social feeds, no leaderboards, no vanity metrics. Just your personal commitment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="w-8 h-8 rounded-xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-mono flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Android Native Efficiency</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      Lightweight, fast load times, offline-friendly, and respectful of battery life.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-100 dark:border-zinc-800">
                <span className="flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>100% Ad-Free</span>
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Verified APK Distribution</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
