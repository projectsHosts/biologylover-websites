// src/components/mock-tests/pages/SubcategoryTests.tsx
import { useNavigate, useParams } from "react-router-dom";
import "../../../styles/mocktest.css";

interface SubcategoryOption {
  id: string;
  name: string;
  examType: string;
}

export default function SubcategoryTests() {
  const {  } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  // NEET Subject Tests subcategories
  const subcategories: SubcategoryOption[] = [
    { id: "physics", name: "Physics", examType: "NEET_PHYSICS" },
    { id: "chemistry", name: "Chemistry", examType: "NEET_CHEMISTRY" },
    { id: "biology", name: "Biology", examType: "NEET_BIOLOGY" }
  ];

  return (
    <div className="container">
      <button 
        className="mock-back-link"
        onClick={() => navigate("/mock-tests/medical")}
      >
        ← Back to Medical Entrance
      </button>

      <h2>NEET Subject Tests</h2>
      <p className="mock-subtitle">Choose your subject for practice</p>

      <div className="mock-exam-grid">
        {subcategories.map(sub => (
          <div 
            key={sub.id} 
            className="mock-exam-card"
            onClick={() => navigate(`/mock-tests/list/${sub.examType}`)}
          >
            <h3>{sub.name}</h3>
            <p>Subject-wise NEET practice tests</p>
            <button className="mock-exam-btn">View Tests →</button>
          </div>
        ))}
      </div>
    </div>
  );
}