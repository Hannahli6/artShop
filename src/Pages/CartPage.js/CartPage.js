import comingSoonImg from "../../assets/comingSoon.jpg";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./CartPage.css";
const CartPage = () => {
  const lightPurple = "#CBD3FF";
  return (
    <div>
      <Navbar backgroundColor={lightPurple} />
      <section>
        <div className="coming-soon">
          <h1 className="hover-underline-animation">coming soon!</h1>
          <img src={comingSoonImg} alt="coming soon img"></img>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CartPage;
