import { useState, useEffect } from "react";
import "../../styles/dashboard.css";

export default function Dashboard() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const particles = document.querySelector('.particles');
    if (particles) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particles.appendChild(particle);
      }
    }
  }, []);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  const features = [
    {
      icon: "📚",
      title: "Smart Study Plans",
      description: "Personalized learning paths based on your goals"
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Visual analytics of your academic journey"
    },
    {
      icon: "🎯",
      title: "Mock Tests",
      description: "Practice with NEET & JEE pattern questions"
    },
    {
      icon: "🤝",
      title: "Doubt Solving",
      description: "Get instant help from experts"
    },
    {
      icon: "📝",
      title: "Notes Library",
      description: "Access curated study materials"
    },
    {
      icon: "🏆",
      title: "Leaderboards",
      description: "Compete with peers nationwide"
    }
  ];

  return (
    <div className="dashboard-page">
      <div className="particles"></div>
      
      <div className="dashboard-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="status-badge">
            <span className="pulse-dot"></span>
            Under Development
          </div>
          
          <h1 className="main-title">
            Your Dashboard is
            <span className="gradient-text"> Coming Soon</span>
          </h1>
          
          <p className="subtitle">
            We're crafting an amazing learning experience just for you.
            Get ready to unlock your full potential! 🚀
          </p>

          <div className="countdown-section">
            <div className="countdown-box">
              <div className="countdown-number">🔨</div>
              <div className="countdown-label">Building</div>
            </div>
            <div className="countdown-box">
              <div className="countdown-number">⚡</div>
              <div className="countdown-label">Testing</div>
            </div>
            <div className="countdown-box">
              <div className="countdown-number">🎨</div>
              <div className="countdown-label">Designing</div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="features-section">
          <h2 className="section-title">What's Coming</h2>
          <p className="section-subtitle">Exciting features we're building for you</p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Notify Me Section */}
        <div className="notify-section">
          <div className="notify-card">
            <h2 className="notify-title">Get Notified When We Launch</h2>
            <p className="notify-description">
              Be the first to know when your dashboard goes live!
            </p>
            
            {!subscribed ? (
              <form onSubmit={handleNotify} className="notify-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="notify-input"
                  required
                />
                <button type="submit" className="notify-button">
                  Notify Me 🔔
                </button>
              </form>
            ) : (
              <div className="success-message">
                ✅ Great! We'll notify you soon!
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-section">
          <div className="progress-info">
            <span>Development Progress</span>
            <span className="progress-percentage">75%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="footer-message">
          <p>💡 Meanwhile, complete your profile to get personalized recommendations!</p>
        </div>
      </div>
    </div>
  );
}