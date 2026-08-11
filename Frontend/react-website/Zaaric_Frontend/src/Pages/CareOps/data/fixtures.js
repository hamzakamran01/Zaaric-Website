/**
 * Illustrative demo data for the coded product views.
 *
 * Everything here is FICTIONAL and shaped to show the software doing its job —
 * two properties, a funnel with a visible gap, a room mid-turn, and two
 * follow-ups landing today. No real guest, company or customer appears.
 *
 * Vocabulary is motel-native. It maps 1:1 onto the shipped app's model; see
 * statusMaps.js for the stage rename.
 */

export const PROPERTIES = ['Sunset Inn', 'Route 9 Lodge'];

/* ── Dashboard tiles ──────────────────────────────────────────────────── */
export const DASHBOARD_STATS = [
  { key: 'active', label: 'Active inquiries', value: 14, tone: 'brand' },
  { key: 'new', label: 'New, uncontacted', value: 3, tone: 'warning' },
  { key: 'walkthroughs', label: 'Walk-throughs booked', value: 4, tone: 'violet' },
  { key: 'due', label: 'Due or overdue', value: 2, tone: 'danger', alert: true },
  { key: 'occupancy', label: 'Occupancy', value: 78, suffix: '%', tone: 'brand', pct: 78 },
  { key: 'open', label: 'Rooms sellable', value: 9, tone: 'success' },
];

/* ── Funnel: stage, count, monthly value ──────────────────────────────── */
export const FUNNEL = [
  { stage: 'New Inquiry', count: 3, value: 9400, tone: 'neutral' },
  { stage: 'Attempting Contact', count: 2, value: 5800, tone: 'neutral' },
  { stage: 'Connected', count: 3, value: 12200, tone: 'brand' },
  { stage: 'Rate Quoted', count: 2, value: 16750, tone: 'brand' },
  { stage: 'Walk-Through Scheduled', count: 2, value: 14700, tone: 'violet' },
  { stage: 'Walk-Through Done', count: 1, value: 4300, tone: 'violet' },
  { stage: 'Deposit Pending', count: 1, value: 14700, tone: 'warning' },
  { stage: 'Check-In Scheduled', count: 0, value: 0, tone: 'warning' },
];

/* ── Kanban board (a four-column slice of the funnel) ─────────────────── */
export const BOARD = [
  {
    stage: 'Connected',
    value: '$12,200',
    cards: [
      {
        id: 'c1',
        name: 'Northline Utilities',
        contact: 'Ray Mendez · crew of 6',
        next: 'Send weekly rate sheet',
        property: 'Sunset Inn',
        value: '$14,700',
        owner: 'Sarah Reyes',
        priority: 'High',
      },
      {
        id: 'c2',
        name: 'D. Whitfield',
        contact: 'Relocation · 4 weeks',
        next: 'Confirm kitchenette availability',
        property: 'Route 9 Lodge',
        value: '$3,120',
        owner: 'James Okoro',
        priority: 'Medium',
      },
    ],
  },
  {
    stage: 'Rate Quoted',
    value: '$16,750',
    cards: [
      {
        id: 'c3',
        name: 'Beacon Health Staffing',
        contact: 'Priya Raman · 3 travel nurses',
        next: 'Follow up on 13-week quote',
        property: 'Sunset Inn',
        value: '$11,600',
        owner: 'Sarah Reyes',
        priority: 'High',
      },
    ],
  },
  {
    stage: 'Walk-Through Scheduled',
    value: '$14,700',
    cards: [
      {
        id: 'c4',
        name: 'Halvorsen Roofing',
        contact: 'Site walk Thu 9:00 AM',
        next: 'Hold rooms 112–116',
        property: 'Route 9 Lodge',
        value: '$8,400',
        owner: 'Maya Lindqvist',
        priority: 'Medium',
      },
    ],
  },
  {
    stage: 'Deposit Pending',
    value: '$14,700',
    cards: [
      {
        id: 'c5',
        name: 'Cedar Ridge Contractors',
        contact: 'Deposit invoice sent Mon',
        next: 'Chase signed agreement',
        property: 'Sunset Inn',
        value: '$14,700',
        owner: 'James Okoro',
        priority: 'High',
      },
    ],
  },
];

/** The card that advances a column when section 4 scrolls into view. */
export const ADVANCING_CARD_ID = 'c1';

/* ── Rooms ────────────────────────────────────────────────────────────── */
export const ROOMS = [
  { id: 'r1', number: '104', type: 'Double Queen', rate: '$389/wk', status: 'Occupied', guest: 'Ray Mendez' },
  { id: 'r2', number: '105', type: 'Double Queen', rate: '$389/wk', status: 'Occupied', guest: 'Northline crew' },
  { id: 'r3', number: '108', type: 'Kitchenette Suite', rate: '$465/wk', status: 'Cleaning', until: 'Ready 11:30 AM' },
  { id: 'r4', number: '110', type: 'Single Queen', rate: '$319/wk', status: 'Available', until: 'Now' },
  { id: 'r5', number: '112', type: 'Kitchenette Suite', rate: '$465/wk', status: 'Reserved', guest: 'Halvorsen · Thu' },
  { id: 'r6', number: '114', type: 'Single Queen', rate: '$319/wk', status: 'Available', until: 'Now' },
  { id: 'r7', number: '117', type: 'ADA Accessible', rate: '$339/wk', status: 'Maintenance', until: 'HVAC · Fri' },
  { id: 'r8', number: '121', type: 'Double Queen', rate: '$389/wk', status: 'Occupied', guest: 'P. Raman' },
];

/** The room that flips Cleaning -> Available -> Reserved on scroll. */
export const FLIPPING_ROOM_ID = 'r3';
export const FLIP_SEQUENCE = [
  { status: 'Cleaning', until: 'Ready 11:30 AM' },
  { status: 'Available', until: 'Sellable now' },
  { status: 'Reserved', guest: 'Beacon Health · Mon' },
];

/* ── Follow-ups ───────────────────────────────────────────────────────── */
export const TASKS = [
  {
    id: 't1',
    title: 'Call back Northline Utilities about 6 rooms',
    inquiry: 'Northline Utilities',
    due: 'Today, 8:00 AM',
    flag: 'today',
    priority: 'High',
    owner: 'Sarah Reyes',
    done: false,
  },
  {
    id: 't2',
    title: 'Send Beacon Health the 13-week quote',
    inquiry: 'Beacon Health Staffing',
    due: 'Today, 2:00 PM',
    flag: 'today',
    priority: 'High',
    owner: 'Sarah Reyes',
    done: false,
  },
  {
    id: 't3',
    title: 'Confirm Thursday walk-through with Halvorsen',
    inquiry: 'Halvorsen Roofing',
    due: 'Tomorrow',
    priority: 'Medium',
    owner: 'Maya Lindqvist',
    done: false,
  },
  {
    id: 't4',
    title: 'Chase signed agreement — Cedar Ridge',
    inquiry: 'Cedar Ridge Contractors',
    due: 'Thu, Jul 24',
    priority: 'High',
    owner: 'James Okoro',
    done: false,
  },
  {
    id: 't5',
    title: 'Log walk-in from Saturday night',
    inquiry: 'General',
    due: 'Mon, Jul 20',
    priority: 'Low',
    owner: 'Maya Lindqvist',
    done: true,
  },
];

/* ── Recent inquiries table ───────────────────────────────────────────── */
export const RECENT = [
  { name: 'Northline Utilities', contact: 'Ray Mendez', property: 'Sunset Inn', stage: 'Connected', source: 'Phone', value: '$14,700' },
  { name: 'Beacon Health Staffing', contact: 'Priya Raman', property: 'Sunset Inn', stage: 'Rate Quoted', source: 'Google', value: '$11,600' },
  { name: 'Halvorsen Roofing', contact: 'Dana Halvorsen', property: 'Route 9 Lodge', stage: 'Walk-Through Scheduled', source: 'Referral', value: '$8,400' },
  { name: 'Cedar Ridge Contractors', contact: 'Tom Alvarez', property: 'Sunset Inn', stage: 'Deposit Pending', source: 'Website', value: '$14,700' },
  { name: 'D. Whitfield', contact: 'Dee Whitfield', property: 'Route 9 Lodge', stage: 'Connected', source: 'Walk-In', value: '$3,120' },
];

export const OCCUPANCY_BY_PROPERTY = [
  { property: 'Sunset Inn', occupied: 31, total: 38, pct: 82 },
  { property: 'Route 9 Lodge', occupied: 17, total: 24, pct: 71 },
];

export const REVENUE_SPARK = [38, 41, 39, 46, 44, 52, 49, 58, 61, 57, 66, 71];
