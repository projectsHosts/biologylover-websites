import { useEffect, useState } from "react";
import "../../styles/profile.css";
import { useNavigate } from "react-router-dom";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

type StudentType = "SCHOOL" | "COMPETITIVE" | "";
type Stream = "PCM" | "PCB" | "COMMERCE" | "ARTS" | "";
type Exam = "NEET" | "JEE" | "BOTH" | "";

export default function EditProfile() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [profile, setProfile] = useState<any>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH ================= */
  useEffect(() => {
  if (!token) return;

  fetch(`${API_BASE}/api/profile/view`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then(res => res.json())
    .then(res => {
      setProfile(res.data);   // 🔥 SAME FIX
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

  if (loading || !profile) return null;

  return (
    <div className="profile-page">
      <div className="profile-container">

        <h2>{isEditMode ? "Edit Profile" : "My Profile"}</h2>

        {/* ===== BASIC ===== */}
        <div className="form-group">
          <label>First Name</label>
          {isEditMode ? (
            <input
              value={profile.firstName || ""}
              onChange={e => setProfile({ ...profile, firstName: e.target.value })}
            />
          ) : (
            <p className="profile-text">{profile.firstName}</p>
          )}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          {isEditMode ? (
            <input
              value={profile.lastName || ""}
              onChange={e => setProfile({ ...profile, lastName: e.target.value })}
            />
          ) : (
            <p className="profile-text">{profile.lastName}</p>
          )}
        </div>

        <div className="form-group">
          <label>Email</label>
          <p className="profile-text">{profile.email}</p>
        </div>

        {/* ===== STUDENT TYPE ===== */}
        <div className="form-group">
          <label>Student Type</label>
          {isEditMode ? (
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
              <option value="SCHOOL">School Student</option>
              <option value="COMPETITIVE">Competitive Aspirant</option>
            </select>
          ) : (
            <p className="profile-text">{profile.studentType}</p>
          )}
        </div>

        {/* ===== SCHOOL ===== */}
        {profile.studentType === "SCHOOL" && (
          <>
            <div className="form-group">
              <label>Class</label>
              {isEditMode ? (
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
              ) : (
                <p className="profile-text">Class {profile.classLevel}</p>
              )}
            </div>

            <div className="form-group">
              <label>Board</label>
              {isEditMode ? (
                <select
                  value={profile.board || ""}
                  onChange={e =>
                    setProfile({ ...profile, board: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="STATE">State</option>
                </select>
              ) : (
                <p className="profile-text">{profile.board}</p>
              )}
            </div>

            {profile.classLevel >= 11 && (
              <div className="form-group">
                <label>Stream</label>
                {isEditMode ? (
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
                ) : (
                  <p className="profile-text">{profile.stream}</p>
                )}
              </div>
            )}
          </>
        )}

        {/* ===== COMPETITIVE ===== */}
        {profile.studentType === "COMPETITIVE" && (
          <>
            <div className="form-group">
              <label>Target Exam</label>
              {isEditMode ? (
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
                  <option value="NEET">NEET</option>
                  <option value="JEE">JEE</option>
                  <option value="BOTH">Both</option>
                </select>
              ) : (
                <p className="profile-text">{profile.targetExam}</p>
              )}
            </div>

            <div className="form-group">
              <label>Attempt Year</label>
              {isEditMode ? (
                <select
                  value={profile.attemptYear || ""}
                  onChange={e =>
                    setProfile({
                      ...profile,
                      attemptYear: Number(e.target.value),
                    })
                  }
                >
                  <option value="">Select</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              ) : (
                <p className="profile-text">{profile.attemptYear}</p>
              )}
            </div>

            <div className="form-group">
              <label>Preparation Mode</label>
              {isEditMode ? (
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
              ) : (
                <p className="profile-text">{profile.preparationMode}</p>
              )}
            </div>
          </>
        )}

        {/* ===== SUBJECTS ===== */}
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
                {isEditMode && (
                  <input
                    type="checkbox"
                    checked={profile.subjects?.includes(s)}
                    onChange={() => toggleSubject(s)}
                  />
                )}
                {s}
              </label>
            ))}
          </div>
          </div>
        </div>

        {/* ===== STUDY HOURS ===== */}
        <div className="form-group">
          <label>Study Hours / Day</label>
          {isEditMode ? (
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
          ) : (
            <p className="profile-text">{profile.studyHoursPerDay} hrs</p>
          )}
        </div>

        {/* ===== ACTIONS ===== */}
        <div className="actions">
          {isEditMode ? (
            <>
              <button className="primary-btn" onClick={save}>💾 Save</button>
              <button
                className="secondary-btn"
                onClick={() => setIsEditMode(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="primary-btn"
              onClick={() => setIsEditMode(true)}
            >
              ✏️ Edit Profile
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
