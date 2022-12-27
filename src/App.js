import "./App.css";
import shopProfile from "./assets/shopProfile.png";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <section id="landing">
        <Navbar />
        <div className="landing-content">
          <div className="landing-title">
            <h1>ArtnHannah</h1>
            <h3>Shop</h3>
            <h3>700+ sales</h3>
          </div>
          <img src={shopProfile} alt="" className="shop-profile-img"></img>
          <button className="landing-btn">Shop Now</button>
        </div>
      </section>
    </div>
  );
}

export default App;
