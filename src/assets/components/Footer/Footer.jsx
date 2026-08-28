import React from 'react'
import './Footer.css'

const Footer = () => {
return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-brand">Cindy Ng 🌸</p>
        
        <div className="footer-links">
          <a href='#1'>GitHub</a>
          <a href='#1'>LinkedIn</a>
          <a href='#1'>Email</a>
        </div>

        <p className="footer-copy">&copy;  2026 Cindy. All rights reserved.</p>
      </div>
    </footer>
    )
}

export default Footer