import { useLayoutEffect } from 'react';

/**
 * Adds a class to <html> for the lifetime of the calling component.
 *
 * Used by light-themed routes to repaint the document canvas (overscroll area,
 * and the strip below a short page) which a page-level div cannot reach.
 *
 * useLayoutEffect, not useEffect: the class must land before first paint or the
 * user sees a flash of the dark site's body colour.
 *
 * classList.add/remove is idempotent, so React StrictMode's mount -> cleanup ->
 * mount double-invoke is harmless and no ref-counting is needed.
 */
export function useThemeClass(className) {
  useLayoutEffect(() => {
    if (!className) return undefined;
    const root = document.documentElement;
    root.classList.add(className);
    return () => root.classList.remove(className);
  }, [className]);
}

export default useThemeClass;
