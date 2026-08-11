import React from 'react';
import { PhoneCall, StickyNote, Check, X } from 'lucide-react';
import { Badge, Avatar } from '../ui/index.js';
import { STORY } from '../data/content.js';

const Column = ({ side, data, icon }) => (
  <article className={`co-story__col co-story__col--${side} co-anim`}
    style={{ '--co-d': side === 'after' ? '140ms' : '0ms' }}>
    <header className="co-story__colhead">
      <span className={`co-story__icon co-story__icon--${side}`}>{icon}</span>
      <span className="co-story__collabel">{data.label}</span>
    </header>

    <ol className="co-story__steps">
      {data.steps.map((step, i) => (
        <li key={i} className="co-story__step" style={{ '--co-d': `${160 + i * 90}ms` }}>
          <span className="co-story__num">{i + 1}</span>
          <span className="co-story__text">{step}</span>
        </li>
      ))}
    </ol>

    <p className={`co-story__outcome co-story__outcome--${side}`}>{data.outcome}</p>
  </article>
);

const CoStory = () => (
  <section className="co-section co-section--surface co-story" id="careops-story">
    <div className="co-shell">
      <header className="co-head co-story__head co-anim">
        <p className="co-eyebrow">
          <PhoneCall size={13} strokeWidth={2.2} />
          {STORY.eyebrow}
        </p>
        <h2 className="co-h2 co-h2--wide">{STORY.headline}</h2>
        <p className="co-lede">{STORY.lede}</p>
      </header>

      <div className="co-story__grid">
        <Column side="before" data={STORY.before} icon={<StickyNote size={16} strokeWidth={2} />} />

        <div className="co-story__divider" aria-hidden="true">
          <span className="co-story__divider-line" />
        </div>

        <Column side="after" data={STORY.after} icon={<Check size={16} strokeWidth={2.4} />} />
      </div>

      {/* The record that exists on one side and not the other */}
      <div className="co-story__proof co-anim" style={{ '--co-d': '220ms' }}>
        <div className="co-story__record">
          <div className="co-story__record-top">
            <span className="co-story__record-name">Northline Utilities</span>
            <Badge tone="danger" size="sm">High</Badge>
          </div>
          <span className="co-story__record-meta">Ray Mendez · 6 rooms · 5 weeks · Sunset Inn</span>
          <div className="co-story__record-row">
            <span className="co-story__record-label">Stage</span>
            <Badge tone="neutral" size="sm">New Inquiry</Badge>
          </div>
          <div className="co-story__record-row">
            <span className="co-story__record-label">Next action</span>
            <span className="co-story__record-value">Call back — due 8:00 AM</span>
          </div>
          <div className="co-story__record-row">
            <span className="co-story__record-label">Owner</span>
            <span className="co-story__record-owner">
              <Avatar name="Sarah Reyes" size="sm" />
              Sarah Reyes
            </span>
          </div>
          <div className="co-story__record-foot">
            <span className="co-story__record-value-big">$14,700</span>
            <span className="co-story__record-sub">booking value</span>
          </div>
        </div>

        <div className="co-story__proof-copy">
          <span className="co-story__proof-x"><X size={15} strokeWidth={2.4} /></span>
          <p>
            The difference between the two columns is not effort, discipline or how good
            your night clerk is. It is whether a record like this one exists.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CoStory;
