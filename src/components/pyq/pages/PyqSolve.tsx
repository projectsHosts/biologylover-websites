import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "./components/Loader";
import QuestionCard from "./components/QuestionCard";
import type { Question, AnswerPayload, PyqResult } from "../types/pyq";
import { submitPyq, API_BASE } from "../api/pyqapi";

import "../../../styles/pyq.css";

export default function PyqSolve() {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const durationMinutes = location.state?.durationMinutes ?? 180;
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<AnswerPayload[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);

  /* =========================
     FETCH QUESTIONS
     ========================= */
  useEffect(() => {
    fetch(`${API_BASE}/api/pyq/attempt/${attemptId}/questions`)
      .then((res) => res.json())
      .then((data: Question[]) => {
        setQuestions(data);
        setAnswers(
          data.map((q) => ({
            questionId: q.id,
            selectedOption: null,
          }))
        );
        setLoading(false);
      });
  }, [attemptId]);

  /* =========================
     TIMER LOGIC
     ========================= */
  useEffect(() => {
    if (loading) return;

    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, loading]);

  /* =========================
     ANSWER SELECT
     ========================= */
  const selectOption = (questionId: number, option: string) => {
    setAnswers((prev) =>
      prev.map((a) =>
        a.questionId === questionId
          ? { ...a, selectedOption: option }
          : a
      )
    );
  };

  /* =========================
     SUBMIT
     ========================= */
  const handleSubmit = async () => {
    const result: PyqResult = await submitPyq(
      Number(attemptId),
      answers
    );
    navigate("/pyq/result", { state: result });
  };

  if (loading) return <Loader />;

  const currentQuestion = questions[currentIndex];
  const selected =
    answers.find((a) => a.questionId === currentQuestion.id)
      ?.selectedOption || null;

  /* =========================
     TIME FORMAT
     ========================= */
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="pyq-scope">
      <div className="pyq-page">

        {/* HEADER */}
        <div className="pyq-solve-header">
          <h1 className="pyq-title">Solve PYQ</h1>

          <div className="pyq-timer">
            ⏱ {minutes}:{seconds.toString().padStart(2, "0")}
          </div>
        </div>

        {/* QUESTION */}
        <QuestionCard
          question={currentQuestion}
          selectedOption={selected}
          onSelect={(opt) => selectOption(currentQuestion.id, opt)}
        />

        {/* NAVIGATION */}
        <div className="pyq-nav">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((i) => i - 1)}
          >
            ⬅ Previous
          </button>

          <span>
            Question {currentIndex + 1} / {questions.length}
          </span>

          <button
            disabled={currentIndex === questions.length - 1}
            onClick={() => setCurrentIndex((i) => i + 1)}
          >
            Next ➡
          </button>
        </div>

        {/* SUBMIT */}
        <div className="pyq-submit-wrapper">
          <button onClick={handleSubmit} className="submit-btn">
            Submit Test
          </button>
        </div>

      </div>
    </div>
  );
}
