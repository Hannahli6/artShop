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

      <section id="newest">
        <h2>Newest</h2>
        <div className="new-item">
          <img src={shopProfile} alt="" />
          <div className="new-item-content">
            <div>
              <h3>
                Banana Cat <br /> Tote Bag
              </h3>
              <span>$15.99 CAD</span>
            </div>
            <button>View</button>
          </div>
        </div>
        <div className="new-item-collection">
          <img src={shopProfile} alt=""></img>
          <button>View More</button>
        </div>
      </section>
    </div>
  );
}

export default App;
