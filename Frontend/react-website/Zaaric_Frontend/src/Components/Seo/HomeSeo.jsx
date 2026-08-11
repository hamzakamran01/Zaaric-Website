import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Homepage-specific SEO. Extracted from App.jsx so that page-scoped tags —
 * title, description, canonical, OG/Twitter — belong to the route that owns
 * them. App.jsx keeps only the genuinely site-wide tags.
 */
const TITLE = 'Zaaric | Enterprise AI Solutions & Agentic Systems';
const DESC =
  'Zaaric revolutionizes enterprises with cutting-edge Agentic AI solutions, bespoke software development, and digital transformation strategies. Partner with us to define your digital excellence.';

const JSON_LD = `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://zaaric-ai.com/#service",
      "name": "Zaaric Enterprise AI & MVP Solutions",
      "url": "https://zaaric-ai.com",
      "image": "https://zaaric-ai.com/Assets/hero_main_dashboard_8k.png",
      "description": "Zaaric specializes in Enterprise Agentic AI for SMEs and Rapid MVP Development, transforming ideas into scalable, investor-ready products.",
      "priceRange": "$$$",
      "address": { "@type": "PostalAddress", "addressCountry": "PK" },
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Pakistan" }
      ],
      "knowsAbout": ["Artificial Intelligence", "Agentic Systems", "MVP Development", "SaaS Architecture", "Enterprise Automation"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Premium AI & Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise Agentic AI for SMEs",
              "description": "Revolutionize your SME operations with custom Agentic AI ecosystems. We build autonomous agents that automate complex workflows, reduce operational costs by 30%+, and drive 24/7 productivity."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Rapid MVP Development",
              "description": "Accelerate your time-to-market with our rapid MVP development framework. From concept to launch in weeks, we build scalable, investor-ready products that validate your ideas and secure growth."
            }
          }
        ]
      }
    },
    {
      "@type": "Person",
      "@id": "https://zaaric-ai.com/#hamza",
      "name": "Hamza Kamran",
      "jobTitle": "Founder & CEO",
      "image": "https://zaaric-ai.com/Assets/CEO.png",
      "url": "https://zaaric-ai.com",
      "worksFor": { "@id": "https://zaaric-ai.com/#organization" },
      "sameAs": ["https://www.linkedin.com/in/hamza-kamran"]
    },
    {
      "@type": "Person",
      "@id": "https://zaaric-ai.com/#umair",
      "name": "Umair Khan Shinwari",
      "jobTitle": "Co-Founder & CTO",
      "image": "https://zaaric-ai.com/Assets/CTO.png",
      "url": "https://zaaric-ai.com",
      "worksFor": { "@id": "https://zaaric-ai.com/#organization" },
      "sameAs": ["https://www.linkedin.com/in/umair-khan-shinwari"]
    }
  ]
}
`;

const HomeSeo = () => (
  <Helmet>
    <title>{TITLE}</title>
    <meta name="title" content={TITLE} />
    <meta name="description" content={DESC} />
    <meta
      name="keywords"
      content="Zaaric, Zaaric AI, Agentic AI, Enterprise AI, AI Agents, Software Development, Digital Transformation, Tech Agency, Business Automation, Hamza Kamran, Umair Khan Shinwari"
    />
    <link rel="canonical" href="https://zaaric-ai.com/" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://zaaric-ai.com/" />
    <meta property="og:title" content={TITLE} />
    <meta property="og:description" content={DESC} />
    <meta property="og:image" content="https://zaaric-ai.com/Assets/new_favicon.jpeg" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://zaaric-ai.com/" />
    <meta property="twitter:title" content={TITLE} />
    <meta property="twitter:description" content={DESC} />
    <meta property="twitter:image" content="https://zaaric-ai.com/Assets/new_favicon.jpeg" />

    <script type="application/ld+json">{JSON_LD}</script>
  </Helmet>
);

export default HomeSeo;
