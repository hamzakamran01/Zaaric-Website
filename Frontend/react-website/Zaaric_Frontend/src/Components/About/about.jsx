import React, { useRef, useEffect } from 'react';
import { Target, Lightbulb, Users, ArrowRight } from 'lucide-react';
import './about.css';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(".philosophy-animate");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const pillars = [
        {
            icon: <Target size={28} />,
            title: "Client-First",
            desc: "Every solution begins with understanding your unique challenges and goals."
        },
        {
            icon: <Lightbulb size={28} />,
            title: "Purposeful Innovation",
            desc: "Technology that solves real problems, not innovation for its own sake."
        },
        {
            icon: <Users size={28} />,
            title: "Collaborative Excellence",
            desc: "Transparency and partnership at every step of the journey."
        }
    ];

    return (
        <section className="philosophy-section" ref={sectionRef}>
            <div className="philosophy-container">
                {/* Header */}
                <div className="philosophy-header philosophy-animate">
                    <span className="philosophy-badge">Our Philosophy</span>
                    <h2 className="philosophy-title">
                        Ideas to <span className="gradient-text">Impact</span>
                    </h2>
                    <p className="philosophy-subtitle">
                        We transform abstract concepts into market-ready solutions that drive meaningful change.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="philosophy-grid">
                    {/* Left - Vision Statement */}
                    <div className="vision-card philosophy-animate">
                        <div className="vision-glow"></div>
                        <blockquote className="vision-quote">
                            "Technology, when combined with strategic vision, has the power to bridge the gap between ambition and execution."
                        </blockquote>
                        <div className="vision-author">
                            <div className="author-info">
                                <span className="author-name">Hamza Kamran</span>
                                <span className="author-title">Founder & CEO of Zaaric</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Pillars */}
                    <div className="pillars-container">
                        {pillars.map((pillar, index) => (
                            <div
                                key={index}
                                className="pillar-card philosophy-animate"
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <div className="pillar-icon">{pillar.icon}</div>
                                <div className="pillar-content">
                                    <h4>{pillar.title}</h4>
                                    <p>{pillar.desc}</p>
                                </div>
                                <ArrowRight className="pillar-arrow" size={18} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
