import { useNavigate } from "react-router-dom";
import "../../../styles/mocktest.css";

interface ExamCategory {
  id: string;
  name: string;
  description: string;
  examType: string;
}

export default function GovernmentEntrance() {
  const navigate = useNavigate();

  const exams: ExamCategory[] = [
    {
      id: "paramedical",
      name: "Paramedical Entrance",
      description: "Paramedical & allied health science tests",
      examType: "PARAMEDICAL"
    },
    {
      id: "nursing",
      name: "Nursing Entrance",
      description: "BSc Nursing & ANM/GNM entrance mocks",
      examType: "NURSING"
    },
    {
      id: "pharmacy",
      name: "Pharmacy Entrance",
      description: "D.Pharm & B.Pharm entrance tests",
      examType: "PHARMACY"
    },
    {
      id: "govt-general",
      name: "General Government Tests",
      description: "General aptitude & science based govt exams",
      examType: "GOVT_GENERAL"
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

      <h2>Government / Paramedical</h2>
      <p className="mock-subtitle">
        Government & paramedical entrance preparation
      </p>

      <div className="mock-exam-grid">
        {exams.map(exam => (
          <div
            key={exam.id}
            className="mock-exam-card"
            onClick={() => navigate(`/mock-tests/list/${exam.examType}`)}
          >
            <h3>{exam.name}</h3>
            <p>{exam.description}</p>
            <button className="mock-exam-btn">View Tests →</button>
          </div>
        ))}
      </div>

    </div>
  );
}
