import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Navbar = () => {
  return (
    <>
    <div className="Navbar-container">

        <div className="dots-container">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div>Cindy</div>

        <nav className="navigation">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutme">About Me</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

        <div className="cross"></div>

    </div>
    </>
  )
}

export default Navbar