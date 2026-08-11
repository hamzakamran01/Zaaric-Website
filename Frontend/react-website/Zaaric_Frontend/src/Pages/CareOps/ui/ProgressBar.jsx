import React from 'react';
import { toneClass } from './tone.js';

/**
 * Width transitions over 700ms per the product's motion spec. The fill width
 * is driven by a CSS variable so the reveal class can animate it from zero.
 */
const ProgressBar = ({ pct = 0, tone = 'brand', size = 'md', animate = true }) => (
  <div className={`co-progress co-progress--${size}`}>
    <span
      className={`co-progress__fill ${toneClass(tone)} ${
        animate ? 'co-progress__fill--anim' : ''
      }`}
      style={{ '--co-pct': `${Math.max(0, Math.min(100, pct))}%` }}
    />
  </div>
);

export default ProgressBar;
