import { useState } from "react";
import ChapterList from "./ChapterList";

const classes = ["6", "7", "8", "9", "10", "11", "12"];
const subjects = ["Physics", "Chemistry", "Biology", "Maths"];

export default function ShortNotes() {
  const [cls, setCls] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);

  // ✅ check senior classes
  const isSenior = cls === "11" || cls === "12";

  return (
    <div>
      <div className="section-title">
        <h2>📝 Short Notes</h2>
        <span>Quick revision PDFs</span>
      </div>

      {/* Class Tabs */}
      <div className="tab-bar">
        {classes.map((c) => (
          <button
            key={c}
            className={cls === c ? "active" : ""}
            onClick={() => {
              setCls(c);
              setSubject(null); // reset subject
            }}
          >
            Class {c}
          </button>
        ))}
      </div>

      {/* ✅ Subjects ONLY for class 11 & 12 */}
      {isSenior && cls && (
        <div className="tab-bar">
          {subjects.map((s) => (
            <button
              key={s}
              className={subject === s ? "active" : ""}
              onClick={() => setSubject(s)}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* ✅ PDF Logic */}

      {/* Class 6–10 → Direct */}
      {cls && !isSenior && (
        <ChapterList
          exam="SHORT_NOTES"
          className={`class-${cls}`}
          subject="ALL"
        />
      )}

      {/* Class 11–12 → Subject Required */}
      {cls && isSenior && subject && (
        <ChapterList
          exam="SHORT_NOTES"
          className={`class-${cls}`}
          subject={subject}
        />
      )}
    </div>
  );
}