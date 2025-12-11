import { Link } from 'react-router-dom';
import '../styles/blogs.css';

interface Subject {
  id: string;
  title: string;
  icon: string;
  gradient: string;
}

const Blogs: React.FC = () => {
  const subjects: Subject[] = [
    { id: 'physics', title: 'Physics', icon: '⚛️', gradient: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)' },
    { id: 'chemistry', title: 'Chemistry', icon: '🧪', gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' },
    { id: 'math', title: 'Mathematics', icon: '📐', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
    { id: 'biology', title: 'Biology', icon: '🧬', gradient: 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)' }
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
              {subject.icon}
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
