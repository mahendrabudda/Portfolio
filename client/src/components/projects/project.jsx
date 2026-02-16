import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Object-Based Image Retrieval using DMIH",
      status: "Currently Working",
      icon: "🧠",
      category: "AI / Deep Learning",
      accent: "rgba(139,92,246,",
      accentSolid: "#8b5cf6",
      description: [
        "Developed an object-based image retrieval system using deep learning and hashing.",
        "Applied YOLO-based object detection to handle multiple objects per image.",
        "Generated compact hash codes for fast similarity search.",
        "Used CNNs for feature extraction and evaluated retrieval performance.",
      ],
      tech: ["Python", "Deep Learning", "OpenCV", "YOLO", "CNN", "Hashing"],
      link: null,
    },
    {
      title: "Food Delivery Web Application",
      status: null,
      icon: "🍔",
      category: "MERN Stack",
      accent: "rgba(37,99,235,",
      accentSolid: "#2563eb",
      description: [
        "Built a full-stack food delivery platform using React, Node.js, Express, MongoDB.",
        "Implemented JWT-based authentication and protected backend routes.",
        "Designed REST APIs connecting frontend and backend seamlessly.",
        "Deployed frontend and backend for production use.",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      link: "https://github.com/mahendrabudda/Food-Delivery",
    },
    {
      title: "MERN Authentication System",
      status: null,
      icon: "🔐",
      category: "Backend / Security",
      accent: "rgba(14,165,233,",
      accentSolid: "#0ea5e9",
      description: [
        "Implemented secure login/signup with JWT and bcrypt encryption.",
        "Built role-protected routes with MongoDB storage.",
        "Structured backend using RESTful API architecture.",
      ],
      tech: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
      link: "https://github.com/mahendrabudda/MernAuthentication",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Inter:wght@400;600&family=Rajdhani:wght@600&display=swap');

        #projects {
          background-color: #050a1e;
          position: relative;
          overflow: hidden;
          padding: 100px 24px;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .pr-glow-1 {
          position: absolute;
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%);
          border-radius: 50%;
          top: -100px; left: -100px;
          pointer-events: none;
        }
        .pr-glow-2 {
          position: absolute;
          width: 440px; height: 440px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          border-radius: 50%;
          bottom: -80px; right: -80px;
          pointer-events: none;
        }
        .pr-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .pr-inner {
          max-width: 1040px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Header ── */
        .pr-label {
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
        .pr-label.visible { opacity: 1; transform: translateY(0); }

        .pr-heading {
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
        .pr-heading.visible { opacity: 1; transform: translateY(0); }

        .pr-underline {
          width: 80px; height: 4px;
          background: linear-gradient(90deg, #2563eb 0%, #6366f1 100%);
          border-radius: 2px;
          margin: 0 auto 64px;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: center;
          transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
        }
        .pr-underline.visible { opacity: 1; transform: scaleX(1); }

        /* ── Grid ── */
        .pr-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 768px) {
          .pr-grid { grid-template-columns: 1fr; }
          .pr-heading { font-size: 2.4rem !important; }
        }

        /* last card spans full width if odd count */
        .pr-grid > .pr-card:last-child:nth-child(odd) {
          grid-column: 1 / -1;
          max-width: 520px;
          margin: 0 auto;
          width: 100%;
        }

        /* ── Card ── */
        .pr-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(99,102,241,0.18);
          border-radius: 22px;
          padding: 30px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease,
            border-color 0.35s ease,
            background 0.35s ease;
        }
        .pr-card.visible { opacity: 1; transform: translateY(0); }
        .pr-card:nth-child(1) { transition-delay: 0.45s; }
        .pr-card:nth-child(2) { transition-delay: 0.6s; }
        .pr-card:nth-child(3) { transition-delay: 0.75s; }

        .pr-card:hover {
          border-color: rgba(99,102,241,0.42);
          background: rgba(99,102,241,0.055);
          transform: translateY(-5px);
        }

        /* shimmer */
        .pr-card::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.07), transparent);
          transition: left 0.65s ease;
        }
        .pr-card:hover::before { left: 150%; }

        /* top-right corner glow */
        .pr-card-glow {
          position: absolute;
          top: -30px; right: -30px;
          width: 130px; height: 130px;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.6;
          transition: opacity 0.35s ease;
        }
        .pr-card:hover .pr-card-glow { opacity: 1; }

        /* ── Card top ── */
        .pr-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 18px;
        }

        .pr-card-left {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          flex: 1;
        }

        .pr-icon-box {
          width: 50px; height: 50px;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.25);
          border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem;
          flex-shrink: 0;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .pr-card:hover .pr-icon-box {
          transform: rotate(6deg) scale(1.08);
          background: rgba(99,102,241,0.22);
        }

        .pr-title-block { flex: 1; }

        .pr-card-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          font-weight: 800;
          color: #f1f5f9;
          margin: 0 0 6px;
          line-height: 1.3;
        }

        .pr-category {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #475569;
          font-weight: 600;
        }

        /* status badge */
        .pr-status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.28);
          color: #86efac;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 5px 11px;
          border-radius: 20px;
          font-family: 'Rajdhani', sans-serif;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .pr-status-dot {
          width: 6px; height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse-green 2s infinite;
        }
        @keyframes pulse-green {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.4); }
        }

        /* ── Divider ── */
        .pr-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(99,102,241,0.22), transparent);
          margin-bottom: 18px;
        }

        /* ── Bullet list ── */
        .pr-desc-list {
          list-style: none;
          padding: 0; margin: 0 0 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .pr-desc-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          line-height: 1.65;
          color: #cbd5e1;
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.5s ease, transform 0.5s ease, color 0.25s ease;
        }
        .pr-desc-item.visible { opacity: 1; transform: translateX(0); }
        .pr-desc-item:hover { color: #e2e8f0; }

        .pr-card:nth-child(1) .pr-desc-item:nth-child(1) { transition-delay: 0.7s; }
        .pr-card:nth-child(1) .pr-desc-item:nth-child(2) { transition-delay: 0.82s; }
        .pr-card:nth-child(1) .pr-desc-item:nth-child(3) { transition-delay: 0.94s; }
        .pr-card:nth-child(1) .pr-desc-item:nth-child(4) { transition-delay: 1.06s; }
        .pr-card:nth-child(2) .pr-desc-item:nth-child(1) { transition-delay: 0.85s; }
        .pr-card:nth-child(2) .pr-desc-item:nth-child(2) { transition-delay: 0.97s; }
        .pr-card:nth-child(2) .pr-desc-item:nth-child(3) { transition-delay: 1.09s; }
        .pr-card:nth-child(2) .pr-desc-item:nth-child(4) { transition-delay: 1.21s; }
        .pr-card:nth-child(3) .pr-desc-item:nth-child(1) { transition-delay: 1.0s; }
        .pr-card:nth-child(3) .pr-desc-item:nth-child(2) { transition-delay: 1.12s; }
        .pr-card:nth-child(3) .pr-desc-item:nth-child(3) { transition-delay: 1.24s; }

        .pr-bullet {
          color: #6366f1;
          font-size: 0.65rem;
          margin-top: 7px;
          flex-shrink: 0;
        }

        /* ── Tech tags ── */
        .pr-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 22px;
        }

        .pr-tech-tag {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          border: 1px solid;
          transition: background 0.3s ease, transform 0.2s ease;
          cursor: default;
        }
        .pr-tech-tag:hover { transform: translateY(-1px); }

        /* ── GitHub button ── */
        .pr-github-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 11px 24px;
          border-radius: 50px;
          border: 1px solid rgba(99,102,241,0.35);
          background: rgba(99,102,241,0.1);
          color: #a5b4fc;
          font-size: 0.88rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          transition: background 0.3s ease, border-color 0.3s ease,
                      color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          margin-top: auto;
        }
        .pr-github-btn:hover {
          background: rgba(99,102,241,0.22);
          border-color: rgba(99,102,241,0.6);
          color: #e0e7ff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99,102,241,0.25);
        }

        .pr-github-icon {
          width: 18px; height: 18px;
          fill: currentColor;
          flex-shrink: 0;
        }

        /* no-link placeholder */
        .pr-no-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #334155;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-top: auto;
          padding-top: 4px;
        }

        /* ── Footer ── */
        .pr-footer {
          text-align: center;
          margin-top: 52px;
          opacity: 0;
          transition: opacity 0.7s ease 1.3s;
        }
        .pr-footer.visible { opacity: 1; }
        .pr-footer p {
          font-size: 0.8rem;
          color: #1e293b;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      `}</style>

      <section id="projects" ref={sectionRef}>
        <div className="pr-glow-1" />
        <div className="pr-glow-2" />
        <div className="pr-grid-bg" />

        <div className="pr-inner">
          <p className={`pr-label ${isVisible ? 'visible' : ''}`}>What I've Built</p>
          <h2 className={`pr-heading ${isVisible ? 'visible' : ''}`}>Projects</h2>
          <div className={`pr-underline ${isVisible ? 'visible' : ''}`} />

          <div className="pr-grid">
            {projects.map((proj, index) => (
              <div
                key={index}
                className={`pr-card ${isVisible ? 'visible' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* corner glow */}
                <div
                  className="pr-card-glow"
                  style={{
                    background: `radial-gradient(circle at top right, ${proj.accent}0.18), transparent 70%)`,
                  }}
                />

                {/* Top row */}
                <div className="pr-card-top">
                  <div className="pr-card-left">
                    <div
                      className="pr-icon-box"
                      style={{ borderColor: `${proj.accent}0.3)`, background: `${proj.accent}0.1)` }}
                    >
                      {proj.icon}
                    </div>
                    <div className="pr-title-block">
                      <h3 className="pr-card-title">{proj.title}</h3>
                      <span className="pr-category">{proj.category}</span>
                    </div>
                  </div>

                  {proj.status && (
                    <span className="pr-status-badge">
                      <span className="pr-status-dot" />
                      Active
                    </span>
                  )}
                </div>

                <div className="pr-divider" />

                {/* Bullets */}
                <ul className="pr-desc-list">
                  {proj.description.map((point, i) => (
                    <li key={i} className={`pr-desc-item ${isVisible ? 'visible' : ''}`}>
                      <span className="pr-bullet">▶</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="pr-tech-row">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="pr-tech-tag"
                      style={{
                        color: proj.accentSolid,
                        borderColor: `${proj.accent}0.3)`,
                        background: `${proj.accent}0.08)`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub button or WIP */}
                {proj.link ? (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="pr-github-btn"
                  >
                    <svg className="pr-github-icon" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                ) : (
                  <div className="pr-no-link">
                    <span style={{ color: proj.accentSolid }}>◉</span>
                    In progress — repo coming soon
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={`pr-footer ${isVisible ? 'visible' : ''}`}>
            <p>· · · More projects on the way · · ·</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;