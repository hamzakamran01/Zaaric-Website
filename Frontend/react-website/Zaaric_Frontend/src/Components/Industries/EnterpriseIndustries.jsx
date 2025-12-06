import React, { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  ShoppingCart,
  Stethoscope,
  CreditCard,
  GraduationCap,
  Film,
  TrendingUp,
  Zap,
  CheckCircle2
} from "lucide-react";
import "./EnterpriseIndustries.css";

const EnterpriseIndustries = React.forwardRef((props, ref) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeCard, setActiveCard] = useState(null);
  const gridRef = useRef(null);

  const filters = [
    { id: 'all', label: 'All Industries' },
    { id: 'technology', label: 'Technology' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'finance', label: 'Finance' },
    { id: 'retail', label: 'Retail' }
  ];

  const industries = [
    {
      id: 1,
      icon: <ShoppingCart className="industry-icon" />,
      title: "E-Commerce & Retail",
      category: 'retail',
      desc: "We build scalable headless storefronts, intelligent product discovery, secure payments, and next-gen logistics integrations for global commerce.",
      highlights: ["Headless Storefronts", "Stripe & PayPal", "OMS & Logistics"],
      roi: "+50% Faster Deployment",
      color: "#00e6ff",
      techStack: "React, Next.js, Node.js",
      deliveryTime: "8-12 weeks",
      successRate: "98%",
      featuredSolutions: [
        "🎯 Personalized Shopping",
        "📊 Real-time Analytics",
        "🔒 Secure Payments"
      ]
    },
    {
      id: 2,
      icon: <Briefcase className="industry-icon" />,
      title: "SaaS & Platforms",
      category: 'technology',
      desc: "From multi-tenant SaaS applications to subscription billing and AI-driven analytics, we help launch, scale, and optimize enterprise platforms.",
      highlights: ["Multi-Tenant Architecture", "Usage Billing", "Analytics"],
      roi: "+40% Cost Reduction",
      color: "#0072ff",
      techStack: "Python, FastAPI, PostgreSQL",
      deliveryTime: "10-14 weeks",
      successRate: "96%"
    },
    {
      id: 3,
      icon: <Stethoscope className="industry-icon" />,
      title: "Healthcare & Life Sciences",
      category: 'healthcare',
      desc: "HIPAA-compliant portals, patient engagement tools, and secure healthcare data solutions built to ensure privacy, compliance, and accessibility.",
      highlights: ["HIPAA Compliance", "Data Privacy", "Clinical Workflows"],
      roi: "+35% Efficiency Gains",
      color: "#a855f7",
      techStack: "MERN, HIPAA Cloud",
      deliveryTime: "12-16 weeks",
      successRate: "95%"
    },
    {
      id: 4,
      icon: <CreditCard className="industry-icon" />,
      title: "Fintech & Banking",
      category: 'finance',
      desc: "Next-gen digital banking solutions, KYC/AML integrations, real-time ledger systems, and insightful dashboards to power financial innovation.",
      highlights: ["KYC / AML", "Ledger Systems", "Financial Dashboards"],
      roi: "+55% Transaction Speed",
      color: "#10b981",
      techStack: "Node.js, Redis, Blockchain",
      deliveryTime: "14-18 weeks",
      successRate: "99%"
    },
    {
      id: 5,
      icon: <GraduationCap className="industry-icon" />,
      title: "Education & EdTech",
      category: 'technology',
      desc: "Learning management systems, gamified content delivery, and scalable engagement tools for the modern education ecosystem.",
      highlights: ["LMS Platforms", "Content Delivery", "Student Engagement"],
      roi: "+48% User Retention",
      color: "#f59e0b",
      techStack: "React, MongoDB, AWS",
      deliveryTime: "10-12 weeks",
      successRate: "97%"
    },
    {
      id: 6,
      icon: <Film className="industry-icon" />,
      title: "Media & Entertainment",
      category: 'technology',
      desc: "Streaming platforms, digital editing pipelines, and content management systems built for global reach and performance.",
      highlights: ["Streaming Tech", "Editing Pipelines", "CMS Solutions"],
      roi: "+42% Content Velocity",
      color: "#ec4899",
      techStack: "Next.js, FFmpeg, CDN",
      deliveryTime: "8-14 weeks",
      successRate: "94%"
    },
  ];

  const [filteredIndustries, setFilteredIndustries] = useState(industries);

  // Filter industries
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredIndustries(industries);
    } else {
      setFilteredIndustries(industries.filter(ind => ind.category === activeFilter));
    }
  }, [activeFilter]);

  // Reveal animation with Intersection Observer
  useEffect(() => {
    const cards = document.querySelectorAll(".enterprise-industry-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [filteredIndustries]);

  // Card click removed - hover interactions only for stability
  // No expansion state needed

  return (
    <section className="enterprise-industries-section" id="industries" ref={ref}>
      {/* Gradient Orbs */}
      <div className="industries-orb orb-left"></div>
      <div className="industries-orb orb-right"></div>

      <div className="industries-container">

        {/* Header */}
        <div className="industries-header">
          <div className="header-badge">
            <Zap size={16} />
            <span>Industries We Transform</span>
          </div>
          <h2 className="section-title">
            Empowering <span className="gradient-text">Global Industries</span>
          </h2>
          <p className="section-subtitle">
            Tailored digital solutions that redefine experiences across sectors with
            measurable ROI and enterprise-grade reliability.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="filter-pills">
          {filters.map(filter => (
            <div
              key={filter.id}
              className={`filter-pill ${activeFilter === filter.id ? 'active' : ''}`}
            >
              {filter.label}
              {activeFilter === filter.id && <CheckCircle2 size={14} />}
            </div>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="industries-bento-grid" ref={gridRef}>
          {filteredIndustries.map((industry, idx) => (
            <div
              key={industry.id}
              className={`enterprise-industry-card card-${idx + 1}`}
              style={{ '--card-color': industry.color }}
            >
              {/* Card Glow Effect */}
              <div className="card-glow"></div>

              {/* Card Header */}
              <div className="card-header">
                <div className="icon-wrapper">
                  {industry.icon}
                </div>
                <div className="header-content">
                  <h3>{industry.title}</h3>
                  <div className="roi-badge">
                    <TrendingUp size={14} />
                    <span>{industry.roi}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <p className="industry-desc">{industry.desc}</p>

              {/* Premium Details Row */}
              <div className="premium-details">
                <div className="detail-item">
                  <div className="detail-icon">⚡</div>
                  <div className="detail-content">
                    <div className="detail-label">Tech Stack</div>
                    <div className="detail-value">{industry.techStack}</div>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">🚀</div>
                  <div className="detail-content">
                    <div className="detail-label">Delivery</div>
                    <div className="detail-value">{industry.deliveryTime}</div>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">✓</div>
                  <div className="detail-content">
                    <div className="detail-label">Success Rate</div>
                    <div className="detail-value">{industry.successRate}</div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="industry-highlights">
                {industry.highlights.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={12} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Featured Solutions - Only for tall cards */}
              {industry.featuredSolutions && (
                <div className="featured-solutions">
                  <div className="featured-title">✨ Featured Solutions</div>
                  <div className="solutions-grid">
                    {industry.featuredSolutions.map((solution, i) => (
                      <div key={i} className="solution-badge">
                        {solution}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pulse Corner */}
              <div className="pulse-corner"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="industries-cta">
          <p>Don't see your industry? We create custom solutions for unique business needs.</p>
          <button className="contact-cta" onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span>Let's Talk</span>
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
});

export default EnterpriseIndustries;
