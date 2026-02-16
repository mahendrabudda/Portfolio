import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillGroups = [
    {
      title: "Languages",
      icon: "💻",
      accent: "#2563eb",
      accentAlpha: "rgba(37,99,235,",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 75 },
        { name: "C", level: 70 },
      ],
    },
    {
      title: "Full-Stack Development",
      icon: "🌐",
      accent: "#6366f1",
      accentAlpha: "rgba(99,102,241,",
      skills: [
        { name: "React", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "Tailwind", level: 85 },
        { name: "REST APIs", level: 83 },
        { name: "HTML & CSS", level: 90 },
        { name: "Vite", level: 78 },
      ],
    },
    {
      title: "AI / Machine Learning",
      icon: "🧠",
      accent: "#8b5cf6",
      accentAlpha: "rgba(139,92,246,",
      skills: [
        { name: "Deep Learning", level: 80 },
        { name: "OpenCV", level: 82 },
        { name: "NumPy & Pandas", level: 85 },
        { name: "Object Detection", level: 78 },
        { name: "CNN / ANN", level: 76 },
        { name: "Image Processing", level: 80 },
        { name: "Feature Extraction", level: 75 },
        { name: "Matplotlib", level: 83 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      accent: "#0ea5e9",
      accentAlpha: "rgba(14,165,233,",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "Linux", level: 78 },
        { name: "VS Code", level: 92 },
        { name: "Google Colab", level: 85 },
      ],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Inter:wght@400;600&family=Rajdhani:wght@600&display=swap');

        #skills {
          background-color: #050a1e;
          position: relative;
          overflow: hidden;
          padding: 100px 24px;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .sk-glow-1 {
          position: absolute;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%);
          border-radius: 50%;
          top: -120px; right: -100px;
          pointer-events: none;
        }
        .sk-glow-2 {
          position: absolute;
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          border-radius: 50%;
          bottom: -80px; left: -80px;
          pointer-events: none;
        }
        .sk-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .sk-inner {
          max-width: 1040px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Header ── */
        .sk-label {
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
        .sk-label.visible { opacity: 1; transform: translateY(0); }

        .sk-heading {
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
        .sk-heading.visible { opacity: 1; transform: translateY(0); }

        .sk-underline {
          width: 80px; height: 4px;
          background: linear-gradient(90deg, #2563eb 0%, #6366f1 100%);
          border-radius: 2px;
          margin: 0 auto 64px;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: center;
          transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
        }
        .sk-underline.visible { opacity: 1; transform: scaleX(1); }

        /* ── Grid ── */
        .sk-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 768px) {
          .sk-grid { grid-template-columns: 1fr; }
          .sk-heading { font-size: 2.4rem !important; }
        }

        /* ── Card ── */
        .sk-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(99,102,241,0.18);
          border-radius: 20px;
          padding: 28px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }
        .sk-card.visible { opacity: 1; transform: translateY(0); }
        .sk-card:nth-child(1) { transition-delay: 0.45s; }
        .sk-card:nth-child(2) { transition-delay: 0.6s; }
        .sk-card:nth-child(3) { transition-delay: 0.75s; }
        .sk-card:nth-child(4) { transition-delay: 0.9s; }

        .sk-card:hover {
          border-color: rgba(99,102,241,0.4);
          background: rgba(99,102,241,0.055);
          transform: translateY(-4px);
        }

        /* shimmer */
        .sk-card::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.06), transparent);
          transition: left 0.65s ease;
        }
        .sk-card:hover::before { left: 150%; }

        /* corner accent */
        .sk-card::after {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 80px; height: 80px;
          background: radial-gradient(circle at top right, var(--card-accent, rgba(99,102,241,0.12)), transparent 70%);
          pointer-events: none;
        }

        /* ── Card Header ── */
        .sk-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .sk-icon-box {
          width: 46px; height: 46px;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.25);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .sk-card:hover .sk-icon-box {
          transform: rotate(6deg) scale(1.08);
          background: rgba(99,102,241,0.22);
        }

        .sk-card-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
          color: #f1f5f9;
          margin: 0;
        }

        .sk-card-count {
          margin-left: auto;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #475569;
          font-weight: 600;
        }

        .sk-card-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(99,102,241,0.22), transparent);
          margin-bottom: 20px;
        }

        /* ── Skill rows with bar ── */
        .sk-skill-list {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .sk-skill-row {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .sk-skill-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sk-skill-name {
          font-size: 0.88rem;
          font-weight: 600;
          color: #cbd5e1;
          transition: color 0.25s ease;
          cursor: default;
        }
        .sk-skill-row:hover .sk-skill-name { color: #e2e8f0; }

        .sk-skill-pct {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 1px;
          color: #475569;
          transition: color 0.25s ease;
        }
        .sk-skill-row:hover .sk-skill-pct { color: #94a3b8; }

        /* Progress track */
        .sk-bar-track {
          height: 5px;
          background: rgba(255,255,255,0.06);
          border-radius: 99px;
          overflow: hidden;
        }

        .sk-bar-fill {
          height: 100%;
          border-radius: 99px;
          width: 0%;
          transition: width 1.1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .sk-bar-fill.visible { width: var(--bar-width); }

        /* ── Footer ── */
        .sk-footer {
          text-align: center;
          margin-top: 52px;
          opacity: 0;
          transition: opacity 0.7s ease 1.2s;
        }
        .sk-footer.visible { opacity: 1; }
        .sk-footer p {
          font-size: 0.8rem;
          color: #1e293b;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      `}</style>

      <section id="skills" ref={sectionRef}>
        <div className="sk-glow-1" />
        <div className="sk-glow-2" />
        <div className="sk-grid-bg" />

        <div className="sk-inner">
          <p className={`sk-label ${isVisible ? 'visible' : ''}`}>What I Work With</p>
          <h2 className={`sk-heading ${isVisible ? 'visible' : ''}`}>Skills</h2>
          <div className={`sk-underline ${isVisible ? 'visible' : ''}`} />

          <div className="sk-grid">
            {skillGroups.map((group, index) => (
              <div
                key={index}
                className={`sk-card ${isVisible ? 'visible' : ''}`}
                style={{ '--card-accent': `${group.accentAlpha}0.12)` }}
              >
                {/* Card header */}
                <div className="sk-card-header">
                  <div className="sk-icon-box">{group.icon}</div>
                  <h3 className="sk-card-title">{group.title}</h3>
                  <span className="sk-card-count">{group.skills.length} skills</span>
                </div>

                <div className="sk-card-divider" />

                {/* Skill rows */}
                <div className="sk-skill-list">
                  {group.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="sk-skill-row"
                      onMouseEnter={() => setHoveredSkill(`${index}-${i}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="sk-skill-meta">
                        <span className="sk-skill-name">{skill.name}</span>
                        <span className="sk-skill-pct">{skill.level}%</span>
                      </div>
                      <div className="sk-bar-track">
                        <div
                          className={`sk-bar-fill ${isVisible ? 'visible' : ''}`}
                          style={{
                            '--bar-width': `${skill.level}%`,
                            background: `linear-gradient(90deg, ${group.accent}, ${group.accent}aa)`,
                            transitionDelay: isVisible ? `${0.55 + index * 0.15 + i * 0.06}s` : '0s',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`sk-footer ${isVisible ? 'visible' : ''}`}>
            <p>· · · Always expanding · · ·</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;