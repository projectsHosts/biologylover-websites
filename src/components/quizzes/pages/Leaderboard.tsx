import type { LeaderboardResponse } from "../types/quiz";


const formatTime = (sec: number) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}m ${s}s`;
};



export default function Leaderboard({ data }: { data: LeaderboardResponse }) {
  const getMedalIcon = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return null;
  };

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" strokeWidth="2"/>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" strokeWidth="2"/>
          <path d="M4 22h16" strokeWidth="2"/>
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" strokeWidth="2"/>
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" strokeWidth="2"/>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" strokeWidth="2"/>
        </svg>
        <h3>Top Performers</h3>
      </div>

      <div className="leaderboard-list">
  {data.top50.slice(0, 50).map((user) => (
    <div
      key={user.userId}
      className={`leaderboard-row ${user.rank <= 3 ? "top-three" : ""} ${
        data.self?.userId === user.userId ? "self" : ""
      }`}
    >
      <div className="rank-section">
        {getMedalIcon(user.rank) ? (
          <span className="medal">{getMedalIcon(user.rank)}</span>
        ) : (
          <span className="rank-number">#{user.rank}</span>
        )}
      </div>

      <div className="user-section">
        <span className="user-name">{user.displayName}</span>
        {data.self?.userId === user.userId && (
          <span className="you-badge">You</span>
        )}
      </div>

      <div className="score-section">
        <span className="score">{user.score} pts</span>
         <span className="time">
          ⏱ {formatTime(user.timeTaken)}
        </span>
      </div>
    </div>
  ))}
</div>


      {data.self && data.self.rank > 10 && (
  <div className="self-rank-card">
    <div className="self-rank-header">Your Position</div>

    <div className="self-rank-row">
      <div className="rank-badge">#{data.self.rank}</div>

      <div className="self-name">
        You
        <span className="you-pill">YOU</span>
      </div>

      <div className="self-stats">
        <span className="pts">{data.self.score} pts</span>
        <span className="time">⏱ {formatTime(data.self.timeTaken)}</span>
      </div>
    </div>
  </div>
)}
    </div>
  );
}