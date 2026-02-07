// src/features/mocktest/pages/EngineeringEntrance.tsx
import { useNavigate } from "react-router-dom";
import "../../../styles/mocktest.css";

interface ExamCategory {
  id: string;
  name: string;
  description: string;
  examType: string;
}

export default function EngineeringEntrance() {
  const navigate = useNavigate();

  const examCategories: ExamCategory[] = [
    {
      id: "jee-main",
      name: "JEE Main Mock",
      description: "Complete JEE Main pattern tests with PCM",
      examType: "JEE_MAIN"
    },
    {
      id: "jee-advanced",
      name: "JEE Advanced Mock",
      description: "JEE Advanced level practice tests",
      examType: "JEE_ADVANCED"
    },
    {
      id: "state-engg",
      name: "State Engineering Tests",
      description: "State-level engineering entrance exams",
      examType: "STATE_ENGINEERING"
    },
    {
      id: "pcm-subject",
      name: "Subject-wise PCM Tests",
      description: "Physics, Chemistry & Maths topic tests",
      examType: "PCM_SUBJECT"
    }
  ];

  return (
    <div className="container">
      <button 
        className="mock-back-link"
        onClick={() => navigate("/mock-tests")}
      >
        ← Back to Categories
      </button>

      <h2>Engineering Entrance (PCM)</h2>
      <p className="mock-subtitle">JEE Main, JEE Advanced & Engineering exam preparation</p>

      <div className="mock-exam-grid">
        {examCategories.map(cat => (
          <div 
            key={cat.id} 
            className="mock-exam-card"
            onClick={() => navigate(`/mock-tests/list/${cat.examType}`)}
          >
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
            <button className="mock-exam-btn">View Tests →</button>
          </div>
        ))}
      </div>
    </div>
  );
}