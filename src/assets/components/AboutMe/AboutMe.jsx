import React, { useRef } from 'react'
import './AboutMe.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

// Function for the main text & actions
const AboutBio = () => (
  <div className="about-content">
    <h2>About Me</h2>
    <p>
      Hi! I'm someone who enjoys creating things, playing games, and spending time with cats. 
      I love exploring new ideas, picking up new hobbies, and finding little things that make 
      everyday life more fun. When I'm not busy, you'll probably find me gaming, relaxing, 
      or just enjoying some quiet time.
    </p>
    <div className="button-group">
      <Link to="/contact" className="btn btn-primary">
        Get in Touch
      </Link>
      <Link to="/portfolio" className="btn btn-secondary">View Projects</Link>
    </div>
  </div>
)

// Function for displaying your Chinese name
const ChineseName = () => (
  <div className="chinese-name-content">
    <ruby className="chinese-ruby">
      黄<rt>Huáng</rt>
      千<rt>Qiān</rt>
      慧<rt>Huì</rt>
    </ruby>
  </div>
)

// Reusable Color Card component function
const ColorCard = ({ hexCode }) => (
  <div className="color-card">
    <span className="color-block" style={{ backgroundColor: hexCode }}></span>
    <span className="color-code">{hexCode}</span>
  </div>
)

// Function for the color palette section
const FavoriteColors = () => {
  const colors = ['#ff69b4', '#ff85c2', '#d946ef', '#a855f7']

  return (
    <section className="fav-color-section">
      <span className="fav-color-label">Favorite Colors</span>
      <div className="colour-container">
        {colors.map((color) => (
          <ColorCard key={color} hexCode={color} />
        ))}
      </div>
    </section>
  )
}

const GrabbableItems = () => {
  // Create the container reference
  const containerRef = useRef(null)

    const items = [
      { id: 1, title: '🎮 C#', bg: 'rgba(255, 105, 180, 0.2)' },
      { id: 2, title: '⚡ C++', bg: 'rgba(255, 133, 194, 0.2)' },
      { id: 3, title: '☕ Java', bg: 'rgba(217, 70, 239, 0.2)' },
      { id: 4, title: '📜 JavaScript', bg: 'rgba(244, 63, 142, 0.2)' },
      { id: 5, title: '🕹️ Unity', bg: 'rgba(236, 72, 153, 0.2)' },
      { id: 6, title: '⚛️ React', bg: 'rgba(219, 39, 119, 0.2)' },
    ]

  return (
    <section className="grab-section">

      <span className="grab-label">Grab & Drag</span>

      <div className="grab-container" ref={containerRef}>
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="grab-item"
            style={{ backgroundColor: item.bg }}
            drag
            dragConstraints={containerRef}
            dragElastic={0.1}
            whileTap={{ scale: 1.05, cursor: 'grabbing' }}
          >
            {item.title}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// Main Component bringing all functions together
const AboutMe = () => {
  return (
    <div id="about-me" className="about-me-section">
      <section className="about-wrapper">
        <AboutBio />
        <ChineseName />
      </section>
      <FavoriteColors />

      <section className="skills-grab-wrapper">
          <div className="vertical-label-container">
          <span className="vertical-label">SKILLS</span>
          </div>
          <GrabbableItems />
      </section>
    </div>
  )
}

export default AboutMe