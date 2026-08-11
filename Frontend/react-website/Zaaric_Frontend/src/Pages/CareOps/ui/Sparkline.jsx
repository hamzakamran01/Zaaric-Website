import React from 'react';

/** Inline SVG polyline. No library, scales cleanly, cheap to render. */
const Sparkline = ({ points = [], width = 120, height = 28 }) => {
  if (points.length < 2) return null;

  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = max - min || 1;
  const step = width / (points.length - 1);

  const d = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${height - ((p - min) / span) * height}`)
    .join(' ');

  return (
    <svg
      className="co-spark"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      focusable="false"
    >
      <path d={d} fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Sparkline;
