/**
 * Scrolls to an element id that may not exist yet.
 *
 * Home's sections live inside React.lazy children, so #services, #case-study
 * and #contact are absent from the DOM on the frame Home mounts. A single
 * getElementById on arrival from another route would silently do nothing, so
 * this polls per animation frame until the node appears or the timeout expires.
 *
 * Returns a cancel function — call it from an effect cleanup.
 */
export function scrollToIdWhenReady(id, { offset = 96, timeout = 4000 } = {}) {
  if (!id) return () => {};

  let frame = 0;
  let cancelled = false;
  const deadline = performance.now() + timeout;

  const tick = () => {
    if (cancelled) return;

    const el = document.getElementById(id);
    if (el) {
      // Wait one more frame so layout settles after the lazy chunk paints.
      frame = requestAnimationFrame(() => {
        if (cancelled) return;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
      return;
    }

    if (performance.now() < deadline) {
      frame = requestAnimationFrame(tick);
    }
  };

  frame = requestAnimationFrame(tick);

  return () => {
    cancelled = true;
    cancelAnimationFrame(frame);
  };
}

export default scrollToIdWhenReady;
