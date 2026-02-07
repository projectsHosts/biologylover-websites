// src/features/mocktest/pages/MockTestCategories.tsx
import { useNavigate } from "react-router-dom";
import "../../../styles/mocktest.css";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  route: string;
  statusText: string;
}

export default function MockTestCategories() {
  const navigate = useNavigate();

  const categories: Category[] = [
    {
      id: "medical",
      name: "Medical Entrance (PCB)",
      description: "NEET, AIIMS, JIPMER & other medical entrance exams",
      icon: "local_hospital",
      route: "/mock-tests/medical",
      statusText: "AVAILABLE"
    },
    {
      id: "engineering",
      name: "Engineering Entrance (PCM)",
      description: "JEE Main, JEE Advanced & state engineering exams",
      icon: "engineering",
      route: "/mock-tests/engineering",
      statusText: "NOT AVAILABLE"
    },
    {
      id: "government",
      name: "Government / Paramedical",
      description: "Government job & paramedical entrance tests",
      icon: "account_balance",
      route: "/mock-tests/government",
      statusText: "NOT AVAILABLE"
    },
    {
      id: "classwise",
      name: "Class-wise Tests",
      description: "Practice tests for Class 11 & 12 (PCB/PCM)",
      icon: "school",
      route: "/mock-tests/classwise",
      statusText: "NOT AVAILABLE"
    },
    {
      id: "topicwise",
      name: "Topic-wise Tests",
      description: "Chapter-wise tests for Physics, Chemistry & Biology",
      icon: "menu_book",
      route: "/mock-tests/topicwise",
      statusText: "NOT AVAILABLE"
    }
  ];

  return (
    <div className="container">
      <h2>Mock Tests</h2>
      <p className="mock-subtitle">Choose your test category to begin practice</p>

      <div className="mock-category-grid">
        {categories.map(cat => (
          <div 
            key={cat.id} 
            className="mock-category-card"
            onClick={() => navigate(cat.route)}
          >
             <div className={
                cat.statusText === "AVAILABLE"
                  ? "mock-static-status available"
                  : "mock-static-status not"
              }>
                {cat.statusText}
              </div>
            <span className="material-icons mock-category-icon">{cat.icon}</span>
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
            <button className="mock-category-btn">View Tests →</button>
          </div>
        ))}
      </div>
    </div>
  );
}