import type { Question } from "../../types/pyq";
import "../../../../styles/pyq.css"

interface Props {
  question: Question;
  selectedOption: string | null;
  onSelect: (option: string) => void;
}

export default function QuestionCard({
  question,
  selectedOption,
  onSelect,
}: Props) {
  let q: {
  text: string;
  images?: string[];
};

try {
  q = JSON.parse(question.questionText);
} catch {
  q = {
    text: question.questionText,
    images: [],
  };
}
  return (
    <div className="pyq-qcard">
      <h3 className="pyq-qcard-title">
        Q{question.questionNo}. {q.text}
      </h3>
      {q.images && q.images.length > 0 && (
  <div className="question-images">
    {q.images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt="question-diagram"
        className="question-image"
      />
    ))}
  </div>
)}

      {(["A", "B", "C", "D"] as const).map((opt) => {
        const text =
          opt === "A"
            ? question.optionA
            : opt === "B"
            ? question.optionB
            : opt === "C"
            ? question.optionC
            : question.optionD;

        return (
          <label
            key={opt}
            className={`pyq-option ${
              selectedOption === opt ? "pyq-option--selected" : ""
            }`}
          >
            <input
              type="radio"
              name={`q-${question.id}`}
              checked={selectedOption === opt}
              onChange={() => onSelect(opt)}
            />
            <span>
              <strong>{opt}.</strong> {text}
            </span>
          </label>
        );
      })}
    </div>
  );
}

