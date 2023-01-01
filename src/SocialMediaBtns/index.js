import "./SocialMediaBtns.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaintBrush,} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const SocialMediaBtns = ({iconColor}) => {
  return (
    <div className="socials-links">
    <a href="https://www.instagram.com/artnhannah/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} className="icon" style={{backgroundColor : iconColor}}/>
    </a>
    <a href="https://github.com/Hannahli6" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className="icon" style={{backgroundColor : iconColor}} />
    </a>
    <a href="https://artnhannah.carrd.co/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faPaintBrush} className="icon" style={{backgroundColor : iconColor}}/>
    </a>
  </div>
  );
};

export default SocialMediaBtns;
