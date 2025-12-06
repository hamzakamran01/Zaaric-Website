// Elite Enterprise ClientOnboarding with Scroll-Based Timeline
// Premium horizontal timeline with smooth progress animations

import React, { useState, useEffect, useRef } from "react";
import "./ClientOnboarding.css";

const STEPS = [
  {
    id: 1,
    title: "Discovery",
    subtitle: "Understanding Your Vision",
    description:
      "We uncover the core challenges, map opportunities, and define measurable success criteria with absolute clarity through structured workshops and stakeholder interviews.",
    deliverables: ["Business Requirements", "Technical Specifications", "Success Metrics"],
    duration: "1-2 weeks"
  },
  {
    id: 2,
    title: "Planning",
    subtitle: "Strategic Blueprint",
    description:
      "A comprehensive roadmap aligns solution design, timelines, resource allocation, and risk controls—ensuring every move is deliberate, scalable, and future-proof.",
    deliverables: ["Project Roadmap", "Architecture Design", "Resource Plan"],
    duration: "2-3 weeks"
  },
  {
    id: 3,
    title: "Execution",
    subtitle: "Building Excellence",
    description:
      "Through agile sprints, rigorous quality gates, continuous integration, and live stakeholder feedback loops, ideas transform into tangible, thoroughly tested outcomes.",
    deliverables: ["Working Software", "Quality Reports", "Progress Updates"],
    duration: "8-12 weeks"
  },
  {
    id: 4,
    title: "Delivery",
    subtitle: "Seamless Launch",
    description:
      "From secure deployment to comprehensive knowledge transfer, we ensure smooth adoption, provide dedicated support, and drive measurable post-launch excellence.",
    deliverables: ["Production Deployment", "Documentation", "Support Plan"],
    duration: "1-2 weeks"
  },
];

export default function ClientOnboarding() {
  const [activePhase, setActivePhase] = useState(0);
  const sectionRef = useRef(null);

  // Calculate progress based on active phase (0-100%)
  const progress = ((activePhase + 1) / STEPS.length) * 100;

  // Handle phase node click - NO PAGE SCROLLING
  const handlePhaseClick = (index) => {
    setActivePhase(index);
    // Removed scrollIntoView to prevent page scroll on click
  };

  return (
    <section className="onboarding-timeline-section" ref={sectionRef} id="ClientOnBoarding">
      {/* Section Header */}
      <header className="timeline-header">
        <div className="header-badge">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2L10 6L14 7L11 10L12 14L8 12L4 14L5 10L2 7L6 6L8 2Z" fill="currentColor" />
          </svg>
          <span>Our Process</span>
        </div>
        <h2 className="timeline-title">
          Client Onboarding with <span className="gradient-text">Zaaric</span>
        </h2>
        <p className="timeline-subtitle">
          A four-phase enterprise framework delivering measurable outcomes from discovery to deployment
        </p>
      </header>

      {/* Horizontal Timeline */}
      <div className="timeline-container">
        {/* Timeline Track */}
        <div className="timeline-track">
          <div
            className="timeline-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Timeline Nodes */}
        <div className="timeline-nodes">
          {STEPS.map((step, index) => (
            <div
              key={step.id}
              className={`timeline-node ${index <= activePhase ? 'active' : ''
                } ${index === activePhase ? 'current' : ''} ${index === activePhase + 1 ? 'buzz' : ''
                }`}
              style={{ left: `${(index / (STEPS.length - 1)) * 100}%` }}
              onClick={() => handlePhaseClick(index)}
            >
              <div className="node-circle">
                <span className="node-number">{step.id}</span>
                <div className="node-glow"></div>
              </div>
              <div className="node-label">{step.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Phase Details Cards */}
      <div className="phases-grid">
        {STEPS.map((step, index) => (
          <div
            key={step.id}
            className={`phase-card ${index === activePhase ? 'active' : ''} ${index < activePhase ? 'completed' : ''}`}
          >
            <div className="phase-header">
              <div className="phase-number">
                <span>{String(step.id).padStart(2, '0')}</span>
              </div>
              <div className="phase-title-group">
                <h3 className="phase-title">{step.title}</h3>
                <p className="phase-subtitle">{step.subtitle}</p>
              </div>
            </div>

            <p className="phase-description">{step.description}</p>

            <div className="phase-meta">
              <div className="meta-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="3" width="12" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 6H14" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="5" cy="1.5" r="0.5" fill="currentColor" />
                  <circle cx="11" cy="1.5" r="0.5" fill="currentColor" />
                </svg>
                <span>{step.duration}</span>
              </div>
            </div>

            <div className="deliverables-list">
              <div className="deliverables-label">Key Deliverables:</div>
              <ul>
                {step.deliverables.map((item, i) => (
                  <li key={i}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase Indicator */}
            {index === activePhase && (
              <div className="active-indicator">
                <span>Current Phase</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="scroll-indicator">
        <div className="indicator-bar">
          <div className="indicator-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="indicator-text">
          Click the timeline nodes to explore our process • Phase {activePhase + 1} of {STEPS.length}
        </p>
      </div>
    </section>
  );
}