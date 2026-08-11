import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ } from '../data/content.js';

const CoFaq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="co-section co-section--surface co-faq" id="careops-faq">
      <div className="co-shell co-shell--narrow">
        <header className="co-head co-anim">
          <p className="co-eyebrow">Questions</p>
          <h2 className="co-h2 co-h2--wide">Straight answers</h2>
        </header>

        <div className="co-faq__list">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`co-faq__item ${isOpen ? 'co-faq__item--on' : ''} co-anim`}
                style={{ '--co-d': `${i * 50}ms` }}>
                <h3 className="co-faq__qwrap">
                  <button
                    type="button"
                    className="co-faq__q"
                    aria-expanded={isOpen}
                    aria-controls={`co-faq-a-${i}`}
                    id={`co-faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <Plus className="co-faq__plus" size={17} strokeWidth={2.2} />
                  </button>
                </h3>
                <div
                  className="co-faq__a"
                  id={`co-faq-a-${i}`}
                  role="region"
                  aria-labelledby={`co-faq-q-${i}`}
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoFaq;
