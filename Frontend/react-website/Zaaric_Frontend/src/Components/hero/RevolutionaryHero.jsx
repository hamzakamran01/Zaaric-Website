import React, { useRef, useEffect, useState } from 'react';
import './RevolutionaryHero.css';
import HeroParticles from "../particleBackground";

const RevolutionaryHero = ({ heroRef }) => {
    const [mount, setMount] = useState(false);
    const imageOverlayRef = useRef(null);

    useEffect(() => {
        setMount(true);
    }, []);

    // Advanced 3D Parallax & Depth Effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!imageOverlayRef.current) return;

            const rect = imageOverlayRef.current.getBoundingClientRect();
            // Calculate mouse position relative to the element center
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            // Main dashboard subtle tilt
            const mainVisual = imageOverlayRef.current.querySelector('.hero-dashboard-frame');
            if (mainVisual) {
                mainVisual.style.transform = `
                    translate(-50%, -50%)
                    perspective(2000px)
                    rotateY(${x * 1.5}deg)
                    rotateX(${-y * 1.5}deg)
                    translateZ(0px)
                `;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="revolutionary-hero" ref={heroRef}>
            <HeroParticles />
            <div className="hero-gradient-overlay"></div>

            <div className={`hero-content-container ${mount ? 'mounted' : ''}`} style={{ opacity: 0 }}>

                {/* Left Column: Authority & Conversion */}
                <div className="hero-text-content">
                    {/* Brand Pill Removed as requested */}

                    <h1 className="hero-headline">
                        Enterprise AI Automation That Cuts Costs by <span className="gradient-text">30%</span>
                    </h1>

                    <p className="hero-subheadline">
                        We architect enterprise-grade AI systems that automate complex workflows
                        and deliver measurable ROI—from ideation to production, in weeks.
                    </p>

                    <div className="hero-cta-group">
                        <button className="primary-cta" onClick={() => scrollToSection('contact')}>
                            Book Free Strategy Session
                            <span className="cta-arrow">→</span>
                        </button>

                        <button className="secondary-cta" onClick={() => scrollToSection('case-study')}>
                            View Case Studies
                        </button>
                    </div>

                    <div className="trust-metrics-bar">
                        <div className="trust-metric">
                            <span className="metric-value">50+</span>
                            <span className="metric-label">Enterprise Clients</span>
                        </div>
                        <div className="metric-divider"></div>
                        <div className="trust-metric">
                            <span className="metric-value">30%</span>
                            <span className="metric-label">Cost Reduction</span>
                        </div>
                        <div className="metric-divider"></div>
                        <div className="trust-metric">
                            <span className="metric-value">99.9%</span>
                            <span className="metric-label">System Uptime</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Visual Command Center */}
                <div className="hero-visual-content" ref={imageOverlayRef}>
                    <div className="hero-dashboard-stack">
                        {/* Main Dashboard Frame - High Quality Image */}
                        <div className="hero-dashboard-frame image-mode">
                            <div className="dashboard-header">
                                <div className="window-controls">
                                    <span className="control red"></span>
                                    <span className="control yellow"></span>
                                    <span className="control green"></span>
                                </div>
                                <div className="address-bar">
                                    <span className="lock-icon">🔒</span>
                                    <span className="url-text">app.zaaric.ai/mission-control</span>
                                </div>
                            </div>
                            <div className="dashboard-image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                                    alt="Zaaric Enterprise AI Dashboard"
                                    className="dashboard-img"
                                />
                                <div className="dashboard-overlay-gradient"></div>
                            </div>

                            {/* Live Badge Overlay */}
                            <div className="live-badge">
                                <span className="pulsing-dot"></span>
                                Live Production
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator removed */}
        </section>
    );
};

export default RevolutionaryHero;
