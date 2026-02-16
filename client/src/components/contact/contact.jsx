import React, { useState, useEffect, useRef } from 'react';                                               
                                                                                                         
const Contact = () => {                                                                                 
  const [isVisible, setIsVisible] = useState(false);                                                    
  const [copiedEmail, setCopiedEmail] = useState(false);                                                
  const sectionRef = useRef(null);                                                                      
                                                                                                       
  useEffect(() => {                                                                                  
    const observer = new IntersectionObserver(                                                         
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },                                 
      { threshold: 0.15 }                                                                               
    );                                                                                                  
    if (sectionRef.current) observer.observe(sectionRef.current);                                      
    return () => observer.disconnect();                                                                
  }, []);                                                                                              
                                                                                                       
  const handleCopyEmail = () => {                                                                       
    navigator.clipboard.writeText('buddamahendra05@gmail.com');                                        
    setCopiedEmail(true);                                                                                
    setTimeout(() => setCopiedEmail(false), 2000);                                                       
  };

  const links = [
    {
      label: 'Email',
      value: 'buddamahendra05@gmail.com',
      href: 'mailto:buddamahendra05@gmail.com',
      accent: '#6366f1',
      accentAlpha: 'rgba(99,102,241,',
      copyable: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>                                                   
          <path d="M2 7l10 7 10-7"/>                                                                     
        </svg>
      ),                                                                                                 
    },                                                                                                   
    {
      label: 'LinkedIn',                                                                               
      value: 'mahendra-budda',                                                                           
      href: 'https://www.linkedin.com/in/mahendra-budda-3463a131b/',
      accent: '#0ea5e9',
      accentAlpha: 'rgba(14,165,233,',
      copyable: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: 'mahendrabudda',
      href: 'https://github.com/mahendrabudda',
      accent: '#a5b4fc',
      accentAlpha: 'rgba(165,180,252,',
      copyable: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {                                                                       
      label: 'Twitter / X',                                                                                    
      value: '@BuddaSatya61786',                                                                       
      href: 'https://x.com/BuddaSatya61786',                                                             
      accent: '#38bdf8',                                                                                
      accentAlpha: 'rgba(56,189,248,',                                                                                
      copyable: false,                                                                                        
      icon: (                                                                                                
        <svg viewBox="0 0 24 24" fill="currentColor">                                                        
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
        </svg>                                                                                           
      ),                                                                                              
    },                                                                                                                                                                                                       
  ];                                                                                                     

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Inter:wght@400;600&family=Rajdhani:wght@600&display=swap');

        #contact {
          background-color: #050a1e;
          position: relative;
          overflow: hidden;
          padding: 100px 24px 60px;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .ct-glow-1 {
          position: absolute;
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%);
          border-radius: 50%;
          top: -100px; left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .ct-glow-2 {
          position: absolute;
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          border-radius: 50%;
          bottom: 60px; right: -80px;
          pointer-events: none;
        }
        .ct-glow-3 {
          position: absolute;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%);
          border-radius: 50%;
          bottom: 0; left: -60px;
          pointer-events: none;
        }
        .ct-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .ct-inner {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Header ── */
        .ct-label {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 3px;
          color: #6366f1;
          text-transform: uppercase;
          font-weight: 600;
          text-align: center;
          margin-bottom: 14px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }
        .ct-label.visible { opacity: 1; transform: translateY(0); }

        .ct-heading {
          font-family: 'Poppins', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 12px;
          line-height: 1.1;
          text-align: center;
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s;
        }
        .ct-heading.visible { opacity: 1; transform: translateY(0); }

        .ct-underline {
          width: 80px; height: 4px;
          background: linear-gradient(90deg, #2563eb 0%, #6366f1 100%);
          border-radius: 2px;
          margin: 0 auto 24px;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: center;
          transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
        }
        .ct-underline.visible { opacity: 1; transform: scaleX(1); }

        .ct-subtext {
          text-align: center;
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 56px;
          opacity: 0;
          transition: opacity 0.7s ease 0.5s;
        }
        .ct-subtext.visible { opacity: 1; }
        .ct-subtext span {
          color: #a5b4fc;
          font-weight: 600;
        }

        /* ── Links grid ── */
        .ct-links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 52px;
        }
        @media (max-width: 600px) {
          .ct-links { grid-template-columns: 1fr; }
          .ct-heading { font-size: 2.4rem !important; }
        }

        /* ── Link card ── */
        .ct-link-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 22px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(99,102,241,0.18);
          border-radius: 18px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.6s ease,
            transform 0.6s ease,
            border-color 0.3s ease,
            background 0.3s ease;
          cursor: pointer;
        }
        .ct-link-card.visible { opacity: 1; transform: translateY(0); }
        .ct-link-card:nth-child(1) { transition-delay: 0.55s; }
        .ct-link-card:nth-child(2) { transition-delay: 0.68s; }
        .ct-link-card:nth-child(3) { transition-delay: 0.81s; }
        .ct-link-card:nth-child(4) { transition-delay: 0.94s; }

        .ct-link-card:hover {
          border-color: var(--card-accent-border);
          background: var(--card-accent-bg);
          transform: translateY(-3px);
        }

        /* shimmer */
        .ct-link-card::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
          transition: left 0.6s ease;
        }
        .ct-link-card:hover::before { left: 150%; }

        /* icon */
        .ct-link-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .ct-link-icon svg {
          width: 20px; height: 20px;
        }
        .ct-link-card:hover .ct-link-icon { transform: scale(1.12) rotate(4deg); }

        /* text */
        .ct-link-text { flex: 1; min-width: 0; }

        .ct-link-label {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #475569;
          font-weight: 600;
          margin-bottom: 3px;
        }

        .ct-link-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: #e2e8f0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* arrow */
        .ct-link-arrow {
          font-size: 1rem;
          color: #334155;
          transition: color 0.3s ease, transform 0.3s ease;
          flex-shrink: 0;
        }
        .ct-link-card:hover .ct-link-arrow {
          color: var(--card-accent-color);
          transform: translateX(3px);
        }

        /* copy button */
        .ct-copy-btn {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ct-copy-icon {
          width: 16px; height: 16px;
          color: #475569;
          transition: color 0.25s ease;
        }
        .ct-copy-btn:hover .ct-copy-icon { color: #6366f1; }

        /* ── CTA button ── */
        .ct-cta-wrap {
          display: flex;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.7s ease 1.05s;
        }
        .ct-cta-wrap.visible { opacity: 1; }

        .ct-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 40px;
          background: linear-gradient(135deg, #2563eb 0%, #6366f1 100%);
          color: white;
          font-size: 0.95rem;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          border: none;
          border-radius: 50px;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(99,102,241,0.35);
          transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
          letter-spacing: 0.3px;
        }
        .ct-cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 30px rgba(99,102,241,0.5);
          filter: brightness(1.1);
        }

        /* ── Footer strip ── */
        .ct-footer {
          margin-top: 80px;
          padding-top: 28px;
          border-top: 1px solid rgba(99,102,241,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          opacity: 0;
          transition: opacity 0.7s ease 1.2s;
        }
        .ct-footer.visible { opacity: 1; }

        .ct-footer-left {
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ct-footer-right {
          font-size: 0.78rem;
          color: #334155;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .ct-footer-right span {
          color: #6366f1;
        }

        /* toast */
        .ct-toast {
          position: fixed;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          background: rgba(99,102,241,0.15);
          border: 1px solid rgba(99,102,241,0.35);
          color: #a5b4fc;
          font-size: 0.82rem;
          font-weight: 600;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 1px;
          padding: 10px 24px;
          border-radius: 30px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease;
          z-index: 999;
          backdrop-filter: blur(8px);
        }
        .ct-toast.show {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
      `}</style>                                                                                         

      {/* Toast */}                                                                                        
      <div className={`ct-toast ${copiedEmail ? 'show' : ''}`}>                                                                                     
        ✓ Email copied to clipboard                                                                       
      </div>                                                                                             
                                                                                                      
      <section id="contact" ref={sectionRef}>                                                             
        <div className="ct-glow-1" />                                                                             
        <div className="ct-glow-2" />                                                                             
        <div className="ct-glow-3" />                                                                        
        <div className="ct-grid-bg" />                                                                      

        <div className="ct-inner">                                                                         
          {/* Header */}                                                                                 
          <p className={`ct-label ${isVisible ? 'visible' : ''}`}>Get In Touch</p>                          
          <h2 className={`ct-heading ${isVisible ? 'visible' : ''}`}>Contact</h2>                          
          <div className={`ct-underline ${isVisible ? 'visible' : ''}`} />                                
          <p className={`ct-subtext ${isVisible ? 'visible' : ''}`}>                                      
            Always open to <span>collaboration</span>, freelance work,                                    
            or just a good conversation about tech.                                                  
          </p>                                                                                           

          {/* Link cards */}                                                                              
          <div className="ct-links">                                                                     
            {links.map((link, index) => {                                                                                           
              const cardStyle = {                                              
                '--card-accent-border': `${link.accentAlpha}0.4)`,                                                                       
                '--card-accent-bg': `${link.accentAlpha}0.07)`,                                                
                '--card-accent-color': link.accent,                                                          
              };                                                                                           
              const iconStyle = {
                background: `${link.accentAlpha}0.12)`,                                                     
                border: `1px solid ${link.accentAlpha}0.25)`,                                              
                color: link.accent,                                                                       
              };                                                                                         
                                                                                                          
              if (link.copyable) {                                                                      
                return (                                                                                
                  <div                                                                                  
                    key={index}                                                                          
                    className={`ct-link-card ${isVisible ? 'visible' : ''}`}                         
                    style={cardStyle}                                                                   
                    onClick={handleCopyEmail}                                                   
                    title="Click to copy"                                                                
                >                                                                                              
                    <div className="ct-link-icon" style={iconStyle}>{link.icon}</div>                       
                    <div className="ct-link-text">                                                     
                      <div className="ct-link-label">{link.label}</div>                                   
                      <div className="ct-link-value">{link.value}</div>                                                
                    </div>                                                                                    
                    <button className="ct-copy-btn" aria-label="Copy email">
                      {copiedEmail ? (                                                                                                                                            
                        <svg className="ct-copy-icon" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      ) : (                                                     
                        <svg className="ct-copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2"/>
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                        </svg>                   
                    )}
                    </button>
                </div>
                );
            }

              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`ct-link-card ${isVisible ? 'visible' : ''}`}
                  style={cardStyle}
                >
                  <div className="ct-link-icon" style={iconStyle}>{link.icon}</div>
                  <div className="ct-link-text">
                    <div className="ct-link-label">{link.label}</div>
                    <div className="ct-link-value">{link.value}</div>
                  </div>
                  <span className="ct-link-arrow">→</span>
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className={`ct-cta-wrap ${isVisible ? 'visible' : ''}`}>
            <a href="mailto:buddamahendra05@gmail.com" className="ct-cta-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
              </svg>
              Send me a message
            </a>
          </div>

          {/* Footer strip */}
          <div className={`ct-footer ${isVisible ? 'visible' : ''}`}>
            <span className="ct-footer-left">Mahendra Budda</span>
            <span className="ct-footer-right">
              Built with <span>♥</span> using React & Tailwind
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;