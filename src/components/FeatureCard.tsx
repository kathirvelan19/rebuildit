import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, badge }) => {
  return (
    <div className="group relative p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-blue-500/40 dark:hover:border-blue-400/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Subtle Blue corner hover accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600 text-white/0 group-hover:bg-blue-50 dark:bg-blue-950/30 rounded-bl-full transition-all duration-500 blur-xl pointer-events-none"></div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 group-hover:bg-blue-600 text-white group-hover:text-zinc-950 flex items-center justify-center transition-colors duration-300 shadow-xs">
            <Icon className="w-6 h-6 stroke-[2]" />
          </div>

          {badge && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 dark:bg-blue-600/10 dark:bg-blue-600/20 text-blue-700 dark:text-blue-400 border border-blue-500/20">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center text-xs font-semibold text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
        <span>Android Native Feature</span>
      </div>
    </div>
  );
};
