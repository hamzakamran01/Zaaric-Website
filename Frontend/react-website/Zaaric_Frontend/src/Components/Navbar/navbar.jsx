import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/zaaric_logo.png";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };
  

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        hidden ? "hidden" : ""
      }`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div
          className="navbar-logo"
          onClick={() => scrollToSection("hero")}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="Zaaric Logo" width={140} height={50} />
        </div>

        {/* Desktop Links */}
        <nav className="navbar-links">
          {[
            { name: "Home", id: "hero" },
            { name: "Team", id: "team" },
            { name: "Services", id: "services" },
            { name: "Industries", id: "industries" },
            { name: "Careers", id: "careers" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ].map((link) => (
            <Link
              key={link.id}
              to="/"
              onClick={() => scrollToSection(link.id)}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
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
        </button>

        {/* Mobile Drawer */}
        <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
          {[
            { name: "Home", id: "hero" },
            { name: "Team", id: "team" },
            { name: "Services", id: "services" },
            { name: "Industries", id: "industries" },
            { name: "Careers", id: "careers" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ].map((link) => (
            <Link
              key={link.id}
              to="/"
              onClick={() => {
                toggleMenu();
                scrollToSection(link.id);
              }}
              className="mobile-nav-link"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
