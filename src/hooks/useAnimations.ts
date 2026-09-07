import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Returns true if the user prefers reduced motion.
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

/**
 * Intersection Observer hook for scroll-triggered animations.
 * Returns a ref to attach and a boolean for visibility.
 */
export function useInView(
  options: IntersectionObserverInit = { threshold: 0.15 }
): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(el);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isInView];
}

/**
 * Hook that returns a ref callback to observe multiple children for staggered fade-in.
 */
export function useStaggerReveal() {
  const reducedMotion = useReducedMotion();

  const containerRef = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return;

      if (reducedMotion) {
        // Instantly show all children
        node.querySelectorAll('.fade-in-up').forEach((el) => {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'none';
        });
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      node.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
    },
    [reducedMotion]
  );

  return containerRef;
}

