import React, { useState, useEffect, useRef } from 'react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: "B.Tech in Electronics & Communication Engineering",
      institution: "Indian Institute of Information Technology, Sri City",
      duration: "Present",
      icon: "🎓",
      tag: "Current",
      tagColor: "green",
      year: "2023 – 2027",
      details: [
        "Focused on Computer Vision, Machine Learning, and Full-Stack Development",
        "Worked on projects involving Deep Learning and Web Applications",
        "Active participation in technical and campus activities",
      ],
      highlights: ["CGPA: 7.2+", "IIIT Sri City", "ECE"],
    },
    {
      degree: "Higher Secondary Education (Class XII)",
      institution: "Sri Chaitanya Junior College",
      duration: "Completed",
      icon: "📘",
      tag: "Completed",
      tagColor: "indigo",
      year: "2020 – 2022",
      details: [
        "Studied Mathematics, Physics, and Chemistry (MPC stream)",
        "Built a strong analytical and problem-solving foundation",
      ],
      highlights: ["MPC Stream", "Sri Chaitanya"],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Inter:wght@400;600&family=Rajdhani:wght@600&display=swap');

        #education {
          background-color: #050a1e;
          position: relative;
          overflow: hidden;
          padding: 100px 24px;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .edu-glow-1 {
          position: absolute;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%);
          border-radius: 50%;
          top: -100px; right: -100px;
          pointer-events: none;
        }

        .edu-glow-2 {
          position: absolute;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          border-radius: 50%;
          bottom: -80px; left: -80px;
          pointer-events: none;
        }

        .edu-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .edu-inner {
          max-width: 960px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Header ── */
        .edu-label {
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
        .edu-label.visible { opacity: 1; transform: translateY(0); }

        .edu-heading {
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
        .edu-heading.visible { opacity: 1; transform: translateY(0); }

        .edu-underline {
          width: 80px; height: 4px;
          background: linear-gradient(90deg, #2563eb 0%, #6366f1 100%);
          border-radius: 2px;
          margin: 0 auto 64px;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: center;
          transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
        }
        .edu-underline.visible { opacity: 1; transform: scaleX(1); }

        /* ── Timeline ── */
        .edu-timeline {
          position: relative;
          padding-left: 44px;
        }

        .edu-timeline-line {
          position: absolute;
          left: 11px; top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #2563eb 0%, #6366f1 60%, transparent 100%);
          opacity: 0;
          transform: scaleY(0);
          transform-origin: top;
          transition: opacity 0.8s ease 0.5s, transform 1.1s ease 0.5s;
        }
        .edu-timeline-line.visible { opacity: 1; transform: scaleY(1); }

        /* ── Card ── */
        .edu-card {
          position: relative;
          margin-bottom: 36px;
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .edu-card.visible { opacity: 1; transform: translateX(0); }
        .edu-card:nth-child(1) { transition-delay: 0.55s; }
        .edu-card:nth-child(2) { transition-delay: 0.75s; }

        .edu-dot {
          position: absolute;
          left: -40px; top: 28px;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #6366f1);
          box-shadow: 0 0 14px rgba(99,102,241,0.55);
          border: 2px solid #050a1e;
          z-index: 2;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .edu-card:hover .edu-dot {
          transform: scale(1.45);
          box-shadow: 0 0 22px rgba(99,102,241,0.9);
        }

        .edu-card-inner {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(99,102,241,0.18);
          border-radius: 20px;
          padding: 32px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }
        .edu-card-inner:hover {
          border-color: rgba(99,102,241,0.42);
          background: rgba(99,102,241,0.055);
          transform: translateY(-3px);
        }

        /* shimmer sweep */
        .edu-card-inner::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.06), transparent);
          transition: left 0.65s ease;
        }
        .edu-card-inner:hover::before { left: 150%; }

        /* ── Card Top ── */
        .card-top-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .card-left {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          flex: 1;
        }

        .edu-icon-box {
          width: 54px; height: 54px;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.25);
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
          transition: background 0.3s, transform 0.3s;
        }
        .edu-card-inner:hover .edu-icon-box {
          background: rgba(99,102,241,0.22);
          transform: rotate(5deg) scale(1.06);
        }

        .edu-title-block { flex: 1; }

        .edu-degree {
          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: #f1f5f9;
          margin: 0 0 7px;
          line-height: 1.3;
        }

        .edu-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .edu-institution {
          font-size: 0.9rem;
          font-weight: 600;
          color: #6366f1;
        }

        .meta-dot {
          width: 4px; height: 4px;
          background: #475569;
          border-radius: 50%;
        }

        .edu-year {
          font-size: 0.84rem;
          color: #64748b;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 1px;
        }

        /* ── Badges ── */
        .card-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          flex-shrink: 0;
        }

        .tag-green {
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.28);
          color: #86efac;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 5px 13px;
          border-radius: 20px;
          font-family: 'Rajdhani', sans-serif;
          display: flex; align-items: center; gap: 6px;
        }

        .tag-green-dot {
          width: 6px; height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse-green 2s infinite;
        }

        @keyframes pulse-green {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.4); }
        }

        .tag-indigo {
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.28);
          color: #a5b4fc;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 5px 13px;
          border-radius: 20px;
          font-family: 'Rajdhani', sans-serif;
        }

        /* ── Highlight pills ── */
        .highlight-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }

        .highlight-pill {
          background: rgba(37,99,235,0.1);
          border: 1px solid rgba(37,99,235,0.22);
          color: #93c5fd;
          font-size: 0.73rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 0.5px;
          transition: background 0.3s, border-color 0.3s;
        }
        .highlight-pill:hover {
          background: rgba(37,99,235,0.2);
          border-color: rgba(37,99,235,0.45);
        }

        /* ── Divider ── */
        .card-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(99,102,241,0.22), transparent);
          margin-bottom: 20px;
        }

        /* ── Bullet list ── */
        .edu-list {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .edu-list-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          line-height: 1.7;
          color: #cbd5e1;
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.5s ease, transform 0.5s ease, color 0.25s ease;
        }
        .edu-list-item.visible { opacity: 1; transform: translateX(0); }
        .edu-list-item:hover { color: #e2e8f0; }

        .edu-card:nth-child(1) .edu-list-item:nth-child(1) { transition-delay: 0.8s; }
        .edu-card:nth-child(1) .edu-list-item:nth-child(2) { transition-delay: 0.92s; }
        .edu-card:nth-child(1) .edu-list-item:nth-child(3) { transition-delay: 1.04s; }
        .edu-card:nth-child(2) .edu-list-item:nth-child(1) { transition-delay: 1.0s; }
        .edu-card:nth-child(2) .edu-list-item:nth-child(2) { transition-delay: 1.12s; }

        .edu-bullet {
          color: #6366f1;
          font-size: 0.68rem;
          margin-top: 7px;
          flex-shrink: 0;
        }

        /* ── Footer hint ── */
        .edu-footer {
          text-align: center;
          margin-top: 48px;
          opacity: 0;
          transition: opacity 0.7s ease 1.3s;
        }
        .edu-footer.visible { opacity: 1; }

        .edu-footer p {
          font-size: 0.8rem;
          color: #1e293b;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        @media (max-width: 640px) {
          .edu-heading { font-size: 2.4rem !important; }
          .card-top-row { flex-direction: column; }
          .card-right { align-items: flex-start; }
        }
      `}</style>

      <section id="education" ref={sectionRef}>
        <div className="edu-glow-1" />
        <div className="edu-glow-2" />
        <div className="edu-grid-bg" />

        <div className="edu-inner">
          <p className={`edu-label ${isVisible ? 'visible' : ''}`}>Academic Background</p>
          <h2 className={`edu-heading ${isVisible ? 'visible' : ''}`}>Education</h2>
          <div className={`edu-underline ${isVisible ? 'visible' : ''}`} />

          <div className="edu-timeline">
            <div className={`edu-timeline-line ${isVisible ? 'visible' : ''}`} />

            {educationData.map((edu, index) => (
              <div key={index} className={`edu-card ${isVisible ? 'visible' : ''}`}>
                <div className="edu-dot" />

                <div className="edu-card-inner">
                  {/* Top row */}
                  <div className="card-top-row">
                    <div className="card-left">
                      <div className="edu-icon-box">{edu.icon}</div>
                      <div className="edu-title-block">
                        <h3 className="edu-degree">{edu.degree}</h3>
                        <div className="edu-meta">
                          <span className="edu-institution">{edu.institution}</span>
                          <span className="meta-dot" />
                          <span className="edu-year">{edu.year}</span>
                        </div>
                      </div>
                    </div>

                    <div className="card-right">
                      {edu.tagColor === 'green' ? (
                        <span className="tag-green">
                          <span className="tag-green-dot" />
                          {edu.tag}
                        </span>
                      ) : (
                        <span className="tag-indigo">{edu.tag}</span>
                      )}
                    </div>
                  </div>

                  {/* Highlight pills */}
                  <div className="highlight-row">
                    {edu.highlights.map((h, i) => (
                      <span key={i} className="highlight-pill">{h}</span>
                    ))}
                  </div>

                  <div className="card-divider" />

                  {/* Bullet list */}
                  <ul className="edu-list">
                    {edu.details.map((d, i) => (
                      <li key={i} className={`edu-list-item ${isVisible ? 'visible' : ''}`}>
                        <span className="edu-bullet">▶</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className={`edu-footer ${isVisible ? 'visible' : ''}`}>
            <p>· · · Always learning · · ·</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;