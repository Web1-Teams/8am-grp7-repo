import { Link } from "react-router-dom";
import "./Header.css";

import img1 from "../img/imgl.jpg";

const Header = () => {
  return (
    <div>
      <div className="Navbar">
        <div className="logo">
          <img src={img1} alt="Logo" />
          <span>Eduminute</span>
        </div>

        <div className="nav-links-container">
          <div className="nav-links">
            <Link to="/home">Home</Link> {/* Ensure correct path */}
            <Link to="/challenges">Challenges</Link> {/* Ensure correct path */}
            <Link to="/education">Education</Link> {/* Ensure correct path */}
            <Link to="/contact">Contact</Link> {/* Use Link instead of a */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
