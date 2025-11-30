"use client"

import { useEffect, useState } from "react"
import "../styles/hero.css"

const Hero = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-fade-in-up">
            <p className="hero-subtitle">Welcome to Student Living</p>
            <h1>Find Your Perfect Student Room</h1>
            <p className="hero-description">
              Discover verified PG accommodations near your campus. Quick verification, transparent pricing, and direct
              contact with property owners.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-large animate-scale-in">Search Rooms Now</button>
              <button className="btn btn-secondary btn-large animate-scale-in">List Your Property</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Properties</span>
              </div>
              <div className="stat">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Cities</span>
              </div>
            </div>
          </div>
          <div className="hero-image animate-slide-in-right" style={{ transform: `translateY(${offset}px)` }}>
            <div className="image-placeholder">
              <div className="image-card card-1">🏠</div>
              <div className="image-card card-2">🛏️</div>
              <div className="image-card card-3">📚</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
