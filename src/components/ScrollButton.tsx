import React, { useState, useEffect } from 'react';
import '../styles/scrollButton.css';

const ScrollButton: React.FC = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    const targetId = atTop ? 'courses' : 'home';
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scroll-container">
      <button
        className={`scroll-btn ${atTop ? 'down' : 'up'}`}
        onClick={handleClick}
        aria-label="scroll"
      />
      <div className="scroll-label">{atTop ? 'Scroll Down' : 'Scroll Up'}</div>
    </div>
  );
};

export default ScrollButton;
