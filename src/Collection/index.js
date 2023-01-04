import { Outlet, Link } from "react-router-dom";
import "./Collection.css";
import accessoriesThumbnail from "../assets/accessories-thumbnail.jpg"
import stationaryThumbnail from "../assets/stationary-thumbnail.jpg"
import printsThumbnail from "../assets/prints-thumbnail.jpg"
import allItemThumbnail from "../assets/all-item-thumbnail.jpg"

function Collection({ backgroundColor }) {
  return (
    <section id="collection" style={{ backgroundColor: backgroundColor }}>
      <h2>Collection</h2>

      <div className="collection-container">
        <div className="col-1 col">
          <Link to={`/prints`}>
            <img src={printsThumbnail} alt="" />
          </Link>
          <Link to={`/prints`}>Prints</Link>
        </div>

        <div className="col-2 col">
          <div className="group">
            <div className="col">
              <Link to={`/accessories`}>
                <img src={accessoriesThumbnail} alt="" />
              </Link>
              <Link to={`/accessories`}>accessories & bags</Link>
            </div>

            <div className="col">
              <Link to={`/stationary`}>
                <img src={stationaryThumbnail} alt="" />
              </Link>
              <Link to={`/stationary`}>stationary</Link>
            </div>
          </div>
        </div>
        <div className="col-3 col">
          <div className="col-1 col">
            <Link to={`/all-item`}>
              <img src={allItemThumbnail} alt="" />
            </Link>
            <Link to={`/all-item`}>All Items</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
