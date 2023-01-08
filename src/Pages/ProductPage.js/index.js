import "./ProductPage.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useLocation, useParams, Link } from "react-router-dom";
import { ProductData, ProductReviewsData } from "../../ProductData";

const ProductPage = () => {
  const lightPurple = "#CBD3FF";
  const darkerPurple = "#8C85DC";
  const { productId } = useParams();
  const state = useLocation();
  const productState = state.state;
  const { name, price, imgSrc, description, type } = productState;
  let reviews = [];
  reviews = ProductReviewsData.find(
    (reviewType) => (reviewType.type === type)
  ).reviews;

    // find product based on productId

  return (
    <div>
      <Navbar backgroundColor={lightPurple} />
      <section>
        <div className="product-page">
          <div className="product-img-container">
            <img src={require(`../../assets/${type}/${imgSrc}`)} alt=""></img>
            <Link to={`/${type}`}>{type}</Link>
          </div>
          <div className="product-content-container">
            <div className="product-desc-container">
              <h2 className="product-name">{name}</h2>
              <h3 className="product-price">${price} CAD</h3>
              <span className="product-desc">{description}</span>
            </div>
            <div className="product-btn-container">
              <button alt="">quantity</button>
              <button alt="">add to cart</button>
            </div>
            <span className="product-delivery-info">
              Estimated Delivery <br />
              Please note this is a small business product, the estimated delivery is
              Feb 2022.
            </span>
          </div>
          <div className="review">
            <div>
              <h3>{reviews.length} reviews: </h3>
              <div className="review-cards-container">
                {reviews.map((review, index) => {
                  const { name, star, description } = review;
                  return (
                    <div className="review-card" key={index}>
                      <div className="review-profile-container">
                        <div className="review-name-container">
                          <div className="review-profile-img"></div>
                          <span>{name}</span>
                        </div>
                        <div className="review-rating">⭐⭐⭐⭐⭐</div>
                      </div>
                      <div>
                        <span>{description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer backgroundColor={lightPurple} iconColor={darkerPurple} />
    </div>
  );
};

export default ProductPage;
