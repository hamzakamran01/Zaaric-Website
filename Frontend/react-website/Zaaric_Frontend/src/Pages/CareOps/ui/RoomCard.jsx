import React from 'react';
import Badge from './Badge.jsx';
import { toneClass } from './tone.js';
import { roomStatusTone } from '../data/statusMaps.js';

/**
 * Status is carried by a 6px coloured LEFT RAIL, not a tinted background —
 * readable at a glance without shouting, and it keeps the card surface neutral
 * so the text stays legible.
 */
const RoomCard = ({ number, type, rate, status, guest, until, flipping = false }) => {
  const tone = roomStatusTone[status] || 'neutral';

  return (
    <article className={`co-room ${flipping ? 'co-room--flip' : ''}`}>
      <span className={`co-room__rail ${toneClass(tone)}`} />
      <div className="co-room__body">
        <div className="co-room__top">
          <span className="co-room__number">{number}</span>
          <Badge tone={tone} size="sm">
            {status}
          </Badge>
        </div>
        <span className="co-room__type">{type}</span>
        <div className="co-room__foot">
          <span className="co-room__rate">{rate}</span>
          <span className="co-room__guest">{guest || until || '—'}</span>
        </div>
      </div>
    </article>
  );
};

export default RoomCard;
