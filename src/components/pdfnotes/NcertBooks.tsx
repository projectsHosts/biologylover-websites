import { useState } from "react";
import ChapterList from "./ChapterList";

const classes = ["6", "7", "8", "9", "10", "11", "12"];
const subjects = ["Physics", "Chemistry", "Biology", "Maths"];

export default function NcertBooks() {
  const [cls, setCls] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);

  return (
    <div>
      <h2>📖 NCERT Books</h2>

      {/* Class Tabs */}
      <div className="tab-bar">
        {classes.map((c) => (
          <button
            key={c}
            className={cls === c ? "active" : ""}
            onClick={() => {
              setCls(c);
              setSubject(null);
            }}
          >
            Class {c}
          </button>
        ))}
      </div>

      {/* Subject Tabs */}
      {cls && (
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

      {/* 🔥 PDF LIST (YAHI DIKHEGI) */}
      {cls && subject && (
        <ChapterList
          exam="NCERT"
          className={`class-${cls}`}
          subject={subject}
        />
      )}
    </div>
  );
}
