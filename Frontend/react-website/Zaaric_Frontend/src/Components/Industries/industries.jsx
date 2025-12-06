// src/components/Industries.jsx
import React, { useEffect, forwardRef, useRef, useState } from "react";
import {
  Briefcase,
  ShoppingCart,
  Stethoscope,
  CreditCard,
  GraduationCap,
  Film,
} from "lucide-react";
import "./industries.css";

const Industries = forwardRef((props, ref) => {
  const industries = [
    {
      icon: <ShoppingCart className="industry-icon" />,
      title: "E-Commerce & Retail",
      desc: "We build scalable headless storefronts, intelligent product discovery, secure payments, and next-gen logistics integrations for global commerce.",
      highlights: ["Headless Storefronts", "Stripe & PayPal", "OMS & Logistics"],
    },
    {
      icon: <Briefcase className="industry-icon" />,
      title: "SaaS & Platforms",
      desc: "From multi-tenant SaaS applications to subscription billing and AI-driven analytics, we help launch, scale, and optimize enterprise platforms.",
      highlights: ["Multi-Tenant Architecture", "Usage Billing", "Analytics"],
    },
    {
      icon: <Stethoscope className="industry-icon" />,
      title: "Healthcare & Life Sciences",
      desc: "HIPAA-compliant portals, patient engagement tools, and secure healthcare data solutions built to ensure privacy, compliance, and accessibility.",
      highlights: ["HIPAA Compliance", "Data Privacy", "Clinical Workflows"],
    },
    {
      icon: <CreditCard className="industry-icon" />,
      title: "Fintech & Banking",
      desc: "Next-gen digital banking solutions, KYC/AML integrations, real-time ledger systems, and insightful dashboards to power financial innovation.",
      highlights: ["KYC / AML", "Ledger Systems", "Financial Dashboards"],
    },
    {
      icon: <GraduationCap className="industry-icon" />,
      title: "Education & EdTech",
      desc: "Learning management systems, gamified content delivery, and scalable engagement tools for the modern education ecosystem.",
      highlights: ["LMS Platforms", "Content Delivery", "Student Engagement"],
    },
    {
      icon: <Film className="industry-icon" />,
      title: "Media & Entertainment",
      desc: "Streaming platforms, digital editing pipelines, and content management systems built for global reach and performance.",
      highlights: ["Streaming Tech", "Editing Pipelines", "CMS Solutions"],
    },
  ];

  const gridRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Reveal animation
  useEffect(() => {
    const cards = document.querySelectorAll(".industry-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // Track active dot on manual scroll (mobile)
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleScroll = () => {
      const scrollLeft = grid.scrollLeft;
      const cardWidth = grid.firstChild?.offsetWidth || 1;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    grid.addEventListener("scroll", handleScroll, { passive: true });
    return () => grid.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to card when clicking dot
  const scrollToCard = (index) => {
    const grid = gridRef.current;
    if (!grid) return;
    const cardWidth = grid.firstChild?.offsetWidth || 1;
    grid.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section className="industries-section" id="industries" ref={ref}>
      <div className="industries-header">
        <h2 className="section-title">Industries We Empower</h2>
        <p className="section-subtitle">
          Tailored digital solutions that redefine experiences across sectors.
        </p>
      </div>

      <div className="industries-grid" ref={gridRef}>
        {industries.map((industry, idx) => (
          <div key={idx} className="industry-card">
            <div className="industry-header">
              {industry.icon}
              <h3>{industry.title}</h3>
            </div>
            <p className="industry-desc">{industry.desc}</p>
            <ul className="industry-highlights">
              {industry.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Dots navigation (mobile only, hidden on desktop via CSS) */}
      <div className="industries-dots">
        {industries.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => scrollToCard(i)}
          ></span>
        ))}
      </div>
    </section>
  );
});

export default Industries;
