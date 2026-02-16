import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleHireMeClick = () => {
    window.location.href = "http://localhost:5173/#home";
  };

  return (
    <header style={styles.container}>
      {/* Animated background particles */}
      <div style={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.particle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div style={{
        ...styles.content,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }}>
        <p style={{
          ...styles.subHeading,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease-out 0.2s',
        }}>
          FULL STACK DEVELOPER & TECH ENTHUSIAST
        </p>
        
        <h1 style={{
          ...styles.mainTitle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s',
        }}>
          Mahendra Budda
        </h1>
        
        <div style={styles.titleUnderline} />
        
        <p style={{
          ...styles.description,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease-out 0.6s',
        }}>
          I'm a passionate developer specializing in web and mobile applications. 
          With expertise in modern technologies and a commitment to excellence, 
          I transform ideas into powerful digital solutions that make a real impact.
        </p>
        
        <button 
          onClick={handleHireMeClick} 
          style={{
            ...styles.button,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.8)',
            transition: 'opacity 0.8s ease-out 0.8s, transform 0.8s ease-out 0.8s, background-color 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#1d4ed8';
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#2563eb';
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)';
          }}
        >
          Hire me
        </button>

        {/* Scroll indicator */}
        <div style={{
          ...styles.scrollIndicator,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease-out 1.2s',
        }}>
          <div style={styles.scrollMouse}>
            <div style={styles.scrollWheel} />
          </div>
          <p style={styles.scrollText}>Scroll to explore</p>
        </div>
      </div>
    </header>
  );
};

const styles = {
  container: {
  backgroundColor: '#050a1e',
  height: '100vh',          // full screen height
  width: '100%',            // full width

  display: 'flex',
  flexDirection: 'column',  // better for hero content
  justifyContent: 'center',
  alignItems: 'center',

  color: '#ffffff',
  textAlign: 'center',
  fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",

  padding: '0 20px',
  position: 'relative',
  overflow: 'hidden',
}
,
  particles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    top: 0,
    left: 0,
    pointerEvents: 'none',
  },
  particle: {
    position: 'absolute',
    width: '3px',
    height: '3px',
    background: 'rgba(99, 102, 241, 0.5)',
    borderRadius: '50%',
    animation: 'float 7s infinite ease-in-out',
  },
  content: {
    maxWidth: '900px',
    position: 'relative',
    zIndex: 1,
  },
  subHeading: {
    fontSize: '0.75rem',
    letterSpacing: '3px',
    fontWeight: '600',
    marginBottom: '15px',
    textTransform: 'uppercase',
    color: '#6366f1',
    fontFamily: "'Rajdhani', sans-serif",
  },
  mainTitle: {
    fontSize: '5rem',
    margin: '0 0 10px 0',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontFamily: "'Poppins', sans-serif",
    lineHeight: '1.1',
  },
  titleUnderline: {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #2563eb 0%, #6366f1 100%)',
    margin: '20px auto 30px',
    borderRadius: '2px',
  },
  description: {
    fontSize: '1.15rem',
    lineHeight: '1.8',
    color: '#cbd5e1',
    marginBottom: '50px',
    fontWeight: '400',
    maxWidth: '700px',
    margin: '0 auto 50px',
  },
  button: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '15px 45px',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
    letterSpacing: '0.5px',
    fontFamily: "'Inter', sans-serif",
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  scrollMouse: {
    width: '24px',
    height: '40px',
    border: '2px solid rgba(99, 102, 241, 0.5)',
    borderRadius: '12px',
    position: 'relative',
    animation: 'fadeInOut 2s infinite',
  },
  scrollWheel: {
    width: '4px',
    height: '8px',
    background: '#6366f1',
    borderRadius: '2px',
    position: 'absolute',
    top: '8px',
    left: '50%',
    transform: 'translateX(-50%)',
    animation: 'scroll 2s infinite',
  },
  scrollText: {
    fontSize: '0.7rem',
    color: 'rgba(203, 213, 225, 0.6)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
};

// Add CSS animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Inter:wght@400;600&family=Rajdhani:wght@600&display=swap');

  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
      opacity: 0;
    }
    10% {
      opacity: 0.5;
    }
    50% {
      transform: translateY(-100px) translateX(50px);
      opacity: 0.8;
    }
    90% {
      opacity: 0.3;
    }
  }

  @keyframes scroll {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(0);
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
      transform: translateX(-50%) translateY(15px);
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Header;