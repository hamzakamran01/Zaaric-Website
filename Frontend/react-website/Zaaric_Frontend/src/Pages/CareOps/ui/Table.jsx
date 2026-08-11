import React from 'react';

/**
 * Progressive column disclosure via `hideBelow`, rather than a blanket
 * min-width that forces horizontal scroll on every screen.
 */
const hideClass = (hideBelow) => (hideBelow ? ` co-hide-below-${hideBelow}` : '');

export const Table = ({ children }) => <div className="co-table">{children}</div>;

export const THead = ({ style, children }) => (
  <div className="co-table__head" style={style}>
    {children}
  </div>
);

export const TH = ({ hideBelow, numeric, children }) => (
  <span
    className={`co-table__th${numeric ? ' co-table__cell--num' : ''}${hideClass(hideBelow)}`}
  >
    {children}
  </span>
);

export const TR = ({ style, children }) => (
  <div className="co-table__row" style={style}>
    {children}
  </div>
);

export const TD = ({ hideBelow, numeric, strong, muted, children }) => (
  <span
    className={`co-table__td${numeric ? ' co-table__cell--num' : ''}${
      strong ? ' co-table__td--strong' : ''
    }${muted ? ' co-table__td--muted' : ''}${hideClass(hideBelow)}`}
  >
    {children}
  </span>
);

export default Table;
