import React, { useEffect, useRef, useState } from 'react';
import { Globe, Rocket, Handshake } from 'lucide-react';
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
            icon: <Globe className="trust-lucide-icon" />,
            title: 'Global Scale',
            description: 'Build AI infrastructure that powers enterprises across continents, enabling seamless operations at unprecedented scale'
        },
        {
            icon: <Rocket className="trust-lucide-icon" />,
            title: 'Innovation Leadership',
            description: 'Pioneer breakthrough AI technologies that redefine industry standards and create new possibilities for automation'
        },
        {
            icon: <Handshake className="trust-lucide-icon" />,
            title: 'Partnership Excellence',
            description: 'Forge long-term strategic partnerships with industry leaders, co-creating solutions that drive mutual growth'
        }
    ];

    return (
        <section className="trust-indicators-vertical" ref={sectionRef}>

            {/* PART 1: HERO BANNER (Image + Title) */}
            <div className="trust-hero-banner">
                <div className="trust-bg-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
                        alt="Global Neural Network"
                        className="trust-bg-image"
                    />
                    <div className="trust-hero-overlay"></div>
                </div>

                <div className="trust-hero-content">
                    <div className="trust-container">
                        <div className={`trust-header-left ${isVisible ? 'animate-in' : ''}`}>
                            <div className="trust-label">GLOBAL INFRASTRUCTURE</div>
                            <h2 className="trust-title">
                                Scaling <span className="gradient-text">AI Innovation</span> Globally
                            </h2>
                            <p className="trust-subtitle">
                                Democratizing enterprise AI with a battle-tested infrastructure that powers
                                mission-critical operations across continents.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PART 2: DETAILS SECTION (Grid + Vision) */}
            <div className="trust-details-section">
                <div className={`trust-container ${isVisible ? 'animate-in' : ''}`}>

                    {/* Enterprise Mission Grid */}
                    <div className="enterprise-grid">
                        {missionPillars.map((pillar, index) => (
                            <div key={index} className="enterprise-card" style={{ transitionDelay: `${index * 100}ms` }}>
                                <div className="card-top-border"></div>
                                <div className="enterprise-icon-box">
                                    {pillar.icon}
                                </div>
                                <h3 className="enterprise-card-title">{pillar.title}</h3>
                                <p className="enterprise-card-desc">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Vision 2030 Anchor Bar */}
                    <div className="vision-anchor-bar">
                        <div className="vision-anchor-label">2030 VISION</div>
                        <div className="vision-metrics-row">
                            <div className="vision-stat">
                                <span className="v-num">10K+</span>
                                <span className="v-txt">Global Enterprises</span>
                            </div>
                            <div className="v-divider"></div>
                            <div className="vision-stat">
                                <span className="v-num">100K+</span>
                                <span className="v-txt">AI Agents Deployed</span>
                            </div>
                            <div className="v-divider"></div>
                            <div className="vision-stat">
                                <span className="v-num">#1</span>
                                <span className="v-txt">Trusted AI Platform</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustIndicators;
