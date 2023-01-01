import SocialMediaBtns from "../SocialMediaBtns";
import "./Footer.css";

function Footer({backgroundColor, iconColor}) {
  return (
    <section id="footer" style={{backgroundColor : backgroundColor, backgroundImage: "none"}}>
        <SocialMediaBtns iconColor={iconColor}/>
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
