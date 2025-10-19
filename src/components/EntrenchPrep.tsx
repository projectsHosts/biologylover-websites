import { useState } from "react";
import "../styles/EntrenchPrep.css";

import biologyImg from "../assets/ai-prep/biology.png"; 
import physicsImg from "../assets/ai-prep/physics.png";
import chemistryImg from "../assets/ai-prep/Chemistry..png";
import mathImg from "../assets/ai-prep/math.png";
import backgroundVideo from "../assets/ai-prep/backgg.mp4";

const cards = [
  {
    id: 1,
    title: "Biology Mastery",
    company: "AI Coach",
    image: biologyImg,
    button: "Start Practice",
  },
  {
    id: 2,
    title: "Physics Crash Test",
    company: "AI Mentor",
    image: physicsImg,
    button: "Start Practice",
  },
  {
    id: 3,
    title: "Chemistry Challenge",
    company: "AI Tutor",
    image: chemistryImg,
    button: "Start Practice",
  },
  {
    id: 4,
    title: "Math Challenge",
    company: "AI Tutor",
    image: mathImg,
    button: "Start Practice",
  },
];

export default function AIExamPrep() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % cards.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <section className="ai-prep-section">
      {/* Video Background */}
      <video autoPlay loop muted className="bg-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="ai-prep-content">
        <div className="ai-prep-header">
          <h2>Entrance Exam Prep with AI</h2>
          <p>Practice, analyze, and improve your performance with smart AI Tutor.</p>
        </div>

        <div className="ai-prep-carousel">
          <button className="arrow left" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="card-container">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`ai-card ${index === current ? "active" : ""}`}
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="overlay">
                  {/* <h3>{card.title}</h3> */}
                  {/* <p>{card.company}</p> */}
                  <button>{card.button}</button>
                </div>
              </div>
            ))}
          </div>

          <button className="arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
