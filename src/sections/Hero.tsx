import React, { useState } from 'react';
import { Download, ArrowRight, CheckCircle2, Sparkles, Flame, Shield, Calendar, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const [completedTask, setCompletedTask] = useState<boolean>(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#2563eb', '#1d4ed8', '#3b82f6', '#ffffff'],
    });
  };

  const handleToggleTask = () => {
    const newState = !completedTask;
    setCompletedTask(newState);
    if (newState) {
      triggerConfetti();
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-50 dark:bg-blue-950/30 dark:bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 border border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>21 Days. One Direction. One Commitment.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-zinc-900 dark:text-white">
              Small steps.<br />
              <span className="text-gradient-blue">Real change.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Rebuild your routine, regain your focus, and become consistent again — one day at a time.
            </p>

            {/* Hero CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-bold border border-zinc-800 dark:border-zinc-200 font-bold text-base shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 transition-all duration-200 hover:scale-105 active:scale-95 group"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Rebuild</span>
              </button>

              <button
                onClick={() => scrollToSection('#why-rebuild')}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-zinc-200/80 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-800 font-bold text-base flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>Discover Our Purpose</span>
                <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </button>
            </div>

            {/* Micro Feature Bullet Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>No Ads / Free APK</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>21-Day Habit Protocol</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Daily Accountability</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Dashboard Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Card Shadow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-25 dark:opacity-35 animate-pulse-subtle"></div>

              {/* Main Dashboard Card */}
              <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-6">
                
                {/* Header Mockup */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-mono flex items-center justify-center font-black text-sm">
                      DAY 7
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Today&apos;s Commitment</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Phase 1: Foundation Building</p>
                    </div>
                  </div>

                  {/* Flame Streak Indicator */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold">
                    <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>7 Day Streak</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-zinc-600 dark:text-zinc-400">21-Day Journey Progress</span>
                    <span className="text-blue-600 dark:text-blue-400 font-mono">33% Completed</span>
                  </div>
                  <div className="w-full h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden p-0.5 border border-zinc-200 dark:border-zinc-700/50">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full w-[33%] shadow-xs"></div>
                  </div>
                </div>

                {/* Interactive Task Box */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Daily Tasks Preview</span>
                    <span className="text-[11px] text-blue-600 dark:text-blue-400 font-mono font-mono">Click checkbox to try</span>
                  </div>

                  {/* Task Item 1 (Interactive) */}
                  <div 
                    onClick={handleToggleTask}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-3.5 ${
                      completedTask 
                        ? 'bg-blue-50 dark:bg-blue-950/30 dark:bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 border-blue-500/40 text-zinc-900 dark:text-white' 
                        : 'bg-zinc-50 dark:bg-zinc-800/60 border-zinc-200 dark:border-zinc-800 hover:border-blue-400/50'
                    }`}
                  >
                    <div className={`mt-0.5 w-5 h-5 rounded-lg flex items-center justify-center transition-colors ${
                      completedTask ? 'bg-blue-600 text-white text-zinc-950' : 'border-2 border-zinc-300 dark:border-zinc-600'
                    }`}>
                      {completedTask && <CheckCircle2 className="w-4 h-4 fill-zinc-950 text-blue-400" />}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-semibold ${completedTask ? 'line-through text-zinc-500 dark:text-zinc-400' : ''}`}>
                        30 Minutes Deep Focus Block
                      </p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {completedTask ? '✨ Completed! Great momentum today.' : 'No notifications, complete target without distraction.'}
                      </p>
                    </div>
                  </div>

                  {/* Task Item 2 (Static preview) */}
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800/80 flex items-start gap-3.5 opacity-80">
                    <div className="mt-0.5 w-5 h-5 rounded-lg border-2 border-zinc-300 dark:border-zinc-600"></div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                        Evening Reflection & Log
                      </p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        Answer 2 quick questions on your day&apos;s consistency.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dashboard Banner Note */}
                <div className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700/50 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 text-white animate-ping shrink-0"></div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 font-medium">
                    <strong className="text-zinc-900 dark:text-white">Interactive Web Preview:</strong> Demonstrates the actual Rebuild Android App daily interface logic.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
