import type { PyqCard as PyqCardType } from "../../types/pyq";
import { useNavigate } from "react-router-dom";
import "../../../../styles/pyq.css"

interface Props {
  card: PyqCardType;
}

export default function PyqCard({ card }: Props) {
  const navigate = useNavigate();

  return (
    <div className="pyq-card">
      <h2>
        {/* {card.subject} PYQ {card.year} */}
        <h2>{card.examName}</h2>
      </h2>

      <p>Questions: {card.totalQuestions}</p>
      <p>Total Marks: {card.totalMarks}</p>

      <button
        className="btn-primary pyq"
        onClick={() => navigate(`/pyq/${card.examId}/instructions`)}
      >
        Start Practice
      </button>
    </div>
  );
}

