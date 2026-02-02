import { useNavigate } from "react-router-dom";
import streakAnime from "../../../assets/streak-anime.png";

export default function QuizComplete({
  totalQuestions,
  userRank,
  userScore,
  totalXp,
  streak
}: {
  totalQuestions: number;
  userRank?: number;
  userScore?: number;
  totalXp: number;
  streak?: number;
}) {
  const navigate = useNavigate();
  const getEncouragementMessage = () => {
    if (!userRank) return "Great effort!";
    if (userRank === 1) return " Champion!";
    if (userRank <= 3) return "Excellent!";
    if (userRank <= 10) return " Well Done!";
    if (userRank <= 50) return " Good Job!";
    return " Keep Going!";
  };

  return (
    <div className="quiz-complete">

      {/* STREAK ANIME ICON */}
      <div className="complete-icon streak-anime">
        <img src={streakAnime} alt="Streak" />
      </div>

      <h2 className="complete-title">Quiz Completed!</h2>
      <p className="complete-message">{getEncouragementMessage()}</p>

      {streak && streak > 0 && (
        <div className="streak-container">
          <div className="streak-hero">
            <div className="flame">🔥</div>
            <div className="streak-count">{streak}</div>
            <div className="streak-label">DAY STREAK</div>
            <div className="streak-motivation">
              Come back tomorrow to grow your streak!
            </div>
            <button className="progress-card-btn" onClick={(e) => { e.stopPropagation(); navigate("/level-progress",{state: {totalXp,streak}}); }} >
          View Achievements →
        </button>
          </div>
        </div>
      )}

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{totalQuestions}</div>
          <div className="stat-label">Questions</div>
        </div>

        {userScore !== undefined && (
          <div className="stat-card">
            <div className="stat-value">{userScore}</div>
            <div className="stat-label">Score</div>
          </div>
        )}

        {userRank && (
          <div className="stat-card highlight">
            <div className="stat-value">#{userRank}</div>
            <div className="stat-label">Your Rank</div>
          </div>
        )}

        {totalXp > 0 && (
          <div className="stat-card xp-card">
            <div className="stat-value">{totalXp}</div>
            <div className="total-xp">TOTAL XP</div>
          </div>
        )}
      </div>

      <div className="next-quiz-info">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <polyline points="12 6 12 12 16 14" strokeWidth="2" />
        </svg>
        <p>Next quiz available tomorrow!</p>
      </div>
    </div>
);

}