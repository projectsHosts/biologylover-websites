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
  { id: "11-pcb", name: "Class 11 PHYSICS", examType: "CLASS11_PHYSICS" },
  { id: "11-pcb", name: "Class 11 CHEMISTRY", examType: "CLASS11_CHEMISTRY" },
  { id: "11-pcb", name: "Class 11 BIOLOGY", examType: "CLASS11_BIOLOGY" },
  { id: "11-pcb", name: "Class 11 MATHEMATICS", examType: "CLASS11_MATHS" },

  // Class 12
  { id: "12-pcb", name: "Class 12 PHYSICS", examType: "CLASS12_PHYSICS" },
  { id: "12-pcb", name: "Class 12 CHEMISTRY", examType: "CLASS12_CHEMISTRY" },
  { id: "12-pcb", name: "Class 12 BIOLOGY", examType: "CLASS12_BIOLOGY" },
  { id: "12-pcb", name: "Class 12 MATHEMATICS", examType: "CLASS12_MATHS" },
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
