import React from 'react';

/** A titled surface: 14px radius, 20px padding, resting card shadow. */
const Panel = ({ title, meta, action, pad = true, className = '', children }) => (
  <section className={`co-panel ${className}`}>
    {(title || action) && (
      <header className="co-panel__head">
        <div>
          {title && <h3 className="co-panel__title">{title}</h3>}
          {meta && <p className="co-panel__meta">{meta}</p>}
        </div>
        {action && <span className="co-panel__action">{action}</span>}
      </header>
    )}
    <div className={pad ? 'co-panel__body' : 'co-panel__body co-panel__body--flush'}>
      {children}
    </div>
  </section>
);

export default Panel;
