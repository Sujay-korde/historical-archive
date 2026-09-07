import { useReducedMotion } from '../hooks/useAnimations';

export default function ScrollCue() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-center gap-3 text-silver/40">
      <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
      <div className={reducedMotion ? '' : 'scroll-hint'}>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          {/* Mouse outline */}
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1" />
          {/* Scroll wheel dot */}
          <circle cx="8" cy="7" r="1.5" fill="currentColor" className={reducedMotion ? '' : 'scroll-hint'} />
        </svg>
      </div>
    </div>
  );
}

