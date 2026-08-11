import React from 'react';
import {
  LayoutDashboard,
  Users,
  Columns3,
  BedDouble,
  CheckSquare,
  Search,
  Bell,
} from 'lucide-react';

const NAV = [
  { id: 'dashboard', label: 'Dashboard', Icon: LayoutDashboard },
  { id: 'inquiries', label: 'Inquiries', Icon: Users },
  { id: 'pipeline', label: 'Pipeline', Icon: Columns3 },
  { id: 'rooms', label: 'Rooms', Icon: BedDouble },
  { id: 'tasks', label: 'Follow-ups', Icon: CheckSquare },
];

/**
 * The product window. Treated as a picture: role="img" with a descriptive
 * label, everything inside aria-hidden, and no focusable elements — a screen
 * reader should hear one sentence, not a nonsense application.
 *
 * The nav rail stays dark in both contexts, matching the product's own
 * deliberate design decision.
 */
const AppFrame = ({
  active = 'dashboard',
  title,
  label,
  chrome = true,
  rail = true,
  size = 'md',
  children,
}) => (
  <div
    className={`co-app co-app--${size}`}
    role="img"
    aria-label={label || `Zaaric CareOps — ${title || 'application view'}`}
  >
    <div className="co-app__inner" aria-hidden="true">
      {rail && (
        <aside className="co-app__rail">
          <div className="co-app__brand">
            <span className="co-app__mark">C</span>
            <span className="co-app__brandname">
              CareOps
              <em className="co-app__tagline">Front desk OS</em>
            </span>
          </div>
          <nav className="co-app__nav">
            {NAV.map(({ id, label: navLabel, Icon }) => (
              <span
                key={id}
                className={`co-app__navitem ${
                  id === active ? 'co-app__navitem--on' : ''
                }`}
              >
                <Icon size={15} strokeWidth={1.9} />
                {navLabel}
              </span>
            ))}
          </nav>
          <div className="co-app__property">
            <span className="co-app__property-dot" />
            All properties
          </div>
        </aside>
      )}

      <div className="co-app__main">
        {chrome && (
          <header className="co-app__top">
            <span className="co-app__title">{title}</span>
            <span className="co-app__tools">
              <span className="co-app__search">
                <Search size={13} strokeWidth={2} />
                Search inquiries
              </span>
              <span className="co-app__icon">
                <Bell size={14} strokeWidth={1.9} />
              </span>
              <span className="co-app__me">SR</span>
            </span>
          </header>
        )}
        <div className="co-app__canvas">{children}</div>
      </div>
    </div>
  </div>
);

export default AppFrame;
