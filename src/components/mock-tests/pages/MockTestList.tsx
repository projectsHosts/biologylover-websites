// src/features/mocktest/pages/MockTestList.tsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMockTestsByExam } from "../api/mockApi";
import type { MockTest } from "../types/mock";
import "../../../styles/mocktest.css";

export default function MockTestList() {
  const { examType } = useParams<{ examType: string }>();
  const navigate = useNavigate();
  const [tests, setTests] = useState<MockTest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!examType) return;

    fetchMockTestsByExam(examType)
      .then(setTests)
      .catch(e => {
        console.error(e);
        alert("Failed to load mock tests");
      })
      .finally(() => setLoading(false));
  }, [examType]);

  if (loading) return <div className="container">Loading...</div>;

  if (tests.length === 0) {
    return (
      <div className="container">
        <button 
          className="mock-back-link"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
        <div className="mock-empty-state">
          <h2>No Tests Available</h2>
          <p>Tests for this category will be added soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <button 
        className="mock-back-link"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h2>{examType?.replace(/_/g, ' ')} Tests</h2>

      <div className="mock-grid">
        {tests.map(t => (
          <div key={t.id} className="mock-card">
            <h3>{t.title}</h3>
            <p><b>Subject:</b> {t.subject}</p>
            <p><b>Questions:</b> {t.totalQuestions}</p>
            <p><b>Duration:</b> {t.duration} Minutes</p>
            {t.difficulty && (
              <span className={`mock-difficulty mock-difficulty-${t.difficulty.toLowerCase()}`}>
                {t.difficulty}
              </span>
            )}
            {t.attemptCount !== undefined && (
              <p className="mock-attempts">Attempts: {t.attemptCount}</p>
            )}

            <button onClick={() => navigate(`/mock/${t.id}`)}>
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}