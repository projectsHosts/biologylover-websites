import { useState } from "react";

const states = ["UP Board", "RBSE", "MP Board", "Bihar Board","Haryana Board"];
const classes = ["6", "7", "8", "9", "10", "11", "12"];

export default function StateBooks() {
  const [state, setState] = useState<string | null>(null);
  const [cls, setCls] = useState<string | null>(null);

  return (
    <div>
      <h2>🏫 Select State</h2>

      <div className="tab-bar">
        {states.map((s) => (
          <button
            key={s}
            className={state === s ? "active" : ""}
            onClick={() => {
              setState(s);
              setCls(null);
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {state && (
        <>
          <h3>Class</h3>
          <div className="tab-bar">
            {classes.map((c) => (
              <button
                key={c}
                className={cls === c ? "active" : ""}
                onClick={() => setCls(c)}
              >
                Class {c}
              </button>
            ))}
          </div>
        </>
      )}

      {state && cls && (
        <div className="content-box">
          <p>
            📘 {state} – Class {cls} PDFs will appear here
          </p>
        </div>
      )}
    </div>
  );
}
