import React from 'react';
import { Check, Hammer, Circle, Info } from 'lucide-react';
import { Badge } from '../ui/index.js';
import { ROADMAP } from '../data/content.js';

const MARKS = {
  Shipped: <Check size={12} strokeWidth={2.8} />,
  Building: <Hammer size={11} strokeWidth={2.2} />,
  Planned: <Circle size={9} strokeWidth={2.4} />,
};

/**
 * Deliberately prominent. The product has no auth and no tenant isolation
 * today; a page selling to real operators has to say so rather than let a
 * demo imply otherwise.
 */
const CoRoadmap = () => (
  <section className="co-section co-section--surface co-roadmap" id="careops-status">
    <div className="co-shell">
      <header className="co-head co-roadmap__head co-anim">
        <p className="co-eyebrow">{ROADMAP.eyebrow}</p>
        <div className="co-roadmap__version">
          <Badge tone="brand" size="md" dot>{ROADMAP.version}</Badge>
        </div>
        <h2 className="co-h2 co-h2--wide">{ROADMAP.headline}</h2>
        <p className="co-lede">{ROADMAP.lede}</p>
      </header>

      <div className="co-roadmap__grid">
        {ROADMAP.columns.map((col, i) => (
          <article
            key={col.state}
            className={`co-rcol co-rcol--${col.tone} co-anim`}
            style={{ '--co-d': `${i * 90}ms` }}
          >
            <header className="co-rcol__head">
              <Badge tone={col.tone} size="sm">{col.state}</Badge>
              <span className="co-rcol__count">{col.items.length}</span>
            </header>
            <ul className="co-rcol__list">
              {col.items.map((item) => (
                <li key={item}>
                  <span className={`co-rcol__mark co-tone-${col.tone}`}>{MARKS[col.state]}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <aside className="co-disclosure co-anim" style={{ '--co-d': '120ms' }}>
        <h3 className="co-disclosure__title">
          <Info size={15} strokeWidth={2.2} />
          {ROADMAP.disclosure.title}
        </h3>
        <ul className="co-disclosure__list">
          {ROADMAP.disclosure.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </aside>
    </div>
  </section>
);

export default CoRoadmap;
