import "./AboutMePage.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import shopProfile from "../../assets/shopProfile.png"

const AboutMePage = () => {
  const lightPurple = "#CBD3FF";
  const darkerPurple = "#8C85DC";
  return (
    <div>
      <Navbar backgroundColor={lightPurple} />
      <section>
        <h2>Hello, I’m Hannah!</h2>
        <h3>Digital Artist</h3>
        <span>My name is Hannah and I'm a highschool student. I'm currently practicing coding! I like to watch anime, bake & draw on my free time!</span>
        <img src={shopProfile} alt=""></img>
      </section>
      <Footer backgroundColor={lightPurple} iconColor={darkerPurple}/>
    </div>
  );
};

export default AboutMePage;
