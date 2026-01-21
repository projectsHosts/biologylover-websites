import { useState, useEffect } from "react";
import type { Quiz } from "../types/quiz";

export default function QuizQuestion({
  quiz,
  index,
  total,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrev,
  onSubmit,
  canSubmit,
  isLocked
}: {
  quiz: Quiz;
  index: number;
  total: number;
  selectedAnswer?: number;
  onAnswerSelect: (quizId: number, option: number) => void;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
  canSubmit: boolean;
  isLocked: boolean;
}) {
  const [selected, setSelected] = useState<number | null>(selectedAnswer ?? null);

  useEffect(() => {
    setSelected(selectedAnswer ?? null);
  }, [selectedAnswer, quiz.id]);

  const handleSelect = (optionIndex: number) => {
    if (isLocked) return;
    setSelected(optionIndex);
    onAnswerSelect(quiz.id, optionIndex);
  };

  const isLast = index === total - 1;
  const isFirst = index === 0;

  const progressPercentage = ((index + 1) / total) * 100;

  return (
    <div className="quiz-question">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <div className="question-header">
        <span className="question-number">Question {index + 1} of {total}</span>
        <span className="question-category">General Knowledge</span>
      </div>

      <h2 className="question-text">{quiz.question}</h2>

      <div className="options-grid">
        {quiz.options.map((option, i) => (
          <button
            key={i}
            disabled={isLocked}
            className={`option ${selected === i ? 'selected' : ''}`}
            onClick={() => handleSelect(i)}
          >
            <span className="option-label">{String.fromCharCode(65 + i)}</span>
            <span className="option-text">{option}</span>
            {selected === i && (
              <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="20 6 9 17 4 12" strokeWidth="3"/>
              </svg>
            )}
          </button>
        ))}
      </div>

      <div className="quiz-nav">
        <button
          disabled={isFirst || isLocked}   
          onClick={onPrev}
          className="nav-btn prev-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="15 18 9 12 15 6" strokeWidth="2"/>
          </svg>
          Previous
        </button>

        {!isLast && (
          <button
            disabled={selected === null || isLocked}
            onClick={onNext}
            className="nav-btn next-btn"
          >
            Next
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="9 18 15 12 9 6" strokeWidth="2"/>
            </svg>
          </button>
        )}

        {isLast && (
          <button
            disabled={!canSubmit || isLocked}
            onClick={onSubmit}
            className="submit-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="20 6 9 17 4 12" strokeWidth="2"/>
            </svg>
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
}