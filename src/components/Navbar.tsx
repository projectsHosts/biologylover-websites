import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu open
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // which dropdown open
  const [, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate(); 
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  return (
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

            <li onClick={() => handleNav('blogs')}>Blogs</li>

            {/* More Dropdown */}
            <li className="dropdown" onClick={() => toggleDropdown('more')}>
              More ▾
              <ul className={`dropdown-menu ${dropdownOpen === 'more' ? 'show' : ''}`}>
                <li onClick={() => handleNav('faq')}>FAQs</li>
                <li onClick={() => handleNav('resources')}>Resources</li>
                <li onClick={() => handleNav('help')}>Help & Support</li>
                <li onClick={() => handleNav('policies')}>Policies</li>
              </ul>
            </li>

            <li onClick={() => handleNav('/about', true)}>About Us</li>
            <li onClick={() => handleNav('contact')}>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;