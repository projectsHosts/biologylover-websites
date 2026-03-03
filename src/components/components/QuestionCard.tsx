import "../../styles/compitions/competitionCard.css";

export default function QuestionCard({ q, onSelect }: any) {
  return (
    <div className="qc-scope">
      <div className="qc-card">
        <p>{q.questionText}</p>

        {["A", "B", "C", "D"].map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(q.id, opt)}
            className="qc-option-btn"
          >
            {q["option" + opt]}
          </button>
        ))}
      </div>
    </div>
  );
}