import React, { useEffect, useRef, useState } from 'react';
import {
    ExternalLink,
    Shield,
    MessageSquare,
    Users,
    Palette,
    Smartphone,
    Trophy,
    Handshake,
    ShoppingCart,
    X,
    ChevronLeft,
    ChevronRight,
    Maximize2
} from 'lucide-react';
import './FeaturedCaseStudy.css';

const FeaturedCaseStudy = () => {
    const sectionRef = useRef(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const metrics = [
        { value: '8+', label: 'Core Modules' },
        { value: 'PWA', label: 'Architecture' },
        { value: 'E2E', label: 'Encrypted' }
    ];

    const capabilitiesLeft = [
        {
            num: '01',
            icon: <Shield size={18} />,
            title: 'Enterprise Security',
            desc: 'Bank-grade encryption with JWT authentication, role-based access control, and secure session management.'
        },
        {
            num: '02',
            icon: <MessageSquare size={18} />,
            title: 'Real-Time Messaging',
            desc: 'WebSocket-powered instant messaging with read receipts, typing indicators, and media sharing.'
        },
        {
            num: '03',
            icon: <Users size={18} />,
            title: 'Community Platform',
            desc: 'Build and manage artist communities with moderation tools, member roles, and collaborative spaces.'
        },
        {
            num: '04',
            icon: <Palette size={18} />,
            title: 'Portfolio System',
            desc: 'Dynamic artist portfolios with customizable galleries, artwork metadata, and social engagement.'
        }
    ];

    const capabilitiesRight = [
        {
            num: '05',
            icon: <Smartphone size={18} />,
            title: 'Progressive Web App',
            desc: 'Installable PWA with offline capabilities, push notifications, and native-like performance.'
        },
        {
            num: '06',
            icon: <Trophy size={18} />,
            title: 'Gamification Engine',
            desc: 'Achievement system with XP tracking, badges, and competitive rankings to boost engagement.'
        },
        {
            num: '07',
            icon: <Handshake size={18} />,
            title: 'Collaboration Tools',
            desc: 'Request and manage artist collaborations with proposal workflows and project tracking.'
        },
        {
            num: '08',
            icon: <ShoppingCart size={18} />,
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

    // Hero image is first; bento gallery uses images[1..7]
    const heroImage = images[0];
    const bentoImages = images.slice(1);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fcs-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        if (sectionRef.current) {
            const animItems = sectionRef.current.querySelectorAll('.fcs-anim');
            animItems.forEach(el => observer.observe(el));
        }

        return () => observer.disconnect();
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
        setSelectedImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="fcs-section" id="case-study" ref={sectionRef}>
            <div className="fcs-container">

                {/* ── Header ── */}
                <header className="fcs-header fcs-anim">
                    <span className="fcs-label">Enterprise Project</span>
                    <h2 className="fcs-title">
                        Featured <span className="fcs-title-accent">Case Study</span>
                    </h2>
                    <div className="fcs-header-rule"></div>
                </header>

                {/* ── Phase 1: Cinematic Hero Showcase ── */}
                <div className="fcs-hero fcs-anim">
                    <div className="fcs-hero-image" onClick={() => openLightbox(0)}>
                        <img src={heroImage.src} alt={heroImage.alt} loading="lazy" />
                        <div className="fcs-hero-overlay"></div>
                        <div className="fcs-hero-content">
                            <span className="fcs-hero-tag">Live Project</span>
                            <h3 className="fcs-hero-name">" United BY Art "</h3>
                            <p className="fcs-hero-tagline">
                                Enterprise-grade networking platform connecting artists globally with
                                advanced collaboration tools, secure messaging, and a vibrant marketplace ecosystem.
                            </p>
                        </div>
                        <div className="fcs-hero-expand">
                            <Maximize2 size={20} />
                        </div>
                    </div>

                    {/* Metrics Strip */}
                    <div className="fcs-metrics">
                        {metrics.map((m, i) => (
                            <div key={i} className="fcs-metric">
                                <span className="fcs-metric-value">{m.value}</span>
                                <span className="fcs-metric-label">{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Phase 2: Executive Capabilities Ledger ── */}
                <div className="fcs-ledger fcs-anim">
                    <div className="fcs-ledger-header">
                        <h4 className="fcs-ledger-title">Technical Capabilities</h4>
                        <div className="fcs-ledger-line"></div>
                    </div>

                    <div className="fcs-ledger-grid">
                        {/* Left Column */}
                        <div className="fcs-ledger-col">
                            {capabilitiesLeft.map((cap, idx) => (
                                <div key={idx} className="fcs-ledger-item">
                                    <div className="fcs-ledger-num">{cap.num}</div>
                                    <div className="fcs-ledger-body">
                                        <div className="fcs-ledger-item-head">
                                            <span className="fcs-ledger-icon">{cap.icon}</span>
                                            <h5>{cap.title}</h5>
                                        </div>
                                        <p>{cap.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="fcs-ledger-col">
                            {capabilitiesRight.map((cap, idx) => (
                                <div key={idx} className="fcs-ledger-item">
                                    <div className="fcs-ledger-num">{cap.num}</div>
                                    <div className="fcs-ledger-body">
                                        <div className="fcs-ledger-item-head">
                                            <span className="fcs-ledger-icon">{cap.icon}</span>
                                            <h5>{cap.title}</h5>
                                        </div>
                                        <p>{cap.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Phase 3: Bento Gallery Showcase ── */}
                <div className="fcs-bento fcs-anim">
                    <div className="fcs-bento-header">
                        <h4 className="fcs-bento-title">Project Gallery</h4>
                        <div className="fcs-bento-line"></div>
                    </div>

                    <div className="fcs-bento-grid">
                        {bentoImages.map((img, idx) => (
                            <div
                                key={idx}
                                className={`fcs-bento-item fcs-bento-item-${idx}`}
                                onClick={() => openLightbox(idx + 1)}
                            >
                                <img src={img.src} alt={img.alt} loading="lazy" />
                                <div className="fcs-bento-overlay">
                                    <Maximize2 size={22} color="#fff" />
                                    <span>{img.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CTA ── */}
                <div className="fcs-cta fcs-anim">
                    <a
                        href="https://unitedby.art"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fcs-cta-btn"
                    >
                        <span>View Live Project</span>
                        <ExternalLink size={18} />
                    </a>
                    <p className="fcs-cta-note">(will be live in 1 week, join waiting list)</p>
                </div>

            </div>

            {/* ── Lightbox ── */}
            {selectedImageIndex !== null && (
                <div className="fcs-lightbox" onClick={closeLightbox}>
                    <div className="fcs-lightbox-close" role="button" onClick={closeLightbox}>
                        <X size={28} />
                    </div>

                    <div className="fcs-lightbox-nav fcs-nav-prev" role="button" onClick={prevImage}>
                        <ChevronLeft size={32} />
                    </div>

                    <div className="fcs-lightbox-body" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={images[selectedImageIndex].src}
                            alt={images[selectedImageIndex].alt}
                        />
                        <div className="fcs-lightbox-caption">
                            <span>{images[selectedImageIndex].alt}</span>
                            <span className="fcs-lightbox-counter">{selectedImageIndex + 1} / {images.length}</span>
                        </div>
                    </div>

                    <div className="fcs-lightbox-nav fcs-nav-next" role="button" onClick={nextImage}>
                        <ChevronRight size={32} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default FeaturedCaseStudy;
