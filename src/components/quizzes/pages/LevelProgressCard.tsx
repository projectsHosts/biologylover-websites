import "../../../styles/levelProgressCard.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import BeginnerImg from "../../../assets/1stImge.png";
import IntermediateImg from "../../../assets/2ndImge.png";
import UpperImg from "../../../assets/3rdImge.png";
import AdvancedImg from "../../../assets/4thImg.png";
import ExpertImg from "../../../assets/5thImg.png";

type LevelProgressState = {
  totalXp: number;
  streak?: number;
};

type Level = {
  name: string;
  xp: number;
  image: string;
  color: string;
  gradient: string;
};

type Achievement = {
  id: string;
  title: string;
  description: string;
  image: string;
  unlocked: boolean;
  color: string;
};

export default function LevelProgressCard() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as LevelProgressState | null;

  const totalXp = state?.totalXp ?? 0;
  const streak = state?.streak ?? 0;

  const isUnlockedSequential = (
    condition: boolean,
    previousUnlocked: boolean,
  ) => {
    return previousUnlocked && condition;
  };

  const levels: Level[] = [
    {
      name: "Learner",
      xp: 0,
      image: BeginnerImg,
      color: "#10b981",
      gradient: "#000000",
    },
    {
      name: "Challenger",
      xp: 300,
      image: IntermediateImg,
      color: "#3b82f6",
      gradient: "#000000",
    },
    {
      name: "Achiever",
      xp: 500,
      image: UpperImg,
      color: "#8b5cf6",
      gradient: "#000000",
    },
    {
      name: "Expert",
      xp: 1000,
      image: AdvancedImg,
      color: "#8b5cf6",
      gradient: "#000000",
    },
    {
      name: "Biology Expert ",
      xp: 5000,
      image: ExpertImg,
      color: "#f59e0b",
      gradient: "#000000",
    },
  ];

  const achievements: Achievement[] = (() => {
    const firstSteps = totalXp >= 10;

    const quickLearner = isUnlockedSequential(totalXp >= 100, firstSteps);

    const dedicated = isUnlockedSequential(streak >= 7, quickLearner);

    const knowledgeSeeker = isUnlockedSequential(totalXp >= 500, dedicated);

    const unstoppable = isUnlockedSequential(streak >= 30, knowledgeSeeker);

    const master = isUnlockedSequential(totalXp >= 1000, unstoppable);

    return [
      {
        id: "first_steps",
        title: "First Steps",
        description: "Complete your first lesson",
        image: "star",
        unlocked: firstSteps,
        color: "#10b981",
      },
      {
        id: "quick_learner",
        title: "Quick Learner",
        description: "Earn 100 XP",
        image: "bolt",
        unlocked: quickLearner,
        color: "#3b82f6",
      },
      {
        id: "dedicated",
        title: "Dedicated",
        description: "Maintain a 7-day streak",
        image: "local_fire_department",
        unlocked: dedicated,
        color: "#f59e0b",
      },
      {
        id: "knowledge_seeker",
        title: "Knowledge Seeker",
        description: "Earn 500 XP",
        image: "menu_book",
        unlocked: knowledgeSeeker,
        color: "#8b5cf6",
      },
      {
        id: "unstoppable",
        title: "Unstoppable",
        description: "Maintain a 30-day streak",
        image: "whatshot",
        unlocked: unstoppable,
        color: "#ef4444",
      },
      {
        id: "master",
        title: "Biology Master",
        description: "Earn 1000 XP",
        image: "workspace_premium",
        unlocked: master,
        color: "#f59e0b",
      },
    ];
  })();

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

    const progress = ((totalXp - current.xp) / (next.xp - current.xp)) * 100;
    return Math.min(Math.max(progress, 0), 100);
  };

  const currentLevel = getCurrentLevel();
  const nextLevel = getNextLevel();
  const progress = getProgress();
  const unlockedAchievements = achievements.filter((a) => a.unlocked).length;

  useEffect(() => {
    if (!state) {
      navigate("/dashboard");
    }
  }, [state, navigate]);

  return (
    <div className="level-progress-wrapper">
      <div className="progress-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            {/* Level Badge */}
            <div className="level-badge-large">
              <div
                className="badge-glow"
                style={{ background: currentLevel.gradient }}
              />
              <img
                src={currentLevel.image}
                alt={currentLevel.name}
                className="level-icon-img"
              />

              <div className="level-info">
                <h1 className="level-name">{currentLevel.name}</h1>
                <p className="level-xp">{totalXp.toLocaleString()} XP</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              {/* XP Card */}
              <div className="stat-card-hero xp-card">
                <span className="material-icons stat-icon">stars</span>
                <div className="stat-content">
                  <p className="stat-label">Total XP</p>
                  <h2
                    className="stat-value"
                    style={{ color: currentLevel.color }}
                  >
                    {totalXp.toLocaleString()}
                  </h2>
                </div>
              </div>

              {/* Streak Card */}
              <div className="stat-card-hero streak-card">
                <span className="material-icons stat-icon fire">
                  local_fire_department
                </span>
                <div className="stat-content">
                  <p className="stat-label">Day Streak</p>
                  <h2 className="stat-value">{streak}</h2>
                </div>
              </div>

              {/* Achievements Card */}
              <div className="stat-card-hero achievement-card">
                <span className="material-icons stat-icon">emoji_events</span>
                <div className="stat-content">
                  <p className="stat-label">Achievements</p>
                  <h2 className="stat-value">
                    {unlockedAchievements}/{achievements.length}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Progress Section */}
          {nextLevel && (
            <div className="progress-section">
              <div className="progress-header">
                <div className="progress-title-group">
                  <h2 className="section-title">Level Progress</h2>
                  <p className="section-subtitle">Next: {nextLevel.name}</p>
                </div>
                <div className="progress-percentage-large">
                  {Math.round(progress)}%
                </div>
              </div>

              <div className="progress-bar-container">
                <div className="progress-track-main">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${progress}%`,
                      background: currentLevel.gradient,
                    }}
                  >
                    <div className="progress-shine" />
                  </div>
                </div>

                <div className="progress-labels">
                  <span>{totalXp - currentLevel.xp} XP</span>
                  <span>{nextLevel.xp - currentLevel.xp} XP</span>
                </div>

                <div className="progress-remaining">
                  <span className="material-icons">trending_up</span>
                  <span style={{ color: currentLevel.color }}>
                    {(nextLevel.xp - totalXp).toLocaleString()} XP to go
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Prize Card 4 - Locked */}
          {/* <div className="prize-card coming-soon">
            <div className="coming-soon-ribbon">COMING SOON</div>

            <div className="prize-icon-wrapper">
              <span className="material-icons prize-icon">
                workspace_premium
              </span>
            </div>

            <h3 className="prize-title">Biology Expert Certificate</h3>

            <p className="prize-description">
              Official certificate verified by BiologyLover
            </p>

            <div className="prize-requirement">
              <span className="material-icons">stars</span>
              <span>5000 XP Required</span>
            </div>

            <div className="prize-status locked-status">
              <span className="material-icons">hourglass_empty</span>
              {5000 - totalXp} XP to unlock
            </div>
          </div> */}

          {/* Achievements Section */}
          <div className="achievements-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="material-icons">emoji_events</span>
                Achievements
              </h2>
              <p className="section-subtitle">
                {unlockedAchievements} of {achievements.length} unlocked
              </p>
            </div>

            <div className="achievements-grid">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`achievement-card ${
                    achievement.unlocked ? "unlocked" : "locked"
                  }`}
                >
                  <div
                    className="achievement-icon-wrapper"
                    style={
                      achievement.unlocked
                        ? { background: achievement.color + "20" }
                        : {}
                    }
                  >
                    <span
                      className="material-icons achievement-icon"
                      style={
                        achievement.unlocked ? { color: achievement.color } : {}
                      }
                    >
                      {achievement.unlocked ? achievement.image : "lock"}
                    </span>
                  </div>
                  <div className="achievement-content">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.unlocked && (
                    <span className="achievement-check material-icons">
                      check_circle
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Levels Timeline */}
          <div className="levels-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="material-icons">timeline</span>
                Your Journey
              </h2>
            </div>

            <div className="levels-timeline">
              {levels.map((level, index) => {
                const isUnlocked = totalXp >= level.xp;
                const isCurrent = currentLevel.name === level.name;
                const isNext = nextLevel?.name === level.name;

                return (
                  <div key={level.name} className="timeline-item-wrapper">
                    <div
                      className={`timeline-milestone ${
                        isUnlocked ? "unlocked" : "locked"
                      } ${isCurrent ? "current" : ""} ${isNext ? "next" : ""}`}
                    >
                      {/* Connector Line */}
                      {index < levels.length - 1 && (
                        <div
                          className={`timeline-connector ${
                            totalXp >= levels[index + 1].xp
                              ? "completed"
                              : "incomplete"
                          }`}
                        />
                      )}

                      {/* Milestone Icon */}
                      <div
                        className="milestone-icon-wrapper"
                        style={
                          isUnlocked
                            ? {
                                background: level.gradient,
                                boxShadow: `0 0 30px ${level.color}60`,
                              }
                            : {}
                        }
                      >
                        {isUnlocked ? (
                          <img
                            src={level.image}
                            alt={level.name}
                            className="milestone-img"
                          />
                        ) : (
                          <span className="milestone-lock">🔒</span>
                        )}
                      </div>

                      {/* Milestone Content */}
                      <div className="milestone-content">
                        <div className="milestone-header">
                          <h3 className="milestone-name">{level.name}</h3>
                          {isCurrent && (
                            <span
                              className="milestone-badge current-badge"
                              style={{ background: level.gradient }}
                            >
                              Current
                            </span>
                          )}
                          {isNext && (
                            <span className="milestone-badge next-badge">
                              Next
                            </span>
                          )}
                          {isUnlocked && !isCurrent && (
                            <span className="material-icons milestone-check">
                              check_circle
                            </span>
                          )}
                        </div>
                        <p className="milestone-xp">
                          {level.xp.toLocaleString()} XP Required
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
