import "./AboutMePage.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import shopProfile from "../../assets/shopProfile.jpg";
import SocialMediaBtns from "../../SocialMediaBtns";

const AboutMePage = () => {
  const lightPurple = "#CBD3FF";
  const darkerPurple = "#8C85DC";
  const INSTAGRAM_IMG_DATA = [
    {
      imgScr: "bread.jpg",
      link: "https://www.instagram.com/p/CgoEuXbuENk/",
    },
    {
      imgScr: "sunset.jpg",
      link: "https://www.instagram.com/p/CgXvXWIPeWr/",
    },
    {
      imgScr: "boy.jpg",
      link: "https://www.instagram.com/p/CP9c9vClOcE/",
    },

    {
      imgScr: "comm.jpg",
      link: "https://www.instagram.com/p/CFGWij-lvZs/",
    },
    {
      imgScr: "commission.jpg",
      link: "https://www.instagram.com/p/CEfHd5BllCQ/",
    },
  ];
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
          <SocialMediaBtns iconColor={darkerPurple} />
        </div>

        <span className="instagram-title">
          Follow Me on Instagram @artnhannah
        </span>
        <div className="instagram-img-container">
          {INSTAGRAM_IMG_DATA.map((post, index) => {
            return (
              <div className="instagram-card" key={index}>
                <img
                  src={require(`../../assets/about-me-instagram/${post.imgScr}`)}
                  alt=""
                ></img>
                <a href={post.link}>
                  <div className="overlay"></div>
                </a>
              </div>
            );
          })}
        </div>
      </section>
      <Footer backgroundColor={lightPurple} iconColor={darkerPurple} />
    </div>
  );
};

export default AboutMePage;
