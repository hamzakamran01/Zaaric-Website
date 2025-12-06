import React, { useRef, useEffect, useState } from 'react';
import './EnterpriseHero.css';
import logo from '../../assets/zaaric_logo.png';
import aiIdeaImage from '/Assets/AI_idea.png';
import marketAnalysisImage from '/Assets/point2.jpg';
import marketAnalysis2Image from '/Assets/point4.webp';
import robotWorkingImage from '/Assets/robot_working.png';
import HeroParticles from "../particleBackground";

const EnterpriseHero = ({ heroRef }) => {
  const [currentValueProp, setCurrentValueProp] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [metricsCount, setMetricsCount] = useState({ clients: 0, reduction: 0, projects: 0 });

  const valuePropositions = [
    { text: "Transforming Ideas into", highlight: "Digital Reality" },
    { text: "AI-Powered Enterprise", highlight: "Automation" },
    { text: "Delivering 30%+ Cost", highlight: "Reduction at Scale" }
  ];

  const prefersReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  // Rotating value propositions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValueProp((prev) => (prev + 1) % valuePropositions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animated counter for metrics
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    const targets = { clients: 50, reduction: 30, projects: 100 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setMetricsCount({
        clients: Math.floor(targets.clients * progress),
        reduction: Math.floor(targets.reduction * progress),
        projects: Math.floor(targets.projects * progress)
      });
      if (currentStep >= steps) {
        setMetricsCount(targets);
        clearInterval(timer);
      }
    }, interval);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking for magnetic buttons
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Magnetic button effect
  useEffect(() => {
    const buttons = document.querySelectorAll('.magnetic-btn');
    buttons.forEach(button => {
      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      const distanceX = mousePosition.x - buttonCenterX;
      const distanceY = mousePosition.y - buttonCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      if (distance < 150) {
        const pullStrength = (150 - distance) / 150;
        const translateX = distanceX * pullStrength * 0.3;
        const translateY = distanceY * pullStrength * 0.3;
        button.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.05)`;
      } else {
        button.style.transform = 'translate(0, 0) scale(1)';
      }
    });
  }, [mousePosition]);

  // Scroll animations and parallax
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      // Parallax for story layers
      const storyLayers = document.querySelectorAll('.story-layer');
      storyLayers.forEach((layer, index) => {
        const depth = parseFloat(layer.getAttribute('data-depth') || 0.5);
        const movement = scrolled * depth * 0.3;
        layer.style.transform = `translateY(${movement}px)`;
      });

      // Rotate gradient orbs
      const orbs = document.querySelectorAll('.gradient-orb');
      orbs.forEach((orb, index) => {
        const rotation = scrolled * (0.05 * (index + 1));
        orb.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${1 + scrolled * 0.0001})`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initial animations
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const elements = [
      { selector: '.hero-logo', delay: 0 },
      { selector: '.hero-title', delay: 200 },
      { selector: '.hero-subtitle', delay: 400 },
      { selector: '.hero-metrics', delay: 500 },
      { selector: '.hero-ctas', delay: 600 },
      { selector: '.trust-badges', delay: 800 }
    ];

    elements.forEach(({ selector, delay }) => {
      const element = document.querySelector(selector);
      if (element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        setTimeout(() => {
          element.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, delay);
      }
    });

    // Animate story layers
    setTimeout(() => {
      const storyLayers = document.querySelectorAll('.story-layer');
      storyLayers.forEach((layer, index) => {
        setTimeout(() => {
          layer.classList.add('animate');
        }, index * 200);
      });
    }, 1000);
  }, []);

  return (
    <section className="enterprise-hero" id="hero" ref={heroRef}>
      <HeroParticles />
      <div className="cursor-glow"></div>

      <div className="hero-container">

        <div className="hero-content">
          <div className="hero-logo">
            <img src={logo} alt="Zaaric Logo" />
          </div>

          <h1 className="hero-title">
            <span className="value-prop-wrapper">
              {valuePropositions.map((prop, index) => (
                <span key={index} className={`value-prop ${index === currentValueProp ? 'active' : ''}`}>
                  {prop.text} <span className="highlight gradient-text">{prop.highlight}</span>
                </span>
              ))}
            </span>
          </h1>

          <p className="hero-subtitle">
            We help enterprises cut costs by <strong>30%</strong> and scale operations with
            AI-driven automation. From ideation to deployment, we deliver
            measurable ROI with <strong>enterprise-grade</strong> solutions.
          </p>

          <div className="hero-metrics">
            <div className="metric-item">
              <div className="metric-value">{metricsCount.clients}+</div>
              <div className="metric-label">Clients Empowered</div>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <div className="metric-value">{metricsCount.reduction}%</div>
              <div className="metric-label">Cost Reduction</div>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <div className="metric-value">{metricsCount.projects}+</div>
              <div className="metric-label">Projects Delivered</div>
            </div>
          </div>

          <div className="hero-ctas">
            <button className="cta-btn primary-cta magnetic-btn" onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span className="btn-content">
                <span className="btn-text">Book Free Strategy Call</span>
                <span className="btn-icon">→</span>
              </span>
              <span className="btn-shimmer"></span>
            </button>
            <button className="cta-btn secondary-cta magnetic-btn" onClick={() => {
              const el = document.getElementById('ClientOnBoarding');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span className="btn-content">
                <span className="btn-text">View Our Process</span>
                <span className="btn-icon">↓</span>
              </span>
            </button>
          </div>

          <div className="trust-badges">
            <div className="badge-item">
              <div className="badge-icon">🤖</div>
              <div className="badge-content">
                <span className="badge-title">AI Innovation</span>
                <span className="badge-subtitle">Cutting-edge Solutions</span>
              </div>
            </div>
            <div className="badge-item">
              <div className="badge-icon">📈</div>
              <div className="badge-content">
                <span className="badge-title">Proven ROI</span>
                <span className="badge-subtitle">Measurable Results</span>
              </div>
            </div>
            <div className="badge-item">
              <div className="badge-icon">⚡</div>
              <div className="badge-content">
                <span className="badge-title">Rapid Delivery</span>
                <span className="badge-subtitle">End-to-End Excellence</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-grid">

            <div className="story-layer idea-layer" data-depth="0.2">
              <div className="story-card">
                <img src={aiIdeaImage} alt="AI Innovation" className="story-image" />
                <div className="story-overlay">
                  <div className="story-label">
                    <span className="label-icon">🚀</span>
                    <span className="label-text">AI Innovation</span>
                  </div>
                  <div className="story-pulse"></div>
                </div>
              </div>
            </div>

            <div className="story-layer market-layer" data-depth="0.4">
              <div className="story-card">
                <img src={marketAnalysisImage} alt="Market Research" className="story-image" />
                <div className="story-overlay">
                  <div className="story-label">
                    <span className="label-icon">📊</span>
                    <span className="label-text">Market Research</span>
                  </div>
                  <div className="story-pulse"></div>
                </div>
              </div>
            </div>

            <div className="story-layer analytics-layer" data-depth="0.6">
              <div className="story-card">
                <img src={marketAnalysis2Image} alt="Deep Analytics" className="story-image" />
                <div className="story-overlay">
                  <div className="story-label">
                    <span className="label-icon">🔬</span>
                    <span className="label-text">Deep Analytics</span>
                  </div>
                  <div className="story-pulse"></div>
                </div>
              </div>
            </div>

            <div className="story-layer execution-layer" data-depth="0.8">
              <div className="story-card">
                <img src={robotWorkingImage} alt="AI Execution" className="story-image" />
                <div className="story-overlay">
                  <div className="story-label">
                    <span className="label-icon">⚙️</span>
                    <span className="label-text">AI Execution</span>
                  </div>
                  <div className="story-pulse"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
    </section>
  );
};

export default EnterpriseHero;
