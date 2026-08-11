import React, { useEffect, useRef, useState } from 'react';
import {
  AppFrame, StatTile, Panel, FunnelBar, Sparkline,
  Table, THead, TH, TR, TD, Badge,
} from '../ui/index.js';
import useCountUp from '../../../hooks/useCountUp';
import { OWNER } from '../data/content.js';
import { DASHBOARD_STATS, FUNNEL, RECENT, REVENUE_SPARK } from '../data/fixtures.js';
import { compactMoney, stageTone } from '../data/statusMaps.js';

const maxCount = Math.max(...FUNNEL.map((f) => f.count), 1);
const COLS = { '--co-cols': 'minmax(0,1.4fr) minmax(0,1fr) minmax(0,.9fr) auto auto' };

const CountTile = ({ stat, run }) => {
  const n = useCountUp(stat.value, { duration: 1500, start: run });
  return (
    <StatTile
      label={stat.label}
      value={`${Math.round(n)}${stat.suffix || ''}`}
      tone={stat.tone}
      emphasis={stat.alert}
      pct={stat.pct ? Math.round(n) : undefined}
    />
  );
};

const CoOwner = () => {
  const ref = useRef(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="co-section co-owner" id="careops-owner" ref={ref}>
      <div className="co-shell">
        <header className="co-head co-owner__head co-anim">
          <p className="co-eyebrow">{OWNER.eyebrow}</p>
          <h2 className="co-h2 co-h2--wide">{OWNER.headline}</h2>
          <p className="co-lede">{OWNER.lede}</p>
        </header>

        <div className="co-anim" style={{ '--co-d': '90ms' }}>
          <AppFrame
            active="dashboard"
            title="Dashboard — all properties"
            label="CareOps owner dashboard with six metric tiles, the inquiry funnel by stage, a revenue trend and the most recent inquiries"
          >
            <div className="co-grid co-grid--stats">
              {DASHBOARD_STATS.map((s) => (
                <CountTile key={s.key} stat={s} run={run} />
              ))}
            </div>

            <div className="co-grid co-grid--split co-owner__mid">
              <Panel title="Inquiry funnel" meta="Stages with none still show">
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

              <Panel title="Booked value" meta="Last 12 weeks">
                <div className="co-owner__spark co-tone-brand">
                  <Sparkline points={REVENUE_SPARK} height={64} />
                </div>
                <div className="co-owner__sparkfoot">
                  <span className="co-owner__sparkbig">$77,970</span>
                  <span className="co-owner__sparksub">in the pipeline right now</span>
                </div>
              </Panel>
            </div>

            <Panel title="Recent inquiries" meta="Newest first" pad={false}>
              <Table>
                <THead style={COLS}>
                  <TH>Inquiry</TH>
                  <TH hideBelow="md">Contact</TH>
                  <TH hideBelow="lg">Property</TH>
                  <TH>Stage</TH>
                  <TH numeric>Value</TH>
                </THead>
                {RECENT.map((r) => (
                  <TR key={r.name} style={COLS}>
                    <TD strong>{r.name}</TD>
                    <TD hideBelow="md" muted>{r.contact}</TD>
                    <TD hideBelow="lg" muted>{r.property}</TD>
                    <TD>
                      <Badge tone={stageTone[r.stage] || 'neutral'} size="sm">{r.stage}</Badge>
                    </TD>
                    <TD numeric strong>{r.value}</TD>
                  </TR>
                ))}
              </Table>
            </Panel>
          </AppFrame>
        </div>
      </div>
    </section>
  );
};

export default CoOwner;
