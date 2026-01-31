import { useLocation, useNavigate } from "react-router-dom";
import "../../../styles/pyq.css"

export default function PyqResult() {
  const { state: result } = useLocation();
  const navigate = useNavigate();

  if (!result) {
    return (
      <div className="pyq-page">
        <p>No result data found</p>
      </div>
    );
  }

  return (
  <div className="pyq-scope">
    <div className="pyq-page">
      <div className="result-box">
        <h2 className="pyq-title">Your Result</h2>

        <div className="result-grid">
          <div className="result-item">Attempted<br /><strong>{result.attempted}</strong></div>
          <div className="result-item">Correct<br /><strong>{result.correct}</strong></div>
          <div className="result-item">Wrong<br /><strong>{result.wrong}</strong></div>
          <div className="result-item">Skipped<br /><strong>{result.skipped}</strong></div>
          <div className="result-item">Marks<br /><strong>{result.marks}</strong></div>
          <div className="result-item">
            Accuracy<br />
            <strong>{result.accuracy.toFixed(2)}%</strong>
          </div>
        </div>

        <div className="pyq-result-actions">
          <button
            className="btn-primary pyq"
            onClick={() => navigate("/pyq")}
          >
            Practice More PYQs
          </button>
        </div>
      </div>
     </div>
    </div>
  );
}
