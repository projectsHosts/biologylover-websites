import "../../styles/compitions/competitionCard.css";

export default function QuestionCard({ q, onSelect }: any) {
  return (
    <div className="question-card-scope">
      <div className="question-card">
        <p>{q.questionText}</p>

        {["A", "B", "C", "D"].map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(q.id, opt)}
            className="optionBtn"
          >
            {q["option" + opt]}
          </button>
        ))}
      </div>
    </div>
  );
}