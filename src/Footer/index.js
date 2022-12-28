import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping, faPaintBrush,} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section id="footer">
        <div className="socials-links">
          <FontAwesomeIcon icon={faInstagram} className="icon"/>
          <FontAwesomeIcon icon={faGithub} className="icon"/>
          <FontAwesomeIcon icon={faPaintBrush} className="icon"/>
        </div>
        <div className="footer-links">
          <a href={"/"} alt="">
            Home
          </a>
          <a href={"/"} alt="">
            Collection
          </a>
          <a href={"/"} alt="">
            About Me
          </a>
        </div>
        <div className="copyright-container">
          <span>@artnahannah</span>
          <span>copyright2023</span>
        </div>
      </section>
  );
}

export default Footer;
