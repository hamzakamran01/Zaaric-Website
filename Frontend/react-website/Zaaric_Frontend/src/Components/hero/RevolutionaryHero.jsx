import React, { useRef, useEffect, useState } from 'react';
import './RevolutionaryHero.css';
import HeroParticles from "../particleBackground";

const RevolutionaryHero = ({ heroRef }) => {
    const [activeHeadline, setActiveHeadline] = useState(0);
    const [metrics, setMetrics] = useState({ clients: 0, reduction: 0, projects: 0 });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const imageOverlayRef = useRef(null);

    const headlines = [
        "Revolutionize Your Enterprise",
        "Build Intelligent Solutions",
        "Deliver 30%+ Cost Reduction",
        "Scale Your Business Faster"
    ];

    const staticHighlight = "with AI Automation";

    const targets = { clients: 50, reduction: 30, projects: 100 };

    // Rotating headlines
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveHeadline((prev) => (prev + 1) % headlines.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Animated counters
    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            setMetrics({
                clients: Math.floor(targets.clients * progress),
                reduction: Math.floor(targets.reduction * progress),
                projects: Math.floor(targets.projects * progress)
            });
            if (currentStep >= steps) {
                setMetrics(targets);
                clearInterval(timer);
            }
        }, interval);
        return () => clearInterval(timer);
    }, []);

    // Advanced 3D Parallax & Depth Effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (imageOverlayRef.current) {
                const rect = imageOverlayRef.current.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                // Main dashboard subtle tilt
                const mainVisual = imageOverlayRef.current.querySelector('.hero-main-visual');
                if (mainVisual) {
                    mainVisual.style.transform = `
                        perspective(2000px)
                        rotateY(${x * 3}deg)
                        rotateX(${-y * 3}deg)
                        translateZ(0px)
                    `;
                }

                // Floating layers with depth-based parallax
                const layers = imageOverlayRef.current.querySelectorAll('.floating-visual-layer');
                layers.forEach((layer, index) => {
                    const depth = (index + 1) * 8;
                    const intensity = (index + 1) * 5;
                    layer.style.transform = `
                        perspective(1500px)
                        rotateY(${x * intensity}deg)
                        rotateX(${-y * intensity}deg)
                        translateX(${x * depth}px)
                        translateY(${y * depth}px)
                        translateZ(${index * 20}px)
                    `;
                });

                // Depth indicators rotation
                const depthIndicators = imageOverlayRef.current.querySelectorAll('.depth-indicator');
                depthIndicators.forEach((indicator, index) => {
                    const rotation = (index + 1) * 30;
                    indicator.style.transform = `rotate(${x * rotation}deg) scale(${1 + Math.abs(x * 0.1)})`;
                });

                // Glow orbs follow cursor
                const orbs = imageOverlayRef.current.querySelectorAll('.glow-orb');
                orbs.forEach((orb, index) => {
                    const moveX = x * (index === 0 ? 40 : -40);
                    const moveY = y * (index === 0 ? 40 : -40);
                    orb.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + Math.abs(x * 0.2)})`;
                });
            }
        };

        const handleScroll = () => {
            if (imageOverlayRef.current) {
                const scrolled = window.pageYOffset;
                const parallaxLayers = imageOverlayRef.current.querySelectorAll('.floating-visual-layer');

                parallaxLayers.forEach((layer, index) => {
                    const speed = (index + 1) * 0.3;
                    const yOffset = scrolled * speed;
                    layer.style.transform = `translateY(${yOffset}px)`;
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Magnetic button effect - DISABLED to remove shake on hover
    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         setMousePos({ x: e.clientX, y: e.clientY });
    //     };
    //     window.addEventListener('mousemove', handleMouseMove);
    //     return () => window.removeEventListener('mousemove', handleMouseMove);
    // }, []);

    // useEffect(() => {
    //     const buttons = document.querySelectorAll('.magnetic-cta');
    //     buttons.forEach(button => {
    //         const rect = button.getBoundingClientRect();
    //         const centerX = rect.left + rect.width / 2;
    //         const centerY = rect.top + rect.height / 2;
    //         const distanceX = mousePos.x - centerX;
    //         const distanceY = mousePos.y - centerY;
    //         const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    //         if (distance < 150) {
    //             const pull = (150 - distance) / 150;
    //             const translateX = distanceX * pull * 0.3;
    //             const translateY = distanceY * pull * 0.3;
    //             button.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.05)`;
    //         } else {
    //             button.style.transform = 'translate(0, 0) scale(1)';
    //         }
    //     });
    // }, [mousePos]);

    return (
        <section className="revolutionary-hero" ref={heroRef}>
            <HeroParticles />
            <div className="hero-gradient-base"></div>
            <div className="hero-grid-pattern"></div>

            <div className="hero-container">
                {/* LEFT SIDE - Content (Left Aligned) */}
                <div className="hero-left">
                    <div className="brand-tagline">
                        <span className="tagline-icon">⚡</span>
                        <span>Enterprise AI Automation Experts</span>
                    </div>

                    {/* Fixed Height Headline - Only White Text Changes */}
                    <h1 className="hero-headline">
                        <div className="headline-dynamic-container">
                            <span className="headline-main" key={`main-${activeHeadline}`}>
                                {headlines[activeHeadline]}
                            </span>
                        </div>
                        <span className="headline-highlight-static">
                            {staticHighlight}
                        </span>
                    </h1>

                    <p className="hero-value-prop">
                        We architect enterprise-grade AI solutions that automate complex workflows,
                        reduce operational costs, and accelerate digital transformation for forward-thinking businesses.
                    </p>

                    <div className="hero-ctas">
                        <button className="magnetic-cta primary-cta">
                            <span>Schedule Strategy Call</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="magnetic-cta secondary-cta">
                            <span>View Case Studies</span>
                        </button>
                    </div>

                    <div className="trust-metrics">
                        <div className="metric-item">
                            <div className="metric-value">{metrics.clients}+</div>
                            <div className="metric-label">Enterprise Clients</div>
                        </div>
                        <div className="metric-divider"></div>
                        <div className="metric-item">
                            <div className="metric-value">{metrics.reduction}%+</div>
                            <div className="metric-label">Cost Reduction</div>
                        </div>
                        <div className="metric-divider"></div>
                        <div className="metric-item">
                            <div className="metric-value">{metrics.projects}+</div>
                            <div className="metric-label">Projects Delivered</div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - ELITE COHERENT VISUAL COMPOSITION */}
                <div className="hero-right" ref={imageOverlayRef}>
                    <div className="premium-visual-stack">
                        {/* Enhanced Background Glow Orbs */}
                        <div className="glow-orb orb-1"></div>
                        <div className="glow-orb orb-2"></div>
                        <div className="glow-orb orb-3"></div>

                        {/* CENTERPIECE - Premium Enterprise Dashboard */}
                        <div className="hero-main-visual centerpiece">
                            <div className="visual-frame main-frame">
                                <div className="frame-glow"></div>
                                <div className="frame-border-animated"></div>

                                {/* Premium AI Enterprise Dashboard Mockup */}
                                <div className="elite-dashboard-mockup">
                                    <div className="dashboard-header">
                                        <div className="header-left">
                                            <div className="logo-badge">
                                                <span className="logo-icon">⚡</span>
                                                <span className="logo-text">AI Command</span>
                                            </div>
                                            <div className="nav-pills">
                                                <span className="pill active">Dashboard</span>
                                                <span className="pill">Analytics</span>
                                                <span className="pill">Automation</span>
                                            </div>
                                        </div>
                                        <div className="header-right">
                                            <div className="user-badge">
                                                <div className="avatar-enterprise">A</div>
                                                <span className="user-name">Admin</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dashboard-content">
                                        <div className="metrics-row-premium">
                                            <div className="metric-card-premium">
                                                <div className="metric-icon-large">📈</div>
                                                <div className="metric-data">
                                                    <div className="metric-value-large">$2.4M</div>
                                                    <div className="metric-label-small">Client Growth</div>
                                                    <div className="trend-indicator positive">+23.5%</div>
                                                </div>
                                            </div>
                                            <div className="metric-card-premium">
                                                <div className="metric-icon-large">🤖</div>
                                                <div className="metric-data">
                                                    <div className="metric-value-large">156</div>
                                                    <div className="metric-label-small">AI Agents</div>
                                                    <div className="trend-indicator active">Live</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="chart-container-premium">
                                            <div className="chart-header-small">
                                                <span>Performance Overview</span>
                                                <span className="live-dot">●</span>
                                            </div>
                                            <div className="advanced-chart">
                                                <div className="chart-grid">
                                                    <div className="grid-line"></div>
                                                    <div className="grid-line"></div>
                                                    <div className="grid-line"></div>
                                                </div>
                                                <div className="chart-area">
                                                    <div className="area-fill"></div>
                                                    <div className="area-line"></div>
                                                </div>
                                                <div className="chart-bars-group">
                                                    <div className="bar-premium" style={{height: '45%'}}></div>
                                                    <div className="bar-premium" style={{height: '70%'}}></div>
                                                    <div className="bar-premium highlight" style={{height: '95%'}}></div>
                                                    <div className="bar-premium" style={{height: '60%'}}></div>
                                                    <div className="bar-premium" style={{height: '85%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="frame-overlay-badge">
                                    <div className="status-badge-premium">
                                        <div className="status-dot-animated"></div>
                                        <span>Live Production</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* LARGE CARD - Top Right - AI Analytics */}
                        <div className="floating-visual-layer layer-large top-right">
                            <div className="premium-glass-card card-large analytics-card">
                                <div className="card-ambient-glow"></div>
                                <div className="card-header-mini">
                                    <div className="status-indicator active"></div>
                                    <span className="card-label">Real-Time Analytics</span>
                                </div>
                                <div className="card-visual-content">
                                    <div className="premium-visual-mockup analytics-premium">
                                        <div className="realtime-stats-grid">
                                            <div className="stat-box-large">
                                                <div className="stat-icon-wrapper">📊</div>
                                                <div className="stat-value-xl">$847K</div>
                                                <div className="stat-label-mini">Monthly Revenue</div>
                                                <div className="progress-bar-mini">
                                                    <div className="progress-fill" style={{width: '78%'}}></div>
                                                </div>
                                            </div>
                                            <div className="stat-box-large">
                                                <div className="stat-icon-wrapper">⚡</div>
                                                <div className="stat-value-xl">2.4s</div>
                                                <div className="stat-label-mini">Avg Response</div>
                                                <div className="trend-badge-mini success">-45% faster</div>
                                            </div>
                                        </div>
                                        <div className="mini-chart-container">
                                            <div className="mini-sparkline">
                                                <div className="spark-dot"></div>
                                                <div className="spark-dot"></div>
                                                <div className="spark-dot active"></div>
                                                <div className="spark-dot"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-metric-bar">
                                    <div className="metric-item-small">
                                        <span className="metric-icon-small">📈</span>
                                        <span className="metric-text">Live Data</span>
                                    </div>
                                    <div className="metric-pulse"></div>
                                </div>
                            </div>
                        </div>

                        {/* MEDIUM CARD - Left Side - Customer Support */}
                        <div className="floating-visual-layer layer-medium left-mid">
                            <div className="premium-glass-card card-medium support-card">
                                <div className="card-ambient-glow"></div>
                                <div className="card-header-mini">
                                    <div className="status-indicator active"></div>
                                    <span className="card-label">AI Support Agent</span>
                                </div>
                                <div className="card-visual-content">
                                    <div className="premium-visual-mockup customer-support">
                                        <div className="chat-interface-compact">
                                            <div className="chat-msg-compact">
                                                <div className="msg-avatar">🤖</div>
                                                <div className="msg-bubble">
                                                    <p>Query resolved in 0.3s</p>
                                                    <div className="msg-stats">
                                                        <span>✓ 98% accuracy</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="satisfaction-mini">
                                                <span className="stars">⭐⭐⭐⭐⭐</span>
                                                <span className="rating">4.9/5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-metric-bar">
                                    <div className="metric-item-small">
                                        <span className="metric-icon-small">💬</span>
                                        <span className="metric-text">24/7 Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SMALL CARD - Bottom Right - Quick Stats */}
                        <div className="floating-visual-layer layer-small bottom-right">
                            <div className="premium-glass-card card-small stats-card">
                                <div className="card-ambient-glow"></div>
                                <div className="card-visual-content">
                                    <div className="compact-stats">
                                        <div className="compact-stat-item">
                                            <div className="compact-icon">🚀</div>
                                            <div className="compact-data">
                                                <div className="compact-value">156</div>
                                                <div className="compact-label">Deployments</div>
                                            </div>
                                        </div>
                                        <div className="stat-divider-mini"></div>
                                        <div className="compact-stat-item">
                                            <div className="compact-icon">✓</div>
                                            <div className="compact-data">
                                                <div className="compact-value">99.9%</div>
                                                <div className="compact-label">Uptime</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MEDIUM CARD - Bottom Left - Code Pipeline */}
                        <div className="floating-visual-layer layer-medium bottom-left">
                            <div className="premium-glass-card card-medium pipeline-card">
                                <div className="card-ambient-glow"></div>
                                <div className="card-header-mini">
                                    <div className="status-indicator processing"></div>
                                    <span className="card-label">Dev Pipeline</span>
                                </div>
                                <div className="card-visual-content">
                                    <div className="premium-visual-mockup dev-pipeline-compact">
                                        <div className="pipeline-mini">
                                            <div className="pipe-step done">
                                                <div className="pipe-icon">✓</div>
                                                <span>Build</span>
                                            </div>
                                            <div className="pipe-arrow">→</div>
                                            <div className="pipe-step active">
                                                <div className="pipe-icon spin">⚙</div>
                                                <span>Deploy</span>
                                            </div>
                                            <div className="pipe-arrow">→</div>
                                            <div className="pipe-step pending">
                                                <div className="pipe-icon">○</div>
                                                <span>Monitor</span>
                                            </div>
                                        </div>
                                        <div className="code-badge">
                                            <span className="code-lang">TypeScript</span>
                                            <span className="code-status">● Building...</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-metric-bar">
                                    <div className="metric-item-small">
                                        <span className="metric-icon-small">📊</span>
                                        <span className="metric-text">Live Data</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements - Depth Indicators */}
                        <div className="depth-indicator depth-1">
                            <div className="depth-ring"></div>
                        </div>
                        <div className="depth-indicator depth-2">
                            <div className="depth-ring"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
};

export default RevolutionaryHero;
