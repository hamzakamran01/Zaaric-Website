// Enterprise Industries — Corporate Authority Grade
import React, { useEffect, useRef } from "react";
import {
  ShoppingCart,
  Briefcase,
  Stethoscope,
  CreditCard,
  GraduationCap,
  Film,
  ArrowRight,
} from "lucide-react";
import "./EnterpriseIndustries.css";

const industries = [
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop",
    desc: "Scalable commerce platforms with intelligent product discovery and global logistics orchestration.",
    capabilities: ["Headless Storefronts", "Payment Systems", "Supply Chain"],
  },
  {
    icon: Briefcase,
    title: "SaaS & Enterprise Platforms",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    desc: "Multi-tenant architectures with usage-based billing, analytics, and infrastructure automation.",
    capabilities: ["Platform Architecture", "Billing Systems", "Analytics"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Life Sciences",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop",
    desc: "HIPAA-compliant systems for clinical workflows, patient engagement, and secure health data exchange.",
    capabilities: ["Regulatory Compliance", "Clinical Workflows", "Data Privacy"],
  },
  {
    icon: CreditCard,
    title: "Fintech & Banking",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format&fit=crop",
    desc: "Real-time ledger systems, regulatory integrations, and institutional-grade financial dashboards.",
    capabilities: ["KYC / AML", "Ledger Systems", "Risk Analytics"],
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80&auto=format&fit=crop",
    desc: "Learning management infrastructure with adaptive content delivery and engagement analytics.",
    capabilities: ["LMS Platforms", "Content Delivery", "Engagement Analytics"],
  },
  {
    icon: Film,
    title: "Media & Entertainment",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80&auto=format&fit=crop",
    desc: "High-throughput content pipelines, streaming infrastructure, and editorial workflow automation.",
    capabilities: ["Streaming Infrastructure", "Content Pipelines", "CMS"],
  },
];

const EnterpriseIndustries = React.forwardRef((props, ref) => {
  const gridRef = useRef(null);

  // Single scroll-reveal — no looping, no repeat
  useEffect(() => {
    const cards = document.querySelectorAll(".ei-card");
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ei-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ei-section" id="industries" ref={ref}>
      <div className="ei-container">
        {/* ── Header ── */}
        <header className="ei-header">
          <span className="ei-label">Industry Expertise</span>
          <h2 className="ei-title">Industries We Serve</h2>
          <p className="ei-subtitle">
            Delivering measurable outcomes across regulated and high-growth sectors.
          </p>
          <div className="ei-header-rule" />
        </header>

        {/* ── Grid ── */}
        <div className="ei-grid" ref={gridRef}>
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <article
                key={idx}
                className="ei-card"
                style={{ "--ei-delay": `${idx * 80}ms` }}
              >
                {/* Image */}
                <div className="ei-card-image">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="ei-card-image-overlay" />
                </div>

                {/* Content */}
                <div className="ei-card-content">
                  <div className="ei-card-icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="ei-card-title">{ind.title}</h3>
                  <p className="ei-card-desc">{ind.desc}</p>
                  <div className="ei-card-caps">
                    {ind.capabilities.map((cap, i) => (
                      <span key={i} className="ei-cap">{cap}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="ei-bottom">
          <p className="ei-bottom-text">
            Operating in a different sector? We build for complexity.
          </p>
          <a
            href="#contact"
            className="ei-bottom-link"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Discuss Your Requirements</span>
            <ArrowRight size={16} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
});

export default EnterpriseIndustries;
