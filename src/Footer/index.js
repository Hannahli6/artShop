import SocialMediaBtns from "../SocialMediaBtns";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer({ backgroundColor, iconColor }) {
  return (
    <section
      id="footer"
      style={{ backgroundColor: backgroundColor, backgroundImage: "none" }}
    >
      <SocialMediaBtns iconColor={iconColor} />
      <div className="footer-links">
        <Link to={`/`} ><span style={{ color: iconColor }} className="hover-underline-animation" >Home</span></Link>
        <Link to={`/collection`}><span style={{ color: iconColor }} className="hover-underline-animation">Collection</span></Link>
        <Link to={`/about-me`}><span style={{ color: iconColor }} className="hover-underline-animation">About Me</span></Link>

      </div>
      <div className="copyright-container">
        <span>@artnahannah</span>
        <span>copyright2023</span>
      </div>
    </section>
  );
}

export default Footer;
