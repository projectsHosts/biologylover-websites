import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "../styles/EntrenchPrep.css";
import backgroundVideo from "../assets/ai-prep/backgg.mp4";

export default function AIExamPrep() {
  const navigate = useNavigate();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        "-=0.4"
      );

    // Floating animation for decorative blob
    gsap.to(decorRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });

    // Button pulse effect
    gsap.to(buttonRef.current, {
      boxShadow: "0 0 30px rgba(147, 51, 234, 0.8)",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="ai-prep-section">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Animated Background Blobs */}
      <div ref={decorRef} className="decor-blob-1" />
      <div className="decor-blob-2" />

      {/* Content */}
      <div className="ai-prep-hero">
        <div className="content-wrapper">
          {/* Title */}
          <h1 ref={titleRef} className="hero-title">
            <span className="gradient-text-1">Entrance Exam Prep</span>
            <span className="gradient-text-2">with AI</span>
          </h1>

          {/* Subtitle */}
          <p ref={subtitleRef} className="hero-subtitle">
            Practice smarter, analyze deeper, and boost your exam performance
            with an intelligent AI Tutor that adapts to your learning style.
          </p>

          {/* CTA Button */}
          <button
            ref={buttonRef}
            className="hero-cta"
            onClick={() => navigate("/ai-practice")}
          >
            
            <span>Start Practice</span>
          </button>

          {/* Feature Pills */}
          <div className="feature-pills">
            <div className="feature-pill">AI-Powered</div>
            <div className="feature-pill">Personalized</div>
            <div className="feature-pill">Real-time Feedback</div>
          </div>
        </div>
      </div>
    </section>
  );
}