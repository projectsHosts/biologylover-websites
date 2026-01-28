import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/profile.css";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

type StudentType = "SCHOOL" | "COMPETITIVE" | "";
type Stream = "PCM" | "PCB" | "COMMERCE" | "ARTS" | "";
type Exam = "NEET" | "AIIMS" | "JIPMER" | "NURSING" | "PARAMEDICAL" | "PHARMACY" | "VETERINARY" | "AYUSH" | "JEE" | "BITSAT" | "VITEEE" | "SRMJEEE" | "STATE_ENGG" | "CUET" | "BOARDS" | "OLYMPIAD" | "BOTH" | "";

export default function AddProfile() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  /* ================= BASIC ================= */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  /* ================= STUDENT TYPE ================= */
  const [studentType, setStudentType] = useState<StudentType>("");

  /* ================= SCHOOL ================= */
  const [classLevel, setClassLevel] = useState<number | "">("");
  const [board, setBoard] = useState("");
  const [medium, setMedium] = useState("");
  const [schoolName] = useState("");
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

  const uploadAvatar = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${API_BASE}/api/profile/upload-avatar`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error("Avatar upload failed");
    }

    return data.data;
  };

  const handleAvatarChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setAvatarPreview(URL.createObjectURL(file));
    setAvatarFile(file);

    try {
      const url = await uploadAvatar(file);
      setAvatarUrl(url);
    } catch (err: any) {
      setError(err.message);
    }
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
          avatarUrl,
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
        
        {/* ===== HEADER ===== */}
        <h2>Complete Your Profile</h2>
        <p className="muted">Tell us about your academic journey to get personalized content</p>

        {/* ===== AVATAR SECTION ===== */}
        <div className="profile-header" style={{ marginBottom: '32px' }}>
          <div className="profile-avatar-section">
            {avatarPreview ? (
              <div className="profile-avatar">
                <img src={avatarPreview} alt="Avatar preview" />
              </div>
            ) : (
              <div className="profile-avatar placeholder">
                {firstName ? firstName[0].toUpperCase() : "?"}
              </div>
            )}

            <label className="upload-btn">
              📸 Upload Photo
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleAvatarChange}
              />
            </label>
          </div>
        </div>

        {/* ===== GRID LAYOUT ===== */}
        <div className="profile-grid">
          
          {/* ===== BASIC INFO CARD ===== */}
          <div className="profile-card">
            <div className="card-header">
              <h3 className="card-title">
                <span className="card-icon">👤</span>
                Basic Information
              </h3>
            </div>

            <div className="form-group">
              <label>First Name *</label>
              <input 
                value={firstName} 
                onChange={e => setFirstName(e.target.value)}
                placeholder="Enter your first name"
              />
            </div>

            <div className="form-group">
              <label>Last Name *</label>
              <input 
                value={lastName} 
                onChange={e => setLastName(e.target.value)}
                placeholder="Enter your last name"
              />
            </div>

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
                <option value="">Select student type</option>
                <option value="SCHOOL"> School Student</option>
                <option value="COMPETITIVE"> Competitive Aspirant</option>
              </select>
            </div>
          </div>

          {/* ===== ACADEMIC DETAILS CARD ===== */}
          {studentType && (
            <div className="profile-card">
              <div className="card-header">
                <h3 className="card-title">
                  <span className="card-icon">📚</span>
                  Academic Details
                </h3>
              </div>

              {studentType === "SCHOOL" && (
                <>
                  <div className="form-group">
                    <label>Class</label>
                    <select value={classLevel} onChange={e => setClassLevel(Number(e.target.value))}>
                      <option value="">Select class</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>Class {i + 1}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Board</label>
                    <select value={board} onChange={e => setBoard(e.target.value)}>
                      <option value="">Select board</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="STATE">State Board</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Medium</label>
                    <select value={medium} onChange={e => setMedium(e.target.value)}>
                      <option value="">Select medium</option>
                      <option value="ENGLISH">English</option>
                      <option value="HINDI">Hindi</option>
                    </select>
                  </div>

                  {typeof classLevel === "number" && classLevel >= 11 && (
                    <div className="form-group">
                      <label>Stream</label>
                      <select value={stream} onChange={e => setStream(e.target.value as Stream)}>
                        <option value="">Select stream</option>
                        <option value="PCM">PCM (Physics, Chemistry, Maths)</option>
                        <option value="PCB">PCB (Physics, Chemistry, Biology)</option>
                        <option value="COMMERCE">Commerce</option>
                        <option value="ARTS">Arts</option>
                      </select>
                    </div>
                  )}
                </>
              )}

              {studentType === "COMPETITIVE" && (
                <>
                  <div className="form-group">
                    <label>Target Exam</label>
                    <select
                      value={targetExam}
                      onChange={e => setTargetExam(e.target.value as Exam)}
                    >
                      <option value="">Select target exam</option>
                      <optgroup label="Medical / Health">
                        <option value="NEET">NEET (MBBS/BDS)</option>
                        <option value="AIIMS">AIIMS</option>
                        <option value="JIPMER">JIPMER</option>
                        <option value="NURSING">Nursing Entrance</option>
                        <option value="PARAMEDICAL">Paramedical</option>
                        <option value="PHARMACY">Pharmacy</option>
                        <option value="VETERINARY">Veterinary</option>
                        <option value="AYUSH">AYUSH (BAMS/BHMS)</option>
                      </optgroup>
                      <optgroup label="Engineering / PCM">
                        <option value="JEE">JEE (Main/Advanced)</option>
                        <option value="BITSAT">BITSAT</option>
                        <option value="VITEEE">VITEEE</option>
                        <option value="SRMJEEE">SRMJEEE</option>
                        <option value="STATE_ENGG">State Engineering Exams</option>
                      </optgroup>
                      <optgroup label="School / Other">
                        <option value="CUET">CUET</option>
                        <option value="BOARDS">Board Exams</option>
                        <option value="OLYMPIAD">Olympiads</option>
                        <option value="BOTH">Both (Medical + Engg)</option>
                      </optgroup>
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

                  <div className="form-group">
                    <label>Attempt Year</label>
                    <select
                      value={attemptYear}
                      onChange={e => setAttemptYear(e.target.value)}
                    >
                      <option value="">Select year</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Preparation Mode</label>
                    <select
                      value={prepMode}
                      onChange={e => setPrepMode(e.target.value)}
                    >
                      <option value="">Select mode</option>
                      <option value="ONLINE">Online</option>
                      <option value="OFFLINE">Offline</option>
                      <option value="SELF">Self Study</option>
                    </select>
                  </div>

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
            </div>
          )}
        </div>

        {/* ===== SUBJECTS & GOALS CARD ===== */}
        <div className="profile-card" style={{ marginTop: '24px' }}>
          <div className="card-header">
            <h3 className="card-title">
              <span className="card-icon">🧪</span>
              Subjects & Study Goals
            </h3>
          </div>

          <div className="form-group">
            <label>Subjects of Interest</label>
            <div className="subjects-scroll">
              <div className="subjects-grid">
                {["Physics", "Chemistry", "Biology", "Mathematics", "Botany", "Zoology", "Organic", "Inorganic", "Physical", "Statistics"].map(s => (
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
          </div>

          <div className="form-group">
            <label>Study Hours per Day</label>
            <select
              value={studyHours}
              onChange={e => setStudyHours(Number(e.target.value))}
            >
              <option value="">Select hours</option>
              {[1,2,3,4,5,6,7,8,9,10].map(h => (
                <option key={h} value={h}>{h} Hours</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Weak Subject (Needs Improvement)</label>
            <select
              value={weakSubject}
              onChange={e => setWeakSubject(e.target.value)}
            >
              <option value="">Select subject</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Mathematics">Mathematics</option>
            </select>
          </div>

          <div className="form-group">
            <label>Dream Exam / College</label>
            <input 
              value={dreamExam} 
              onChange={e => setDreamExam(e.target.value)}
              placeholder="e.g. AIIMS Delhi, IIT Bombay"
            />
          </div>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <button className="primary-btn" onClick={save} disabled={loading}>
          {loading ? "⏳ Saving..." : " Save Profile"}
        </button>
      </div>
    </div>
  );
}