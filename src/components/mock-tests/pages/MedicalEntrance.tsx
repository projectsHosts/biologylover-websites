// src/components/mock-tests/pages/MedicalEntrance.tsx
import { useNavigate } from "react-router-dom";
import "../../../styles/mocktest.css";
import { isLoggedIn } from "../../../utils/auth";

interface ExamCategory {
  id: string;
  name: string;
  description: string;
  examType: string;
  hasSubcategories?: boolean;
}

export default function MedicalEntrance() {
  const navigate = useNavigate();

  const examCategories: ExamCategory[] = [
    {
      id: "neet-full",
      name: "NEET Full Mock Tests",
      description: "Complete NEET pattern tests with Physics, Chemistry & Biology",
      examType: "NEET_FULL",
      hasSubcategories: false
    },
    {
      id: "neet-subject",
      name: "NEET Subject Tests",
      description: "Subject-wise practice tests",
      examType: "NEET_SUBJECT",
      hasSubcategories: true
    },
    {
      id: "bsc-nursing",
      name: "B.Sc Nursing Entrance",
      description: "B.Sc Nursing entrance exam preparation",
      examType: "BSC_NURSING",
      hasSubcategories: false
    },
    {
      id: "paramedical",
      name: "Paramedical Entrance",
      description: "Paramedical courses entrance tests",
      examType: "PARAMEDICAL",
      hasSubcategories: false
    }
  ];

  const handleCategoryClick = (category: ExamCategory) => {
 
     if (!isLoggedIn()) {
    (window as any).openLogin();   // same modal you use in quiz
    return;
  }

   if (category.examType === "NEET_FULL") {
  navigate("/mock-tests/list/NEET_FULL");
  return;
}

  
    if (category.hasSubcategories) {
      // Navigate to subcategory page for NEET Subject Tests
      navigate(`/mock-tests/medical/${category.id}`);
    } else {
      // Navigate directly to test list
      navigate(`/mock-tests/list/${category.examType}`);
    }
  };

  // Get subject tags for NEET Subject Tests
  const getSubjectTags = (categoryId: string) => {
    if (categoryId === "neet-subject") {
      return ["Physics", "Chemistry", "Biology"];
    }
    return null;
  };

  return (
    <div className="container">
      <button 
        className="mock-back-link"
        onClick={() => navigate("/mock-tests")}
      >
        ← Back to Categories
      </button>

      <h2>Medical Entrance (PCB)</h2>
      <p className="mock-subtitle">NEET, AIIMS, JIPMER & Medical entrance exam preparation</p>

      <div className="mock-exam-grid">
        {examCategories.map(cat => {
          const subjectTags = getSubjectTags(cat.id);
          
          return (
            <div 
              key={cat.id} 
              className="mock-exam-card"
              onClick={() => handleCategoryClick(cat)}
            >
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              
              {subjectTags && (
                <div className="mock-subcategories">
                  {subjectTags.map(subject => (
                    <span key={subject} className="mock-sub-tag">{subject}</span>
                  ))}
                </div>
              )}
              
              <button className="mock-exam-btn"  onClick={(e) => {
                  e.stopPropagation();      // ✅ prevent double click bubbling
                  handleCategoryClick(cat);
                }} >View Tests →</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}