import React from 'react'
import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
  return (
    
    <section id='home' className="home-container">

        <div className="home-container-content"> 

            <header className="home-header">

                <div className="header-text">
                    <h1>Cindy Ng</h1>
                    <p className="tagline">Casual Gamer & Tech Trainee</p>
                </div>

                <div className="image-section">
                    <img 
                    src="https://media.tenor.com/JRaUrkGA_nQAAAAe/drooling-kitten-kitty-drool.png" 
                    alt="Profile Placeholder" 
                    className="profile-image" 
                    />
                </div>

            </header>

        </div>

        <div className="Sliding-Skill">
            <div className="skills-track">
                {/* Set 1 */}
                <div>C++</div>
                <div>C#</div>
                <div>Java</div>
                <div>JavaScript</div>
                <div>React</div>
                
                {/* Set 2 */}
                <div>C++</div>
                <div>C#</div>
                <div>Java</div>
                <div>JavaScript</div>
                <div>React</div>

                {/* Set 3 */}
                <div>C++</div>
                <div>C#</div>
                <div>Java</div>
                <div>JavaScript</div>
                <div>React</div>

            </div>
        </div>

        <div className='know-more-section'>
        <div className='section-header'>
          <h2>Character Stats</h2>
          <p>Currently leveling up stats in Singapore.</p>
        </div>

        <div className="status-box">
          <p><strong>Class:</strong> Tech Trainee / Sleeper</p>
          <p><strong>Passive Skill:</strong> Can sleep through 5 consecutive alarms</p>
          <p><strong>Special Ability:</strong> Turning caffeine into creative ideas</p>
          <p><strong>Current Quest:</strong> Building cool stuff and surviving the grind</p>
        </div>

        <div className='intro-button-container'>
            <Link to="/aboutme" className="btn-primary">Read Lore</Link>
            <Link to="/contact" className="btn-secondary">Send Side Quest</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero