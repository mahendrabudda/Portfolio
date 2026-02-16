import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 1rem 0;
        }

        .navbar-scrolled {
          background: rgba(17, 24, 39, 0.95);
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 1px rgba(6, 182, 212, 0.2);
          border-bottom: 1px solid rgba(6, 182, 212, 0.1);
          padding: 0.75rem 0;
        }

        .navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          font-family: 'Outfit', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          letter-spacing: -0.02em;
          transition: all 0.3s ease;
        }

        .navbar-logo:hover {
          transform: translateY(-2px);
        }

        .logo-text {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-dot {
          color: rgb(6, 182, 212);
          font-size: 2.5rem;
          line-height: 1;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .nav-links-desktop {
          display: none;
          gap: 0.5rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .nav-links-desktop {
            display: flex;
          }
        }

        .nav-link {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          padding: 0.75rem 1.25rem;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: 0.02em;
          text-transform: capitalize;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(6, 182, 212, 0.1);
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-link:hover {
          color: rgb(34, 211, 238);
        }

        .nav-link:hover::before {
          opacity: 1;
        }

        .nav-link-underline {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgb(6, 182, 212) 50%, transparent 100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }

        .nav-link:hover .nav-link-underline {
          transform: translateX(-50%) scaleX(1);
        }

        .nav-link-active {
          color: rgb(6, 182, 212);
          font-weight: 600;
        }

        .nav-link-active::before {
          opacity: 1;
        }

        .nav-link-active .nav-link-underline {
          transform: translateX(-50%) scaleX(1);
          background: rgb(6, 182, 212);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }

        .mobile-menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 10px;
          padding: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          color: rgb(6, 182, 212);
        }

        .mobile-menu-toggle:hover {
          background: rgba(6, 182, 212, 0.2);
          border-color: rgba(6, 182, 212, 0.4);
          transform: scale(1.05);
        }

        .mobile-menu-toggle:active {
          transform: scale(0.95);
        }

        .menu-icon {
          width: 1.5rem;
          height: 1.5rem;
          transition: transform 0.3s ease;
        }

        @media (min-width: 1024px) {
          .mobile-menu-toggle {
            display: none;
          }
        }

        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          background: rgba(17, 24, 39, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0 1.5rem;
        }

        .mobile-menu-open {
          max-height: 500px;
          padding: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        @media (min-width: 1024px) {
          .mobile-menu {
            display: none;
          }
        }

        .mobile-nav-link {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          padding: 1rem 1.25rem;
          margin-bottom: 0.5rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          letter-spacing: 0.02em;
        }

        .mobile-nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 3px;
          background: rgb(6, 182, 212);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: rgb(34, 211, 238);
          background: rgba(6, 182, 212, 0.1);
          padding-left: 1.75rem;
        }

        .mobile-nav-link:hover::before {
          transform: scaleY(1);
        }

        .mobile-nav-link-active {
          color: rgb(6, 182, 212);
          font-weight: 600;
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(6, 182, 212, 0.2);
          padding-left: 1.75rem;
        }

        .mobile-nav-link-active::before {
          transform: scaleY(1);
        }

        .mobile-menu-open .mobile-nav-link {
          animation: slideInRight 0.4s ease forwards;
          opacity: 0;
        }

        .mobile-menu-open .mobile-nav-link:nth-child(1) { animation-delay: 0.05s; }
        .mobile-menu-open .mobile-nav-link:nth-child(2) { animation-delay: 0.1s; }
        .mobile-menu-open .mobile-nav-link:nth-child(3) { animation-delay: 0.15s; }
        .mobile-menu-open .mobile-nav-link:nth-child(4) { animation-delay: 0.2s; }
        .mobile-menu-open .mobile-nav-link:nth-child(5) { animation-delay: 0.25s; }
        .mobile-menu-open .mobile-nav-link:nth-child(6) { animation-delay: 0.3s; }
        .mobile-menu-open .mobile-nav-link:nth-child(7) { animation-delay: 0.35s; }
        .mobile-menu-open .mobile-nav-link:nth-child(8) { animation-delay: 0.4s; }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>


        <div className="navbar-container">
          <nav className="navbar-content">
            {/* Logo */}
            <a href="/" className="navbar-logo">
              <span className="logo-text">Mahi</span>
              <span className="logo-dot">.</span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="nav-links-desktop">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'nav-link-active' : ''}`}
                >
                  {link.name}
                  <span className="nav-link-underline"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`mobile-nav-link ${activeSection === link.href.slice(1) ? 'mobile-nav-link-active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </header>
    </>
  );
};

export default Navbar;