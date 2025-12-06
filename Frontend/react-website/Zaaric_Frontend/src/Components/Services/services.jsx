// src/components/Services.jsx
import React, { useRef, useState, useEffect } from "react";
import ZaaricAnimation from "../../Components/ZaaricAnimation/zaaricAnimation";
import "./services.css";

const Services = React.forwardRef((props, ref) => {
  const servicesGridRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track active card on manual scroll
  useEffect(() => {
    const grid = servicesGridRef.current;
    if (!grid) return;

    const handleScroll = () => {
      const scrollLeft = grid.scrollLeft;
      const cardWidth = grid.children[0]?.offsetWidth || 1;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    grid.addEventListener("scroll", handleScroll, { passive: true });
    return () => grid.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollServices = (direction) => {
    if (!servicesGridRef.current) return;
    const scrollAmount = servicesGridRef.current.children[0]?.offsetWidth || 400;
    servicesGridRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index) => {
    if (!servicesGridRef.current) return;
    const cardWidth = servicesGridRef.current.children[0]?.offsetWidth || 400;
    servicesGridRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const scrollToContact = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "Agentic AI Solutions",
    "Idea Validation & Research",
    "Product Design & Branding",
    "Full-Stack Development",
    "AI & Automation",
    "Cloud & Infrastructure",
    "Content & Creative Production",
    "Launch & Growth Strategy",
  ];

  return (
    <section className="services" id="services" ref={ref}>
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          Zaaric delivers end-to-end solutions — from raw ideas to market-ready
          products. We take care of everything so you can focus on growth.
        </p>
      </div>

      <div className="services-wrapper">
        {/* Cards Grid */}
        <div className="services-grid" ref={servicesGridRef}>
          {/* === CARDS === */}
          <div className="service-card">
            <h3>Agentic AI Solutions</h3>
            <ul className="card-description">
              <li>
                <span className="blue-dot">•</span> Build intelligent AI agents
                that streamline repetitive tasks and automate end-to-end
                workflows.
              </li>
              <li>
                <span className="blue-dot">•</span> Deploy advanced copilots
                powered by LLMs to enhance enterprise decision-making and
                productivity.
              </li>
              <li>
                <span className="blue-dot">•</span> Design multi-agent ecosystems
                that coordinate seamlessly across teams and business systems.
              </li>
            </ul>
            <div className="srvcCardLogos">
              <img src="/Assets/AgenticAI_logo1.png" alt="OpenAI logo" />
              <img
                id="agenticAI2"
                src="/Assets/AgenticAI_logo2_anthropic.png"
                alt="OpenAI logo"
              />
              <img src="/Assets/AgenticAI_logo3_n8n.png" alt="OpenAI logo" />
            </div>
          </div>

          <div className="service-card">
            <h3>Idea Validation & Research</h3>
            <ul className="card-description">
              <li>
                <span className="blue-dot">•</span> Conduct in-depth market
                studies and feasibility checks to validate the strength of your
                ideas early.
              </li>
              <li>
                <span className="blue-dot">•</span> Develop structured product
                roadmaps that clearly define milestones, timelines, and
                opportunities.
              </li>
              <li>
                <span className="blue-dot">•</span> Analyze competitive
                landscapes to uncover differentiators and position your product
                for success.
              </li>
            </ul>
            <div className="srvcCardLogos">
              <img id="idv1" src="/Assets/Idea_validation_logo1.png" alt="logo" />
              <img id="idv2" src="/Assets/Idea_validation_logo2.png" alt="logo" />
              <img id="idv3" src="/Assets/Idea_validation_logo3.png" alt="logo" />
            </div>
          </div>

          <div className="service-card">
            <h3>Product Design & Branding</h3>
            <ul className="card-description">
              <li>
                <span className="blue-dot">•</span> Create intuitive UI/UX
                designs and prototypes that drive user adoption and business
                outcomes.
              </li>
              <li>
                <span className="blue-dot">•</span> Build strong brand identities
                with cohesive visual design and impactful communication systems.
              </li>
              <li>
                <span className="blue-dot">•</span> Deliver fully responsive
                design frameworks that scale consistently across all digital
                platforms.
              </li>
            </ul>
            <div className="srvcCardLogos">
              <img id="pdb1" src="/Assets/productDesign_logo1.png" alt="logo" />
              <img src="/Assets/productDesign_logo2.png" alt="logo" />
              <img src="/Assets/productDesign_logo3.png" alt="logo" />
            </div>
          </div>

          <div className="service-card">
            <h3>Full-Stack Development</h3>
            <ul className="card-description">
              <li>
                <span className="blue-dot">•</span> Build scalable web and mobile
                applications tailored to your business goals and target audience.
              </li>
              <li>
                <span className="blue-dot">•</span> Engineer robust backends and
                APIs that ensure secure, high-performance data integrations.
              </li>
              <li>
                <span className="blue-dot">•</span> Implement third-party
                services seamlessly, enabling feature-rich and connected
                ecosystems.
              </li>
            </ul>
            <div className="srvcCardLogos">
              <img src="/Assets/full_stack_logo1.png" alt="logo" />
              <img id="fsd2" src="/Assets/full_stack_logo2.png" alt="logo" />
              <img src="/Assets/full_stack_logo3.png" alt="logo" />
            </div>
          </div>

          <div className="service-card">
            <h3>AI & Automation</h3>
            <ul className="card-description">
              <li>
                <span className="blue-dot">•</span> Create custom AI assistants
                that automate workflows and deliver personalized customer
                support.
              </li>
              <li>
                <span className="blue-dot">•</span> Develop and fine-tune machine
                learning models tailored to your industry-specific challenges.
              </li>
              <li>
                <span className="blue-dot">•</span> Implement workflow automation
                pipelines that eliminate bottlenecks and reduce manual effort.
              </li>
            </ul>
            <div className="srvcCardLogos">
              <img src="/Assets/AgenticAI_logo1.png" alt="logo" />
              <img src="/Assets/AI_automation_logo1.png" alt="logo" />
              <img id="aiauto3" src="/Assets/AI_automation_logo2.png" alt="logo" />
            </div>
          </div>

          <div className="service-card">
            <h3>Cloud & Infrastructure</h3>
            <ul className="card-description">
              <li>
                <span className="blue-dot">•</span> Provide scalable cloud
                hosting solutions optimized for cost, speed, and global
                reliability.
              </li>
              <li>
                <span className="blue-dot">•</span> Implement DevOps pipelines
                with CI/CD practices for faster, safer, and repeatable
                deployments.
              </li>
              <li>
                <span className="blue-dot">•</span> Strengthen enterprise
                security with compliance, monitoring, and proactive risk
                management.
              </li>
            </ul>
            <div className="srvcCardLogos">
              <img src="/Assets/cloud_Infrastructure_logo1.png" alt="logo" />
              <img src="/Assets/cloud_Infrastructure_logo2.png" alt="logo" />
              <img src="/Assets/cloud_Infrastructure_logo3.png" alt="logo" />
            </div>
          </div>

          <div className="service-card">
            <h3>Content & Creative Production</h3>
            <ul className="card-description">
              <li>
                <span className="blue-dot">•</span> Produce engaging video
                content and high-quality edits tailored for digital-first
                campaigns.
              </li>
              <li>
                <span className="blue-dot">•</span> Craft integrated marketing
                campaigns that blend storytelling with data-driven strategies.
              </li>
              <li>
                <span className="blue-dot">•</span> Deliver creative design assets
                that strengthen branding across web, social, and offline media.
              </li>
            </ul>
            <div className="srvcCardLogos">
              <img src="/Assets/Content_logo1.png" alt="logo" />
              <img id="ccp2" src="/Assets/Content_logo2.png" alt="logo" />
              <img src="/Assets/Content_logo3.png" alt="logo" />
            </div>
          </div>

          <div className="service-card">
            <h3>Launch & Growth Strategy</h3>
            <ul className="card-description">
              <li>
                <span className="blue-dot">•</span> Optimize visibility with
                data-backed SEO practices and actionable analytics-driven
                reporting.
              </li>
              <li>
                <span className="blue-dot">•</span> Apply proven growth-hacking
                frameworks to accelerate adoption and expand market presence.
              </li>
              <li>
                <span className="blue-dot">•</span> Provide continuous support to
                scale products post-launch while improving customer retention.
              </li>
            </ul>
            <div className="srvcCardLogos">
              <img src="/Assets/growth_logo1.png" alt="logo" />
              <img src="/Assets/growth_logo2.png" alt="logo" />
              <img src="/Assets/growth_logo3.png" alt="logo" />
            </div>
          </div>
        </div>

        {/* Mobile Dots Navigation */}
        <div className="services-dots">
          {services.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${activeIndex === idx ? "active" : ""}`}
              onClick={() => scrollToCard(idx)}
            ></span>
          ))}
        </div>

        {/* Arrows (desktop) */}
        <div className="services-arrows">
          <button
            className="arrow left"
            onClick={(e) => {
              e.preventDefault();
              scrollServices("left");
            }}
          >
            ‹
          </button>
          <button
            className="arrow right"
            onClick={(e) => {
              e.preventDefault();
              scrollServices("right");
            }}
          >
            ›
          </button>
        </div>
      </div>

      <div className="services-cta">
        <button onClick={scrollToContact} className="cta-btn primary">
          Start Your Project Today
        </button>
      </div>

      <div className="services-cta-row">
        <div className="srvc_logo">
          <ZaaricAnimation />
          <button
            onClick={scrollToContact}
            className="cta-btn primary animation-cta"
          >
            Book Your call now !
          </button>
        </div>
      </div>
    </section>
  );
});

export default Services;
