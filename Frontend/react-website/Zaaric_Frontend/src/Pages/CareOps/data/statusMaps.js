/**
 * Domain value -> tone. Kept as data so no JSX ever hardcodes a tone next to a
 * status string, which is how the two drift apart.
 */

export const roomStatusTone = {
  Available: 'success',
  Reserved: 'warning',
  Occupied: 'brand',
  Cleaning: 'violet',
  Maintenance: 'slate',
};

export const priorityTone = {
  High: 'danger',
  Medium: 'warning',
  Low: 'success',
};

export const taskStatusTone = {
  Open: 'brand',
  Completed: 'success',
};

/**
 * Motel-native funnel. Maps 1:1 onto the shipped app's stage list, with the
 * care-home middle stages renamed:
 *   Qualified          -> Rate Quoted
 *   Tour Scheduled     -> Walk-Through Scheduled
 *   Tour Completed     -> Walk-Through Done
 *   Move-In Scheduled  -> Check-In Scheduled
 *   Moved In           -> Checked In
 */
export const STAGES = [
  'New Inquiry',
  'Attempting Contact',
  'Connected',
  'Rate Quoted',
  'Walk-Through Scheduled',
  'Walk-Through Done',
  'Deposit Pending',
  'Check-In Scheduled',
];

export const TERMINAL_STAGES = ['Checked In', 'Lost'];

export const stageTone = {
  'New Inquiry': 'neutral',
  'Attempting Contact': 'neutral',
  Connected: 'brand',
  'Rate Quoted': 'brand',
  'Walk-Through Scheduled': 'violet',
  'Walk-Through Done': 'violet',
  'Deposit Pending': 'warning',
  'Check-In Scheduled': 'warning',
  'Checked In': 'success',
  Lost: 'slate',
};

export const money = (n) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);

export const compactMoney = (n) =>
  n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `$${n}`;
