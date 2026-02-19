import { useLocation, useNavigate } from "react-router-dom";
import "../../../styles/mocktest.css";
import type { ResultState } from "../types/mock";

export default function MockTestResult() {

  const { state } = useLocation();
  const navigate = useNavigate();

  const data = state as ResultState;

  if (!data || !data.review) {
    return <div className="container">No result data</div>;
  }

  return (
    <div className="container">

      <h2>Mock Test Result</h2>

      <div className="mock-result-grid">

        <div className="mock-res-card">
          <h3>Score</h3>
          <p>{data.score}/{data.maxMarks}</p>
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
          <p>{Number(data.accuracy).toFixed(2)}%</p>
        </div>

      </div>

      {/* ===== Review ===== */}

<div className="mock-question-review-container">
  <h3>Question Review</h3>

  <div className="mock-question-review-wrapper">
    {data.review.map((r, i) => {

      const statusClass =
        r.yourAnswer == null
          ? "mock-status-skip"
          : r.correct
            ? "mock-status-correct"
            : "mock-status-wrong";

      return (
        <div
          key={r.questionId}
          className={`mock-question-review ${statusClass}`}
        >
          <div>
            <b>Q{i + 1}.</b> {r.questionText}
          </div>

          <div>
            Your Answer: <b>{r.yourAnswer ?? "Skipped"}</b>
          </div>

          <div>
            Correct Answer: <b>{r.correctAnswer}</b>
          </div>
        </div>
      );
    })}
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
