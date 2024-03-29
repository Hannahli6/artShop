import "./ProductPage.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useParams, Link } from "react-router-dom";
import { ProductData, ProductReviewsData } from "../../ProductData";
import { useState } from "react";

const ProductPage = () => {
  const lightPurple = "#CBD3FF";
  const darkerPurple = "#8C85DC";
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  // collect all products into one array
  let allProducts = [];
  ProductData.map((typeProduct) => {
    let type = typeProduct.type;
    typeProduct.products.forEach((product) => {
      product.type = type;
    });
    allProducts = [...allProducts, ...typeProduct.products];
  });

  // find product based on productId
  const product = allProducts.find(
    (product) => product.productId === productId
  );
  const { name, price, imgSrc, description, type } = product;
  let reviews = [];
  reviews = ProductReviewsData.find(
    (reviewType) => reviewType.type === type
  ).reviews;

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
              <span className="quantity-label">quantity</span>
              <div className="quantity-counter">
                <button alt="" onClick={() => quantity> 1 ? setQuantity(quantity - 1) : null}>
                  -
                </button>
                <span>{quantity}</span>
                <button alt="" onClick={() => quantity>= 1 ? setQuantity(quantity + 1) : null}>
                  +
                </button>
              </div>
              <button className="add-to-cart-btn">add to cart</button>
            </div>
            <span className="product-delivery-info">
              Estimated Delivery <br />
              Please note this is a small business product, the estimated
              delivery is Feb 2023.
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
