import { Outlet, Link } from "react-router-dom";
import "./Collection.css";
import shopProfile from "../assets/shopProfile.jpg";

function Collection({ backgroundColor }) {
  return (
    <section id="collection" style={{ backgroundColor: backgroundColor }}>
      <h2>Collection</h2>

      <div className="collection-container">
        <div className="col-1 col">
          <Link to={`/prints`}>
            <img src={shopProfile} alt="" />
          </Link>
          <Link to={`/prints`}>Prints</Link>
        </div>

        <div className="col-2 col">
          <div className="group">
            <div className="col">
              <Link to={`/accessories`}>
                <img src={shopProfile} alt="" />
              </Link>
              <Link to={`/accessories`}>accessories & bags</Link>
            </div>

            <div className="col">
              <Link to={`/stationary`}>
                <img src={shopProfile} alt="" />
              </Link>
              <Link to={`/stationary`}>stationary</Link>
            </div>
          </div>
        </div>
        <div className="col-3 col">
          <div className="col-1 col">
            <Link to={`/all-item`}>
              <img src={shopProfile} alt="" />
            </Link>
            <Link to={`/all-item`}>All Items</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
