import React, { useState, useEffect, useRef } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: "Logistics Team Member",
      org: "Abhisarga Annual Fest",
      duration: "IIIT Sri City",
      type: "Event Management",
      icon: "🎯",
      period: "2026",
      desc: [
        "Coordinated logistics and on-ground operations for large scale campus event",
        "Collaborated with cross-functional teams to manage scheduling and resource allocation",
        "Handled crowd support, vendor coordination, and setup execution",
        "Developed teamwork, communication, and real-time problem solving skills",
      ],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Inter:wght@400;600&family=Rajdhani:wght@600&display=swap');

        #experience {
          background-color: #050a1e;
          position: relative;
          overflow: hidden;
          padding: 100px 24px;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .exp-glow-1 {
          position: absolute;
          width: 450px; height: 450px;
          background: radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%);
          border-radius: 50%;
          top: -80px; left: -80px;
          pointer-events: none;
        }

        .exp-glow-2 {
          position: absolute;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%);
          border-radius: 50%;
          bottom: -60px; right: -60px;
          pointer-events: none;
        }

        .exp-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .exp-inner {
          max-width: 960px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header block */
        .exp-label {
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
        .exp-label.visible { opacity: 1; transform: translateY(0); }

        .exp-heading {
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
        .exp-heading.visible { opacity: 1; transform: translateY(0); }

        .exp-underline {
          width: 80px; height: 4px;
          background: linear-gradient(90deg, #2563eb 0%, #6366f1 100%);
          border-radius: 2px;
          margin: 0 auto 64px;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: center;
          transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
        }
        .exp-underline.visible { opacity: 1; transform: scaleX(1); }

        /* Timeline wrapper */
        .timeline-wrapper {
          position: relative;
          padding-left: 40px;
        }

        .timeline-line {
          position: absolute;
          left: 10px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #2563eb 0%, #6366f1 60%, transparent 100%);
          opacity: 0;
          transform: scaleY(0);
          transform-origin: top;
          transition: opacity 0.8s ease 0.5s, transform 1s ease 0.5s;
        }
        .timeline-line.visible { opacity: 1; transform: scaleY(1); }

        /* Card */
        .exp-card {
          position: relative;
          margin-bottom: 32px;
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s;
        }
        .exp-card.visible { opacity: 1; transform: translateX(0); }

        /* Timeline dot */
        .timeline-dot {
          position: absolute;
          left: -36px;
          top: 24px;
          width: 14px; height: 14px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #6366f1);
          box-shadow: 0 0 12px rgba(99,102,241,0.5);
          border: 2px solid #050a1e;
          z-index: 2;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .exp-card:hover .timeline-dot {
          transform: scale(1.4);
          box-shadow: 0 0 20px rgba(99,102,241,0.8);
        }

        .card-inner {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(99,102,241,0.18);
          border-radius: 20px;
          padding: 32px;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }
        .card-inner:hover {
          border-color: rgba(99,102,241,0.4);
          background: rgba(99,102,241,0.06);
          transform: translateY(-3px);
        }

        /* Hover shimmer */
        .card-inner::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.06), transparent);
          transition: left 0.6s ease;
        }
        .card-inner:hover::before { left: 150%; }

        /* Card top row */
        .card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
        }

        .card-icon-wrap {
          width: 52px; height: 52px;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.25);
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem;
          transition: background 0.3s ease, transform 0.3s ease;
          flex-shrink: 0;
        }
        .card-inner:hover .card-icon-wrap {
          background: rgba(99,102,241,0.2);
          transform: rotate(5deg) scale(1.05);
        }

        .card-title-block { flex: 1; }

        .card-role {
          font-family: 'Poppins', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          color: #f1f5f9;
          margin: 0 0 6px;
          line-height: 1.2;
        }

        .card-org {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .org-name {
          font-size: 0.92rem;
          font-weight: 600;
          color: #6366f1;
        }

        .org-dot {
          width: 4px; height: 4px;
          background: #475569;
          border-radius: 50%;
        }

        .org-location {
          font-size: 0.88rem;
          color: #64748b;
        }

        .card-badges {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          flex-shrink: 0;
        }

        .badge-type {
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.25);
          color: #a5b4fc;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 20px;
          font-family: 'Rajdhani', sans-serif;
        }

        .badge-year {
          font-size: 0.78rem;
          color: #475569;
          font-weight: 600;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 1px;
        }

        /* Divider */
        .card-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(99,102,241,0.2), transparent);
          margin-bottom: 20px;
        }

        /* Bullet list */
        .exp-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .exp-list-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          line-height: 1.7;
          color: #cbd5e1;
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.5s ease, transform 0.5s ease, color 0.3s ease;
        }
        .exp-list-item.visible { opacity: 1; transform: translateX(0); }
        .exp-list-item:nth-child(1) { transition-delay: 0.7s; }
        .exp-list-item:nth-child(2) { transition-delay: 0.82s; }
        .exp-list-item:nth-child(3) { transition-delay: 0.94s; }
        .exp-list-item:nth-child(4) { transition-delay: 1.06s; }

        .exp-list-item:hover { color: #e2e8f0; }

        .bullet-arrow {
          color: #6366f1;
          font-size: 0.7rem;
          margin-top: 6px;
          flex-shrink: 0;
        }

        /* Empty state hint */
        .more-hint {
          text-align: center;
          margin-top: 48px;
          opacity: 0;
          transition: opacity 0.7s ease 1.2s;
        }
        .more-hint.visible { opacity: 1; }

        .more-hint p {
          font-size: 0.82rem;
          color: #334155;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      `}</style>

      <section id="experience" ref={sectionRef}>
        <div className="exp-glow-1" />
        <div className="exp-glow-2" />
        <div className="exp-grid-bg" />

        <div className="exp-inner">
          {/* Header */}
          <p className={`exp-label ${isVisible ? 'visible' : ''}`}>My Journey</p>
          <h2 className={`exp-heading ${isVisible ? 'visible' : ''}`}>Experience</h2>
          <div className={`exp-underline ${isVisible ? 'visible' : ''}`} />

          {/* Timeline */}
          <div className="timeline-wrapper">
            <div className={`timeline-line ${isVisible ? 'visible' : ''}`} />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`exp-card ${isVisible ? 'visible' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="timeline-dot" />

                <div className="card-inner">
                  {/* Top row */}
                  <div className="card-top">
                    <div className="card-icon-wrap">{exp.icon}</div>

                    <div className="card-title-block">
                      <h3 className="card-role">{exp.role}</h3>
                      <div className="card-org">
                        <span className="org-name">{exp.org}</span>
                        <span className="org-dot" />
                        <span className="org-location">{exp.duration}</span>
                      </div>
                    </div>

                    <div className="card-badges">
                      <span className="badge-type">{exp.type}</span>
                      <span className="badge-year">{exp.period}</span>
                    </div>
                  </div>

                  <div className="card-divider" />

                  {/* Bullet points */}
                  <ul className="exp-list">
                    {exp.desc.map((d, i) => (
                      <li
                        key={i}
                        className={`exp-list-item ${isVisible ? 'visible' : ''}`}
                      >
                        <span className="bullet-arrow">▶</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom hint */}
          <div className={`more-hint ${isVisible ? 'visible' : ''}`}>
            <p>· · · More experiences incoming · · ·</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;