import "./Collection.css";
import shopProfile from "../assets/shopProfile.png";

function Collection({backgroundColor}) {
  return (
    <section id="collection" style={{backgroundColor: backgroundColor}}>
      <h2>Collection</h2>
      <div className="collection-container">
        <div className="col-1 col">
          <img src={shopProfile} alt="" />
          <span>Prints</span>
        </div>
        <div className="col-2 col">
          <div className="group">
            <div className="col">
              <img src={shopProfile} alt="" />
              <span>Tote Bag</span>
            </div>
            <div className="col">
              <img src={shopProfile} alt="" />
              <span>Stickers</span>
            </div>
          </div>
        </div>
        <div className="col-3 col">
          <div className="col-1 col">
            <img src={shopProfile} alt="" />
            <span>All Items</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
