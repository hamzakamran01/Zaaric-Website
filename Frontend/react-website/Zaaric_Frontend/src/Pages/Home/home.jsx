import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import "./home.css";
import logo from "../../assets/zaaric_logo.png";
import heroVideo from "../../assets/hero_bgVideo.mp4";

// ✅ Lazy load components
const ZaaricAnimation = lazy(() =>
  import("../../Components/ZaaricAnimation/zaaricAnimation")
);
const TestimonialSection = lazy(() =>
  import("../../Components/Testimonials/testimonials")
);
const Contact = lazy(() => import("../../Components/Contact/contact"));
const Portfolio = lazy(() => import("../../Components/Portfolio/portfolio"));
const About = lazy(() => import("../../Components/About/about.jsx"));
const Industries = lazy(() =>
  import("../../Components/Industries/industries.jsx")
);
const ClientOnboarding = lazy(() =>
  import("../../Components/ClientOnboarding/ClientOnboarding.jsx")
);
const GearSetupAnimation = lazy(() =>
  import("../../Components/GearSetup/gearSetupAnimation.jsx")
);
const ZaaricScrollGears = lazy(() =>
  import("../../Components/GearSetup/gearSetupAnimation.jsx")
);
const AIStats = lazy(() =>
  import("../../Components/AiStats/aiStats.jsx")
);

const RevolutionaryHero = lazy(() =>
  import("../../Components/hero/RevolutionaryHero.jsx")
);
const EnterpriseIndustries = lazy(() =>
  import("../../Components/Industries/EnterpriseIndustries.jsx")
);

const Services = lazy(() => import("../../Components/Services/services.jsx"));
const TrustIndicators = lazy(() => import("../../Components/TrustIndicators/TrustIndicators.jsx"));
const AICapabilities = lazy(() => import("../../Components/AICapabilities/AICapabilities.jsx"));
const FeaturedCaseStudy = lazy(() => import("../../Components/FeaturedCaseStudy/FeaturedCaseStudy.jsx"));
const IdeaToMVP = lazy(() => import("../../Components/IdeaToMVP/IdeaToMVP.jsx"));

const Home = () => {
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const industriesRef = useRef(null);
  const teamRef = useRef(null);
  const timelineLineRef = useRef(null);
  const timelineGlowRef = useRef(null);
  const timelineSleekLineRef = useRef(null);
  const insightsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const careersRef = useRef(null);
  const tailoredRef = useRef(null);
  const packagesRef = useRef(null);
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const connectorLineRef = useRef(null);
  const timelineProgressRef = useRef(null);
  const servicesGridRef = useRef(null);


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // Utility function for reduced motion preference
  const prefersReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  // Dynamic import of anime.js
  useEffect(() => {
    import('animejs').then((module) => {
      window.anime = module.default;
    });
  }, []);

  const onTimelineDotClick = (nodeIndex) => {
    const sectionEl = teamRef.current;
    if (!sectionEl) return;
    const cards = sectionEl.querySelectorAll(".timeline-card");
    const target = cards[nodeIndex];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleMobileDotClick = (index) => {
    const container = document.querySelector('.mobile-images-container');
    if (!container) return;

    const items = container.querySelectorAll('.mobile-image-item');
    const targetItem = items[index];
    if (targetItem) {
      targetItem.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }

    // Update active dot
    const dots = document.querySelectorAll('.mobile-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  };

  const scrollToSection = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  /* ################################################################################################ */
  /* ################# Control for the Dynamic Timeline in Our Leadership Section  ################## */
  /* ############################################################################################### */
  useEffect(() => {
    const handleTimelineScroll = () => {
      const section = teamRef.current;
      const progress = timelineProgressRef.current;
      const glow = timelineGlowRef.current;
      const sleekLine = timelineSleekLineRef.current;

      if (!section || !progress) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const totalScrollDistance = sectionHeight + windowHeight;
      const scrolled = Math.min(Math.max((windowHeight - sectionTop) / totalScrollDistance, 0), 1);

      // Update timeline progress
      progress.style.height = `${scrolled * 100}%`;

      // Update glow position and opacity
      if (glow) {
        const glowPosition = scrolled * (sectionHeight - 150);
        glow.style.top = `${glowPosition}px`;
        glow.style.opacity = scrolled > 0.1 && scrolled < 0.9 ? '1' : '0';
      }

      // Update sleek line position
      if (sleekLine) {
        const linePosition = scrolled * (sectionHeight - 50);
        sleekLine.style.top = `${linePosition}px`;
        sleekLine.style.height = scrolled > 0.05 ? '50px' : '0';
      }
    };

    // Timeline card reveal animation
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe timeline cards
    document.querySelectorAll(".timeline-card").forEach((card) => {
      cardObserver.observe(card);
    });

    window.addEventListener("scroll", handleTimelineScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleTimelineScroll);
      cardObserver.disconnect();
    };
  }, []);

  // Mobile images scroll detection
  useEffect(() => {
    const container = document.querySelector('.mobile-images-container');
    if (!container) return;

    const handleMobileScroll = () => {
      const items = container.querySelectorAll('.mobile-image-item');
      const dots = document.querySelectorAll('.mobile-dot');

      if (items.length === 0 || dots.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let activeIndex = 0;
      let minDistance = Infinity;

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(containerCenter - itemCenter);

        if (distance < minDistance) {
          minDistance = distance;
          activeIndex = index;
        }
      });

      // Update active dot
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    };

    container.addEventListener('scroll', handleMobileScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleMobileScroll);
    };
  }, []);

  /* ---------------- IntersectionObserver: section slide-in ---------------- */
  useEffect(() => {
    const options = { threshold: 0.15 };
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("slide-in");
          sectionObserver.unobserve(e.target);
        }
      });
    }, options);

    [servicesRef, industriesRef, teamRef, insightsRef, careersRef, tailoredRef, packagesRef, aboutRef, contactRef, testimonialsRef]
      .forEach(r => r.current && sectionObserver.observe(r.current));

    return () => sectionObserver.disconnect();
  }, []);



  /* ---------------- Timeline: glow and sleek line follow scroll + active dots on view + dynamic navigation ---------------- */
  useEffect(() => {
    const lineEl = timelineLineRef.current;
    const glowEl = timelineGlowRef.current;
    const sleekLineEl = timelineSleekLineRef.current;
    const sectionEl = teamRef.current;
    if (!lineEl || !glowEl || !sleekLineEl || !sectionEl) return;

    let currentNode = 0;
    const cards = sectionEl.querySelectorAll(".timeline-card");
    const totalNodes = cards.length;
    let lineHeight; // Define outside for scope
    let cardPositions = []; // Populate properly

    const updateTimeline = () => {
      const rect = sectionEl.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = sectionEl.offsetHeight;
      const viewportH = window.innerHeight;
      const scrollY = window.scrollY;

      const start = sectionTop - viewportH * 0.2;
      const end = sectionTop + sectionHeight - viewportH * 0.8;
      const progress = Math.max(0, Math.min(1, (scrollY - start) / (end - start)));

      lineHeight = lineEl.offsetHeight;
      const glowHeight = glowEl.offsetHeight;
      const travel = Math.max(0, lineHeight - glowHeight);
      glowEl.style.transform = `translateY(${progress * travel}px)`;

      cardPositions = Array.from(cards).map(card => {
        const cardRect = card.getBoundingClientRect();
        return cardRect.top + window.scrollY - sectionTop;
      });
      const nodeHeight = lineHeight / (totalNodes - 1);
      const targetTop = cardPositions[currentNode] || 0;
      const sleekLineHeight = Math.min(targetTop + nodeHeight, lineHeight);

      sleekLineEl.style.height = `${sleekLineHeight}px`;
      sleekLineEl.style.top = `${progress * travel}px`;
    };



    const handleDotClick = (nodeIndex) => {
      currentNode = nodeIndex;
      const nodeTop = cardPositions[nodeIndex];
      const sleekLineHeight = Math.min(nodeTop + (lineHeight / (totalNodes - 1)), lineHeight);

      sleekLineEl.style.transition = 'height 0.5s ease-out 0.2s, top 0.5s ease-out 0.2s';
      sleekLineEl.style.height = `${sleekLineHeight}px`;
      sleekLineEl.style.top = `${nodeTop}px`;

      cards.forEach((card, idx) => card.classList.toggle("active", idx === nodeIndex));
      window.scrollTo({ top: cards[nodeIndex].offsetTop + sectionEl.offsetTop, behavior: "smooth" });
    };

    updateTimeline();
    window.addEventListener("scroll", updateTimeline, { passive: true });
    window.addEventListener("resize", updateTimeline);

    const dotObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const card = e.target;
          const nodeIndex = parseInt(card.getAttribute("data-node"));
          if (nodeIndex > currentNode) {
            currentNode = nodeIndex;
            const nodeTop = cardPositions[nodeIndex];
            sleekLineEl.style.height = `${nodeTop + (lineHeight / (totalNodes - 1))}px`;
            sleekLineEl.style.top = `${nodeTop}px`;
          }
          card.classList.add("active");
        } else {
          e.target.classList.remove("active");
        }
      });
    }, { threshold: 0.55 });

    cards.forEach((c) => dotObserver.observe(c));

    return () => {
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);


  /* ---------------- Connector Line Animation from Hero to Services ---------------- */
  useEffect(() => {
    const heroEl = heroRef.current;
    const servicesEl = servicesRef.current;
    const lineEl = connectorLineRef.current;
    if (!heroEl || !servicesEl || !lineEl) return;

    const updateConnectorLine = () => {
      const heroRect = heroEl.getBoundingClientRect();
      const servicesRect = servicesEl.getBoundingClientRect();
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;

      const heroBottom = heroRect.bottom + scrollY;
      const servicesTop = servicesRect.top + scrollY;
      const totalDistance = servicesTop - heroBottom;
      const scrollProgress = Math.max(0, Math.min(1, (scrollY + viewportH - heroBottom) / totalDistance));

      lineEl.style.height = `${totalDistance}px`; // Set dynamic height
      const path = lineEl.querySelector("path");
      if (path) {
        const lineLength = totalDistance * scrollProgress;
        path.setAttribute("d", `M 50 0 L 50 ${lineLength}`);
        lineEl.style.opacity = scrollProgress > 0 ? 1 : 0;
      }
    };

    // Delay services cards reveal until line animation is near completion
    const servicesObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const heroRect = heroEl.getBoundingClientRect();
          const servicesRect = servicesEl.getBoundingClientRect();
          const scrollY = window.scrollY;
          const heroBottom = heroRect.bottom + scrollY;
          const servicesTop = servicesRect.top + scrollY;
          const totalDistance = servicesTop - heroBottom;
          const scrollProgress = Math.max(0, Math.min(1, (scrollY + window.innerHeight - heroBottom) / totalDistance));

          if (scrollProgress >= 0.9) {
            const cards = servicesEl.querySelectorAll(".service-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible");
              }, index * 200);
            });
            servicesObserver.unobserve(e.target);
          }
        }
      });
    }, { threshold: 0.1 });

    servicesObserver.observe(servicesEl);
    window.addEventListener("scroll", updateConnectorLine, { passive: true });
    window.addEventListener("resize", updateConnectorLine);

    return () => {
      window.removeEventListener("scroll", updateConnectorLine);
      window.removeEventListener("resize", updateConnectorLine);
    };
  }, []);

  // Global handler: any button click scrolls to contact (excluding form submits and navbar)
  useEffect(() => {
    const handleGlobalButtonClick = (e) => {
      const targetEl = e.target.closest('button, [role="button"], .cta-btn, .cta-button, .apply');
      if (!targetEl) return;

      // Skip if it's inside the navbar (hamburger menu, mobile menu, nav links)
      const isNavbarElement = targetEl.closest('.navbar, .navbar-toggle, .mobile-menu, .navbar-links');
      if (isNavbarElement) return;

      // Skip if it's a submit button or inside a form (e.g., contact form submit)
      const isSubmit = targetEl.getAttribute('type') === 'submit' || targetEl.closest('form');
      if (isSubmit) return;

      e.preventDefault();
      scrollToSection(contactRef);
    };

    document.addEventListener('click', handleGlobalButtonClick, true);
    return () => document.removeEventListener('click', handleGlobalButtonClick, true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* ------------ data for stagger delays (industries, insights) ------------- */
  const setDelay = (i) => ({ style: { ["--delay"]: `${i * 80}ms` } });

  // Hero section animations with anime.js
  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Wait for anime.js to be loaded
    const checkAnimeAndAnimate = () => {
      if (!window.anime) {
        setTimeout(checkAnimeAndAnimate, 100);
        return;
      }

      const heroElements = [
        { el: '.hero-logo', delay: 0, duration: 800 },
        { el: '.hero-title', delay: 200, duration: 1000 },
        { el: '.hero-subtitle', delay: 400, duration: 800 },
        { el: '.hero-ctas', delay: 600, duration: 600 },
        { el: '.trust-badges', delay: 800, duration: 600 }
      ];

      heroElements.forEach(({ el, delay, duration }) => {
        const element = document.querySelector(el);
        if (element) {
          window.anime({
            targets: element,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: duration,
            delay: delay,
            easing: 'easeOutCubic'
          });
        }
      });
    };

    // Fallback animation if anime.js fails to load
    const fallbackAnimation = () => {
      const heroElements = [
        '.hero-logo', '.hero-title', '.hero-subtitle',
        '.hero-ctas', '.trust-badges'
      ];

      heroElements.forEach((el, index) => {
        const element = document.querySelector(el);
        if (element) {
          element.style.opacity = '0';
          element.style.transform = 'translateY(30px)';

          setTimeout(() => {
            element.style.transition = 'all 0.6s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }, index * 150);
        }
      });
    };

    // Try anime.js first, fallback to CSS if it fails
    const timeoutId = setTimeout(fallbackAnimation, 2000);
    checkAnimeAndAnimate();

    // Hero visual story animations
    const animateHeroStory = () => {
      // Animate flow lines first
      setTimeout(() => {
        const flowLines = document.querySelectorAll('.flow-line');
        flowLines.forEach((line, index) => {
          setTimeout(() => {
            line.classList.add('animate');
          }, index * 300);
        });
      }, 1000);

      // Animate story layers with jitter
      setTimeout(() => {
        const storyLayers = document.querySelectorAll('.story-layer');
        storyLayers.forEach((layer, index) => {
          setTimeout(() => {
            layer.classList.add('animate');
          }, index * 200);
        });
      }, 2200);

      // Animate robot last
      setTimeout(() => {
        const robot = document.querySelector('.hero-robot');
        if (robot) {
          robot.classList.add('animate');
        }
      }, 3000);
    };

    // Start hero story animation
    setTimeout(animateHeroStory, 500);

    // Parallax effect for hero robot
    const handleHeroParallax = () => {
      const robot = document.querySelector('.hero-robot');
      if (robot) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        robot.style.transform = `translateY(${rate}px) rotateY(${scrolled * 0.02}deg)`;
      }
    };

    window.addEventListener('scroll', handleHeroParallax, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleHeroParallax);
    };
  }, []);

  /* ***************************************************************************************************** */
  /* ********************************************** SERVICES SCROLL ************************************** */
  /* ***************************************************************************************************** */


  //   const [canScrollLeft, setCanScrollLeft] = useState(false);
  // const [canScrollRight, setCanScrollRight] = useState(true);

  // const checkScroll = () => {
  //   const el = servicesGridRef.current;
  //   if (!el) return;
  //   setCanScrollLeft(el.scrollLeft > 0);
  //   setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  // };

  // useEffect(() => {
  //   const el = servicesGridRef.current;
  //   if (!el) return;

  //   const onWheel = (e) => {
  //     // if vertical scroll is stronger than horizontal, convert it to horizontal scroll
  //     if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
  //       e.preventDefault();            // MUST be allowed by passive:false
  //       el.scrollLeft += e.deltaY;     // move horizontally by the vertical wheel delta
  //     }
  //   };

  //   el.addEventListener('wheel', onWheel, { passive: false });

  //   return () => {
  //     el.removeEventListener('wheel', onWheel);
  //   };
  // }, []);


  return (
    <div className="home-container">
      {/* Hero Section */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <RevolutionaryHero heroRef={heroRef} />
      </Suspense>


      {/* ═══ Marquee Strip: Exact Hero↔Services Intersection ═══ */}
      <div className="hero-services-marquee">
        <div className="marquee-track">
          {[
            "/Assets/chatgpt_logo.png",
            "/Assets/anthropic_logo.png",
            "/Assets/AgenticAI_logo3_n8n.png",
            "/Assets/AI_automation_logo1.png",
            "/Assets/AI_automation_logo2.png",
            "/Assets/cloud_Infrastructure_logo1.png",
            "/Assets/cloud_Infrastructure_logo2.png",
            "/Assets/cloud_Infrastructure_logo3.png",
            "/Assets/full_stack_logo1.png",
            "/Assets/full_stack_logo2.png",
            "/Assets/nextjs_logo.jpg",
            "/Assets/github_logo.png",
            "/Assets/Content_logo1.png",
            "/Assets/Content_logo2.png",
            "/Assets/Idea_validation_logo1.png",
            "/Assets/Idea_validation_logo2.png"
          ].map((src, index) => (
            <div key={index} className="marquee-item-logo">
              <img
                src={src}
                alt="Technology Partner"
                style={{
                  height: '50px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
          {/* Duplicate for infinite scroll */}
          {[
            "/Assets/chatgpt_logo.png",
            "/Assets/anthropic_logo.png",
            "/Assets/AgenticAI_logo3_n8n.png",
            "/Assets/AI_automation_logo1.png",
            "/Assets/AI_automation_logo2.png",
            "/Assets/cloud_Infrastructure_logo1.png",
            "/Assets/cloud_Infrastructure_logo2.png",
            "/Assets/cloud_Infrastructure_logo3.png",
            "/Assets/full_stack_logo1.png",
            "/Assets/full_stack_logo2.png",
            "/Assets/nextjs_logo.jpg",
            "/Assets/github_logo.png",
            "/Assets/Content_logo1.png",
            "/Assets/Content_logo2.png",
            "/Assets/Idea_validation_logo1.png",
            "/Assets/Idea_validation_logo2.png"
          ].map((src, index) => (
            <div key={`dup-${index}`} className="marquee-item-logo">
              <img
                src={src}
                alt="Technology Partner"
                style={{
                  height: '50px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <Services ref={servicesRef} />



      {/* Client Onboarding Process */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <ClientOnboarding id='ClientOnBoarding' />
      </Suspense>

      {/* Industries We Empower */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <EnterpriseIndustries ref={industriesRef} />
      </Suspense>

      {/* Idea to MVP Buffer Section */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <IdeaToMVP />
      </Suspense>

      {/* Team – timeline with scroll-activated dots and dynamic node navigation with sleek line */}
      <section className="team" ref={teamRef} id="team">
        <h2>Our Leadership</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
          Visionary leaders transforming ideas into market-ready AI solutions with precision, speed, and innovation at scale.
        </p>

        <div className="timeline">
          {/* Timeline line with progress */}
          <div className="timeline-line" ref={timelineLineRef}>
            <div className="timeline-progress" ref={timelineProgressRef}></div>
            <div className="timeline-glow" ref={timelineGlowRef}></div>
            <div className="timeline-sleek-line" ref={timelineSleekLineRef}></div>
          </div>

          {/* Timeline content */}
          <div className="timeline-content">

            {/* CEO */}
            <article className="timeline-card left" data-node="0">
              <div className="dot" onClick={() => onTimelineDotClick(0)}></div>
              <div className="card-inner">
                <h4>Hamza Kamran</h4>
                <span className="role">Founder & CEO</span>
                <p>
                  Full-stack MERN developer with 3 years of experience. Having Agentic AI expertise,
                  building Agentic Solutions in Fintech, Retail, Medical and Supply Chain.

                </p>
                <ul>
                  <li>
                    Recognized in highly prestigious Leadership Programs. Selected in Qimam Fellowship 2025
                  </li>
                  <li>Skilled in restful APIs and backend development with node/express and wide range of SQL/noSQL databases </li>
                  <li>Frontend developer with GSAP and three js building pixel perfect user experiences</li>
                </ul>
              </div>
              {/* Image inline — visible on both desktop and mobile */}
              <div className="card-img mobile-inline-img" id='img1'>
                <img src="/Assets/CEO.png" alt="Hamza Kamran" />
              </div>
            </article>

            {/* CTO */}
            <article className="timeline-card right" data-node="1">
              <div className="dot" onClick={() => onTimelineDotClick(1)}></div>
              <div className="card-inner">
                <h4>Umair Khan Shinwai</h4>
                <span className="role">Co-Founder & CTO</span>
                <p>
                  Agentic AI Engineer with 3 years of experience in the tech industry,
                  specializing in Generative AI, agentic systems, and full-stack AI
                  product development. , and leading AI adoption
                  initiatives in academia and startups.
                </p>
                <ul>
                  <li>Skilled in backend development with FastAPI,
                    AI-driven frontend features with Next.js</li>
                  <li>Proven track record of building
                    autonomous AI agents, custom GPTs</li>
                  <li> Building scalable SaaS applications
                    for diverse use cases.</li>
                </ul>
              </div>
              {/* Image inline — visible on both desktop and mobile */}
              <div className="card-img mobile-inline-img" id='img2'>
                <img src="/Assets/CTO.png" alt="Umair Khan Shinwai" />
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <TrustIndicators />
      </Suspense>

      {/* Featured Case Study - United BY Art */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <FeaturedCaseStudy />
      </Suspense>

      {/* AI Capabilities Section */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <AICapabilities />
      </Suspense>

      {/* AI Stats Section */}
      <AIStats />

      {/* Careers – Enterprise Recruiting Block */}
      <section className="careers-section" ref={careersRef} id="careers">
        <div className="careers-container">
          {/* Header */}
          <div className="careers-header">
            <span className="careers-badge">Join Our Team</span>
            <h2 className="careers-title">
              Build the <span className="gradient-text">Future</span> With Us
            </h2>
            <p className="careers-subtitle">
              Join a multidisciplinary team shipping world-class AI solutions globally.
            </p>
          </div>

          {/* Main Grid */}
          <div className="careers-grid">
            {/* Job Cards */}
            <div className="jobs-container">
              <div className="job-card">
                <div className="job-header">
                  <div className="job-icon">🤖</div>
                  <div className="job-badge">Full-time</div>
                </div>
                <h4 className="job-title">Senior Agentic AI Developer</h4>
                <p className="job-meta">Remote • Pakistan/US overlap</p>
                <ul className="job-requirements">
                  <li>3+ years AI/ML experience</li>
                  <li>Python, LangChain, GPT APIs</li>
                </ul>
                <button className="apply-btn" onClick={() => scrollToSection(contactRef)}>
                  Apply Now
                </button>
              </div>

              <div className="job-card">
                <div className="job-header">
                  <div className="job-icon">🎨</div>
                  <div className="job-badge">Contract/FT</div>
                </div>
                <h4 className="job-title">Senior UI/UX Designer</h4>
                <p className="job-meta">Remote • Portfolio required</p>
                <ul className="job-requirements">
                  <li>4+ years product design</li>
                  <li>Figma, Design Systems</li>
                </ul>
                <button className="apply-btn" onClick={() => scrollToSection(contactRef)}>
                  Apply Now
                </button>
              </div>

              <div className="job-card">
                <div className="job-header">
                  <div className="job-icon">📈</div>
                  <div className="job-badge">Entry/Mid</div>
                </div>
                <h4 className="job-title">Business Development Associate</h4>
                <p className="job-meta">Remote • Commission + Base</p>
                <ul className="job-requirements">
                  <li>Sales/BD experience</li>
                  <li>Excellent communication</li>
                </ul>
                <button className="apply-btn" onClick={() => scrollToSection(contactRef)}>
                  Apply Now
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="careers-image">
              <img src="/Assets/techGuy.png" alt="Join Zaaric Team" />
              <div className="image-glow"></div>
            </div>
          </div>

          {/* CTA */}
          <div className="careers-footer">
            <p className="careers-note">
              Don't see your role? <strong>Send your portfolio</strong> — we hire excellence.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <div ref={aboutRef} id="about" className="about-section">
        <About />
      </div>

      {/* Testimonials */}
      <TestimonialSection ref={testimonialsRef} />

      {/* Contact */}
      <div ref={contactRef} id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h2>ZAARIC</h2>
            <p>Defining Digital Excellence</p>
          </div>
          <div className="footer-links">
            <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }}>Home</a>
            <a href="/" onClick={(e) => { e.preventDefault(); scrollToSection(servicesRef) }}>Services</a>
            <a href="/" onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef) }}>About Us</a>
            <a href="/" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef) }}>Contact</a>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/106320714/admin/dashboard/" aria-label="LinkedIn">Linkedin</a>
            <a href="https://www.instagram.com/zaaric.official/" aria-label="Instagram">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61572632620192" aria-label="Facebook">Facebook</a>
            <a href="https://twitter.com/zaaric" aria-label="Twitter">X.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 ZAARIC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;