/**
 * The CareOps miniature-app design system.
 *
 * One kit, reused across every section — not hand-drawn UI per section. All
 * styles live in the single ui.css so ordering is hand-controlled rather than
 * decided by import-graph traversal.
 *
 * Everything here is DECORATIVE. Frames are role="img" with everything inside
 * aria-hidden, and no fake control is ever a real <button>/<a> — that keeps
 * them out of the tab order and out of Home's document-level capture-phase
 * click handler, which matches `button, [role="button"], .cta-btn`.
 */
import './ui.css';

export { default as AppFrame } from './AppFrame.jsx';
export { default as Panel } from './Panel.jsx';
export { default as Badge } from './Badge.jsx';
export { default as StatTile } from './StatTile.jsx';
export { default as FunnelBar } from './FunnelBar.jsx';
export { default as ProgressBar } from './ProgressBar.jsx';
export { default as RoomCard } from './RoomCard.jsx';
export { KanbanColumn, KanbanCard } from './Kanban.jsx';
export { default as TaskRow } from './TaskRow.jsx';
export { Table, THead, TH, TR, TD } from './Table.jsx';
export { default as Avatar } from './Avatar.jsx';
export { default as Button } from './Button.jsx';
export { default as Sparkline } from './Sparkline.jsx';
export { toneClass, TONES } from './tone.js';
