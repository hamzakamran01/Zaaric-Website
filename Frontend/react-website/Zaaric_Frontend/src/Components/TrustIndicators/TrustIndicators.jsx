import React, { useEffect, useRef, useState } from 'react';
import './TrustIndicators.css';

const TrustIndicators = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const missionPillars = [
        {
            icon: '🌍',
            title: 'Global Scale',
            description: 'Build AI infrastructure that powers enterprises across continents, enabling seamless operations at unprecedented scale'
        },
        {
            icon: '🚀',
            title: 'Innovation Leadership',
            description: 'Pioneer breakthrough AI technologies that redefine industry standards and create new possibilities for automation'
        },
        {
            icon: '🤝',
            title: 'Partnership Excellence',
            description: 'Forge long-term strategic partnerships with industry leaders, co-creating solutions that drive mutual growth'
        }
    ];

    return (
        <section className="trust-indicators mission-section" ref={sectionRef}>
            <div className="trust-container">
                {/* Section Header */}
                <div className="trust-header">
                    <span className="trust-badge">Our Vision for the Future</span>
                    <h2 className="trust-title">
                        Scaling AI Innovation Globally
                    </h2>
                    <p className="trust-subtitle">
                        Our mission is to democratize enterprise AI, making cutting-edge automation accessible to organizations worldwide while maintaining the highest standards of excellence
                    </p>
                </div>

                {/* Mission Pillars - 3 Cards */}
                <div className="metrics-grid mission-grid">
                    {missionPillars.map((pillar, index) => (
                        <div key={index} className="metric-card mission-card" data-index={index}>
                            <div className="metric-icon-wrapper">
                                <div className="metric-icon">{pillar.icon}</div>
                                <div className="metric-glow"></div>
                            </div>
                            <div className="metric-content">
                                <div className="metric-label mission-title">{pillar.title}</div>
                                <div className="metric-description mission-description">
                                    {pillar.description}
                                </div>
                            </div>
                            <div className="metric-border"></div>
                        </div>
                    ))}
                </div>

                {/* Vision Statement */}
                <div className="vision-statement">
                    <div className="vision-content">
                        <h3 className="vision-title">2030 Vision</h3>
                        <p className="vision-text">
                            By 2030, we envision powering <strong>10,000+ enterprises</strong> globally,
                            deploying <strong>100,000+ AI agents</strong> across industries, and establishing
                            ourselves as the <strong>leading AI automation platform</strong> trusted by Fortune 500 companies worldwide.
                        </p>
                    </div>
                    <div className="vision-metrics">
                        <div className="vision-metric">
                            <div className="vision-number">10K+</div>
                            <div className="vision-label">Global Enterprises</div>
                        </div>
                        <div className="vision-divider"></div>
                        <div className="vision-metric">
                            <div className="vision-number">100K+</div>
                            <div className="vision-label">AI Agents Deployed</div>
                        </div>
                        <div className="vision-divider"></div>
                        <div className="vision-metric">
                            <div className="vision-number">#1</div>
                            <div className="vision-label">AI Platform</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustIndicators;
