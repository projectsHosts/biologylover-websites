import "../../../styles/levelProgressCard.css";

import BeginnerImg from "../../../assets/begginer.png";
import IntermediateImg from "../../../assets/begginer.png";
import AdvancedImg from "../../../assets/begginer.png";
import BiologyExpertImg from "../../../assets/begginer.png";

type Props = {
  totalXp: number;
};

type Level = {
  name: string;
  xp: number;
  icon: string;
  color: string;
  gradient: string;
  image: string;
};

export default function LevelProgressCard({ totalXp }: Props) {
  const levels: Level[] = [
    {
      name: "Beginner",
      xp: 0,
      icon: "🌱",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      image: BeginnerImg,
    },
    {
      name: "Intermediate",
      xp: 300,
      icon: "🧪",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
      image: IntermediateImg,
    },
    {
      name: "Advanced",
      xp: 1000,
      icon: "🧬",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      image: AdvancedImg,
    },
    {
      name: "Biology Expert",
      xp: 5000,
      icon: "👑",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      image: BiologyExpertImg,
    },
  ];

  const getCurrentLevel = (): Level => {
    for (let i = levels.length - 1; i >= 0; i--) {
      if (totalXp >= levels[i].xp) return levels[i];
    }
    return levels[0];
  };

  const getNextLevel = (): Level | null => {
    const current = getCurrentLevel();
    const index = levels.findIndex((l) => l.name === current.name);
    return index < levels.length - 1 ? levels[index + 1] : null;
  };

  const getProgress = (): number => {
    const current = getCurrentLevel();
    const next = getNextLevel();
    if (!next) return 100;

    const progress =
      ((totalXp - current.xp) / (next.xp - current.xp)) * 100;

    return Math.min(Math.max(progress, 0), 100);
  };

  const currentLevel = getCurrentLevel();
  const nextLevel = getNextLevel();
  const progress = getProgress();

  return (
    <div className="progress-card-container">

      {/* ===== HERO AVATAR (TOP FLOATING) ===== */}
      <div className="level-hero-avatar">
        <div
          className="level-avatar-ring"
          style={{ borderColor: currentLevel.color }}
        >
          <img
            src={currentLevel.image}
            alt={currentLevel.name}
            className="level-avatar-image"
          />
        </div>

        <div
          className="level-badge"
          style={{ background: currentLevel.gradient }}
        >
          <span className="badge-icon">{currentLevel.icon}</span>
          <span className="badge-text">{currentLevel.name}</span>
        </div>
      </div>

      {/* ===== STATS SECTION ===== */}
      <div className="stats-section">
        <div className="stat-card">
          <p className="stat-label">Total Experience</p>
          <h2 className="stat-value xp" style={{ color: currentLevel.color }}>
            {totalXp.toLocaleString()}
            <span className="stat-unit"> XP</span>
          </h2>
        </div>

        {nextLevel && (
          <div className="stat-card next-level-card">
            <p className="stat-label">Next Milestone</p>
            <h3 className="stat-value-small">
              {nextLevel.icon} {nextLevel.name}
            </h3>
            <p className="stat-sublabel">
              {nextLevel.xp.toLocaleString()} XP
            </p>
          </div>
        )}
      </div>

      {/* ===== PROGRESS BAR ===== */}
      {nextLevel && (
        <div className="progress-container">
          <div className="progress-info">
            <span className="progress-label">Level Progress</span>
            <span className="progress-percentage">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="progress-track">
            <div
              className="progress-bar-fill"
              style={{
                width: `${progress}%`,
                background: currentLevel.gradient,
              }}
            >
              <div className="progress-glow" />
            </div>
          </div>

          <div className="progress-details">
            <span className="detail-text">
              {(totalXp - currentLevel.xp).toLocaleString()} /{" "}
              {(nextLevel.xp - currentLevel.xp).toLocaleString()} XP
            </span>
            <span
              className="detail-remaining"
              style={{ color: currentLevel.color }}
            >
              {(nextLevel.xp - totalXp).toLocaleString()} XP remaining
            </span>
          </div>
        </div>
      )}

      {/* ===== TIMELINE ===== */}
      <div className="timeline-section">
        <h3 className="timeline-title">Achievement Path</h3>

        <div className="timeline-container">
          {levels.map((level, index) => {
            const isUnlocked = totalXp >= level.xp;
            const isCurrent = currentLevel.name === level.name;

            return (
              <div key={level.name} className="timeline-item-wrapper">
                <div
                  className={`timeline-item ${
                    isUnlocked ? "unlocked" : "locked"
                  } ${isCurrent ? "active" : ""}`}
                >
                  <div className="timeline-checkpoint">
                    <div
                      className="checkpoint-circle"
                      style={
                        isUnlocked
                          ? {
                              background: level.gradient,
                              boxShadow: `0 0 20px ${level.color}60`,
                            }
                          : undefined
                      }
                    >
                      {isUnlocked ? (
                        <span className="checkpoint-icon">{level.icon}</span>
                      ) : (
                        <span className="checkpoint-lock">🔒</span>
                      )}
                    </div>

                    {index < levels.length - 1 && (
                      <div
                        className={`timeline-line ${
                          totalXp >= levels[index + 1].xp ? "completed" : ""
                        }`}
                      />
                    )}
                  </div>

                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-name">{level.name}</h4>

                      {isCurrent && (
                        <span
                          className="current-indicator"
                          style={{ background: level.gradient }}
                        >
                          Current
                        </span>
                      )}

                      {isUnlocked && !isCurrent && (
                        <span className="completed-indicator">
                          ✓ Achieved
                        </span>
                      )}
                    </div>

                    <p className="timeline-xp">
                      {level.xp.toLocaleString()} XP Required
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== FOOTER STATS ===== */}
      <div className="footer-stats">
        <div className="footer-stat">
          <span className="footer-stat-icon">🎯</span>
          <div>
            <p className="footer-stat-label">Achievements</p>
            <p className="footer-stat-value">
              {levels.filter((l) => totalXp >= l.xp).length} / {levels.length}
            </p>
          </div>
        </div>

        <div className="footer-stat">
          <span className="footer-stat-icon">⚡</span>
          <div>
            <p className="footer-stat-label">Rank</p>
            <p className="footer-stat-value">{currentLevel.name}</p>
          </div>
        </div>

        <div className="footer-stat">
          <span className="footer-stat-icon">📈</span>
          <div>
            <p className="footer-stat-label">Progress</p>
            <p className="footer-stat-value">
              {Math.round(progress)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
