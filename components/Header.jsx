"use client"

import { useState } from "react"
import "../styles/header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo animate-fade-in-down">
          <div className="logo-icon">📚</div>
          <span>PGSpot</span>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""} animate-fade-in-down`}>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#process">How It Works</a>
          <a href="#testimonials">Reviews</a>
        </nav>

        <div className="header-actions animate-fade-in-down">
          <button className="btn btn-secondary">Sign In</button>
          <button className="btn btn-primary">Get Started</button>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
