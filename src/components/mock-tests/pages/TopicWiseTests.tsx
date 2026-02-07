import { useNavigate } from "react-router-dom";
import "../../../styles/mocktest.css";

export default function TopicWiseTests() {

  const navigate = useNavigate();

  const subjects = [
    { id: "physics", name: "Physics", examType: "TOPIC_PHYSICS" },
    { id: "chemistry", name: "Chemistry", examType: "TOPIC_CHEMISTRY" },
    { id: "biology", name: "Biology", examType: "TOPIC_BIOLOGY" },
    { id: "maths", name: "Mathematics", examType: "TOPIC_MATHS" }
  ];

  return (
    <div className="container">

      <button
        className="mock-back-link"
        onClick={() => navigate("/mock-tests")}
      >
        ← Back to Categories
      </button>

      <h2>Topic-wise Tests</h2>
      <p className="mock-subtitle">
        Chapter & topic based practice tests
      </p>

      <div className="mock-exam-grid">
        {subjects.map(s => (
          <div
            key={s.id}
            className="mock-exam-card"
            onClick={() => navigate(`/mock-tests/list/${s.examType}`)}
          >
            <h3>{s.name}</h3>
            <p>Chapter-wise mock tests</p>
            <button className="mock-exam-btn">View Tests →</button>
          </div>
        ))}
      </div>

    </div>
  );
}
