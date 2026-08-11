import React from 'react';
import { toneClass } from './tone.js';

/**
 * One row of the admissions funnel: stage label, count, value, and a bar.
 * Stages with zero inquiries still render — a gap in the funnel should be
 * visible, not invisible.
 */
const FunnelBar = ({ stage, count, value, pct, tone = 'brand' }) => (
  <div className={`co-funnel ${count === 0 ? 'co-funnel--empty' : ''}`}>
    <div className="co-funnel__head">
      <span className="co-funnel__stage">{stage}</span>
      <span className="co-funnel__nums">
        <span className="co-funnel__count">{count}</span>
        {value && <span className="co-funnel__value">{value}</span>}
      </span>
    </div>
    <div className="co-funnel__track">
      <span
        className={`co-funnel__fill ${toneClass(tone)}`}
        style={{ '--co-pct': `${Math.max(0, Math.min(100, pct))}%` }}
      />
    </div>
  </div>
);

export default FunnelBar;
