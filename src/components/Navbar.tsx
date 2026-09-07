import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Terminal, ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  const links = [
    { to: '/', label: 'Overview' },
    { to: '/architecture', label: 'Architecture' },
    { to: '/app', label: 'Console' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Emblem */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-100 group-hover:border-zinc-700 transition-colors">
              <Terminal className="w-4 h-4 text-zinc-300" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-['Geist'] font-semibold text-[15px] tracking-tight text-white">
                Heritage<span className="text-zinc-500 font-normal">Archive</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                v1.0
              </span>
            </div>
          </Link>

          {/* Center Status */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>3 Repositories Connected</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-300">14ms Index Speed</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3.5 py-1.5 text-xs font-['Geist'] transition-all rounded-md ${
                  isActive(link.to)
                    ? 'text-white bg-zinc-800/80 font-medium'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/app"
              className="ml-3 px-4 py-1.5 text-xs font-['Geist'] font-medium text-zinc-950 bg-white hover:bg-zinc-200 transition-colors rounded-md inline-flex items-center gap-1.5"
            >
              <span>Explore Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 bg-zinc-950 border-b border-zinc-800 space-y-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 text-sm rounded-md ${
                isActive(link.to)
                  ? 'text-white bg-zinc-800 font-medium'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/app"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center px-4 py-2 text-sm font-medium text-zinc-950 bg-white rounded-md"
            >
              Explore Search App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
