import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { AppFrame, KanbanColumn, KanbanCard, Badge } from '../ui/index.js';
import { PIPELINE } from '../data/content.js';
import { BOARD, ADVANCING_CARD_ID } from '../data/fixtures.js';

/**
 * The board's one scripted moment: when the section enters view, the Northline
 * card moves from Connected to Rate Quoted and the column totals follow it.
 * A one-shot state change driven by IntersectionObserver — no scrub, so no
 * GSAP and no pinning to fight the site's hide-on-scroll navbar.
 */
const useAdvanceOnView = (ref) => {
  const [advanced, setAdvanced] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setAdvanced(true);
      return undefined;
    }

    let timer = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          timer = window.setTimeout(() => setAdvanced(true), 900);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [ref]);

  return advanced;
};

const CoPipeline = () => {
  const ref = useRef(null);
  const advanced = useAdvanceOnView(ref);

  // Recompute the board so counts and column totals move with the card.
  const columns = BOARD.map((col, idx) => {
    let cards = col.cards;
    if (advanced) {
      if (idx === 0) cards = cards.filter((c) => c.id !== ADVANCING_CARD_ID);
      if (idx === 1) {
        const moved = BOARD[0].cards.find((c) => c.id === ADVANCING_CARD_ID);
        cards = moved ? [{ ...moved, next: 'Send weekly rate sheet' }, ...cards] : cards;
      }
    }
    return { ...col, cards };
  });

  const totalFor = (cards) =>
    cards.reduce((sum, c) => sum + Number(String(c.value).replace(/[^0-9]/g, '')), 0);

  return (
    <section className="co-section co-section--surface co-pipeline" id="careops-pipeline" ref={ref}>
      <div className="co-shell">
        <div className="co-split">
          <header className="co-split__copy co-anim">
            <p className="co-eyebrow">{PIPELINE.eyebrow}</p>
            <h2 className="co-h2">{PIPELINE.headline}</h2>
            <p className="co-lede">{PIPELINE.lede}</p>
            <ul className="co-points">
              {PIPELINE.points.map((p) => (
                <li key={p}>
                  <Check size={15} strokeWidth={2.4} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </header>

          <div className="co-split__visual co-anim" style={{ '--co-d': '110ms' }}>
            <AppFrame
              active="pipeline"
              title="Pipeline"
              label="CareOps pipeline board with columns for Connected, Rate Quoted, Walk-Through Scheduled and Deposit Pending"
            >
              <div className="co-board__strip">
                <Badge tone="success" size="sm">Checked In · 6</Badge>
                <Badge tone="slate" size="sm">Lost · 2</Badge>
                <span className="co-board__striplabel">Outcomes stay visible</span>
              </div>

              <div className="co-grid co-grid--board">
                {columns.map((col) => (
                  <KanbanColumn
                    key={col.stage}
                    stage={col.stage}
                    count={col.cards.length}
                    value={`$${totalFor(col.cards).toLocaleString('en-US')}`}
                  >
                    {col.cards.map((card) => (
                      <KanbanCard
                        key={card.id}
                        card={card}
                        state={
                          card.id === ADVANCING_CARD_ID && advanced ? 'co-kcard--landed' : ''
                        }
                      />
                    ))}
                  </KanbanColumn>
                ))}
              </div>
            </AppFrame>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoPipeline;
