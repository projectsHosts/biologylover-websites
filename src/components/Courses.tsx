import React from 'react';
import '../styles/courses.css';

const Courses: React.FC = () => {
  return (
    <section id="courses" className="courses-section">
      <h2>Our Courses</h2>
      <div className="coming-soon-wrap">
        <div className="marquee">
          <span>COMING SOON &nbsp; COMING SOON &nbsp; COMING SOON &nbsp; COMING SOON &nbsp; COMING SOON &nbsp; COMING SOON &nbsp; COMING SOON &nbsp;COMING SOON &nbsp;COMING SOON &nbsp; COMING SOON &nbsp;</span>
        </div>
      </div>
    </section>
  );
}

export default Courses;
