import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/profile.css";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

export default function AddProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const save = async () => {
    await fetch(`${API_BASE}/api/profile/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName, lastName }),
    });

    window.dispatchEvent(new Event("profile-updated"));
    navigate("/profile");
  };

  return (
    <div className="profile-page">
      <div className="profile-container">

        <h2>Complete Your Profile</h2>
        <p className="muted">This helps us personalize your learning</p>

        <div className="form-group">
          <label>First Name</label>
          <input value={firstName} onChange={e => setFirstName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>

        <button className="primary-btn" onClick={save}>
          🚀 Save & Continue
        </button>

      </div>
    </div>
  );
}
