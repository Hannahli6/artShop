import "./AboutMePage.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import shopProfile from "../../assets/shopProfile.png";
import SocialMediaBtns from "../../SocialMediaBtns";

const AboutMePage = () => {
  const lightPurple = "#CBD3FF";
  const darkerPurple = "#8C85DC";
  return (
    <div>
      <Navbar backgroundColor={lightPurple} />
      <section id="about-me">
        <div className="about-me-content">
          <div className="about-me-desc">
            <h2>Hello, I’m Hannah!</h2>
            <h3>Digital Artist</h3>
            <span>
              My name is Hannah and I'm a highschool student. I'm currently
              practicing coding! I like to watch anime, bake & draw on my free
              time!
            </span>
          </div>
          <img src={shopProfile} alt="" className="about-me-img"></img>
          <SocialMediaBtns iconColor={darkerPurple}/>
        </div>

        <span className="instagram-title">
          Follow Me on Instagram @artnhannah
        </span>
        <div className="instagram-img-container">
          <div className="instagram-card">
            <img src={shopProfile} alt=""></img>
            <div className="overlay"></div>
          </div>
          <div className="instagram-card">
            <img src={shopProfile} alt=""></img>
            <div className="overlay"></div>
          </div>
          <div className="instagram-card">
            <img src={shopProfile} alt=""></img>
            <div className="overlay"></div>
          </div>
          <div className="instagram-card">
            <img src={shopProfile} alt=""></img>
            <div className="overlay"></div>
          </div>
          <div className="instagram-card">
            <img src={shopProfile} alt=""></img>
            <div className="overlay"></div>
          </div>
        </div>
      </section>
      <Footer backgroundColor={lightPurple} iconColor={darkerPurple} />
    </div>
  );
};

export default AboutMePage;
