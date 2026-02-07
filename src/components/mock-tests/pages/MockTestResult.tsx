import { useLocation, useNavigate } from "react-router-dom";
import "../../../styles/mocktest.css";

interface ResultState {
  total: number;
  attempted: number;
  correct: number;
  wrong: number;
  skipped: number;
  score: number;
  accuracy: number;
}

export default function MockTestResult() {

  const { state } = useLocation();
  const navigate = useNavigate();

  const data = state as ResultState;

  if (!data) {
    return <div className="container">No result data</div>;
  }

  return (
    <div className="container">

      <h2>Mock Test Result</h2>

      <div className="mock-result-grid">

        <div className="mock-res-card">
          <h3>Score</h3>
          <p>{data.score}</p>
        </div>

        <div className="mock-res-card">
          <h3>Total Questions</h3>
          <p>{data.total}</p>
        </div>

        <div className="mock-res-card">
          <h3>Attempted</h3>
          <p>{data.attempted}</p>
        </div>

        <div className="mock-res-card">
          <h3>Correct</h3>
          <p>{data.correct}</p>
        </div>

        <div className="mock-res-card">
          <h3>Wrong</h3>
          <p>{data.wrong}</p>
        </div>

        <div className="mock-res-card">
          <h3>Skipped</h3>
          <p>{data.skipped}</p>
        </div>

        <div className="mock-res-card">
          <h3>Accuracy</h3>
          <p>{data.accuracy.toFixed(2)}%</p>
        </div>

      </div>

      <button
        className="mock-back-btn"
        onClick={() => navigate("/mock-tests")}
      >
        Back to Tests
      </button>

    </div>
  );
}
