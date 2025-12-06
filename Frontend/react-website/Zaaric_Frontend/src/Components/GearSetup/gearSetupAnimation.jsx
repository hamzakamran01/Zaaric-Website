// Enhanced Scroll-Locked Gear Animation with PNG Gears
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './gearSetupAnimation.css';
import gearImage from '/Assets/gearImage.webp'; // ✅ your PNG gear

gsap.registerPlugin(ScrollTrigger);

const GearSetupAnimation = () => {
  const sectionRef = useRef(null);
  const gearsRef = useRef([]);
  const textsRef = useRef([]);
  const lineRef = useRef(null);

  const gearTexts = [
    "Transforming your ideas to reality",
    "Delivering market-ready tech products", 
    "With end-to-end execution",
    "From concept to deployment",
    "Innovation meets implementation"
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const totalTexts = gearTexts.length;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 2,
        start: 'top top',
        end: () => `+=${window.innerHeight * (totalTexts + 1)}`,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Gear rotation using GSAP
    gearsRef.current.forEach((gear, index) => {
      if (gear) {
        let rotationMultiplier;
        switch (index) {
          case 0: rotationMultiplier = 1.1; break;
          case 1: rotationMultiplier = -0.8; break;
          case 2: rotationMultiplier = 0.6; break;
          default: rotationMultiplier = 1;
        }
        tl.to(gear, {
          rotation: () => rotationMultiplier * 1080,
          duration: totalTexts + 1,
          ease: "none",
        }, 0);
      }
    });

    // Neon line pulse
    gsap.to(lineRef.current, {
      background: "#00e5ff",
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    // Text animations
    gearTexts.forEach((_, index) => {
      const text = textsRef.current[index];
      if (text) {
        tl.fromTo(text,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, ease: "power3.out" },
          index * 1.5
        ).to(text,
          { y: "-100%", opacity: 0, duration: 1, ease: "power3.in" },
          index * 1.2 + 1
        );
      }
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [gearTexts]);

  return (
    <section ref={sectionRef} className="gear-setup-section">
      {/* Texts + Neon Line */}
      <div className="gear-text-container">
        <div ref={lineRef} className="neon-line"></div>
        <div className="gear-text-wrapper">
          {gearTexts.map((text, index) => (
            <h2
              key={index}
              ref={(el) => (textsRef.current[index] = el)}
              className="gear-text"
            >
              {text}
            </h2>
          ))}
        </div>
      </div>

      {/* Gears */}
      <div className="gears-container">
        <img
          ref={(el) => (gearsRef.current[0] = el)}
          src={gearImage}
          alt="Gear Left"
          className="gear gear-left"
        />
        <img
          ref={(el) => (gearsRef.current[1] = el)}
          src={gearImage}
          alt="Gear Center"
          className="gear gear-center"
        />
        <img
          ref={(el) => (gearsRef.current[2] = el)}
          src={gearImage}
          alt="Gear Right"
          className="gear gear-right"
        />
      </div>

      {/* Connection Lines */}
      <div className="gear-connections">
        <div className="connection-line line-1"></div>
        <div className="connection-line line-2"></div>
      </div>
    </section>
  );
};

export default GearSetupAnimation;
