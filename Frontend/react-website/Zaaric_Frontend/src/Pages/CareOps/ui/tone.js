/**
 * The single source of truth for status colour on this page.
 *
 * Mirrors the product's own `Tone` union in lib/ui.ts. Every badge, rail, dot
 * and progress fill derives from here, so changing a status colour is one edit
 * and nothing can drift between sections.
 */
export const TONES = [
  'neutral',
  'brand',
  'success',
  'warning',
  'danger',
  'violet',
  'slate',
];

export const toneClass = (tone) =>
  `co-tone-${TONES.includes(tone) ? tone : 'neutral'}`;

export default toneClass;
