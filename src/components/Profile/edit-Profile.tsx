import { useEffect, useState } from "react";
import "../../styles/profile.css";
import { useNavigate } from "react-router-dom";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

type StudentType = "SCHOOL" | "COMPETITIVE" | "";
type Stream = "PCM" | "PCB" | "COMMERCE" | "ARTS" | "";
type Exam = "NEET" | "AIIMS" | "JIPMER" | "NURSING" | "PARAMEDICAL" | "PHARMACY" | "VETERINARY" | "AYUSH" | "JEE" | "BITSAT" | "VITEEE" | "SRMJEEE" | "STATE_ENGG" | "CUET" | "BOARDS" | "OLYMPIAD" | "BOTH" | "";

export default function EditProfile() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  /* ================= FETCH ================= */
  useEffect(() => {
    if (!token) return;

    fetch(`${API_BASE}/api/profile/view`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(res => {
        setProfile(res.data);
      })
      .finally(() => setLoading(false));
  }, [token]);

  /* ================= SUBJECT TOGGLE ================= */
  const toggleSubject = (sub: string) => {
    setProfile((prev: any) => ({
      ...prev,
      subjects: prev.subjects?.includes(sub)
        ? prev.subjects.filter((s: string) => s !== sub)
        : [...(prev.subjects || []), sub],
    }));
  };

  /* ================= SAVE ================= */
  const save = async () => {
    setSaving(true);
    
    await fetch(`${API_BASE}/api/profile/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profile),
    });

    window.dispatchEvent(new Event("profile-updated"));
    navigate("/profile");
  };

  if (loading || !profile) {
    return (
      <div className="profile-page">
        <div className="profile-container">
          <div className="loading-shimmer" style={{ height: '200px', borderRadius: '20px' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-container">

        <h2>Edit Your Profile</h2>
        <p className="muted">Update your academic information</p>

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
              <label>First Name</label>
              <input
                value={profile.firstName || ""}
                onChange={e => setProfile({ ...profile, firstName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                value={profile.lastName || ""}
                onChange={e => setProfile({ ...profile, lastName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <div className="profile-text">{profile.email}</div>
            </div>

            <div className="form-group">
              <label>Student Type</label>
              <select
                value={profile.studentType || ""}
                onChange={e =>
                  setProfile({
                    ...profile,
                    studentType: e.target.value as StudentType,
                  })
                }
              >
                <option value="">Select</option>
                <option value="SCHOOL">🎒 School Student</option>
                <option value="COMPETITIVE">🎯 Competitive Aspirant</option>
              </select>
            </div>
          </div>

          {/* ===== ACADEMIC DETAILS CARD ===== */}
          <div className="profile-card">
            <div className="card-header">
              <h3 className="card-title">
                <span className="card-icon">📚</span>
                Academic Details
              </h3>
            </div>

            {profile.studentType === "SCHOOL" && (
              <>
                <div className="form-group">
                  <label>Class</label>
                  <select
                    value={profile.classLevel || ""}
                    onChange={e =>
                      setProfile({ ...profile, classLevel: Number(e.target.value) })
                    }
                  >
                    <option value="">Select</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        Class {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Board</label>
                  <select
                    value={profile.board || ""}
                    onChange={e =>
                      setProfile({ ...profile, board: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="STATE">State Board</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Medium</label>
                  <select
                    value={profile.medium || ""}
                    onChange={e =>
                      setProfile({ ...profile, medium: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="ENGLISH">English</option>
                    <option value="HINDI">Hindi</option>
                  </select>
                </div>

                {profile.classLevel >= 11 && (
                  <div className="form-group">
                    <label>Stream</label>
                    <select
                      value={profile.stream || ""}
                      onChange={e =>
                        setProfile({
                          ...profile,
                          stream: e.target.value as Stream,
                        })
                      }
                    >
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

            {profile.studentType === "COMPETITIVE" && (
              <>
                <div className="form-group">
                  <label>Target Exam</label>
                  <select
                    value={profile.targetExam || ""}
                    onChange={e =>
                      setProfile({
                        ...profile,
                        targetExam: e.target.value as Exam,
                      })
                    }
                  >
                    <option value="">Select</option>
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
                  <select
                    value={profile.dropper ? "YES" : "NO"}
                    onChange={e =>
                      setProfile({
                        ...profile,
                        dropper: e.target.value === "YES",
                      })
                    }
                  >
                    <option value="">Select</option>
                    <option value="YES">Yes</option>
                    <option value="NO">No</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Attempt Year</label>
                  <select
                    value={profile.attemptYear || ""}
                    onChange={e =>
                      setProfile({
                        ...profile,
                        attemptYear: e.target.value,
                      })
                    }
                  >
                    <option value="">Select</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Preparation Mode</label>
                  <select
                    value={profile.preparationMode || ""}
                    onChange={e =>
                      setProfile({
                        ...profile,
                        preparationMode: e.target.value,
                      })
                    }
                  >
                    <option value="">Select</option>
                    <option value="ONLINE">Online</option>
                    <option value="OFFLINE">Offline</option>
                    <option value="SELF">Self Study</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Coaching / Institute</label>
                  <input
                    value={profile.coachingName || ""}
                    onChange={e =>
                      setProfile({
                        ...profile,
                        coachingName: e.target.value,
                      })
                    }
                    placeholder="e.g. Allen, Aakash, PW"
                  />
                </div>
              </>
            )}
          </div>
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
                    className={`subject-chip ${
                      profile.subjects?.includes(s) ? "active" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={profile.subjects?.includes(s)}
                      onChange={() => toggleSubject(s)}
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Study Hours / Day</label>
            <select
              value={profile.studyHoursPerDay || ""}
              onChange={e =>
                setProfile({
                  ...profile,
                  studyHoursPerDay: Number(e.target.value),
                })
              }
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
              value={profile.weakSubject || ""}
              onChange={e =>
                setProfile({
                  ...profile,
                  weakSubject: e.target.value,
                })
              }
            >
              <option value="">Select</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Mathematics">Mathematics</option>
            </select>
          </div>

          <div className="form-group">
            <label>Dream Exam / College</label>
            <input
              value={profile.dreamExam || ""}
              onChange={e =>
                setProfile({
                  ...profile,
                  dreamExam: e.target.value,
                })
              }
              placeholder="e.g. AIIMS Delhi, IIT Bombay"
            />
          </div>
        </div>

        {/* ===== ACTIONS ===== */}
        <div className="actions">
          <button className="primary-btn" onClick={save} disabled={saving}>
            {saving ? "⏳ Saving..." : " Save Changes"}
          </button>
          <button
            className="secondary-btn"
            onClick={() => navigate("/profile")}
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}