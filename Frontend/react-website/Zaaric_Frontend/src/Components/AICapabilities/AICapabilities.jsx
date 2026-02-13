// AI Capabilities — Cinematic Intelligence Matrix
import React, { useEffect, useRef } from 'react';
import {
    Cpu,
    Network,
    Zap,
    MessageSquare,
    ArrowRight
} from 'lucide-react';
import './AICapabilities.css';

const capabilities = [
    {
        icon: Network,
        title: "Agentic AI Systems",
        // Abstract Mesh / Neural Network
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop",
        description: "Autonomous multi-agent architectures that orchestrate complex workflows and execute decisions without human intervention.",
        color: "#00e6ff"
    },
    {
        icon: Zap,
        title: "Intelligent Automation",
        // Dark Circuit / Data Flow
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
        description: "End-to-end automation connecting legacy systems and APIs into self-healing operational infrastructure.",
        color: "#8a2be2"
    },
    {
        icon: Cpu,
        title: "Predictive Intelligence",
        // Analytics / Future Data
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
        description: "Machine learning models delivering actionable forecasting across demand, risk, and behavior at scale.",
        color: "#00ff9d"
    },
    {
        icon: MessageSquare,
        title: "Conversational AI",
        // Abstract Sound Wave / Voice
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop",
        description: "Context-aware systems engineered for high-fidelity engagement and multi-language enterprise communication.",
        color: "#ff0055"
    }
];

const AICapabilities = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="aic-section" ref={sectionRef} id="ai-capabilities">
            <div className="aic-container">
                {/* Header */}
                <header className="aic-header">
                    <span className="aic-label">Intelligence Matrix</span>
                    <h2 className="aic-title">The Full Spectrum of AI Innovation</h2>
                    <p className="aic-subtitle">
                        Immersive intelligence systems designed for the next era of enterprise operations.
                    </p>
                    <div className="aic-header-rule"></div>
                </header>

                {/* Cinematic Matrix Grid */}
                <div className="aic-matrix">
                    {capabilities.map((cap, idx) => {
                        const Icon = cap.icon;
                        return (
                            <div
                                key={idx}
                                className="aic-card"
                                style={{ '--accent-color': cap.color }}
                            >
                                {/* Background Image Layer */}
                                <div className="aic-card-bg">
                                    <img src={cap.image} alt={cap.title} loading="lazy" />
                                    <div className="aic-card-overlay"></div>
                                </div>

                                {/* Content Layer */}
                                <div className="aic-card-content">
                                    <div className="aic-content-top">
                                        <div className="aic-icon-box">
                                            <Icon size={28} strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    <div className="aic-content-bottom">
                                        <h3 className="aic-card-title">{cap.title}</h3>
                                        <p className="aic-card-desc">{cap.description}</p>

                                        <div className="aic-card-arrow">
                                            <ArrowRight size={20} strokeWidth={2} />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Border Glow */}
                                <div className="aic-card-border"></div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="aic-bottom">
                    <button className="aic-cta-btn">
                        <span>Initialize Transformation</span>
                        <div className="aic-btn-glow"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AICapabilities;
