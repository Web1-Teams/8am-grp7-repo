import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import img1 from "../img/imgl.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="Navbar">
        <div className="logo">
          <img src={img1} alt="Logo" className="logo-img" />
          <span>Eduminute</span>
        </div>

        <div className="nav-links-container">
          <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/challenges">Challenges</Link>
            <Link to="/education">Education</Link>
          </div>

          <div className="hamburger-icon" onClick={toggleMenu}>
            ☰
          </div>
        </div>

        <div className={`dropdown-menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/home">Home</Link>
          <Link to="/challenges">Challenges</Link>
          <Link to="/education">Education</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
