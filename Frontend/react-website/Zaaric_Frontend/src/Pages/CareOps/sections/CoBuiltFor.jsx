import React from 'react';
import {
  HardHat, CalendarRange, DoorOpen, Building2, Moon, Smartphone,
} from 'lucide-react';
import { BUILT_FOR } from '../data/content.js';

const ICONS = { HardHat, CalendarRange, DoorOpen, Building2, Moon, Smartphone };

const CoBuiltFor = () => (
  <section className="co-section co-builtfor" id="careops-built">
    <div className="co-shell">
      <header className="co-head co-anim">
        <p className="co-eyebrow">{BUILT_FOR.eyebrow}</p>
        <h2 className="co-h2 co-h2--wide">{BUILT_FOR.headline}</h2>
        <p className="co-lede">{BUILT_FOR.lede}</p>
      </header>

      <aside className="co-builtfor__stat co-anim" style={{ '--co-d': '80ms' }}>
        {BUILT_FOR.stat.lines.map((line) => (
          <p key={line} className="co-builtfor__statline">{line}</p>
        ))}
        <p className="co-source">{BUILT_FOR.stat.source}</p>
      </aside>

      <div className="co-builtfor__grid">
        {BUILT_FOR.features.map((f, i) => {
          const Icon = ICONS[f.icon];
          return (
            <article key={f.title} className="co-feature co-anim" style={{ '--co-d': `${i * 60}ms` }}>
              <span className="co-feature__icon">
                <Icon size={18} strokeWidth={1.8} />
              </span>
              <h3 className="co-feature__title">{f.title}</h3>
              <p className="co-feature__body">{f.body}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default CoBuiltFor;
