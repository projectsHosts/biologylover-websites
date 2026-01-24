import { useEffect, useState } from "react";
import type { Quiz, LeaderboardResponse } from "../types/quiz";
import { getDailyQuizStatus, getDailyQuizzes, getLeaderboard, submitQuiz } from "../api/quizApi";

import QuizQuestion from "./QuizQuestion";
import Leaderboard from "./Leaderboard";

import "../../../styles/quiz.css";
import QuizComplete from "./QuizComplete";
import { useLocation, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../../utils/auth";

type AttemptStatus = "checking" | "not_attempted" | "attempted";

export default function DailyQuizPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLeaderboard = location.pathname.includes("leaderboard");

  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [leaderboard, setLeaderboard] = useState<LeaderboardResponse | null>(null);
  const [, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attemptStatus, setAttemptStatus] = useState<AttemptStatus>("checking");
  const [started, setStarted] = useState(false); // New state for starting the quiz
  const [elapsed, setElapsed] = useState(0);



  const formatTime = (sec: number) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}m ${s.toString().padStart(2, "0")}s`;
};

useEffect(() => {
  if (!started) return;

  const startTime = Number(localStorage.getItem("dailyQuizStartTime"));
  if (!startTime) return;

  const interval = setInterval(() => {
    const diff = Math.floor((Date.now() - startTime) / 1000);
    setElapsed(diff);
  }, 1000);

  return () => clearInterval(interval);
}, [started]);


useEffect(() => {
    const init = async () => {
      try {
        if (!isLoggedIn()) {
          // guest → sirf quiz lao
          const data = await getDailyQuizzes();
          setQuizzes(data);
          setAttemptStatus("not_attempted");
          return;
        }

        const res = await getDailyQuizStatus();

        if (isLeaderboard) {
        if (res.attempted) {
      const lb = res.leaderboard ?? await getLeaderboard();
      setLeaderboard(lb);
      setAttemptStatus("attempted");
    } else {
      // URL leaderboard but no attempt → redirect
      navigate("/daily-quiz", { replace: true });
    }
    return;
  }

        if (res.attempted) {
          const lb = res.leaderboard ?? await getLeaderboard();
          setLeaderboard(lb);
          setAttemptStatus("attempted");

          if (!isLeaderboard) {
            navigate("/daily-quiz/leaderboard", { replace: true });
          }
        } else {
          const data = await getDailyQuizzes();
          if (!data || data.length === 0) {
            setError("No quizzes available today");
            return;
          }
          setQuizzes(data);
          setAttemptStatus("not_attempted");
        }
      } catch {
        setError("Failed to check quiz status");
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [isLeaderboard, navigate]);



  const handleAnswerSelect = (quizId: number, selectedOption: number) => {
    setAnswers((prev) => ({ ...prev, [quizId]: selectedOption }));
  };

 const handleSubmit = async () => {
  try {
    const startTimeStr = localStorage.getItem("dailyQuizStartTime");

    if (!startTimeStr) {
      alert("Quiz start time missing");
      return;
    }

    const quizStartTime = Number(startTimeStr); // ✅ IMPORTANT

    let lastLeaderboard: LeaderboardResponse | null = null;

    for (let i = 0; i < quizzes.length; i++) {
      const quiz = quizzes[i];
      const selected = answers[quiz.id];

      if (selected === undefined) continue;

      lastLeaderboard = await submitQuiz(
        quiz.id,
        selected,
        quizStartTime
      );
    }

    localStorage.removeItem("dailyQuizStartTime"); // 🧹 CLEANUP

    if (lastLeaderboard) {
      setElapsed(0);  
      setLeaderboard(lastLeaderboard);
      setAttemptStatus("attempted");
      navigate("/daily-quiz/leaderboard");
    }
  } catch (e) {
    alert("Failed to submit quiz");
  }
};



  if (attemptStatus === "checking") {
    return (
      <div className="quiz-page">
        <div className="quiz-loading">
          Checking your quiz status...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quiz-page">
        <div className="quiz-error">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
            <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2"/>
            <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2"/>
          </svg>
          <h2>{error}</h2>
          <p>Please check back later for new quizzes</p>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <h1>Daily Quiz Challenge</h1>
        <p className="quiz-date">{new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>
      </div>

      {attemptStatus === "not_attempted" && !started && (
        <div className="start-quiz-section">
          <div className="quiz-start-box">
            <h2>Today's Quiz</h2>
            <p>7 exciting questions await you!</p>
            <button
                className="start-btn"
                onClick={() => {
                  if (!isLoggedIn()) {
                    (window as any).openLogin(); // 🔥 same modal
                    return;
                  }

                  localStorage.setItem("dailyQuizStartTime", Date.now().toString());
                  setStarted(true);
                }}
              >
                Start Quiz
              </button>


          </div>
          <div className="motivational-text">
            <h3>Why Quiz Daily?</h3>
            <p>Sharpen your mind, climb the leaderboard, and learn something new every day!</p>
          </div>
        </div>
      )}

      {attemptStatus === "not_attempted" && started && (
        <div className="quiz-section">
          <QuizQuestion
            quiz={quizzes[currentIndex]}
            index={currentIndex}
            total={quizzes.length}
            selectedAnswer={answers[quizzes[currentIndex]?.id]}
            onAnswerSelect={handleAnswerSelect}
            onNext={() =>
              setCurrentIndex((i) => Math.min(i + 1, quizzes.length - 1))
            }
            onPrev={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
            onSubmit={handleSubmit}
            canSubmit={Object.keys(answers).length === quizzes.length}
            isLocked={false}
            elapsedTime={formatTime(elapsed)} 
          />
        </div>
      )}

      {attemptStatus === "attempted" && leaderboard && (
        <div className="quiz-layout submitted">
          <div className="completion-section">
            <QuizComplete
              totalQuestions={leaderboard.totalQuestions || 7}
              userRank={leaderboard.self?.rank}
              userScore={leaderboard.self?.score}
              streak={leaderboard.streak}
            />
          </div>

          <div className="leaderboard-section">
            <Leaderboard data={leaderboard} />
          </div>
        </div>
      )}
    </div>
  );
}