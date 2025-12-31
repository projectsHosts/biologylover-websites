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

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE}/api/profile/view`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(setProfile);
  }, []);

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
    navigate("/profile");
  };

  return (
    <div className="profile-page">
      <div className="profile-container">

        <h2>Edit Profile</h2>

        <div className="form-group">
          <label>First Name</label>
          <input
            value={profile.firstName}
            onChange={e => setProfile({ ...profile, firstName: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            value={profile.lastName}
            onChange={e => setProfile({ ...profile, lastName: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input value={profile.email} disabled />
        </div>

        <div className="actions">
          <button className="primary-btn" onClick={save}>💾 Save</button>
          <button className="secondary-btn" onClick={() => navigate("/profile")}>
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}
