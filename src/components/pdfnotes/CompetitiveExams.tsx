import { useState } from "react";
import ChapterList from "./ChapterList";

const exams = ["NEET", "JEE"];

export default function CompetitiveExams() {
  const [exam, setExam] = useState<string | null>(null);

  return (
    <div>
      <div className="section-title">
        <h2>🚀 Competitive Exams</h2>
        <span>NEET & JEE Preparation Material</span>
      </div>

      {/* Exam Tabs */}
      <div className="tab-bar">
        {exams.map((e) => (
          <button
            key={e}
            className={exam === e ? "active" : ""}
            onClick={() => setExam(e)}
          >
            {e}
          </button>
        ))}
      </div>

      {/* Content */}
      {exam && (
        <ChapterList
          exam={exam}
          className="class-11-12"
          subject="ALL"
        />
      )}
    </div>
  );
}