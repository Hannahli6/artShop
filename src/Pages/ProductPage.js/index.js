import "./ProductPage.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import shopProfile from "../../assets/shopProfile.png";

const ProductPage = () => {
  const lightPurple = "#CBD3FF";
  const darkerPurple = "#8C85DC";

  return (
    <div>
      <Navbar backgroundColor={lightPurple} />
      <section>
        <div className="product-page">
          <div className="product-img-container">
            <img src={shopProfile} alt=""></img>
            <span>product</span>
          </div>
          <div className="product-content-container">
            <div className="product-desc-container">
              <h2 className="product-name">Banana Cat Tote Bag</h2>
              <h3 className="product-price">$19.99 CAD</h3>
              <span className="product-desc">
                Cute banana cat tote bag 8 x 10 with flexible strip | with
                pockets
              </span>
            </div>
            <div className="product-btn-container">
              <button>quntity</button>
              <button>add to cart</button>
            </div>
            <span className="product-delivery-info">
              Estimated Delivery <br />
              Please note this is a preorder product, its estimated delivery is
              October 2022.
            </span>
          </div>
          <div className="review">
            <div className="review-cards-container">
              <div className="review-card">
                <div className="review-profile-container">
                  <div className="review-name-container">
                    <div className="review-profile-img"></div>
                    {/* <img src="" alt=""></img> */}
                    <span>Hannah Li</span>
                  </div>
                  <div className="review-rating">⭐⭐⭐⭐⭐</div>
                </div>
                <div>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer{" "}
                  </span>
                </div>
              </div>
              <div className="review-card">
                <div className="review-profile-container">
                  <div className="review-name-container">
                    <div className="review-profile-img"></div>
                    {/* <img src="" alt=""></img> */}
                    <span>Hannah Li</span>
                  </div>
                  <div className="review-rating">⭐⭐⭐⭐⭐</div>
                </div>
                <div>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer{" "}
                  </span>
                </div>
              </div>
              <div className="review-card">
                <div className="review-profile-container">
                  <div className="review-name-container">
                    <div className="review-profile-img"></div>
                    {/* <img src="" alt=""></img> */}
                    <span>Hannah Li</span>
                  </div>
                  <div className="review-rating">⭐⭐⭐⭐⭐</div>
                </div>
                <div>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer{" "}
                  </span>
                </div>
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
