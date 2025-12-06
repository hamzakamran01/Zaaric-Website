import React, { useEffect, useRef, useState } from 'react';
import './AICapabilities.css';

const AICapabilities = () => {
    const sectionRef = useRef(null);
    const [activeCapability, setActiveCapability] = useState(0);

    const capabilities = [
        {
            icon: '🤖',
            title: 'Agentic AI Systems',
            description: 'Autonomous agents that adapt, learn, and execute complex workflows without human intervention',
            features: [
                'Multi-agent orchestration',
                'Self-improving algorithms',
                'Real-time decision making'
            ],
            gradient: 'linear-gradient(135deg, #00e6ff, #0072ff)'
        },
        {
            icon: '⚡',
            title: 'Process Automation',
            description: 'End-to-end automation of repetitive tasks, reducing manual effort by up to 90%',
            features: [
                'Workflow optimization',
                'API integrations',
                'Legacy system modernization'
            ],
            gradient: 'linear-gradient(135deg, #0072ff, #8a2be2)'
        },
        {
            icon: '📊',
            title: 'Predictive Analytics',
            description: 'Advanced ML models delivering actionable insights from your enterprise data',
            features: [
                'Demand forecasting',
                'Risk assessment',
                'Customer behavior prediction'
            ],
            gradient: 'linear-gradient(135deg, #8a2be2, #00e6ff)'
        },
        {
            icon: '🔒',
            title: 'Enterprise Security',
            description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption',
            features: [
                'Zero-trust architecture',
                'Compliance automation',
                'Threat detection & response'
            ],
            gradient: 'linear-gradient(135deg, #00e6ff, #00ff88)'
        },
        {
            icon: '💬',
            title: 'Conversational AI',
            description: 'Next-gen chatbots and virtual assistants that understand context and deliver human-like interactions',
            features: [
                'Natural language processing',
                'Multi-language support',
                '24/7 customer engagement'
            ],
            gradient: 'linear-gradient(135deg, #00ff88, #00e6ff)'
        },
        {
            icon: '🔄',
            title: 'System Integration',
            description: 'Seamlessly connect your existing tools, databases, and platforms into unified AI workflows',
            features: [
                'API-first architecture',
                'Data pipeline automation',
                'Cross-platform compatibility'
            ],
            gradient: 'linear-gradient(135deg, #8a2be2, #0072ff)'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCapability((prev) => (prev + 1) % capabilities.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="ai-capabilities" ref={sectionRef}>
            <div className="capabilities-bg-gradient"></div>
            <div className="capabilities-container">
                {/* Section Header */}
                <div className="capabilities-header">
                    <span className="capabilities-badge">Enterprise AI Platform</span>
                    <h2 className="capabilities-title">
                        The Full Spectrum of AI Innovation
                    </h2>
                    <p className="capabilities-subtitle">
                        Comprehensive AI capabilities designed for mission-critical enterprise operations
                    </p>
                </div>

                {/* Capabilities Grid */}
                <div className="capabilities-grid">
                    {capabilities.map((capability, index) => (
                        <div
                            key={index}
                            className={`capability-card ${index === activeCapability ? 'active' : ''}`}
                            onClick={() => setActiveCapability(index)}
                            data-index={index}
                        >
                            <div className="capability-card-inner">
                                <div className="capability-icon-wrapper">
                                    <div
                                        className="capability-icon"
                                        style={{ background: capability.gradient }}
                                    >
                                        <span>{capability.icon}</span>
                                    </div>
                                    <div className="capability-icon-glow"></div>
                                </div>

                                <h3 className="capability-title">{capability.title}</h3>
                                <p className="capability-description">{capability.description}</p>

                                <div className="capability-features">
                                    {capability.features.map((feature, i) => (
                                        <div key={i} className="capability-feature">
                                            <span className="feature-check">✓</span>
                                            <span className="feature-text">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="capability-card-border"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="capabilities-cta">
                    <div className="cta-content">
                        <h3 className="cta-title">Ready to Transform Your Operations?</h3>
                        <p className="cta-description">
                            Schedule a consultation to discover how our AI solutions can deliver measurable ROI
                        </p>
                    </div>
                    <button className="cta-button">
                        <span>Schedule Strategy Call</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AICapabilities;
