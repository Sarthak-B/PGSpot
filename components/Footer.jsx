import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CampusStay</h3>
            <p>Making student accommodation simple, transparent, and accessible.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                f
              </a>
              <a href="#" className="social-link">
                𝕏
              </a>
              <a href="#" className="social-link">
                in
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>For Students</h4>
            <ul>
              <li>
                <a href="#">Find PG</a>
              </li>
              <li>
                <a href="#">Roommate Finder</a>
              </li>
              <li>
                <a href="#">Student Discounts</a>
              </li>
              <li>
                <a href="#">Moving Guide</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>For Owners</h4>
            <ul>
              <li>
                <a href="#">List Property</a>
              </li>
              <li>
                <a href="#">Owner Dashboard</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Partner with Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Contact US</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 CampusStay. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
