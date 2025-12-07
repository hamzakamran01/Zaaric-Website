import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Zap, Shield, Users, Palette, Smartphone, Trophy, Handshake, ShoppingCart, MessageSquare, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import './FeaturedCaseStudy.css';

gsap.registerPlugin(ScrollTrigger);

const FeaturedCaseStudy = () => {
    const sectionRef = useRef(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const featurePoints = [
        {
            icon: <Shield size={20} />,
            title: 'Enterprise Security',
            desc: 'Bank-grade encryption with JWT authentication, role-based access control, and secure session management.'
        },
        {
            icon: <MessageSquare size={20} />,
            title: 'Real-Time Messaging',
            desc: 'WebSocket-powered instant messaging with read receipts, typing indicators, and media sharing.'
        },
        {
            icon: <Users size={20} />,
            title: 'Community Platform',
            desc: 'Build and manage artist communities with moderation tools, member roles, and collaborative spaces.'
        },
        {
            icon: <Palette size={20} />,
            title: 'Portfolio System',
            desc: 'Dynamic artist portfolios with customizable galleries, artwork metadata, and social engagement.'
        },
        {
            icon: <Smartphone size={20} />,
            title: 'Progressive Web App',
            desc: 'Installable PWA with offline capabilities, push notifications, and native-like performance.'
        },
        {
            icon: <Trophy size={20} />,
            title: 'Gamification',
            desc: 'Achievement system with XP tracking, badges, and competitive rankings to boost engagement.'
        },
        {
            icon: <Handshake size={20} />,
            title: 'Collaboration Tools',
            desc: 'Request and manage artist collaborations with proposal workflows and project tracking.'
        },
        {
            icon: <ShoppingCart size={20} />,
            title: 'Marketplace',
            desc: 'Buy/sell artwork with secure transactions, commission management, and sales analytics.'
        }
    ];

    const images = [
        { src: '/Assets/united-by-art/Screenshot 2025-12-01 231408.png', alt: 'Platform Overview' },
        { src: '/Assets/united-by-art/Screenshot 2025-12-01 231441.png', alt: 'Community Hub' },
        { src: '/Assets/united-by-art/Screenshot 2025-12-01 231453.png', alt: 'Direct Messaging' },
        { src: '/Assets/united-by-art/Screenshot 2025-12-01 231538.png', alt: 'Collaboration Tools' },
        { src: '/Assets/united-by-art/Screenshot 2025-12-07 175342.png', alt: 'Advanced Analytics' },
        { src: '/Assets/united-by-art/Screenshot 2025-12-07 175624.png', alt: 'Project Management' },
        { src: '/Assets/united-by-art/Screenshot 2025-12-07 175801.png', alt: 'Artist Dashboard' },
        { src: '/Assets/united-by-art/Screenshot 2025-12-07 175902.png', alt: 'Event Calendar' }
    ];

    // Number of images to show in the grid
    const visibleImages = images; // Exact 8 images match folder

    useEffect(() => {
        gsap.fromTo('.case-study-animate',
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.featured-case-study-section',
                    start: 'top 75%',
                    once: true
                }
            }
        );

        // Image stagger
        gsap.fromTo('.gallery-item',
            { opacity: 0, scale: 0.95 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.05,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.gallery-grid',
                    start: 'top 80%',
                    once: true
                }
            }
        );
    }, []);

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev + 1) % visibleImages.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev - 1 + visibleImages.length) % visibleImages.length);
    };

    return (
        <section className="featured-case-study-section" id="case-study" ref={sectionRef}>
            {/* Ambient Orbs */}
            <div className="case-orb orb-left"></div>
            <div className="case-orb orb-right"></div>

            <div className="case-study-container">
                {/* Header */}
                <div className="case-study-header case-study-animate">
                    <span className="case-study-badge">
                        <Zap size={14} />
                        Enterprise Project
                    </span>
                    <h2 className="case-study-title">
                        Featured <span className="gradient-text">Case Study</span>
                    </h2>
                    <h3 className="project-name">“ United BY Art ”</h3>
                    <p className="case-study-subtitle">
                        Enterprise-grade networking platform connecting artists globally with advanced
                        collaboration tools, secure messaging, and a vibrant marketplace ecosystem.
                    </p>
                </div>

                {/* Main Content Layout */}
                <div className="case-study-layout">

                    {/* Features List */}
                    <div className="features-section case-study-animate">
                        {featurePoints.map((feature, idx) => (
                            <div key={idx} className="feature-item">
                                <div className="feature-icon-box">
                                    {feature.icon}
                                </div>
                                <div className="feature-text">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image Grid Gallery */}
                    <div className="gallery-section">
                        <div className="gallery-header case-study-animate">
                            <h4>Project Gallery</h4>
                            <div className="gallery-line"></div>
                        </div>

                        {/* Only 8 items shown */}
                        <div className="gallery-grid">
                            {visibleImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="gallery-item"
                                    onClick={() => openLightbox(idx)}
                                >
                                    <img src={img.src} alt={img.alt} loading="lazy" />
                                    <div className="item-overlay">
                                        <Maximize2 size={24} color="#fff" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="cta-container case-study-animate">
                        <a
                            href="https://unitedby.art"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-cta"
                        >
                            <span>View Live Project</span>
                            <ExternalLink size={18} />
                        </a>
                        <p className="cta-note">(will be live in 1 week, join waiting list)</p>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImageIndex !== null && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-close" role="button" onClick={closeLightbox}>
                        <X size={28} />
                    </div>

                    <div className="lightbox-nav nav-prev" role="button" onClick={prevImage}>
                        <ChevronLeft size={32} />
                    </div>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={visibleImages[selectedImageIndex].src}
                            alt={visibleImages[selectedImageIndex].alt}
                        />
                        <div className="lightbox-caption">
                            <span>{visibleImages[selectedImageIndex].alt}</span>
                            <span className="lightbox-counter">{selectedImageIndex + 1} / {visibleImages.length}</span>
                        </div>
                    </div>

                    <div className="lightbox-nav nav-next" role="button" onClick={nextImage}>
                        <ChevronRight size={32} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default FeaturedCaseStudy;
