import React from 'react';
import { ArrowDown } from 'lucide-react';
import { PMS } from '../data/content.js';

const CoPms = () => (
  <section className="co-section co-section--ink co-pms" id="careops-fit">
    <div className="co-shell">
      <header className="co-head co-pms__head co-anim">
        <p className="co-eyebrow">{PMS.eyebrow}</p>
        <h2 className="co-h2 co-h2--wide">{PMS.headline}</h2>
        <p className="co-lede">{PMS.lede}</p>
      </header>

      <div className="co-pms__stack">
        {PMS.bands.map((band, i) => (
          <React.Fragment key={band.title}>
            <div
              className={`co-pms__band co-pms__band--${band.tone} co-anim`}
              style={{ '--co-d': `${i * 140}ms` }}
            >
              <span className="co-pms__bandtitle">{band.title}</span>
              <ul className="co-pms__banditems">
                {band.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
            {i === 0 && (
              <div className="co-pms__connector co-anim" style={{ '--co-d': '90ms' }} aria-hidden="true">
                <span className="co-pms__connector-line" />
                <ArrowDown size={16} strokeWidth={2.2} />
                <span className="co-pms__connector-label">a booked inquiry becomes a reservation</span>
                <span className="co-pms__connector-line" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="co-pms__econ">
        <h3 className="co-pms__econtitle co-anim">{PMS.economics.headline}</h3>
        <div className="co-pms__econgrid">
          {PMS.economics.items.map((item, i) => (
            <article key={item.stat} className="co-pms__econitem co-anim" style={{ '--co-d': `${i * 90}ms` }}>
              <span className="co-pms__econstat">{item.stat}</span>
              <p className="co-pms__econbody">{item.body}</p>
              <p className="co-source">{item.source}</p>
            </article>
          ))}
        </div>
        <p className="co-pms__econnote co-anim">{PMS.economics.note}</p>
      </div>
    </div>
  </section>
);

export default CoPms;
