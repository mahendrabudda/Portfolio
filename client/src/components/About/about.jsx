import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { label: 'MERN Stack', icon: '⚡' },
    { label: 'Python', icon: '🐍' },
    { label: 'Deep Learning', icon: '🧠' },
    { label: 'Computer Vision', icon: '👁️' },
   
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Inter:wght@400;600&family=Rajdhani:wght@600&display=swap');

        #about {
          background-color: #050a1e;
          position: relative;
          overflow: hidden;
          padding: 100px 24px;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .about-bg-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%);
          border-radius: 50%;
          top: -100px;
          right: -100px;
          pointer-events: none;
        }

        .about-bg-glow-2 {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          border-radius: 50%;
          bottom: -80px;
          left: -80px;
          pointer-events: none;
        }

        .about-grid-line {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .about-inner {
          max-width: 960px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Section label */
        .about-label {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 3px;
          color: #6366f1;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 14px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }

        .about-label.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Heading */
        .about-heading {
          font-family: 'Poppins', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 12px;
          line-height: 1.1;
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s;
        }

        .about-heading.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Underline accent */
        .about-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #2563eb 0%, #6366f1 100%);
          border-radius: 2px;
          margin-bottom: 48px;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
        }

        .about-underline.visible {
          opacity: 1;
          transform: scaleX(1);
        }

        /* Two-column layout */
        .about-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .about-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-heading {
            font-size: 2.5rem !important;
          }
        }

        /* Text paragraphs */
        .about-para {
          font-size: 1.05rem;
          line-height: 1.85;
          color: #cbd5e1;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .about-para.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-para:nth-child(1) { transition-delay: 0.45s; }
        .about-para:nth-child(2) { transition-delay: 0.6s; }
        .about-para:nth-child(3) { transition-delay: 0.75s; }

        /* Highlight spans */
        .about-para .highlight {
          color: #a5b4fc;
          font-weight: 600;
        }

        /* Right column: skills */
        .skills-panel {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s;
        }

        .skills-panel.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .skills-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #6366f1;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 40px;
        }

        .skill-chip {
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 12px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #e2e8f0;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          cursor: default;
        }

        .skill-chip:hover {
          background: rgba(99,102,241,0.18);
          border-color: rgba(99,102,241,0.5);
          transform: translateY(-2px);
        }

        .skill-chip .chip-icon {
          font-size: 1.1rem;
        }

        /* Info card */
        .info-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-row {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 0.92rem;
        }

        .info-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #6366f1);
          flex-shrink: 0;
        }

        .info-label {
          color: #64748b;
          font-weight: 600;
          min-width: 80px;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 1px;
          font-size: 0.78rem;
          text-transform: uppercase;
        }

        .info-value {
          color: #cbd5e1;
          font-weight: 400;
        }

        /* Status badge */
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.25);
          border-radius: 30px;
          padding: 6px 16px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #86efac;
          margin-top: 8px;
          letter-spacing: 0.5px;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse-green 2s infinite;
        }

        @keyframes pulse-green {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>

      <section id="about" ref={sectionRef}>
        <div className="about-bg-glow" />
        <div className="about-bg-glow-2" />
        <div className="about-grid-line" />

        <div className="about-inner">
          <p className={`about-label ${isVisible ? 'visible' : ''}`}>
            Who I Am
          </p>
          <h2 className={`about-heading ${isVisible ? 'visible' : ''}`}>
            About Me
          </h2>
          <div className={`about-underline ${isVisible ? 'visible' : ''}`} />

          <div className="about-layout">
            {/* Left: Text */}
            <div>
              <p className={`about-para ${isVisible ? 'visible' : ''}`}>
                I'm a <span className="highlight">Full-Stack Developer</span> focused on building scalable web
                applications using the <span className="highlight">MERN stack and Python</span>. I enjoy designing
                systems end-to-end — from clean frontend interfaces to efficient
                backend APIs — with an emphasis on performance and maintainability.
              </p>

              <p className={`about-para ${isVisible ? 'visible' : ''}`}>
                Alongside web development, I work in <span className="highlight">Deep Learning</span> and{' '}
                <span className="highlight">Computer Vision</span>. My experience includes object detection pipelines,
                image feature extraction, hashing-based retrieval, and working with
                large annotated datasets. I enjoy bridging theory with practical
                implementations and building systems that solve real problems.
              </p>

              <p className={`about-para ${isVisible ? 'visible' : ''}`}>
                I'm constantly learning and pushing myself toward stronger{' '}
                <span className="highlight">system design</span>, algorithmic thinking, and applied AI development.
                My goal is to contribute to impactful engineering teams where I can
                build, optimize, and innovate at scale.
              </p>

              <div className={`status-badge ${isVisible ? 'visible' : ''}`} style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.7s ease 0.9s'
              }}>
                <span className="status-dot" />
                Available for Opportunities
              </div>
            </div>

            {/* Right: Skills + Info */}
            <div className={`skills-panel ${isVisible ? 'visible' : ''}`}>
              <p className="skills-title">Core Technologies</p>
              <div className="skills-grid">
                {skills.map((s, i) => (
                  <div className="skill-chip" key={i}>
                    <span className="chip-icon">{s.icon}</span>
                    {s.label}
                  </div>
                ))}
              </div>

              <div className="info-card">
                {[
                  { label: 'Role', value: 'Full Stack Dev' },
                  { label: 'Focus', value: 'Web + AI Systems' },
                  { label: 'Stack', value: 'MERN + Python' },
                  { label: 'Domain', value: 'CV & Deep Learning' },
                ].map((item, i) => (
                  <div className="info-row" key={i}>
                    <div className="info-dot" />
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;