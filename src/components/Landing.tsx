import React, { useState, useEffect } from "react";
import { Play, ChevronRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/landing.css";
import { isLoggedIn } from "../utils/auth";

const LandingNew: React.FC = () => {
  const [, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const scrollToCourses = () => {
    const el = document.getElementById("courses");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const topics = ["Cell Biology", "Genetics", "Evolution", "Ecology"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % topics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-new">
      {/* Floating orbs */}
      <div className="orb orb-blue"></div>
      <div className="orb orb-purple"></div>
      <div className="orb orb-green"></div>

      {/* Main content */}
      <div className="container">
        {/* Hero Section */}
        <div className="hero-sectionhs">
          <div className="hero-left">
            <div className="badge-pill">
              <Star size={14} fill="#fbbf24" stroke="#fbbf24" />
              <span>Trusted by 50K+ Students</span>
            </div>

            <h1 className="main-title">
              Learn Biology
              <span className="gradient-text"> The Smart Way</span>
            </h1>

            <p className="main-description">
              Master complex concepts through engaging videos, interactive
              quizzes, and real-world applications. Built by students, for
              students.
            </p>

            <div className="cta-row">
              <button
                className="btn-cta"
                onClick={() => navigate("/mock-tests")}
              >
                <Play size={18} />
                <span>Start Free Tests</span>
              </button>
              <button className="btn-outline" onClick={scrollToCourses}>
                <span>Explore Courses</span>
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Quick Stats */}
            <div className="quick-stats">
              <div className="stat-box">
                <div className="stat-num">180+</div>
                <div className="stat-text">Video Lessons</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">1500+</div>
                <div className="stat-text">Practice Qs</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">4.9★</div>
                <div className="stat-text">Rating</div>
              </div>
            </div>
          </div>

          {/* Right side - Scientific Visualizations */}
          <div className="hero-right">
            {/* Biology - Cell Diagram */}
            <div className="science-viz viz-biology">
              <div className="cell-outer">
                <div className="nucleus"></div>
                <div className="mitochondria mito-1"></div>
                <div className="mitochondria mito-2"></div>
                <div className="ribosome rib-1"></div>
                <div className="ribosome rib-2"></div>
                <div className="ribosome rib-3"></div>
              </div>
              <div className="viz-label">Biology</div>
            </div>

            {/* Chemistry - Molecular Structure */}
            <div className="science-viz viz-chemistry">
              <div className="molecule">
                <div className="atom atom-center">C</div>
                <div className="atom atom-1">H</div>
                <div className="atom atom-2">H</div>
                <div className="atom atom-3">O</div>
                <div className="atom atom-4">H</div>
                <div className="bond bond-1"></div>
                <div className="bond bond-2"></div>
                <div className="bond bond-3"></div>
                <div className="bond bond-4"></div>
              </div>
              <div className="viz-label">Chemistry</div>
            </div>

            {/* Physics - Atom Model */}
            <div className="science-viz viz-physics">
              <div className="atom-model">
                <div className="atom-core">
                  <div className="proton"></div>
                  <div className="neutron"></div>
                </div>
                <div className="electron-orbit orbit-1">
                  <div className="electron"></div>
                </div>
                <div className="electron-orbit orbit-2">
                  <div className="electron"></div>
                </div>
              </div>
              <div className="viz-label">Physics</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="final-cta">
          <h2 className="cta-title">
            Ready to Transform Your Biology Journey?
          </h2>
          <p className="cta-subtitle">
            Join thousands of students mastering biology every day
          </p>
          <button className="btn-cta-large"
          onClick={() => {
            if (!isLoggedIn()) {
              (window as any).openLogin();
              return;
            }
            navigate("/");  // home page 
          }}>
            Get Started - It's Free
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingNew;
