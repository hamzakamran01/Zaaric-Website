import React from 'react';
import { toneClass } from './tone.js';

/** bg + text + ring-inset triple, per the product's Badge. */
const Badge = ({ tone = 'neutral', size = 'md', dot = false, children }) => (
  <span className={`co-badge co-badge--${size} ${toneClass(tone)}`}>
    {dot && <span className="co-badge__dot" />}
    {children}
  </span>
);

export default Badge;
