import { Link } from "react-router-dom";
import "./HomePage.css";
import shopProfile from "../../assets/shopProfile.jpg";
import landingBG from "../../assets/landingBg.jpg";
import Footer from "../../Footer";
import ItemCard from "../../ItemCard";
import Navbar from "../../Navbar";
import Collection from "../../Collection";
import { MostPopularProductData, NewestProductData } from "../../ProductData";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <section id="landing">
        <div className="landing-desktop">
          <div className="landing-content-desktop">
            <div className="landing-title">
              <h1>ArtnHannah</h1>
              <h3 className="hover-underline-animation">Art Shop</h3>
            </div>
            <Link to="collection" className="landing-btn">
              shop now
            </Link>
          </div>
          <img src={landingBG} alt=""></img>
        </div>
        <div className="landing-content-mobile">
          <div className="landing-title">
            <h1>ArtnHannah</h1>
            <h3>Art Shop</h3>
          </div>
          <img src={shopProfile} alt="" className="shop-profile-img"></img>
          <Link to="collection" className="landing-btn">
            shop now
          </Link>
        </div>
      </section>

      <section id="newest">
        <h2>Newest</h2>
        {NewestProductData.map((product, index) => {
          const { name, price, imgSrc, type, productId } = product;
          return (
            <div key={index}>
              <div className="new-item">
                <Link
                  to={`/collection/${productId}`}
                  className="new-item-img-wrapper img-zoom-container"
                >
                  <img src={require(`../../assets/${type}/${imgSrc}`)} alt="" />
                </Link>
                <div className="new-item-content">
                  <div>
                    <h3>{name}</h3>
                    <h3 className="new-item-price">${price} CAD</h3>
                  </div>
                  <Link to={`/collection/${productId}`}>View</Link>
                </div>
              </div>
              <div className="new-item-collection img-zoom-container">
                <Link to={`/${type}`}>
                  <img
                    src={require(`../../assets/thumbnails/${type}-thumbnail.jpg`)}
                    alt=""
                  />
                </Link>
                <Link to={`/${type}`} className="hover-underline-animation">
                  {type}
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      <section id="most-popular">
        <h2>Most Popular</h2>
        <div className="popular-product-container">
          {MostPopularProductData.map((product, index) => {
            const { name, price, imgSrc, type, productId } = product;
            return (
              <ItemCard
                type={type}
                imgSrc={imgSrc}
                price={price}
                name={name}
                productId={productId}
                key={index}
              />
            );
          })}
        </div>
      </section>

      <Collection />

      <Footer />
    </div>
  );
};

export default HomePage;
