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
        setAvatarUrl(data.data); // new image URL
        window.dispatchEvent(new Event("profile-updated")); // 🔥 navbar sync
      }
    } catch (err) {
      console.error("Avatar upload failed");
    } finally {
      setUploading(false);
    }
  };

  if (loading || !profile) return null;

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* ===== PROFILE AVATAR ===== */}
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
            {uploading ? "Uploading..." : "Change Photo"}
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleAvatarUpload}
            />
          </label>
        </div>

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
            <p className="profile-text">{profile.studyHoursPerDay} hours</p>
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
