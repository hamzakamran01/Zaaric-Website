import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { AppFrame, StatTile, FunnelBar, Panel, TaskRow, Button } from '../ui/index.js';
import { HERO } from '../data/content.js';
import { DASHBOARD_STATS, FUNNEL, TASKS } from '../data/fixtures.js';
import { compactMoney } from '../data/statusMaps.js';

const maxCount = Math.max(...FUNNEL.map((f) => f.count), 1);

const CoHero = ({ onPrimary, onSecondary }) => (
  <section className="co-section co-hero" id="careops-top">
    <div className="co-shell">
      <div className="co-hero__grid">
        <div className="co-hero__copy co-anim">
          <p className="co-eyebrow">{HERO.eyebrow}</p>
          <h1 className="co-hero__headline">{HERO.headline}</h1>
          <p className="co-lede co-hero__lede">{HERO.lede}</p>

          <div className="co-hero__ctas">
            <Button as="button" type="button" variant="primary" size="lg" onClick={onPrimary}
              iconRight={<ArrowRight size={17} strokeWidth={2.2} />}>
              {HERO.primary}
            </Button>
            <Button as="button" type="button" variant="secondary" size="lg" onClick={onSecondary}
              icon={<PlayCircle size={17} strokeWidth={2} />}>
              {HERO.secondary}
            </Button>
          </div>

          <p className="co-hero__note">{HERO.note}</p>
        </div>

        <div className="co-hero__visual co-anim" style={{ '--co-d': '120ms' }}>
          <AppFrame
            active="dashboard"
            title="Dashboard"
            label="CareOps dashboard showing 14 active inquiries, 78 percent occupancy, two follow-ups due today, and the inquiry funnel by stage"
          >
            <div className="co-grid co-grid--stats co-hero__tiles">
              {DASHBOARD_STATS.map((s) => (
                <StatTile
                  key={s.key}
                  label={s.label}
                  value={`${s.value}${s.suffix || ''}`}
                  tone={s.tone}
                  emphasis={s.alert}
                  pct={s.pct}
                />
              ))}
            </div>

            <div className="co-grid co-grid--split co-hero__lower">
              <Panel title="Inquiry funnel" meta="This month, all properties">
                <div className="co-funnels">
                  {FUNNEL.map((f) => (
                    <FunnelBar
                      key={f.stage}
                      stage={f.stage}
                      count={f.count}
                      value={f.value ? compactMoney(f.value) : '—'}
                      pct={(f.count / maxCount) * 100}
                      tone={f.tone}
                    />
                  ))}
                </div>
              </Panel>

              <Panel title="Due today" meta="Soonest first" pad={false}>
                {TASKS.filter((t) => !t.done)
                  .slice(0, 4)
                  .map((t) => (
                    <TaskRow key={t.id} task={t} />
                  ))}
              </Panel>
            </div>
          </AppFrame>
        </div>
      </div>
    </div>
  </section>
);

export default CoHero;
