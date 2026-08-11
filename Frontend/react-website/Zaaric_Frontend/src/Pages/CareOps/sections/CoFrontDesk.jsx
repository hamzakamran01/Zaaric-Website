import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { AppFrame, RoomCard, Badge, ProgressBar } from '../ui/index.js';
import { FRONTDESK } from '../data/content.js';
import { ROOMS, FLIPPING_ROOM_ID, FLIP_SEQUENCE, OCCUPANCY_BY_PROPERTY } from '../data/fixtures.js';
import { roomStatusTone } from '../data/statusMaps.js';

const STATUS_FILTERS = ['Available', 'Reserved', 'Occupied', 'Cleaning', 'Maintenance'];

/**
 * Room 108 walks Cleaning -> Available -> Reserved once the section is in view:
 * the turn finishes, the room becomes sellable, and it gets held for a named
 * guest. One-shot, timer-driven, and skipped entirely under reduced motion
 * (which lands on the final state rather than the first).
 */
const useFlipSequence = (ref) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setStep(FLIP_SEQUENCE.length - 1);
      return undefined;
    }

    const timers = [];
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        timers.push(window.setTimeout(() => setStep(1), 1100));
        timers.push(window.setTimeout(() => setStep(2), 2400));
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => {
      timers.forEach(window.clearTimeout);
      observer.disconnect();
    };
  }, [ref]);

  return step;
};

const CoFrontDesk = () => {
  const ref = useRef(null);
  const step = useFlipSequence(ref);
  const flipState = FLIP_SEQUENCE[step];

  const rooms = ROOMS.map((r) =>
    r.id === FLIPPING_ROOM_ID
      ? { ...r, status: flipState.status, guest: flipState.guest, until: flipState.until }
      : r
  );

  const counts = STATUS_FILTERS.map((s) => ({
    status: s,
    n: rooms.filter((r) => r.status === s).length,
  }));

  return (
    <section className="co-section co-frontdesk" id="careops-rooms" ref={ref}>
      <div className="co-shell">
        <div className="co-split co-split--reverse">
          <header className="co-split__copy co-anim">
            <p className="co-eyebrow">{FRONTDESK.eyebrow}</p>
            <h2 className="co-h2">{FRONTDESK.headline}</h2>
            <p className="co-lede">{FRONTDESK.lede}</p>
            <ul className="co-points">
              {FRONTDESK.points.map((p) => (
                <li key={p}>
                  <Check size={15} strokeWidth={2.4} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </header>

          <div className="co-split__visual co-anim" style={{ '--co-d': '110ms' }}>
            <AppFrame
              active="rooms"
              title="Rooms"
              label="CareOps room board grouped by property, showing available, reserved, occupied, cleaning and maintenance rooms with status rails"
            >
              <div className="co-rooms__filters">
                {counts.map((c) => (
                  <Badge key={c.status} tone={roomStatusTone[c.status]} size="sm" dot>
                    {c.status} · {c.n}
                  </Badge>
                ))}
              </div>

              {OCCUPANCY_BY_PROPERTY.map((p) => (
                <div key={p.property} className="co-rooms__property">
                  <div className="co-rooms__phead">
                    <span className="co-rooms__pname">{p.property}</span>
                    <span className="co-rooms__pmeta">
                      {p.occupied}/{p.total} occupied · {p.pct}%
                    </span>
                  </div>
                  <ProgressBar pct={p.pct} tone="brand" size="sm" animate={false} />
                </div>
              ))}

              <div className="co-grid co-grid--rooms co-rooms__grid">
                {rooms.map((r) => (
                  <RoomCard
                    key={r.id}
                    number={r.number}
                    type={r.type}
                    rate={r.rate}
                    status={r.status}
                    guest={r.guest}
                    until={r.until}
                    flipping={r.id === FLIPPING_ROOM_ID && step > 0}
                  />
                ))}
              </div>
            </AppFrame>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoFrontDesk;
