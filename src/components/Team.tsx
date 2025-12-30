import React, { useState } from "react";

import "../styles/team.css";

import yogeshImg from "../assets/yogesh.jpeg";
import poojaImg from "../assets/pooja.jpeg";
import jyotiImg from "../assets/jyoti.jpeg";
import abhiImg from "../assets/abhishek.jpeg";

const teamMembers = [
  {
    name: "Yogesh Nayak",
    role: "Business & Learning Strategist",
    img: yogeshImg,
    intro: "Handles business operations, sponsorships, and social media while also contributing to teaching and content creation. Passionate about building engaging learning experiences for students.",
    socials: {
      instagram: "https://www.instagram.com/yn_yogesh_02",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Pooja Nayak",
    role: "Biology Educator",
    img: poojaImg,
    intro: "Passionate educator simplifying complex concepts and guiding students to achieve academic excellence. Specializes in creating engaging video lectures and interactive learning experiences.",
    socials: {
      instagram: "https://www.instagram.com/biology_lover_02",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jyoti Nayak",
    role: "Educator & Content Creator",
    img: jyotiImg,
    intro: "Creative educator sharing engaging biology posts and short tricks videos to make learning fun and easy for students. Passionate about simplifying complex concepts and helping students excel in their studies.",
    socials: {
      instagram: "https://www.instagram.com/biology_lover_02",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Abhishek Nayak",
    role: "Video Editor & Social Media Manager",
    img: abhiImg,
    intro: "Skilled video editor managing YouTube and Instagram content. Passionate about creating engaging and high-quality videos that enhance learning and audience experience.",
    socials: {
      instagram: "https://www.instagram.com/biology_lover_02",
      facebook: "#",
      linkedin: "#",
    },
  },
];

const OurTeam: React.FC = () => {
  return (
    <section id="team" className="team-section">
      <h2 className="team-title">Our Team</h2>
      <div className="team-container">
        
        {teamMembers.map((member, index) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`team-card ${flipped ? "flipped" : ""}`}
      key={index}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={member.img} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>

        <div className="card-back">
          <p>{member.intro}</p>
         <div className="social-icons" onClick={(e) => e.stopPropagation()}>
            <a href={member.socials.instagram} target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href={member.socials.facebook} target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
})}
      </div>
    </section>
  );
};

export default OurTeam;
