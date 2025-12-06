// GlobalCommerce.jsx
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./aiStats.css";

gsap.registerPlugin(ScrollTrigger);

const GlobalCommerce = () => {
  const globeRef = useRef();
  const containerRef = useRef();
  const [stats] = useState([
    { label: "Enterprises Using Agentic AI", value: 72, source: "Gravitee Survey 2025" },
    { label: "CAGR of AI Agents Market", value: 45, source: "BCG Report" },
    { label: "Executives Increasing AI Budgets", value: 88, source: "PwC AI Agent Survey 2025" },
    { label: "Increase in Staff Efficiency", value: 61, source: "Master of Code 2025" },
    { label: "Organizations Operationalizing Autonomous AI by 2025", value: 70, source: "Gartner Prediction 2025" },
  ]);

  useEffect(() => {
    // THREE.js Globe setup with original impactful design
    const scene = new THREE.Scene();
    
    // Ensure minimum dimensions for mobile
    const containerWidth = Math.max(globeRef.current.clientWidth || 300, 200);
    const containerHeight = Math.max(globeRef.current.clientHeight || 300, 200);
    
    const camera = new THREE.PerspectiveCamera(
      60,
      containerWidth / containerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerWidth, containerHeight);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    globeRef.current.appendChild(renderer.domElement);

    // Adjust mesh complexity based on screen size
    const isMobile = window.innerWidth <= 768;
    const segments = isMobile ? 24 : 64; // Reduce segments for mobile
    
    const geometry = new THREE.SphereGeometry(1, segments, segments);
    const material = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      roughness: 0.4,
      metalness: 0.6,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3,
      wireframe: true,
      opacity: 1,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Original lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // Dense points for dotted effect - reduce count for mobile
    const pointsGeometry = new THREE.BufferGeometry();
    const pointCount = isMobile ? 300 : 1000; // Reduce points for mobile
    const pointsMaterial = new THREE.PointsMaterial({ 
      color: 0xffffff, 
      size: isMobile ? 0.03 : 0.02, // Slightly larger points on mobile
      blending: THREE.AdditiveBlending 
    });
    const positions = new Float32Array(pointCount * 3);
    for (let i = 0; i < pointCount; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = Math.sin(phi) * Math.cos(theta) * 1.1;
      positions[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * 1.1;
      positions[i * 3 + 2] = Math.cos(phi) * 1.1;
    }
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    globe.add(points);

    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002;
      points.rotation.y -= 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const containerWidth = Math.max(globeRef.current.clientWidth || 300, 200);
      const containerHeight = Math.max(globeRef.current.clientHeight || 300, 200);
      camera.aspect = containerWidth / containerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerWidth, containerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      globeRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const counters = containerRef.current.querySelectorAll(".stat-value");
    counters.forEach((counter, i) => {
      const target = stats[i].value;
      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2.5,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    });
  }, [stats]);

  return (
    <section className="global-commerce-section" ref={containerRef}>
      <div className="content-wrapper">
        <div className="text-content">
          <h3 className="subtitle">Global Innovation</h3>
          <h2 className="title">
            Agentic AI: <span>The Backbone for Startup Revolution</span>
          </h2>
          <p className="description">
            Zaaric empowers startups with cutting-edge Agentic AI, driving autonomous decision-making, exponential growth, and unmatched operational resilience in a hyper-competitive global market.
          </p>
        </div>
        <div className="globe-container" ref={globeRef}></div>
      </div>
      <div className="stats-wrapper">
        {stats.map((stat, i) => (
          <div key={i} className="stat-item">
            <div className="stat-number">
              <span className="stat-value">0</span>%
            </div>
            <p className="stat-label">{stat.label}</p>
            <p className="stat-source">Source: {stat.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalCommerce;