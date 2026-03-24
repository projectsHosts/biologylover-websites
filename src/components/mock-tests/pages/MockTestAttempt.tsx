// MockTestAttempt.tsx

import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../../styles/mocktest.css";

import {
  fetchAttemptQuestion,
  saveAttemptAnswer,
  submitAttempt,
} from "../api/mockApi";

export default function MockTestAttempt() {
  const { attemptId } = useParams();
  const navigate = useNavigate();

  const aid = Number(attemptId);

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState<any>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [totalQuestions, setTotalQuestions] = useState<number | null>(null);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const warningGiven = useRef(false);

  const isFirst = index === 0;
  const isLast = totalQuestions !== null && index === totalQuestions - 1;

  /* ===== submit test ===== */
  const submit = useCallback(async () => {
    try {
      const result = await submitAttempt(aid);
      navigate("/mock-result", { state: result });
    } catch {
      navigate("/mock-result");
    }
  }, [aid, navigate]);

  /* ===== anti-cheat: violation handler ===== */
  const handleViolation = useCallback(
    (reason: string) => {
      if (warningGiven.current) {
        // second violation → auto submit
        submit();
      } else {
        warningGiven.current = true;
        setWarningMessage(reason);
        setShowWarning(true);
      }
    },
    [submit]
  );

  /* ===== anti-cheat: tab switch / visibility ===== */
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        handleViolation(
          "You switched tabs. If you do this again, your test will be auto-submitted."
        );
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [handleViolation]);

  /* ===== anti-cheat: right-click, copy, keyboard shortcuts ===== */
  useEffect(() => {
    const blockContextMenu = (e: MouseEvent) => e.preventDefault();

    const blockKeys = (e: KeyboardEvent) => {
      // Block copy, paste, cut, select-all
      if (e.ctrlKey && ["c", "v", "x", "a"].includes(e.key.toLowerCase())) {
        e.preventDefault();
        return;
      }
      // Block dev tools
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
      }
    };

    const blockCopy = (e: ClipboardEvent) => e.preventDefault();

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("keydown", blockKeys);
    document.addEventListener("copy", blockCopy);
    document.addEventListener("cut", blockCopy);
    document.addEventListener("paste", blockCopy);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("copy", blockCopy);
      document.removeEventListener("cut", blockCopy);
      document.removeEventListener("paste", blockCopy);
    };
  }, []);

  /* ===== question total ===== */
  useEffect(() => {
    if (question?.totalQuestions) {
      setTotalQuestions(question.totalQuestions);
    }
  }, [question]);

  /* ===== timer init ===== */
  useEffect(() => {
    if (question && question.duration && timeLeft === null) {
      setTimeLeft(question.duration * 60);
    }
  }, [question]);

  /* ===== load question ===== */
  useEffect(() => {
    if (!aid) return;
    fetchAttemptQuestion(aid, index)
      .then(setQuestion)
      .catch(() => submit());
  }, [aid, index]);

  /* ===== reset selection ===== */
  useEffect(() => {
    setSelected(null);
  }, [question]);

  /* ===== parse question JSON ===== */
  const parsedQuestion = (() => {
    if (!question) return { text: "", images: [] };
    try {
      if (typeof question.questionText === "string") {
        return JSON.parse(question.questionText);
      }
      return question.questionText;
    } catch {
      return { text: question.questionText, images: [] };
    }
  })();

  /* ===== select answer ===== */
  function select(opt: string) {
    if (!question) return;
    setSelected(opt);
    saveAttemptAnswer(aid, {
      questionId: question.id,
      selectedOption: opt,
    });
  }

  /* ===== timer countdown ===== */
  useEffect(() => {
    if (!aid || timeLeft === null) return;
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (!s || s <= 1) {
          clearInterval(t);
          submit();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [aid, timeLeft]);

  if (!question || timeLeft === null)
    return <div className="container">Loading...</div>;

  const min = Math.floor(timeLeft / 60);
  const sec = timeLeft % 60;

  return (
    <div
      className="container"
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      {/* ===== Warning Modal ===== */}
      {showWarning && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: "28px 32px",
              maxWidth: 400,
              textAlign: "center",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 12 }}>⚠️</div>
            <h3 style={{ margin: "0 0 12px", color: "#d97706" }}>
              Warning
            </h3>
            <p style={{ margin: "0 0 20px", color: "#374151" }}>
              {warningMessage}
            </p>
            <button
              onClick={() => setShowWarning(false)}
              style={{
                background: "#f59e0b",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "10px 28px",
                fontSize: 15,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              I understand, go back
            </button>
          </div>
        </div>
      )}

      {/* ===== Header ===== */}
      <div className="mock-test-header">
        <h2>Mock Test</h2>
        <div>
          Time Left: {min}:{sec.toString().padStart(2, "0")}
        </div>
      </div>

      {/* ===== Question Text ===== */}
      <h3>
        Q{index + 1}. {parsedQuestion.text}
      </h3>

      {/* ===== Images ===== */}
      {parsedQuestion.images?.length > 0 && (
        <div className="question-images">
          {parsedQuestion.images.map((img: string, i: number) => (
            <img key={i} src={img} alt="question" className="question-img" />
          ))}
        </div>
      )}

      {/* ===== Options ===== */}
      {["A", "B", "C", "D"].map((o) => (
        <button
          key={o}
          className={
            selected === o ? "mock-option mock-selected" : "mock-option"
          }
          onClick={() => select(o)}
        >
          {o}: {question["option" + o]}
        </button>
      ))}

      {/* ===== Navigation ===== */}
      <div className="mock-nav">
        <button
          disabled={isFirst}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
        >
          Prev
        </button>
        <button disabled={isLast} onClick={() => setIndex((i) => i + 1)}>
          Next
        </button>
        <button onClick={submit}>Submit Test</button>
      </div>
    </div>
  );
}