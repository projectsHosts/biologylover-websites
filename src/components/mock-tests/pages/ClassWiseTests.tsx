import { useNavigate } from "react-router-dom";
import "../../../styles/mocktest.css";

export default function ClassWiseTests() {

  const navigate = useNavigate();

  const classes = [
    { id: "11-pcb", name: "Class 11 PCB", examType: "CLASS11_PCB" },
    { id: "11-pcm", name: "Class 11 PCM", examType: "CLASS11_PCM" },
    { id: "12-pcb", name: "Class 12 PCB", examType: "CLASS12_PCB" },
    { id: "12-pcm", name: "Class 12 PCM", examType: "CLASS12_PCM" }
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
