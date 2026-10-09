import React, { useState } from 'react';
import { CheckCircle2, Circle, Flame, Calendar, Sparkles, Trophy, BookOpen, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AppPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tasks' | 'matrix' | 'reflection'>('tasks');
  const [tasks, setTasks] = useState([
    { id: 1, text: "Morning 10-Min Sunlight & Hydration", category: "Health", completed: true },
    { id: 2, text: "90 Minutes Deep Work (No Distractions)", category: "Focus", completed: true },
    { id: 3, text: "Read 10 Pages of Self-Development Book", category: "Mindset", completed: false },
    { id: 4, text: "Screen-Free 30 Mins Before Sleep", category: "Recovery", completed: false },
  ]);

  const [journalText, setJournalText] = useState(
    "Felt focused during the 90-min deep work session. Tomorrow I want to make sure I get outside earlier!"
  );

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        const nextCompleted = !t.completed;
        if (nextCompleted) {
          confetti({
            particleCount: 50,
            spread: 50,
            origin: { y: 0.6 },
            colors: ['#2563eb', '#1d4ed8', '#3b82f6']
          });
        }
        return { ...t, completed: nextCompleted };
      }
      return t;
    }));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  return (
    <section id="preview" className="py-20 bg-graph-grid sm:py-28 relative bg-stone-100/60 dark:bg-zinc-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Interactive Android Dashboard Preview</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Experience the Rebuild Interface
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Test the live interactive dashboard below. Switch tabs, check off sample tasks, and see how your 21-day momentum is calculated.
          </p>

          <div className="inline-block px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-semibold">
            * Interactive Website Preview — Re-creates the native Rebuild Android App layout.
          </div>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Top Android App Bar */}
          <div className="p-6 bg-zinc-900 text-white flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white text-zinc-950 font-black flex items-center justify-center text-sm shadow-md">
                21
              </div>
              <div>
                <h3 className="font-extrabold text-base tracking-tight text-white">Rebuild Protocol</h3>
                <p className="text-xs text-zinc-400">Day 7 of 21 · Active Sprint</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold flex items-center gap-1.5">
                <Flame className="w-4 h-4 fill-amber-400" />
                <span>7 Days Streak</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
            <button
              onClick={() => setActiveTab('tasks')}
              className={`flex-1 py-3.5 px-4 text-xs font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${
                activeTab === 'tasks'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400 font-mono bg-white dark:bg-zinc-900'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Today&apos;s Tasks ({completedCount}/{tasks.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('matrix')}
              className={`flex-1 py-3.5 px-4 text-xs font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${
                activeTab === 'matrix'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400 font-mono bg-white dark:bg-zinc-900'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>21-Day Matrix</span>
            </button>

            <button
              onClick={() => setActiveTab('reflection')}
              className={`flex-1 py-3.5 px-4 text-xs font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${
                activeTab === 'reflection'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400 font-mono bg-white dark:bg-zinc-900'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Daily Journal</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {activeTab === 'tasks' && (
              <div className="space-y-6">
                {/* Progress Card */}
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Daily Execution Rate</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Complete all tasks to advance your streak</p>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="w-32 h-3 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 text-white transition-all duration-500" 
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 font-mono w-10 text-right">
                      {progressPercent}%
                    </span>
                  </div>
                </div>

                {/* Task List */}
                <div className="space-y-3">
                  {tasks.map(task => (
                    <div
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        task.completed
                          ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-500/40 text-zinc-900 dark:text-white'
                          : 'bg-zinc-50 dark:bg-zinc-800/40 border-zinc-200 dark:border-zinc-800 hover:border-blue-400/50'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        {task.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-zinc-400 shrink-0" />
                        )}
                        <span className={`text-sm font-semibold ${task.completed ? 'line-through text-zinc-500 dark:text-zinc-400' : ''}`}>
                          {task.text}
                        </span>
                      </div>

                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        {task.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'matrix' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">21-Day Habit Commitment Grid</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Days 1 through 7 completed</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono flex items-center gap-1">
                    <Trophy className="w-4 h-4" /> 7 / 21 Days
                  </span>
                </div>

                {/* 21 Grid items */}
                <div className="grid grid-cols-7 gap-2.5 sm:gap-3">
                  {Array.from({ length: 21 }, (_, i) => {
                    const dayNum = i + 1;
                    const isDone = dayNum <= 7;
                    const isCurrent = dayNum === 7;

                    return (
                      <div
                        key={dayNum}
                        className={`aspect-square rounded-2xl flex flex-col items-center justify-center font-mono text-xs font-bold transition-all ${
                          isDone
                            ? 'bg-blue-600 text-white text-zinc-950 shadow-md shadow-blue-500/20'
                            : isCurrent
                            ? 'bg-blue-600/10 dark:bg-blue-600/20 border-2 border-blue-500 text-blue-600 dark:text-blue-400 animate-pulse'
                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-600 border border-zinc-200 dark:border-zinc-800'
                        }`}
                      >
                        <span>{dayNum}</span>
                        {isDone && <CheckCircle2 className="w-3.5 h-3.5 mt-0.5" />}
                      </div>
                    );
                  })}
                </div>

                <div className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed flex items-center justify-between">
                  <span>Phase 1 (Days 1-7): Foundation Complete</span>
                  <span className="text-blue-600 dark:text-blue-400 font-mono font-bold">Phase 2 Unlocked</span>
                </div>
              </div>
            )}

            {activeTab === 'reflection' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Daily Evening Reflection</h4>
                  <span className="text-xs text-zinc-400">Day 7 Journal</span>
                </div>

                <textarea
                  value={journalText}
                  onChange={(e) => setJournalText(e.target.value)}
                  rows={4}
                  className="w-full p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-hidden resize-none"
                  placeholder="Write your evening thoughts here..."
                ></textarea>

                <div className="flex justify-end">
                  <button 
                    onClick={() => {
                      confetti({ particleCount: 30, origin: { y: 0.7 } });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-bold border border-zinc-800 dark:border-zinc-200 font-bold text-xs shadow-xs"
                  >
                    Save Reflection
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
