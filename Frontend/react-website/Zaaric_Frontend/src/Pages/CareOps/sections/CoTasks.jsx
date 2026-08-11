import React from 'react';
import { AppFrame, TaskRow, Badge } from '../ui/index.js';
import { TASKS_SECTION } from '../data/content.js';
import { TASKS } from '../data/fixtures.js';

const CoTasks = () => (
  <section className="co-section co-section--surface co-tasks" id="careops-tasks">
    <div className="co-shell co-shell--narrow">
      <header className="co-head co-tasks__head co-anim">
        <p className="co-eyebrow">{TASKS_SECTION.eyebrow}</p>
        <h2 className="co-h2 co-h2--wide">{TASKS_SECTION.headline}</h2>
        <p className="co-lede">{TASKS_SECTION.lede}</p>
      </header>

      <div className="co-anim" style={{ '--co-d': '90ms' }}>
        <AppFrame
          active="tasks"
          title="Follow-ups"
          rail={false}
          size="sm"
          label="CareOps follow-up list showing five tasks with assignees, due dates and overdue flags"
        >
          <div className="co-tasks__bar">
            <span className="co-tasks__filters">
              <Badge tone="brand" size="sm">Open · 4</Badge>
              <Badge tone="neutral" size="sm">Completed · 1</Badge>
              <Badge tone="neutral" size="sm">All</Badge>
            </span>
            <span className="co-tasks__assignee">Assignee: Everyone</span>
          </div>

          <div className="co-tasks__list">
            {TASKS.map((t) => (
              <TaskRow key={t.id} task={t} />
            ))}
          </div>
        </AppFrame>
      </div>
    </div>
  </section>
);

export default CoTasks;
