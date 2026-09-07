import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                <Terminal className="w-3.5 h-3.5 text-zinc-300" />
              </div>
              <span className="font-['Geist'] font-semibold text-white tracking-tight text-sm">
                HeritageArchive
              </span>
            </div>
            <p className="font-['Geist'] text-xs text-zinc-400 max-w-sm leading-relaxed">
              AI-driven semantic intelligence for global historical archives. Turning disconnected
              physical folios and colonial gazetteers into an instantaneously searchable knowledge graph.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-['Geist'] text-xs">
            <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              Navigation
            </div>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-white transition-colors">Overview</Link>
              <Link to="/architecture" className="hover:text-white transition-colors">Architecture</Link>
              <Link to="/app" className="hover:text-white transition-colors">Interactive Demo</Link>
            </div>
          </div>

          {/* Connected Repositories */}
          <div className="md:col-span-3 space-y-3 font-['Geist'] text-xs">
            <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              Repositories
            </div>
            <div className="flex flex-col space-y-2 text-zinc-400">
              <span>Internet Archive (Text / Manuscripts)</span>
              <span>Wikimedia Commons (Visual Epigraphy)</span>
              <span>data.gov.in (Official Gazetteers)</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-400">
          <span>Prototype Demonstration</span>
          <span>Preserving cultural memory with neural search</span>
        </div>
      </div>
    </footer>
  );
}
