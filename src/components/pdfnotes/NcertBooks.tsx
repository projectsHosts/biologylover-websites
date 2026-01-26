import { useState } from "react";
import ChapterList from "./ChapterList";

const classes = ["6", "7", "8", "9", "10", "11", "12"];
const subjects = ["Physics", "Chemistry", "Biology", "Maths", "English"];
const chemistryTypes = ["PART1", "PART2"] as const;
const ENGLISH_SECTIONS_11 = ["Hornbill","Snapshots","Woven Words",] as const;
const ENGLISH_SECTIONS_12 = ["Flamingo","Vistas","Kaleidoscope",] as const;


export default function NcertBooks() {
  const [cls, setCls] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [englishSection, setEnglishSection] = useState<string | null>(null);

  const [chemType, setChemType] = useState<
    "PART1" | "PART2" | null
  >(null);

  const isSeniorChemistry =
   (cls === "11" && (subject === "Physics" || subject === "Chemistry")) ||
  (cls === "12" &&
    (subject === "Physics" || subject === "Chemistry" || subject === "Maths"));

  return (
    <div>
      <div className="section-title">
      <h2>📖 NCERT Books</h2>
      <span>Choose your class & subject</span>
    </div>


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
              setEnglishSection(null); 
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
                setEnglishSection(null);
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* 🔥 English Sections for Class 11 & 12 */}
{subject === "English" && (cls === "11" || cls === "12") && (
  <div className="tab-bar">
    {(cls === "11" ? ENGLISH_SECTIONS_11 : ENGLISH_SECTIONS_12).map(
      (section) => (
        <button
          key={section}
          className={englishSection === section ? "active" : ""}
          onClick={() => setEnglishSection(section)}
        >
          {section}
        </button>
      )
    )}
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
              {type === "PART1" && "PART 1"}
              {type === "PART2" && "PART 2"}
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
      englishSection={englishSection}
    />
  )
)}
    </div>
  );
}
