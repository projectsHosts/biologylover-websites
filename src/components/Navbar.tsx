import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';
import AuthModal from './auth/AuthModal';

interface JwtPayload {
  sub: string; // email
}

const getInitials = (firstName?: string, lastName?: string) => {
  if (firstName && lastName) {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  }
  if (firstName) {
    return firstName[0].toUpperCase();
  }
  return "?";
};


const API_BASE = import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu open
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // which dropdown open
  const [showAuth, setShowAuth] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [userName, setUserName] = useState<string | null>(null);
  const [, setAvatarUrl] = useState<string | null>(null);


  const [profileComplete, setProfileComplete] = useState(false);


  const [, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const navigate = useNavigate(); 

  useEffect(() => {
  if (!token) return;

  fetch(`${API_BASE}/api/profile/view`, {
  headers: { Authorization: `Bearer ${token}` },
  })

    .then(res => res.json())
    .then(data => {
      setUserName(
        `${data.firstName ?? ""} ${data.lastName ?? ""}`.trim()
      );
      setAvatarUrl(data.avatarUrl || null);
      setProfileComplete(!!data.firstName && !!data.lastName);
    })
    .catch(() => {
      localStorage.removeItem("token");
      setToken(null);
      setUserName(null);
      setAvatarUrl(null);
    });

}, [token]);

// 🔥 Profile update hone par navbar refresh
useEffect(() => {
  const refreshProfile = () => {
    if (!token) return;

    fetch(`${API_BASE}/api/profile/view`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        setUserName(
          `${data.firstName ?? ""} ${data.lastName ?? ""}`.trim()
        );
        setAvatarUrl(data.avatarUrl || null);
        setProfileComplete(!!data.firstName && !!data.lastName);
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
}, [token])

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
      if (el) el.scrollIntoView({ behavior: 'smooth' });
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
        <div className="brand">BiologyLover</div>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <nav className={`nav-menu ${isOpen ? 'show' : ''}`}>
          <ul>
            <li onClick={() => handleNav('/',true)}>Home</li>

            {/* Courses Dropdown */}
            <li className="dropdown" onClick={(e) => { e.stopPropagation(); toggleDropdown('courses'); }}>
              Courses ▾
              <ul className={`dropdown-menu ${dropdownOpen === 'courses' ? 'show' : ''}`}>
                <li onClick={() => handleNav('physics')}>Physics</li>
                <li onClick={() => handleNav('chemistry')}>Chemistry</li>
                <li onClick={() => handleNav('math')}>Math</li>
                <li onClick={() => handleNav('biology')}>Biology</li>
                <li onClick={() => handleNav('jee')}>JEE</li>
                <li onClick={() => handleNav('neet')}>NEET</li>
                <li onClick={() => handleNav('school')}>School</li>
                <li onClick={() => handleNav('combo')}>Combo Packages</li>
              </ul>
            </li>

            <li onClick={() => handleNav('/blogs', true)}>Blogs</li>

            {/* More Dropdown */}
            <li className="dropdown" onClick={(e) => { e.stopPropagation(); toggleDropdown('more'); }}>
              More ▾
              <ul className={`dropdown-menu ${dropdownOpen === 'more' ? 'show' : ''}`}>
                <li onClick={() => handleNav('faq')}>FAQs</li>
                <li onClick={() => handleNav('/resources', true)}>Resources</li>
                <li onClick={() => handleNav('help')}>Help & Support</li>
                <li onClick={() => handleNav('policies')}>Policies</li>
              </ul>
            </li>

            <li onClick={() => handleNav('/about', true)}>About Us</li>
            <li onClick={() => handleNav('contact')}>Contact</li>

            {/* ================= AUTH BUTTON ================= */}
              {!userEmail ? (
                <li className="signin-nav" onClick={() => {setShowAuth(true);  setIsOpen(false);}}>
                  Sign In
                </li>
              ) : (
                <li className="avatar-wrapper" onClick={(e) => e.stopPropagation()}>
                  <div
                      className="avatar initials-avatar"
                      onClick={() => {
                          toggleDropdown("profile");
                      }}
                    >
                   {getInitials(userName?.split(" ")[0], userName?.split(" ")[1])}
                  </div>


                  {dropdownOpen === "profile" && (
                    <div className="profile-menu">
                      <div className="profile-header">
                          <div className="avatar initials-avatar big">
                            {getInitials(userName?.split(" ")[0], userName?.split(" ")[1])}
                          </div>

                          <div>
                            <small>{userEmail}</small>
                          </div>
                        </div>
                      <ul>
                          <li
                            onClick={() => {
                              setDropdownOpen(null);
                              navigate(profileComplete ? "/profile" : "/profile/add");
                            }}
                          >
                            My Profile
                          </li>

                          <li
                            onClick={() => {
                              setDropdownOpen(null);
                              navigate("/dashboard");
                            }}
                          >
                            My Dashboard
                          </li>

                          <li
                            onClick={() => {
                              setDropdownOpen(null);
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