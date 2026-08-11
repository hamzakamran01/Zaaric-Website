import React from 'react';
import { Helmet } from 'react-helmet-async';

const URL = 'https://zaaric-ai.com/careops';
const TITLE = 'Zaaric CareOps | Inquiry-to-Check-In Software for Independent Motels';
const DESC =
  'CareOps gives independent US motels one pipeline for every inquiry, live room status the front desk can trust, and follow-ups that never wait three days. It sits in front of your PMS — it does not replace it.';
const IMAGE = 'https://zaaric-ai.com/Assets/careops/og.png';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://zaaric-ai.com/careops#software',
  name: 'Zaaric CareOps',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Hospitality operations and admissions CRM',
  operatingSystem: 'Web',
  url: URL,
  softwareVersion: '0.9',
  releaseNotes: 'Validation preview. Accounts, permissions and tenant isolation are in development.',
  description: DESC,
  publisher: { '@id': 'https://zaaric-ai.com/#organization' },
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'Independent motel and extended-stay owner-operators in the United States',
  },
  featureList: [
    'Inquiry pipeline across eight stages',
    'Kanban board with explicit stage movement',
    'Live room status and occupancy by property',
    'Follow-up tasks with overdue and due-today flags',
    'Owner dashboard with funnel and occupancy metrics',
  ],
};

const CareOpsSeo = () => (
  <Helmet>
    <title>{TITLE}</title>
    <meta name="title" content={TITLE} />
    <meta name="description" content={DESC} />
    <meta
      name="keywords"
      content="motel software, motel CRM, independent hotel software, extended stay software, front desk software, hotel inquiry management, motel operations, Zaaric CareOps"
    />
    <link rel="canonical" href={URL} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={URL} />
    <meta property="og:title" content={TITLE} />
    <meta property="og:description" content={DESC} />
    <meta property="og:image" content={IMAGE} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={URL} />
    <meta property="twitter:title" content={TITLE} />
    <meta property="twitter:description" content={DESC} />
    <meta property="twitter:image" content={IMAGE} />

    <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
  </Helmet>
);

export default CareOpsSeo;
