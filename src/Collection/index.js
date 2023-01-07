import { Outlet, Link } from "react-router-dom";
import "./Collection.css";
import accessoriesThumbnail from "../assets/accessories-thumbnail.jpg";
import stationaryThumbnail from "../assets/stationary-thumbnail.jpg";
import printsThumbnail from "../assets/prints-thumbnail.jpg";
import allItemThumbnail from "../assets/all-item-thumbnail.jpg";

function Collection({ backgroundColor }) {
  return (
    <section id="collection" style={{ backgroundColor: backgroundColor }}>
      <h2>Collection</h2>

      <div className="collection-container">
        <div className="col-1 col">
          <div className="img-zoom-container">
            <Link to={`/prints`}>
              <img src={printsThumbnail} alt="" />
            </Link>
          </div>
          <Link to={`/prints`} className="hover-underline-animation">
            Prints
          </Link>
        </div>
        <div className="col-2 col">
          <div className="group">
            <div className="col">
              <div className="img-zoom-container">
                <Link to={`/accessories`}>
                  <img src={accessoriesThumbnail} alt="" />
                </Link>
              </div>
              <Link to={`/accessories`} className="hover-underline-animation">
                accessories & bags
              </Link>
            </div>

            <div className="col">
              <div className="img-zoom-container">
                <Link to={`/stationary`}>
                  <img src={stationaryThumbnail} alt="" />
                </Link>
              </div>
              <Link to={`/stationary`} className="hover-underline-animation">
                stationary
              </Link>
            </div>
          </div>
        </div>
        <div className="col-3 col">
          <div className="col-1 col">
            <div className="img-zoom-container">
              <Link to={`/all-item`}>
                <img src={allItemThumbnail} alt="" />
              </Link>
            </div>
            <Link to={`/all-item`} className="hover-underline-animation">
              All Items
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
