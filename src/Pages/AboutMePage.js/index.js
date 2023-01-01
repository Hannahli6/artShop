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
        <div className="about-me-desc">
          <h2>Hello, I’m Hannah!</h2>
          <h3>Digital Artist</h3>
          <span>
            My name is Hannah and I'm a highschool student. I'm currently
            practicing coding! I like to watch anime, bake & draw on my free
            time!
          </span>
          <img src={shopProfile} alt=""></img>
        </div>
        <SocialMediaBtns iconColor={darkerPurple} />
        <span className="instagram-title">Follow Me on Instagram @artnhannah</span>
        <div className="instagram-img-container">
          <img src={shopProfile} alt=""></img>
          <img src={shopProfile} alt=""></img>
          <img src={shopProfile} alt=""></img>
          <img src={shopProfile} alt=""></img>
          <img src={shopProfile} alt=""></img>
        </div>
      </section>
      <Footer backgroundColor={lightPurple} iconColor={darkerPurple} />
    </div>
  );
};

export default AboutMePage;
