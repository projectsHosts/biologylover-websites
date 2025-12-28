import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';
import AuthModal from './auth/AuthModal';

interface JwtPayload {
  sub: string; // email
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu open
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // which dropdown open
  const [showAuth, setShowAuth] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const [, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate(); 
  
useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) return;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (!payload?.sub) throw new Error();
    setUserEmail(payload.sub);
  } catch {
    localStorage.removeItem('token');
    setUserEmail(null);
  }
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
    localStorage.removeItem('token');
    setUserEmail(null);
    window.location.reload();
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
            <li className="dropdown" onClick={() => toggleDropdown('courses')}>
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
            <li className="dropdown" onClick={() => toggleDropdown('more')}>
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
                <li className="signin-nav" onClick={() => setShowAuth(true)}>
                  Sign In
                </li>
              ) : (
                <li
                  className="dropdown profile-nav"
                  onClick={() => toggleDropdown('profile')}
                >
                  Profile ▾
                  <ul className={`dropdown-menu ${dropdownOpen === 'profile' ? 'show' : ''}`}>
                    <li className="profile-email">{userEmail}</li>
                    <li onClick={logout}>Logout</li>
                  </ul>
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