import facebook from "../img/facebook.png";
import youtube from "../img/youtube.png";
import Instagram from "../img/Instagram.png";
import githup from "../img/githup.png";
import gmail from "../img/gmail.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a
          href="https://www.facebook.com/"
          aria-label="Facebook"
          target="_blank"
        >
          <img src={facebook} alt="Facebook logo " className="footer-img" />
        </a>
        <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank">
          <img src={youtube} alt="YouTube logo " className="footer-img" />
        </a>
        <a
          href="https://www.instagram.com/"
          aria-label="Instagram"
          target="_blank"
        >
          <img src={Instagram} alt="Instagram logo " className="footer-img" />
        </a>
        <a
          href="https://workspace.google.com/intl/en-US/gmail/"
          aria-label="gmail"
          target="_blank"
        >
          <img src={gmail} alt="gmail logo" className="footer-img" />
        </a>
        <a
          href="https://github.com/orgs/Web1-Teams/teams/8am-grp7-team"
          aria-label="githup"
          target="_blank"
        >
          <img src={githup} alt="githup logo" className="footer-img" />
        </a>
      </div>
      <hr className="hr" />
      <h4 className="h4"> © Copyright 2024 Eduminute. All Rights Reserved.</h4>
    </footer>
  );
};
export default Footer;
