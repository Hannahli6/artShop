import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping, faPaintBrush,} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer({backgroundColor, iconColor}) {
  return (
    <section id="footer" style={{backgroundColor : backgroundColor, backgroundImage: "none"}}>
        <div className="socials-links">
          <FontAwesomeIcon icon={faInstagram} className="icon" style={{backgroundColor : iconColor}}/>
          <FontAwesomeIcon icon={faGithub} className="icon" style={{backgroundColor : iconColor}} />
          <FontAwesomeIcon icon={faPaintBrush} className="icon" style={{backgroundColor : iconColor}}/>
        </div>
        <div className="footer-links">
          <span style={{color : iconColor}}>Home</span>
          <span style={{color : iconColor}}>Collection</span>
          <span style={{color : iconColor}}>About Me</span>
        </div>
        <div className="copyright-container">
          <span >@artnahannah</span>
          <span>copyright2023</span>
        </div>
      </section>
  );
}

export default Footer;
