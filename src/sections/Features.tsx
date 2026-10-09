import React from 'react';
import { FeatureCard } from '../components/FeatureCard';
import { 
  CheckSquare, 
  Calendar, 
  Quote, 
  Repeat, 
  ShieldCheck, 
  BarChart3 
} from 'lucide-react';

export const Features: React.FC = () => {
  const featureList = [
    {
      icon: CheckSquare,
      title: "Personalized Daily Tasks",
      description: "Define 1 to 3 non-negotiable daily objectives tailored to your personal goals. Clean interface designed to eliminate decision fatigue.",
      badge: "Core Feature"
    },
    {
      icon: Calendar,
      title: "21-Day Progress Tracking",
      description: "A visual 21-day matrix grid that fills up as you maintain your daily streak. Watch your commitment take tangible shape day by day.",
      badge: "21-Day System"
    },
    {
      icon: Quote,
      title: "Daily Motivational Messages",
      description: "Carefully curated, grounded morning quotes focused on discipline, resilience, and clarity rather than empty cheerleading.",
      badge: "Mindset"
    },
    {
      icon: Repeat,
      title: "Habit & Routine Building",
      description: "Anchor new healthy habits (morning light, deep work blocks, screen detox) onto existing triggers to build lasting routines.",
      badge: "Behavioral Design"
    },
    {
      icon: ShieldCheck,
      title: "Accountability & Completion",
      description: "Instant visual feedback and daily completion check-ins that validate your effort and keep your momentum intact.",
      badge: "Consistency"
    },
    {
      icon: BarChart3,
      title: "Progress Review & Reflection",
      description: "End-of-day 60-second reflection journal to evaluate what went well, identify friction points, and prepare for tomorrow.",
      badge: "Reflection"
    }
  ];

  return (
    <section id="features" className="py-20 bg-graph-grid sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <span>Designed for Intentional Living</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Built for action. Free from distraction.
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Every feature in the Rebuild Android app is engineered to remove friction and keep your focus on execution.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featureList.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              badge={feature.badge}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
