// MockTestAttempt.tsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchQuestions, submitMock } from "../api/mockApi";
import type { Question } from "../types/mock";
import "../../../styles/mocktest.css";


export default function MockTestAttempt() {
  const { id } = useParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number,string>>({});
  const [timeLeft, setTimeLeft] = useState(180 * 60);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      setError("Test ID not found");
      setLoading(false);
      return;
    }

    fetchQuestions(Number(id))
      .then(data => {
        if (!data || data.length === 0) {
          setError("No questions available for this test");
        } else {
          setQuestions(data);
        }
      })
      .catch(e => {
        console.error(e);
        setError("Failed to load questions. Please try again.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  function getOption(q: Question, o: string) {
    if (o === "A") return q.optionA;
    if (o === "B") return q.optionB;
    if (o === "C") return q.optionC;
    return q.optionD;
  }

  function select(opt: string) {
    const q = questions[index];
    setAnswers(a => ({ ...a, [q.id]: opt }));
  }
async function submit() {
  const payload = Object.entries(answers)
    .map(([qid,opt]) => ({
      questionId: Number(qid),
      selectedOption: opt
    }));

  const result =
    await submitMock(Number(id), payload);

  navigate("/mock-result", {
    state: result
  });
}

  // timer with auto submit
  useEffect(() => {
    if (questions.length === 0) return;

    const t = setInterval(() => {
      setTimeLeft(s => {
        if (s <= 1) {
          clearInterval(t);
          submit();
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => clearInterval(t);
  }, [questions]);

  if (loading) {
    return (
      <div className="container">
        <div className="mock-loading">
          <h3>Loading Test...</h3>
        </div>
      </div>
    );
  }

  if (error || questions.length === 0) {
    return (
      <div className="container">
        <div className="mock-error">
          <h2>⚠️ Test Not Available</h2>
          <p>{error || "No questions found for this test"}</p>
          <button 
            className="mock-back-btn"
            onClick={() => navigate("/mock-tests")}
          >
            Back to Tests
          </button>
        </div>
      </div>
    );
  }

  const q = questions[index];
  const min = Math.floor(timeLeft/60);
  const sec = timeLeft%60;

  return (
    <div className="container">

      <div className="mock-test-header">
        <h2>Mock Test</h2>
        <div className="mock-timer">
          Time Left: {min}:{sec.toString().padStart(2,"0")}
        </div>
      </div>

      <div className="mock-test-content">
        <h3>Q{index+1}. {q.questionText}</h3>

        {["A","B","C","D"].map(o => (
          <button
            key={o}
            className={
              answers[q.id] === o ? "mock-option mock-selected" : "mock-option"
            }
            onClick={()=>select(o)}
          >
            {o}: {getOption(q,o)}
          </button>
        ))}

        <div className="mock-nav">
          <button
            disabled={index===0}
            onClick={()=>setIndex(i=>i-1)}
          >
            Prev
          </button>

          <button
            disabled={index===questions.length-1}
            onClick={()=>setIndex(i=>i+1)}
          >
            Next
          </button>

          <button className="mock-submit-btn" onClick={submit}>
            Submit Test
          </button>
        </div>
      </div>

    </div>
  );
}