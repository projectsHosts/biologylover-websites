import { useNavigate } from "react-router-dom";
import "../../../styles/mocktest.css";

export default function ClassWiseTests() {

  const navigate = useNavigate();

  const classes = [
  // Class 9
  { id: "9-science", name: "Class 9 Science", examType: "CLASS9_SCIENCE" },
  { id: "9-maths",   name: "Class 9 Maths",   examType: "CLASS9_MATHS" },

  // Class 10
  { id: "10-science", name: "Class 10 Science", examType: "CLASS10_SCIENCE" },
  { id: "10-maths",   name: "Class 10 Maths",   examType: "CLASS10_MATHS" },

  // Class 11
  { id: "11-pcb", name: "Class 11 PCMB", examType: "CLASS11_PCMB" },

  // Class 12
  { id: "12-pcb", name: "Class 12 PCMB", examType: "CLASS12_PCMB" },
];


  return (
    <div className="container">

      <button
        className="mock-back-link"
        onClick={() => navigate("/mock-tests")}
      >
        ← Back to Categories
      </button>

      <h2>Class-wise Tests</h2>
      <p className="mock-subtitle">
        Practice tests based on school class syllabus
      </p>

      <div className="mock-exam-grid">
        {classes.map(c => (
          <div
            key={c.id}
            className="mock-exam-card"
            onClick={() => navigate(`/mock-tests/list/${c.examType}`)}
          >
            <h3>{c.name}</h3>
            <p>Full & subject-wise tests</p>
            <button className="mock-exam-btn">View Tests →</button>
          </div>
        ))}
      </div>

    </div>
  );
}
