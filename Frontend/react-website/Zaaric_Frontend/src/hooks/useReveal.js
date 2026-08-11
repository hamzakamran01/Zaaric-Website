import { useEffect } from 'react';

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

/**
 * One scroll-reveal primitive for the whole CareOps page.
 *
 * Observes every `selector` inside `rootRef` and adds `visibleClass` when it
 * enters the viewport. Scoped to the ref so it can never touch another route,
 * and namespaced so it cannot collide with the site's global `.visible`.
 *
 * Under prefers-reduced-motion it applies the visible class synchronously and
 * never creates an observer — reduced motion must end in the FINAL state, never
 * be left parked in the hidden one.
 */
export function useReveal(rootRef, options = {}) {
  const {
    selector = '.co-anim',
    visibleClass = 'co-anim-in',
    threshold = 0.12,
    rootMargin = '0px 0px -8% 0px',
    once = true,
    enabled = true,
  } = options;

  useEffect(() => {
    const root = rootRef?.current;
    if (!enabled || !root) return undefined;

    const nodes = Array.from(root.querySelectorAll(selector));
    if (!nodes.length) return undefined;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia(REDUCED_MOTION).matches;

    if (reduced) {
      nodes.forEach((node) => node.classList.add(visibleClass));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove(visibleClass);
          }
        });
      },
      { threshold, rootMargin }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [rootRef, selector, visibleClass, threshold, rootMargin, once, enabled]);
}

export default useReveal;
