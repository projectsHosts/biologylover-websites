import React from 'react';
import '../styles/comsn.css';
import { useParams } from 'react-router-dom';

const Comsn: React.FC = () => {
  const { subject } = useParams<{ subject: string }>();

  return (
    <div className="comsn-container">
      <h1>{subject}</h1>
      <p>This is the {subject} content section. Add detailed content here.</p>
    </div>
  );
};

export default Comsn;
