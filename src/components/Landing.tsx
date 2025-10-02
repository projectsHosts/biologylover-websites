import React from 'react'
import '../styles/landing.css'
import bgVideo from '../assets/video.mp4'

const Landing: React.FC = () => {
  return (
    <section id="home" className="landing-section">
      <video className="bg-video" src={bgVideo} autoPlay muted loop playsInline />
      <div className="overlay" />
      <div className="landing-content">
        <h1 className="title">BiologyLover</h1>
        <p className="tagline">
          Unlock the secrets of life — Learn, Explore & Achieve with us.
        </p>
        <div className="cta-buttons">
          <a href="#courses" className="btn-primary">Start Learning</a>
          <a href="https://t.me/biology_lover_02" target="_blank" className="btn-secondary">Join Community</a>
        </div>
      </div>
    </section>
  )
}

export default Landing
