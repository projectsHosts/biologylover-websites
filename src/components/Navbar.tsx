import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import AuthModal from "./auth/AuthModal";

interface JwtPayload {
  sub: string; // email
}


const getInitialsFromUserName = (
  userName?: string | null,
  email?: string | null
) => {
  const value = userName?.trim();

  if (value) {
    const parts = value.split(/\s+/);

    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }

    return parts[0][0].toUpperCase();
  }
  if (email) {
    return email[0].toUpperCase();
  }

  return "?";
};

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu open
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // which dropdown open
  const [showAuth, setShowAuth] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [userName, setUserName] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const [profileComplete, setProfileComplete] = useState(false);
  const [profileExists, setProfileExists] = useState(false);
  const [, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
  (window as any).openLogin = () => setShowAuth(true);
}, []);

  useEffect(() => {
    if (!token) return;

    fetch(`${API_BASE}/api/profile/view`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          setUserName(
            `${res.data.firstName ?? ""} ${res.data.lastName ?? ""}`.trim()
          );
          setProfileExists(true);
          setProfileComplete(!!res.data.firstName && !!res.data.lastName);
          setAvatarUrl(res.data.avatarUrl || null);
        } else if (res.error === "Profile not found") {
          setProfileExists(false);
          setProfileComplete(false);
          setUserName(null);
        } else {
          setProfileExists(false);
        }
      });
  }, [token]);

  useEffect(() => {
    const refreshProfile = () => {
      if (!token) return;

      fetch(`${API_BASE}/api/profile/view`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success && res.data) {
            setUserName(
              `${res.data.firstName ?? ""} ${res.data.lastName ?? ""}`.trim()
            );
            setProfileExists(true);
            setProfileComplete(!!res.data.firstName && !!res.data.lastName);
            setAvatarUrl(res.data.avatarUrl || null);
          } else if (res.error === "Profile not found") {
            setProfileExists(false);
            setProfileComplete(false);
            setUserName(null);
          } else {
            setProfileExists(false);
          }
        });
    };

    window.addEventListener("profile-updated", refreshProfile);

    return () => {
      window.removeEventListener("profile-updated", refreshProfile);
    };
  }, [token]);

  useEffect(() => {
    const close = () => setDropdownOpen(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  useEffect(() => {
    if (!token) {
      setUserEmail(null);
      return;
    }

    try {
      const payload: JwtPayload = JSON.parse(atob(token.split(".")[1]));
      setUserEmail(payload.sub);
    } catch {
      localStorage.removeItem("token");
      setUserEmail(null);
    }
  }, [token]);

  useEffect(() => {
    const handleAuthChange = () => {
      const t = localStorage.getItem("token");

      if (!t) return;

      setToken(t);
      setShowAuth(false);

      try {
        const payload: JwtPayload = JSON.parse(atob(t.split(".")[1]));
        setUserEmail(payload.sub); // 🔥 THIS WAS MISSING
        setShowAuth(false);
      } catch {
        setUserEmail(null);
      }
    };
    window.addEventListener("auth-change", handleAuthChange);
    return () => window.removeEventListener("auth-change", handleAuthChange);
  }, []);

  const handleNav = (pathOrId: string, isRoute: boolean = false) => {
    if (isRoute) {
      navigate(pathOrId); // Navigate to page
    } else {
      const el = document.getElementById(pathOrId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setDropdownOpen(null);
  };

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUserEmail(null);
    setUserName(null);
    setAvatarUrl(null);
    setProfileComplete(false);
    setDropdownOpen(null);
    navigate("/");
  };

  return (
    <>
      <header className="site-nav">
        <div className="nav-container">
          <div className="brand" onClick={() => handleNav("/", true)}>BiologyLover</div>

          {/* Hamburger */}
          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Menu */}
          <nav className={`nav-menu ${isOpen ? "show" : ""}`}>
            <ul>
              <li onClick={() => handleNav("/", true)}>Home</li>

              {/* Courses Dropdown */}
              <li
                className="dropdown"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown("courses");
                }}
              >
                Courses ▾
                <div
                className={`mega-dropdown ${
                  dropdownOpen === "courses" ? "show" : ""
                }`}
              >
                <div className="mega-grid">

                  <div>
                    <div className="menu-title">Subjects</div>
                    <div className="menu-link" onClick={() => handleNav("physics")}>Physics</div>
                    <div className="menu-link" onClick={() => handleNav("chemistry")}>Chemistry</div>
                    <div className="menu-link" onClick={() => handleNav("math")}>Math</div>
                    <div className="menu-link" onClick={() => handleNav("biology")}>Biology</div>
                  </div>

                  <div>
                    <div className="menu-title">Competitive</div>
                    <div className="menu-link" onClick={() => handleNav("jee")}>JEE</div>
                    <div className="menu-link" onClick={() => handleNav("neet")}>NEET</div>

                    <div className="menu-title" style={{ marginTop: "14px" }}>School</div>
                    <div className="menu-link" onClick={() => handleNav("school")}>Class 6–12</div>

                    <div className="menu-title" style={{ marginTop: "14px" }}>Packages</div>
                    <div className="menu-link" onClick={() => handleNav("combo")}>Combo Plans</div>
                  </div>

                </div>
              </div>
              </li>

              <li onClick={() => handleNav("/blogs", true)}>Blogs</li>

              {/* More Dropdown */}
              <li
                className="dropdown"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown("more");
                }}
              >
                More ▾
               <div
                className={`mega-dropdown ${
                  dropdownOpen === "more" ? "show" : ""
                }`}
              >
                <div className="mega-grid">

                  <div>
                    <div className="menu-title">Support</div>
                    <div className="menu-link" onClick={() => handleNav("faq")}>FAQs</div>
                    <div className="menu-link" onClick={() => handleNav("help")}>Help & Support</div>
                    <div className="menu-link" onClick={() => handleNav("policies")}>Policies</div>
                  </div>

                  <div>
                    <div className="menu-title">Learning</div>
                    <div className="menu-link" onClick={() => handleNav("/resources", true)}>Resources</div>
                    <div className="menu-link" onClick={() => handleNav("/daily-quiz", true)}>Quiz of the Day</div>
                  </div>
                </div>
              </div>
              </li>

              <li onClick={() => handleNav("/about", true)}>About Us</li>
              <li onClick={() => handleNav("/contactus", true)}>Contact</li>

              {/* ================= AUTH BUTTON ================= */}
              {!userEmail ? (
                <li
                  className="signin-nav"
                  onClick={() => {
                    setShowAuth(true);
                    setIsOpen(false);
                  }}
                >
                  Sign In
                </li>
              ) : (
                <li
                  className="avatar-wrapper"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="avatar initials-avatar"
                    onClick={() => toggleDropdown("profile")}
                  >
                    {avatarUrl ? (
                      <img src={avatarUrl} alt="Profile" />
                    ) : (
                      getInitialsFromUserName(userName || userEmail)
                    )}
                  </div>

                  {dropdownOpen === "profile" && (
                    <div className="profile-menu">
                      <div className="profile-header">
                        {avatarUrl ? (
                          <img
                            src={avatarUrl}
                            alt="Profile"
                            className="avatar-img big"
                          />
                        ) : (
                          <div className="avatar initials-avatar big">
                            {getInitialsFromUserName(userName || userEmail)}
                          </div>
                        )}

                        <div>
                          <small>{userEmail}</small>
                        </div>
                      </div>
                      <ul>
                        <li
                          onClick={() => {
                            setDropdownOpen(null);
                            setIsOpen(false);
                            if (!profileExists) {
                              navigate("/profile/add");
                            } else if (!profileComplete) {
                              navigate("/profile/edit");
                            } else {
                              navigate("/profile");
                            }
                          }}
                        >
                          My Profile
                        </li>

                        <li
                          onClick={() => {
                            setDropdownOpen(null);
                            setIsOpen(false);
                            navigate("/dashboard");
                          }}
                        >
                          My Dashboard
                        </li>

                        <li
                          onClick={() => {
                            setDropdownOpen(null);
                            setIsOpen(false);
                            logout();
                          }}
                          className="logout-item"
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Navbar;
