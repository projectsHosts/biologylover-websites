import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/profile.css";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

export default function ViewProfile() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  /* ================= FETCH PROFILE ================= */
 useEffect(() => {
  if (!token) return;

  fetch(`${API_BASE}/api/profile/view`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then(res => res.json())
    .then(res => {
      setProfile(res.data); // 🔥 IMPORTANT FIX
    })
    .finally(() => setLoading(false));
}, [token]);

  if (loading || !profile) return null;

  return (
    <div className="profile-page">
      <div className="profile-container">

        <h2>My Profile</h2>
        <p className="muted">Your academic details</p>

        {/* ===== BASIC ===== */}
        <div className="form-group">
          <label>First Name</label>
          <p className="profile-text">{profile.firstName}</p>
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <p className="profile-text">{profile.lastName}</p>
        </div>

        <div className="form-group">
          <label>Email</label>
          <p className="profile-text">{profile.email}</p>
        </div>

        {/* ===== STUDENT TYPE ===== */}
        <div className="form-group">
          <label>Student Type</label>
          <p className="profile-text">{profile.studentType}</p>
        </div>

        {/* ===== SCHOOL ===== */}
        {profile.studentType === "SCHOOL" && (
          <>
            <div className="form-group">
              <label>Class</label>
              <p className="profile-text">Class {profile.classLevel}</p>
            </div>

            {profile.board && (
              <div className="form-group">
                <label>Board</label>
                <p className="profile-text">{profile.board}</p>
              </div>
            )}

            {profile.medium && (
              <div className="form-group">
                <label>Medium</label>
                <p className="profile-text">{profile.medium}</p>
              </div>
            )}

            {profile.stream && (
              <div className="form-group">
                <label>Stream</label>
                <p className="profile-text">{profile.stream}</p>
              </div>
            )}
          </>
        )}

        {/* ===== COMPETITIVE ===== */}
        {profile.studentType === "COMPETITIVE" && (
          <>
            <div className="form-group">
              <label>Target Exam</label>
              <p className="profile-text">{profile.targetExam}</p>
            </div>

            {profile.attemptYear && (
              <div className="form-group">
                <label>Attempt Year</label>
                <p className="profile-text">{profile.attemptYear}</p>
              </div>
            )}

            {profile.preparationMode && (
              <div className="form-group">
                <label>Preparation Mode</label>
                <p className="profile-text">{profile.preparationMode}</p>
              </div>
            )}
          </>
        )}

        {/* ===== SUBJECTS ===== */}
        <div className="form-group">
          <label>Subjects of Interest</label>
          <div className="subjects-grid">
            {(profile.subjects || []).length > 0 ? (
              profile.subjects.map((s: string) => (
                <span key={s} className="subject-chip active">
                  {s}
                </span>
              ))
            ) : (
              <p className="profile-text">Not specified</p>
            )}
          </div>
        </div>

        {/* ===== STUDY HOURS ===== */}
        {profile.studyHoursPerDay && (
          <div className="form-group">
            <label>Study Hours / Day</label>
            <p className="profile-text">
              {profile.studyHoursPerDay} hours
            </p>
          </div>
        )}

        {/* ===== ACTION ===== */}
        <div className="actions">
          <button
            className="primary-btn"
            onClick={() => navigate("/profile/edit")}
          >
            ✏️ Edit Profile
          </button>
        </div>

      </div>
    </div>
  );
}
