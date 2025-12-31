import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/profile.css";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

export default function EditProfile() {
  const [profile, setProfile] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
  });

  // 🔥 MAIN FLAG
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // ================= FETCH PROFILE =================
  useEffect(() => {
    if (!token) return;

    fetch(`${API_BASE}/api/profile/view`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        setProfile(data);

        // ✅ CORE CONDITION (2x verified)
        if (!data.firstName || !data.lastName) {
          setIsEditMode(true);   // incomplete → edit
        } else {
          setIsEditMode(false);  // complete → view
        }
      })
      .finally(() => setLoading(false));
  }, [token]);

  // ================= SAVE =================
  const save = async () => {
    await fetch(`${API_BASE}/api/profile/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName: profile.firstName,
        lastName: profile.lastName,
      }),
    });

    window.dispatchEvent(new Event("profile-updated"));
    setIsEditMode(false); // ✅ save ke baad view mode
  };

  if (loading) return null;

  return (
    <div className="profile-page">
      <div className="profile-container">

        {/* ===== TITLE ===== */}
        <h2>{isEditMode ? "Edit Profile" : "My Profile"}</h2>

        {/* ===== FIRST NAME ===== */}
        <div className="form-group">
          <label>First Name</label>

          {isEditMode ? (
            <input
              value={profile.firstName}
              onChange={e =>
                setProfile({ ...profile, firstName: e.target.value })
              }
            />
          ) : (
            <p className="profile-text">{profile.firstName}</p>
          )}
        </div>

        {/* ===== LAST NAME ===== */}
        <div className="form-group">
          <label>Last Name</label>

          {isEditMode ? (
            <input
              value={profile.lastName}
              onChange={e =>
                setProfile({ ...profile, lastName: e.target.value })
              }
            />
          ) : (
            <p className="profile-text">{profile.lastName}</p>
          )}
        </div>

        {/* ===== EMAIL (ALWAYS VIEW) ===== */}
        <div className="form-group">
          <label>Email</label>
          <p className="profile-text">{profile.email}</p>
        </div>

        {/* ===== ACTIONS ===== */}
        <div className="actions">
          {isEditMode ? (
            <>
              <button className="primary-btn" onClick={save}>
                💾 Save
              </button>

              <button
                className="secondary-btn"
                onClick={() => {
                  if (!profile.firstName || !profile.lastName) return;
                  setIsEditMode(false);
                }}
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
