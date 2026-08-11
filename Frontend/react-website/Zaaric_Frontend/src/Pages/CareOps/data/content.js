/**
 * All page copy in one place.
 *
 * CLAIMS POLICY — nothing here may state a statistic that isn't in this file
 * with a named source and year. Specifically excluded, because the research
 * behind this page could not substantiate them:
 *   · any "% of hotel calls go unanswered" figure
 *   · the "5 minutes vs 30 minutes / 100x" speed-to-lead stat (it is
 *     InsideSales.com 2007, vendor-funded, and routinely miscited as Harvard)
 *   · any "% of motels still on paper/spreadsheets" figure
 *   · any per-OTA commission rate, or "no PMS does this"
 *   · any customer name, logo, testimonial or ROI number
 * Compliance words (PCI / HIPAA / SOC 2 / ADA / TCPA "compliant") are also out.
 */

export const HERO = {
  eyebrow: 'Zaaric CareOps',
  headline: 'The call you don’t return tonight is a room that stays empty.',
  lede:
    'CareOps is the inquiry-to-check-in system for independent motels. Every call, text and web form lands in one pipeline, every room shows its real status, and nothing waits three days for a callback.',
  primary: 'Book a 15-minute walkthrough',
  secondary: 'See how it works',
  note: 'Built for owner-operators running 20–80 rooms across one or more properties.',
};

export const STORY = {
  eyebrow: 'Tuesday, 7:14 PM',
  headline: 'A foreman calls about six rooms for five weeks.',
  lede:
    'That is roughly $14,700 of booked revenue standing on the other end of a phone line. What happens next is decided entirely by whether anyone writes it down.',
  before: {
    label: 'How it goes today',
    steps: [
      'Night clerk takes the call and writes the number on a sticky note.',
      'Note ends up under the register. Owner hears about it Thursday.',
      'Somebody calls back Friday afternoon.',
      'The crew already booked the property two exits down.',
    ],
    outcome: 'Nothing in the system ever recorded that the call happened.',
  },
  after: {
    label: 'How it goes with CareOps',
    steps: [
      'Clerk logs the inquiry in about twenty seconds — company, rooms, dates.',
      'It lands at New Inquiry with an owner and a callback due 8:00 AM.',
      'The owner sees it on the morning dashboard before opening the office.',
      'Rooms 112–116 are held, the quote goes out, the crew checks in Monday.',
    ],
    outcome: 'The same phone call, with a record attached to it.',
  },
};

export const LEAKS = {
  eyebrow: 'Where the money goes',
  headline: 'Three leaks, and none of them are on your P&L.',
  lede:
    'They do not show up as an expense line. They show up as rooms that were sellable and did not sell.',
  items: [
    {
      icon: 'PhoneMissed',
      title: 'Follow-ups quietly die',
      body:
        'An inquiry with no owner and no due date is an inquiry nobody is accountable for. It doesn’t get lost dramatically — it just never gets called back.',
      stat:
        'Research outside hospitality gives a sense of the scale: an audit of 2,241 US companies found the average business took 42 hours to respond to an inbound web inquiry, and 23% never responded at all. Those that responded within an hour were about seven times more likely to qualify the lead.',
      source: 'Harvard Business Review, 2011 — general business research, not lodging-specific.',
    },
    {
      icon: 'BedDouble',
      title: 'The desk doesn’t know what’s sellable',
      body:
        'Housekeeping knows 108 was turned at 11:30. The front desk finds out at 4 PM. In between, a walk-in gets told the property is full while a clean room sits dark.',
      stat: null,
      source: null,
    },
    {
      icon: 'LineChart',
      title: 'The owner can’t see the funnel',
      body:
        'Without stages you can’t tell a lead-volume problem from a quote-conversion problem. You only know the month was soft — never which step it went soft at.',
      stat: null,
      source: null,
    },
  ],
};

export const PIPELINE = {
  eyebrow: 'Pipeline',
  headline: 'Every inquiry has a stage, an owner, and a next action with a date.',
  lede:
    'Weekly crews, corporate accounts, relocations and long-stay guests move through the same eight stages. Nothing sits in someone’s head or a text thread.',
  points: [
    'Move an inquiry with explicit Back / Advance controls — no drag-and-drop, because a mis-drop on a front-desk touchscreen silently changes a record.',
    'Each column totals the revenue sitting in it, so you can see what a stalled stage is actually worth.',
    'Checked In and Lost stay visible in an outcome strip rather than disappearing off the board.',
  ],
};

export const FRONTDESK = {
  eyebrow: 'Rooms',
  headline: 'Housekeeping and the front desk finally look at the same board.',
  lede:
    'Available, Reserved, Occupied, Cleaning, Maintenance — grouped by property, with a status rail you can read across the room. Reserved and Occupied require a name, so a held room always says who it is held for.',
  points: [
    'A room coming out of a turn becomes sellable the moment housekeeping marks it, not at shift handover.',
    'Occupancy is calculated from the same room records the desk is working from, so the number on the dashboard is the number on the floor.',
    'Changing a status that would unassign the current guest tells you so before you save it.',
  ],
};

export const TASKS_SECTION = {
  eyebrow: 'Follow-ups',
  headline: 'Nothing waits three days again.',
  lede:
    'Callbacks, walk-throughs and check-in prep are tasks with an assignee and a due date. Overdue is red, due today is amber, and both are counted on the dashboard before anyone opens the office.',
};

export const OWNER = {
  eyebrow: 'For the owner',
  headline: 'One screen that tells you where the money is stuck.',
  lede:
    'Funnel health, occupancy, and what is overdue today — across every property you run. Stages with zero inquiries still show, because a gap in the funnel should be visible rather than invisible.',
};

export const PMS = {
  eyebrow: 'How it fits',
  headline: 'It sits in front of your PMS. It doesn’t replace it.',
  lede:
    'Your property management system handles reservations once they exist — rates, folios, night audit, channel connections. CareOps handles everything that happens before a reservation exists.',
  bands: [
    {
      title: 'CareOps — demand capture',
      items: ['Inquiries from phone, web, walk-in', 'Stages, owners, next actions', 'Room availability for selling', 'Follow-ups and callbacks'],
      tone: 'brand',
    },
    {
      title: 'Your PMS — reservations',
      items: ['Bookings and folios', 'Rates and night audit', 'Channel manager / OTA sync', 'Payment processing'],
      tone: 'neutral',
    },
  ],
  economics: {
    headline: 'Why the direct inquiry is worth chasing',
    items: [
      {
        stat: '63.4%',
        body: 'of bookings at independent hotels now come through OTAs, up from 61.3% the year before.',
        source: 'Cloudbeds, 2026 State of Independent Hotels Report (global figure).',
      },
      {
        stat: '~15%',
        body: 'is Booking Holdings’ own take rate on gross bookings, per its FY2025 annual filing. AHLA has publicly cited commissions running higher.',
        source: 'Booking Holdings FY2025 10-K; American Hotel & Lodging Association.',
      },
      {
        stat: '21.8% vs 10.6%',
        body: 'cancellation rate on OTA bookings versus direct bookings — the direct guest is likelier to actually arrive.',
        source: 'Cloudbeds, 2026 State of Independent Hotels Report.',
      },
    ],
    note:
      'CareOps does not touch your OTA channels. It gives the inquiries that come to you directly somewhere to live, so fewer of them end up going back through a channel you pay for.',
  },
};

export const BUILT_FOR = {
  eyebrow: 'Built for how motels actually run',
  headline: 'Weekly and monthly guests are a pipeline, not a walk-up.',
  lede:
    'A crew booking five weeks is a deal with a value, a decision-maker and a follow-up cadence. It behaves nothing like a one-night transient booking, and a reservations screen was never designed to manage it.',
  stat: {
    lines: [
      'Across the extended-stay segment, occupancy ran 12.4 percentage points above the overall US hotel industry in 2025, and economy extended-stay RevPAR fell only 1.4% against −3.9% for economy hotels overall.',
      'Extended-stay now accounts for about 40% of the US hotel construction pipeline.',
    ],
    source:
      'The Highland Group, US Extended-Stay Hotel Market 2026; Lodging Econometrics, Q3 2025. These figures describe the extended-stay segment, which is largely purpose-built branded properties — not independent motels specifically.',
  },
  features: [
    { icon: 'HardHat', title: 'Crew & corporate accounts', body: 'One contact, several rooms, a start date and a run length. Tracked as a single deal with its own value.' },
    { icon: 'CalendarRange', title: 'Weekly & monthly rates', body: 'Booking value reflects the real stay length, so the funnel totals mean something.' },
    { icon: 'DoorOpen', title: 'Walk-ins get logged', body: 'The guest who drove in at 9 PM becomes a record, not a memory.' },
    { icon: 'Building2', title: 'Multiple properties', body: 'Run two or six. Rooms group by property; the owner view rolls them up.' },
    { icon: 'Moon', title: 'Survives shift handover', body: 'Next action and due date travel with the inquiry, so the night clerk and the morning clerk see the same thing.' },
    { icon: 'Smartphone', title: 'Front-desk PC or a phone', body: 'The layout collapses to a single column below 1024px. No app install, no training day.' },
  ],
};

export const ROADMAP = {
  eyebrow: 'Release status',
  version: 'v0.9 — Validation Preview',
  headline: 'Where CareOps is today, stated plainly.',
  lede:
    'This is a working product in front of its first operators, not a finished platform. We would rather you know exactly what that means before a demo than after one.',
  columns: [
    {
      state: 'Shipped',
      tone: 'success',
      items: [
        'Inquiry pipeline across eight stages plus outcomes',
        'Kanban board with explicit stage movement',
        'Live room status with per-property occupancy',
        'Follow-up tasks with overdue and due-today flags',
        'Owner dashboard: funnel, occupancy, what is due',
        'Multi-property views',
      ],
    },
    {
      state: 'Building',
      tone: 'warning',
      items: [
        'User accounts and sign-in',
        'Roles and permissions per property',
        'Tenant isolation, so each operator sees only their own data',
        'Encrypted managed hosting and backups',
      ],
    },
    {
      state: 'Planned',
      tone: 'neutral',
      items: [
        'Two-way sync with common property management systems',
        'SMS and email follow-ups with consent logging',
        'Web form and Google Business Profile inquiry capture',
        'Reporting exports',
      ],
    },
  ],
  disclosure: {
    title: 'What that means right now',
    items: [
      'The preview build has no authentication and no tenant isolation. It is for evaluation with sample data — do not put real guest records in it.',
      'CareOps stores inquiry and room information. It does not store or process payment card data.',
      'We make no compliance claims. When accounts, isolation and managed hosting ship, we will say exactly what they cover.',
    ],
  },
};

export const CTA = {
  eyebrow: 'Design partners',
  headline: 'We’re onboarding ten US motels as design partners.',
  lede:
    'You get the product free through the preview, direct access to the people building it, and your operation shapes what ships next. We get to find out whether this actually holds up at a front desk.',
  bullets: [
    'A 15-minute walkthrough, screen-shared, no deck',
    'We load a sample of your inquiry flow so you see your own operation',
    'No pricing until the product earns it',
  ],
  formNote:
    'Goes straight to the team building CareOps. We’ll reply within one business day.',
};

export const FAQ = [
  {
    q: 'Do I have to replace my PMS?',
    a: 'No. CareOps handles inquiries before they become reservations — your PMS keeps doing rates, folios, night audit and channel connections. The systems independent operators commonly run, like Cloudbeds, ResNexus and WebRezPro, describe their CRM features as guest marketing to people who have already booked. That is a different job from a pre-booking pipeline.',
  },
  {
    q: 'What about my OTA bookings?',
    a: 'They keep flowing through your existing channels untouched. CareOps is for the inquiries that come to you directly — the phone call, the walk-in, the crew coordinator who emails. Those are the ones with no system behind them today.',
  },
  {
    q: 'How long does setup take?',
    a: 'A walkthrough is 15 minutes. Getting a property in — rooms, room types, rates, staff names — is usually under an hour, and we do it with you on the call.',
  },
  {
    q: 'What does it cost?',
    a: 'Nothing during the design-partner preview. We are not quoting pricing until accounts, permissions and managed hosting have shipped and the product has earned it.',
  },
  {
    q: 'Who can see my data?',
    a: 'Be aware that the current preview build has no accounts and no tenant isolation — it is an evaluation environment and should only hold sample data. Per-operator isolation is in the Building column above, and it ships before any real guest information should go near it.',
  },
  {
    q: 'Does it text or call guests automatically?',
    a: 'Not today. Messaging is on the roadmap, and when it lands it will include consent capture and opt-out handling — how you collect consent stays your call, and we will document what the feature does and does not cover.',
  },
];
