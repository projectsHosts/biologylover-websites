import { useEffect, useState } from "react";
import { getPyqCards } from "../api/pyqapi";
import type { PyqCard as PyqCardType } from "../types/pyq";
import PyqCard from "./components/PyqCard";

import "../../../styles/pyq.css";

export default function PyqHome() {
  const [year, setYear] = useState<number | undefined>(undefined);
  const [subject, setSubject] = useState<string>("Biology");
  const [examType, setExamType] = useState<string | undefined>(undefined);
  const [cards, setCards] = useState<PyqCardType[]>([]);

  useEffect(() => {
    getPyqCards(year, subject, examType).then(setCards);
  }, [year, subject, examType]);

  return (
     <div className="pyq-scope">
    <div className="pyq-page">
      <h1 className="pyq-title">Previous Year Questions</h1>

      {/* Filters */}
      <div className="pyq-filter">

        {/* YEAR */}
        <select
          value={year ?? ""}
          onChange={(e) =>
            setYear(e.target.value ? Number(e.target.value) : undefined)
          }
        >
          <option value="">Select Year</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
        </select>

        {/* SUBJECT */}
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          
          <option value="Biology">Biology</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Mathematics">Mathematics</option>
        </select>

        {/* EXAM TYPE */}
        <select
          value={examType ?? ""}
          onChange={(e) =>
            setExamType(e.target.value || undefined)
          }
        >
          <option value="">All Exams</option>
          <option value="NEET">NEET</option>
          <option value="JEE">JEE</option>
          <option value="AIIMS">AIIMS</option>
        </select>

      </div>

      {/* Cards */}
      <div className="pyq-grid">
        {cards.length === 0 ? (
          <p className="text-center">No PYQs found</p>
        ) : (
          cards.map((card) => (
            <PyqCard key={card.examId} card={card} />
          ))
        )}
      </div>
    </div>
    </div>
  );
}
