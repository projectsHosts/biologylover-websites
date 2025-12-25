import { useState } from "react";
import ChapterList from "./ChapterList";

const classes = ["6", "7", "8", "9", "10", "11", "12"];
const subjects = ["Physics", "Chemistry", "Biology", "Maths"];
const chemistryTypes = ["PHYSICAL", "ORGANIC", "INORGANIC"] as const;

export default function NcertBooks() {
  const [cls, setCls] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [chemType, setChemType] = useState<
    "PHYSICAL" | "ORGANIC" | "INORGANIC" | null
  >(null);

  const isSeniorChemistry =
    subject === "Chemistry" && (cls === "11" || cls === "12");

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
              setChemType(null);
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
              onClick={() => {
                setSubject(s);
                setChemType(null);
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

        {/* 🔥 ONLY ADDITION: Chemistry split for Class 11–12 */}
      {isSeniorChemistry && (
        <div className="tab-bar chemistry-tabs">
          {chemistryTypes.map((type) => (
            <button
              key={type}
              className={chemType === type ? "active" : ""}
              onClick={() => setChemType(type)}
            >
              {type === "PHYSICAL" && "Physical Chemistry"}
              {type === "ORGANIC" && "Organic Chemistry"}
              {type === "INORGANIC" && "Inorganic Chemistry"}
            </button>
          ))}
        </div>
      )}

      {/* 🔥 PDF LIST (YAHI DIKHEGI) */}
     {cls && subject && (
  (!isSeniorChemistry || chemType) && (
    <ChapterList
      exam="NCERT"
      className={`class-${cls}`}
      subject={subject}
      chemistryType={chemType}
    />
  )
)}
    </div>
  );
}
