import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/profile.css";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

type StudentType = "SCHOOL" | "COMPETITIVE" | "";
type Stream = "PCM" | "PCB" | "COMMERCE" | "ARTS" | "";
type Exam = "NEET" | "JEE" | "BOTH" | "";

export default function AddProfile() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  /* ================= BASIC ================= */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  /* ================= STUDENT TYPE ================= */
  const [studentType, setStudentType] = useState<StudentType>("");

  /* ================= SCHOOL ================= */
  const [classLevel, setClassLevel] = useState<number | "">("");
  const [board, setBoard] = useState("");
  const [medium, setMedium] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [stream, setStream] = useState<Stream>("");

  /* ================= COMPETITIVE ================= */
  const [targetExam, setTargetExam] = useState<Exam>("");
  const [dropper, setDropper] = useState<boolean | null>(null);
  const [attemptYear, setAttemptYear] = useState("");
  const [prepMode, setPrepMode] = useState("");
  const [coaching, setCoaching] = useState("");

  /* ================= SUBJECTS ================= */
  const [subjects, setSubjects] = useState<string[]>([]);

  /* ================= GOALS ================= */
  const [dreamExam, setDreamExam] = useState("");
  const [studyHours, setStudyHours] = useState<number | "">("");
  const [weakSubject, setWeakSubject] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleSubject = (sub: string) => {
    setSubjects((prev) =>
      prev.includes(sub)
        ? prev.filter((s) => s !== sub)
        : [...prev, sub]
    );
  };

  /* ================= SAVE ================= */
  const save = async () => {
    if (!firstName || !lastName || !studentType) {
      setError("Please fill required fields");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/api/profile/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName,
          lastName,
          studentType,

          classLevel: studentType === "SCHOOL" ? classLevel : null,
          board,
          medium,
          schoolName,
          stream: classLevel && classLevel >= 11 ? stream : null,

          targetExam: studentType === "COMPETITIVE" ? targetExam : null,
          dropper,
          attemptYear,
          preparationMode: prepMode,
          coachingName: coaching,

          subjects,
          dreamExam,
          studyHoursPerDay: studyHours,
          weakSubject,
        }),
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Profile creation failed");
      }

      window.dispatchEvent(new Event("profile-updated"));
      navigate("/profile");
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2>Student Profile</h2>
        <p className="muted">Tell us about your academic journey</p>

        {/* BASIC */}
        <div className="form-group">
          <label>First Name *</label>
          <input value={firstName} onChange={e => setFirstName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Last Name *</label>
          <input value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>

        {/* STUDENT TYPE */}
        <div className="form-group">
          <label>Student Type *</label>
          <select
            value={studentType}
            onChange={e => {
              setStudentType(e.target.value as StudentType);
              setClassLevel("");
              setTargetExam("");
            }}
          >
            <option value="">Select</option>
            <option value="SCHOOL">School Student</option>
            <option value="COMPETITIVE">Competitive Aspirant</option>
          </select>
        </div>

        {/* SCHOOL */}
        {studentType === "SCHOOL" && (
          <>
            <div className="form-group">
              <label>Class</label>
              <select value={classLevel} onChange={e => setClassLevel(Number(e.target.value))}>
                <option value="">Select</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>Class {i + 1}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Board</label>
              <select value={board} onChange={e => setBoard(e.target.value)}>
                <option value="">Select</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="STATE">State Board</option>
              </select>
            </div>

            <div className="form-group">
              <label>Medium</label>
              <select value={medium} onChange={e => setMedium(e.target.value)}>
                <option value="">Select</option>
                <option value="ENGLISH">English</option>
                <option value="HINDI">Hindi</option>
              </select>
            </div>

            {typeof classLevel === "number" && classLevel >= 11 && (
              <div className="form-group">
                <label>Stream</label>
                <select value={stream} onChange={e => setStream(e.target.value as Stream)}>
                  <option value="">Select</option>
                  <option value="PCM">PCM</option>
                  <option value="PCB">PCB</option>
                  <option value="COMMERCE">Commerce</option>
                  <option value="ARTS">Arts</option>
                </select>
              </div>
            )}
          </>
        )}

        {/* COMPETITIVE */}
        {studentType === "COMPETITIVE" && (
          <>
            <div className="form-group">
              <label>Target Exam</label>
              <select value={targetExam} onChange={e => setTargetExam(e.target.value as Exam)}>
                <option value="">Select</option>
                <option value="NEET">NEET</option>
                <option value="JEE">JEE</option>
                <option value="BOTH">Both</option>
              </select>
            </div>

            <div className="form-group">
              <label>Dropper?</label>
              <select onChange={e => setDropper(e.target.value === "YES")}>
                <option value="">Select</option>
                <option value="YES">Yes</option>
                <option value="NO">No</option>
              </select>
            </div>
            {/* ATTEMPT YEAR */}
                <div className="form-group">
                  <label>Attempt Year</label>
                  <select
                    value={attemptYear}
                    onChange={e => setAttemptYear(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>

                {/* PREPARATION MODE */}
                <div className="form-group">
                  <label>Preparation Mode</label>
                  <select
                    value={prepMode}
                    onChange={e => setPrepMode(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="ONLINE">Online</option>
                    <option value="OFFLINE">Offline</option>
                    <option value="SELF">Self Study</option>
                  </select>
                </div>

                {/* COACHING NAME */}
                <div className="form-group">
                  <label>Coaching / Institute (Optional)</label>
                  <input
                    value={coaching}
                    onChange={e => setCoaching(e.target.value)}
                    placeholder="e.g. Allen, Aakash, PW"
                  />
                </div>

          </>
        )}

        {/* SUBJECTS */}
       <div className="form-group">
            <label>Subjects of Interest</label>

            <div className="subjects-grid">
              {["Physics", "Chemistry", "Biology", "Mathematics"].map(s => (
                <label
                  key={s}
                  className={`subject-chip ${subjects.includes(s) ? "active" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={subjects.includes(s)}
                    onChange={() => toggleSubject(s)}
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Study Hours per Day</label>
            <select
              value={studyHours}
              onChange={e => setStudyHours(Number(e.target.value))}
            >
              <option value="">Select</option>
              {[1,2,3,4,5,6,7,8,9,10].map(h => (
                <option key={h} value={h}>{h} Hours</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Weak Subject</label>
            <select
              value={weakSubject}
              onChange={e => setWeakSubject(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Mathematics">Mathematics</option>
            </select>
          </div>

        {/* GOALS */}
        <div className="form-group">
          <label>Dream Exam / College</label>
          <input value={dreamExam} onChange={e => setDreamExam(e.target.value)} />
        </div>

        {error && <div className="auth-error">{error}</div>}

        <button className="primary-btn" onClick={save} disabled={loading}>
          {loading ? "Saving..." : "🚀 Save Profile"}
        </button>
      </div>
    </div>
  );
}
