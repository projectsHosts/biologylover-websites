import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getInstructions, startPyq } from "../api/pyqapi";
import "../../../styles/pyq.css"


export default function PyqInstructions() {
  const { examId } = useParams();
  const [data, setData] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    getInstructions(Number(examId)).then(setData);
  }, [examId]);

  const start = async () => {
    const attemptId = await startPyq(Number(examId));
    navigate(`/pyq/solve/${attemptId}`, {
      state: {
        durationMinutes: data.durationMinutes,
        totalQuestions: data.totalQuestions,
      },
    });
  };

  if (!data) {
    return (
      <div className="pyq-page">
        <div className="pyq-instructions-loading">Loading instructions...</div>
      </div>
    );
  }

  return (
    <div className="pyq-scope">
    <div className="pyq-page">
      <div className="pyq-instructions-box">
        <h2 className="pyq-instructions-title">{data.examName}</h2> 

        <ul className="pyq-instructions-list">
          <li>
            <span>Total Questions</span>
            <strong>{data.totalQuestions}</strong>
          </li>
          <li>
            <span>Total Marks</span>
            <strong>{data.totalMarks}</strong>
          </li>
          <li>
            <span>Time Duration</span>
            <strong>{data.durationMinutes} minutes</strong>
          </li>
        </ul>

        <button onClick={start} className="pyq-start-btn">
          Start Practice
        </button>
      </div>
    </div>
    </div>
  );
}
