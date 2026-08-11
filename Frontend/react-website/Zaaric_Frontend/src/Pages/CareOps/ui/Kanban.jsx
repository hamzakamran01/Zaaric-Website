import React from 'react';
import Badge from './Badge.jsx';
import Avatar from './Avatar.jsx';
import { priorityTone } from '../data/statusMaps.js';

export const KanbanCard = ({ card, state = '' }) => (
  <article className={`co-kcard ${state}`}>
    <div className="co-kcard__top">
      <span className="co-kcard__name">{card.name}</span>
      <Badge tone={priorityTone[card.priority] || 'neutral'} size="sm">
        {card.priority}
      </Badge>
    </div>
    <span className="co-kcard__contact">{card.contact}</span>
    <div className="co-kcard__next">
      <span className="co-kcard__next-label">Next</span>
      <span className="co-kcard__next-text">{card.next}</span>
    </div>
    <div className="co-kcard__foot">
      <span className="co-kcard__property">{card.property}</span>
      <span className="co-kcard__right">
        <span className="co-kcard__value">{card.value}</span>
        <Avatar name={card.owner} size="sm" />
      </span>
    </div>
  </article>
);

export const KanbanColumn = ({ stage, count, value, children }) => (
  <div className="co-kcol">
    <header className="co-kcol__head">
      <span className="co-kcol__stage">{stage}</span>
      <span className="co-kcol__count">{count}</span>
    </header>
    <span className="co-kcol__value">{value}</span>
    <div className="co-kcol__cards">{children}</div>
  </div>
);

export default KanbanColumn;
