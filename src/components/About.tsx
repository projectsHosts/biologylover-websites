import React from 'react';
import '../styles/about.css';

const AboutUs: React.FC = () => {
  return (
    <div className="aboutus-container">
      <div className="hero-section">
        <h1>About Us</h1>
        <div className="hero-decoration"></div>
      </div>
      <div className="content-section">
        <p>
          Welcome to <span className="highlight">BiologyLover</span>! We are a passionate team dedicated to revolutionizing how students learn biology and other sciences. Through our high-quality study materials, interactive flashcards, engaging quizzes, and comprehensive video tutorials, we empower learners to achieve academic excellence with confidence and curiosity.
        </p>
        <p>
          Our mission is to make science education fun, accessible, and effective for students of all levels—from high school enthusiasts to aspiring professionals preparing for competitive exams like JEE and NEET. Whether you're diving into cellular biology, exploring ecosystems, or mastering genetics, our resources are designed to spark joy in learning and build a strong foundation for your future.
        </p>
        <div className="mission-vision">
          <div className="card">
            <h3>Our Vision</h3>
            <p>To inspire a global community of lifelong science lovers who innovate and solve the world's challenges through biological sciences.</p>
          </div>
          <div className="card">
            <h3>Our Journey</h3>
            <p>Founded by educators and science enthusiasts, we've grown from a small study group to a thriving platform serving millions worldwide.</p>
          </div>
        </div>
        <div className="social-section">
          <h3>Join Our Community</h3>
          <p>
            Follow us on social media for daily tips, live sessions, and exclusive content! Our Instagram <span className="highlight">@biology_lover_02</span> boasts over 1 million followers, where we share bite-sized biology facts, memes, and study hacks. On YouTube, our channel delivers in-depth tutorials, experiment walkthroughs, and exam prep strategies to help you ace your classes.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/biology_lover_02/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              Instagram (1M+)
            </a>
            <a href="https://www.youtube.com/@biology_lover_02" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;