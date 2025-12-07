import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './IdeaToMVP.css';

gsap.registerPlugin(ScrollTrigger);

const IdeaToMVP = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        // Animate content on scroll
        gsap.fromTo('.idea-mvp-content',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.idea-to-mvp-section',
                    start: 'top 70%',
                    once: true
                }
            }
        );

        // Animate particles
        gsap.to('.mvp-particle', {
            y: '-=30',
            opacity: 0.3,
            duration: 3,
            stagger: 0.2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    }, []);

    return (
        <section className="idea-to-mvp-section" ref={sectionRef}>
            {/* Animated Background Particles */}
            <div className="mvp-particles-container">
                <div className="mvp-particle" style={{ top: '10%', left: '15%' }}></div>
                <div className="mvp-particle" style={{ top: '60%', left: '85%' }}></div>
                <div className="mvp-particle" style={{ top: '30%', left: '75%' }}></div>
                <div className="mvp-particle" style={{ top: '80%', left: '25%' }}></div>
            </div>

            {/* Grid Pattern */}
            <div className="mvp-grid-pattern"></div>

            {/* Content */}
            <div className="idea-mvp-content">
                <span className="mvp-badge">30-Day MVP Accelerator</span>
                <h2 className="mvp-title">
                    Got an <span className="title-gradient">Idea?</span><br />
                    We'll Build Your MVP in 30 Days
                </h2>
                <p className="mvp-description">
                    From concept to launch-ready product. Enterprise-grade development at startup speed.
                </p>
                <button className="mvp-cta-button">
                    <span>Start Your Project</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default IdeaToMVP;
