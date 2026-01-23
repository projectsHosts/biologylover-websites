import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/landing.css';

const Landing: React.FC = () => {
  const [, setScrollY] = useState(0);

const rotatingPhrases = [
  "the Cell",
  "DNA",
  "Motion",
  "Electricity",
  "Atoms",
  "Chemical Bonding",
  "Genetics",
  "Optics",
  "Organic Chemistry",
  "Evolution",
  "Thermodynamics",
  "Modern Physics"
];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Rotating text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
        setIsVisible(true);
      }, 400); // fade out duration ke baad change (600ms fade)

    }, 3000); // har 3 seconds mein change (adjust kar sakte ho)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="landing-section">
      {/* Animated Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* Video Background with Overlay */}
      <video 
        className="bg-video" 
        autoPlay 
        muted 
        loop 
        playsInline
      />
      <div className="overlay"></div>

      {/* Main Content */}
      <div className="landing-content">
        <div className="content-wrapper">
          {/* Badge */}
          <div className="badge" style={{
            animation: 'slideInDown 0.8s ease-out'
          }}>
            <span className="badge-text">Welcome to the Future of Biology Learning</span>
          </div>

          {/* Main Title */}
          <h1 className="title" style={{
            animation: 'slideInDown 0.8s ease-out 0.2s forwards'
          }}>
            Unlock the Secrets of {' '}
           <span
              data-text={rotatingPhrases[currentPhraseIndex]}
              className={`title-gradient ${isVisible ? "fade-in" : "fade-out"}`}
            >
              {rotatingPhrases[currentPhraseIndex]}
            </span>
          </h1>

          {/* Tagline Section */}
          <div className="tagline-section" style={{
            animation: 'slideInUp 0.8s ease-out 0.4s forwards'
          }}>
            <p className="tagline">
              Discover, Learn & Master Biology Through Interactive Experiences
            </p>
            <p className="subtitle">
              Join thousands of students and professionals in exploring the wonders of life science with cutting-edge technology and expert instruction.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons" style={{
            animation: 'slideInUp 0.8s ease-out 0.6s forwards'
          }}>
            <a href="#courses" className="btn btn-primary">
              <span className="btn-text">Start Learning Today</span>
              <span className="btn-icon">→</span>
            </a>
            <a 
              href="https://t.me/biology_lover_02" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span className="btn-text">Join Community</span>
              <span className="btn-icon">🌐</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator" style={{
            animation: 'bounce 2s infinite 1.2s'
          }}>
            <ChevronDown size={32} />
          </div>

          {/* Stats Preview */}
          <div className="stats-preview" style={{
            animation: 'slideInUp 0.8s ease-out 0.8s forwards'
          }}>
            <div className="stat-item">
              <div className="stat-number">200K+</div>
              <div className="stat-label">Active Learners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Expert Courses</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;