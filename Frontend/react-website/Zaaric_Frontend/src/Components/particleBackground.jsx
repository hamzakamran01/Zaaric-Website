import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import './HeroBG.css';

const ParticleBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene + Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 50);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Particles
    const particleCount = 8000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount);
    const phases = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 150; // Wider x range
      positions[i3 + 1] = (Math.random() - 0.5) * 50; // Controlled y range
      positions[i3 + 2] = (Math.random() - 0.5) * 50; // Controlled z range
      velocities[i] = Math.random() * 0.15 + 0.05; // Slower, consistent speed
      phases[i] = Math.random() * Math.PI * 2; // Random phase for wave harmony
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00aaff,
      size: 0.3,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation
    const animateParticles = (time) => {
      const positions = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];

        // Wave-like motion with horizontal flow
        positions[i3 + 1] -= velocities[i]; // Move downward
        positions[i3] = x + Math.sin(time * 0.0008 + phases[i]) * 0.5; // Gentle lateral wave
        positions[i3 + 2] = z + Math.cos(time * 0.0008 + phases[i]) * 0.3; // Subtle depth wave

        // Reset with wave-like re-entry
        if (positions[i3 + 1] < -30) {
          positions[i3 + 1] = 30;
          positions[i3] = (Math.random() - 0.5) * 150;
          positions[i3 + 2] = (Math.random() - 0.5) * 50;
          phases[i] = Math.random() * Math.PI * 2;
        }
      }
      geometry.attributes.position.needsUpdate = true;
    };

    // GSAP for subtle camera zoom
    gsap.to(camera.position, {
      z: 40,
      duration: 30,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    // Render Loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      animateParticles(clock.getElapsedTime() * 1000);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="particle-background"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticleBackground;