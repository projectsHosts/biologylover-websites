import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/profile.css";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

export default function ViewProfile() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    if (!token) return;
    fetch(`${API_BASE}/api/profile/view`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((res) => {
        setProfile(res.data);
        setAvatarUrl(res.data.avatarUrl || null);
      })
      .finally(() => setLoading(false));
  }, [token]);

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);

      const res = await fetch(`${API_BASE}/api/profile/upload-avatar`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setAvatarUrl(data.data);
        window.dispatchEvent(new Event("profile-updated"));
      }
    } catch (err) {
      console.error("Avatar upload failed");
    } finally {
      setUploading(false);
    }
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
        
        {/* ===== PROFILE HEADER - HERO SECTION ===== */}
        <div className="profile-header">
          <div className="profile-header-content">
            <div className="profile-avatar-section">
              <div className="profile-avatar">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Profile" />
                ) : (
                  <span className="avatar-fallback">
                    {profile.firstName?.[0]}
                    {profile.lastName?.[0]}
                  </span>
                )}
              </div>

              <label className="upload-btn">
                {uploading ? "⏳ Uploading..." : "📸 Change Photo"}
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleAvatarUpload}
                />
              </label>
            </div>

            <div className="profile-info">
              <h1 className="profile-name">
                {profile.firstName} {profile.lastName}
              </h1>
              <p className="profile-subtitle">{profile.email}</p>
              
              <div className="profile-badges">
                <div className="badge primary">
                  {profile.studentType === "SCHOOL" ? "🎒 School Student" : "🎯 Competitive Aspirant"}
                </div>
                {profile.targetExam && (
                  <div className="badge secondary">
                    🏆 Target: {profile.targetExam}
                  </div>
                )}
                {profile.classLevel && (
                  <div className="badge">
                    📚 Class {profile.classLevel}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ===== DASHBOARD GRID ===== */}
        <div className="profile-grid">
          
          {/* ===== ACADEMIC DETAILS CARD ===== */}
          <div className="profile-card">
            <div className="card-header">
              <h3 className="card-title">
                <span className="card-icon">📖</span>
                Academic Details
              </h3>
            </div>

            {profile.studentType === "SCHOOL" && (
              <>
                <div className="form-group">
                  <label>Class Level</label>
                  <div className="profile-text">Class {profile.classLevel}</div>
                </div>

                {profile.board && (
                  <div className="form-group">
                    <label>Board</label>
                    <div className="profile-text">{profile.board}</div>
                  </div>
                )}

                {profile.medium && (
                  <div className="form-group">
                    <label>Medium</label>
                    <div className="profile-text">{profile.medium}</div>
                  </div>
                )}

                {profile.stream && (
                  <div className="form-group">
                    <label>Stream</label>
                    <div className="profile-text">{profile.stream}</div>
                  </div>
                )}
              </>
            )}

            {profile.studentType === "COMPETITIVE" && (
              <>
                <div className="form-group">
                  <label>Target Exam</label>
                  <div className="profile-text">{profile.targetExam}</div>
                </div>

                {profile.attemptYear && (
                  <div className="form-group">
                    <label>Attempt Year</label>
                    <div className="profile-text">{profile.attemptYear}</div>
                  </div>
                )}

                {profile.preparationMode && (
                  <div className="form-group">
                    <label>Preparation Mode</label>
                    <div className="profile-text">{profile.preparationMode}</div>
                  </div>
                )}

                {profile.coachingName && (
                  <div className="form-group">
                    <label>Coaching Institute</label>
                    <div className="profile-text">{profile.coachingName}</div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* ===== SUBJECTS CARD ===== */}
          <div className="profile-card">
            <div className="card-header">
              <h3 className="card-title">
                <span className="card-icon">🧪</span>
                Subjects of Interest
              </h3>
            </div>

            {(profile.subjects || []).length > 0 ? (
              <div className="subjects-scroll">
                <div className="subjects-grid">
                  {profile.subjects.map((s: string) => (
                    <span key={s} className="subject-chip active">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="profile-text">No subjects selected</div>
            )}

            {profile.weakSubject && (
              <div className="form-group" style={{ marginTop: '20px' }}>
                <label>Needs Improvement</label>
                <div className="profile-text">⚠️ {profile.weakSubject}</div>
              </div>
            )}
          </div>

          {/* ===== STUDY STATS CARD ===== */}
          <div className="profile-card">
            <div className="card-header">
              <h3 className="card-title">
                <span className="card-icon">📊</span>
                Study Statistics
              </h3>
            </div>

            <div className="stats-grid">
              {profile.studyHoursPerDay && (
                <div className="stat-item">
                  <div className="stat-value">{profile.studyHoursPerDay}</div>
                  <div className="stat-label">Hours / Day</div>
                </div>
              )}

              {profile.subjects && (
                <div className="stat-item">
                  <div className="stat-value pro">{profile.subjects.length}</div>
                  <div className="stat-label">Subjects</div>
                </div>
              )}

              {profile.attemptYear && (
                <div className="stat-item">
                  <div className="stat-value pro">{profile.attemptYear}</div>
                  <div className="stat-label">Target Year</div>
                </div>
              )}

              {profile.dropper !== null && (
                <div className="stat-item">
                  <div className="stat-value pro">{profile.dropper ? "Yes" : "No"}</div>
                  <div className="stat-label">Dropper</div>
                </div>
              )}
            </div>

            {profile.dreamExam && (
              <div className="form-group" style={{ marginTop: '24px' }}>
                <label>Dream Goal</label>
                <div className="profile-text">🎯 {profile.dreamExam}</div>
              </div>
            )}
          </div>

        </div>

        {/* ===== ACTIONS ===== */}
        <div className="actions">
          <button
            className="primary-btn"
            onClick={() => navigate("/profile/edit")}
          >
             Edit Profile
          </button>
        </div>

      </div>
    </div>
  );
}