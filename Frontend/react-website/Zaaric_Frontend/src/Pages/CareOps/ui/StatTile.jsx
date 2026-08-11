import React from 'react';
import Sparkline from './Sparkline.jsx';
import ProgressBar from './ProgressBar.jsx';
import { toneClass } from './tone.js';

/**
 * 30px/700/-0.03em value with tabular-nums so columns don't jitter while a
 * counter runs. `value` is pre-formatted by the caller — formatting belongs
 * with the data, not in the tile.
 */
const StatTile = ({
  label,
  value,
  hint,
  tone = 'neutral',
  spark,
  pct,
  emphasis = false,
}) => (
  <div className={`co-stat ${emphasis ? 'co-stat--alert' : ''}`}>
    <span className="co-stat__label">{label}</span>
    <span className={`co-stat__value ${emphasis ? toneClass(tone) : ''}`}>{value}</span>
    {hint && <span className="co-stat__hint">{hint}</span>}
    {typeof pct === 'number' && (
      <div className="co-stat__bar">
        <ProgressBar pct={pct} tone={tone} size="sm" />
      </div>
    )}
    {spark && (
      <div className={`co-stat__spark ${toneClass(tone)}`}>
        <Sparkline points={spark} />
      </div>
    )}
  </div>
);

export default StatTile;
