import { Logo } from '../components/Logo';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-zinc-900 dark:text-white flex flex-col justify-between p-6 sm:p-10">
      <header className="flex justify-center sm:justify-start">
        <Link to="/">
          <Logo size="md" />
        </Link>
      </header>

      <main className="max-w-md mx-auto text-center space-y-6 py-12">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-mono font-mono text-3xl font-extrabold flex items-center justify-center border border-blue-500/30">
          404
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight">Page Not Found</h1>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved. Return to the main landing page to explore Rebuild.
        </p>

        <div className="pt-4 flex justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-2xl bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-bold border border-zinc-800 dark:border-zinc-200 font-bold text-sm shadow-md shadow-blue-500/20 flex items-center gap-2 transition-transform hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </main>

      <footer className="text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Rebuild App. 21 Days Routine.
      </footer>
    </div>
  );
};
