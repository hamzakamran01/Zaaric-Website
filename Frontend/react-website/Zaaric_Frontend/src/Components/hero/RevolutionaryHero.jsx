import React, { useEffect, useState } from 'react';
import EnterpriseCapabilityWheel from './EnterpriseCapabilityWheel';
import './RevolutionaryHero.css';

const STATS = [
    { value: '50+', label: 'Enterprise Deployments' },
    { value: '30%', label: 'Average Cost Reduction' },
    { value: '99.9%', label: 'Production Uptime' },
    { value: 'US & EU', label: 'Global Delivery' },
];

const CAPABILITIES = [
    {
        step: '01',
        title: 'Agentic AI Pipelines',
        description: 'Autonomous systems that reason, orchestration, and execute complex workflows without manual intervention.',
        image: '/Assets/agentic_AI_pipelines_her.jpg',
        detail: 'We architect multi-agent AI systems that autonomously reason...',
    },
    {
        step: '02',
        title: 'Full-Stack Platforms',
        description: 'Production-grade web and mobile platforms engineered for scale, security, and long-term maintainability.',
        image: '/Assets/full_stack_development_hero.jpg',
        detail: 'We engineer production-grade digital platforms from the ground up...',
    },
    {
        step: '03',
        title: 'Workflow Automation',
        description: 'Replace repetitive operations with infrastructure that compounds efficiency across your organization.',
        image: '/Assets/workflow_automation_hero.jpg',
        detail: 'We replace manual, error-prone processes with intelligent automation...',
    },
    {
        step: '04',
        title: 'Compliance-Grade Delivery',
        description: 'HIPAA-ready healthcare systems and enterprise security standards for regulated industries.',
        image: '/Assets/compliance_hero.jpg',
        detail: 'We build systems that meet the strictest regulatory requirements...',
    },
];

const RevolutionaryHero = ({ heroRef }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            className={`revolutionary-hero ${visible ? 'is-visible' : ''}`}
            id="hero"
            ref={heroRef}
        >
            <div className="hero-surface" aria-hidden="true">
                <div className="hero-orb orb-1" />
                <div className="hero-orb orb-2" />
                <svg className="hero-mesh-svg" viewBox="0 0 1400 800" preserveAspectRatio="none">
                    <g stroke="rgba(0, 230, 255, 0.25)" strokeWidth="1" fill="none">
                        {/* A sweeping ribbon of lines flowing through the top of the container */}
                        {Array.from({ length: 30 }).map((_, i) => {
                            // The warp shift creates the tight mesh pattern
                            const yOffset = i * 8;
                            const warpX = i * 5;
                            // Path perfectly curving from top-left, dipping down deeply, sweeping up right
                            const d = `M -200,${yOffset} C ${300 - warpX},${150 + yOffset} ${600 + warpX},${-150 + yOffset * 2} 1600,${350 + yOffset}`;
                            return <path key={`ribbon-h-${i}`} d={d} />;
                        })}

                        {/* Perpendicular mesh lines wrapping the topology */}
                        {Array.from({ length: 45 }).map((_, i) => {
                            const xOffset = i * 35;
                            const d = `M ${-100 + xOffset}, -100 C ${100 + xOffset}, 100 ${-50 + xOffset}, 300 ${200 + xOffset}, 600`;
                            return <path key={`ribbon-v-${i}`} d={d} stroke="rgba(0, 230, 255, 0.15)" strokeWidth="0.8" />;
                        })}
                    </g>
                </svg>
            </div>

            <div className="hero-inner">
                <div className="hero-main">
                    <div className="hero-copy">
                        <p className="hero-label">Enterprise AI Engineering · United States &amp; Europe</p>

                        <h1 className="hero-headline">
                            Production-grade AI systems that{' '}
                            <span className="hero-headline-accent">operate, scale, and deliver</span>{' '}
                            measurable outcomes.
                        </h1>

                        <p className="hero-subheadline">
                            Agentic AI, full-stack platforms, and enterprise automation for US &amp; EU
                            organizations — production systems built to compound over time.
                        </p>

                        <div className="hero-cta-group">
                            <button
                                type="button"
                                className="hero-btn hero-btn-primary"
                                onClick={() => scrollToSection('contact')}
                            >
                                Schedule a Consultation
                            </button>
                            <button
                                type="button"
                                className="hero-btn hero-btn-secondary"
                                onClick={() => scrollToSection('case-study')}
                            >
                                View Case Studies
                            </button>
                        </div>

                        <p className="hero-trust-line">
                            Trusted across healthcare, fintech, e-commerce, and enterprise automation.
                        </p>
                    </div>

                    <div className="hero-visual-panel">
                        <EnterpriseCapabilityWheel />
                    </div>
                </div>

                <div className="hero-stats">
                    {STATS.map((stat) => (
                        <div className="hero-stat" key={stat.label}>
                            <span className="hero-stat-value">{stat.value}</span>
                            <span className="hero-stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div className="hero-story">
                    <div className="hero-story-header">
                        <span className="hero-story-label">What We Build</span>
                        <h2 className="hero-story-title">
                            End-to-end engineering for organizations that cannot afford experiments — only outcomes.
                        </h2>
                    </div>

                    <div className="hero-story-interactive">
                        <div className="hero-story-grid">
                            {CAPABILITIES.map((item) => (
                                <article
                                    className="hero-story-card"
                                    key={item.step}
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    <div className="hero-story-card-overlay" aria-hidden="true" />
                                    <div className="hero-story-card-content">
                                        <span className="hero-story-step">{item.step}</span>
                                        <h3 className="hero-story-card-title">{item.title}</h3>
                                        <p className="hero-story-card-desc">{item.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-bottom-fade" aria-hidden="true" />
        </section>
    );
};

export default RevolutionaryHero;
