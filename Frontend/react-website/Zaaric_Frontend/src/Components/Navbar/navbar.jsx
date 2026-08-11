import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/zaaric_logo.png";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Smooth scroll handler
  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    if (sectionId === 'hero') {
      // Use setTimeout to ensure this runs after event bubbling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Real routes let the router navigate. Section links only intercept when we
  // are already on Home; from another route they navigate to "/" carrying the
  // target in location.state, which Home consumes on mount.
  const handleLinkClick = (e, link) => {
    setIsOpen(false);
    if (link.to) return;
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection(link.id);
    }
  };

  const LINKS = [
    { name: "Home", id: "hero" },
    { name: "Team", id: "team" },
    { name: "Services", id: "services" },
    { name: "Industries", id: "industries" },
    { name: "Careers", id: "careers" },
    { name: "Case Study", id: "case-study" },
    { name: "CareOps", to: "/careops" },
    { name: "Contact", id: "contact" },
  ];

  // Scroll detection (sticky + hide on scroll down)
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        setHidden(true); // hide navbar
      } else {
        setHidden(false); // show navbar
      }
      setScrolled(currentY > 0);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Manage overflow based on menu state
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""
        }`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div
          className="navbar-logo"
          onClick={() => scrollToSection("hero")}
          style={{ cursor: "pointer" }}
        >
          {/* Using public folder asset directly to ensure latest version */}
          <img src="/Assets/zaaric_logo.png" alt="Zaaric Logo" className="zaaric-logo-img" length='100' width='100' />
        </div>

        {/* Desktop Links */}
        <nav className="navbar-links">
          {LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.to || "/"}
              state={link.id ? { scrollTo: link.id } : undefined}
              onClick={(e) => handleLinkClick(e, link)}
              className={`nav-link${link.to ? " nav-link--route" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div
          className="navbar-toggle"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
          }}
          role="button"
          tabIndex={0}
          aria-label="Toggle Menu"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleMenu();
            }
          }}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.3 5.71 12 12l6.3 6.29-1.42 1.42L12 14.83l-6.29 6.3-1.42-1.42L9.17 12 2.29 5.71 3.71 4.3 12 12.17l8.29-7.88z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          )}
        </div>

        {/* Mobile Drawer */}
        <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
          {LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.to || "/"}
              state={link.id ? { scrollTo: link.id } : undefined}
              onClick={(e) => handleLinkClick(e, link)}
              className={`mobile-nav-link${link.to ? " mobile-nav-link--route" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header >
  );
};

export default Navbar;
