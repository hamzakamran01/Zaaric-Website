import React from 'react';
import { PhoneMissed, BedDouble, LineChart } from 'lucide-react';
import { LEAKS } from '../data/content.js';

const ICONS = { PhoneMissed, BedDouble, LineChart };

const CoLeaks = () => (
  <section className="co-section co-leaks">
    <div className="co-shell">
      <header className="co-head co-anim">
        <p className="co-eyebrow">{LEAKS.eyebrow}</p>
        <h2 className="co-h2 co-h2--wide">{LEAKS.headline}</h2>
        <p className="co-lede">{LEAKS.lede}</p>
      </header>

      <div className="co-leaks__grid">
        {LEAKS.items.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <article key={item.title} className="co-leak co-anim" style={{ '--co-d': `${i * 80}ms` }}>
              <span className="co-leak__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="co-leak__icon">
                <Icon size={19} strokeWidth={1.8} />
              </span>
              <h3 className="co-leak__title">{item.title}</h3>
              <p className="co-leak__body">{item.body}</p>
              {item.stat && (
                <div className="co-leak__stat">
                  <p>{item.stat}</p>
                  <p className="co-source">{item.source}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default CoLeaks;
