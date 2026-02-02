import { Link } from 'react-router-dom';
import '../styles/blogs.css';

import PhyImg from '../assets/Physics.png';
import ChImg from '../assets/Chemistry.png';
import MathImg from '../assets/Math.png';
import BiologyImg from '../assets/Biology.png';
import NeetImg from '../assets/NEET.png';
import JeeImg from '../assets/JEE.png';

interface Subject {
  id: string;
  title: string;
  image: string;
  gradient: string;
}

const Blogs: React.FC = () => {
  const subjects: Subject[] = [
    { id: 'physics', title: 'Physics', image: PhyImg, gradient: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)' },
    { id: 'chemistry', title: 'Chemistry', image: ChImg, gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' },
    { id: 'math', title: 'Mathematics', image : MathImg, gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
    { id: 'biology', title: 'Biology', image: BiologyImg, gradient: 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)' },
    { id: 'neet', title: 'NEET', image: NeetImg, gradient: 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)' },
    { id: 'Jee', title: 'JEE', image: JeeImg, gradient: 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)' },
  ];

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Explore PCMB Blogs</h1>
      <p className="blogs-subtitle">
        Discover detailed notes, tips, and guides for Physics, Chemistry, Maths & Biology.
      </p>

      <div className="flash-cards-grid">
        {subjects.map((subject) => (
          <Link key={subject.id} to={`/blog/${subject.id}`} className="flash-card">
            <div className="card-icon" style={{ background: subject.gradient }}>
              <img src={subject.image} alt={subject.title} className="card-image" />
            </div>
            <h2 className="card-title">{subject.title}</h2>
            <p className="card-desc">Dive into fascinating concepts & ideas.</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
