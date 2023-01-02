import { Link } from "react-router-dom";
import "./ItemCard.css";

function ItemCard({ name, price, imgSrc, productId, size, description , type}) {
  return (
    <div
      className="item-card"
      style={size === "small" ? { minWidth: "170px" } : null}
    >
      <img src={imgSrc} alt=""></img>
      <div>
        <Link
          to={{ pathname: `/collection/${productId}` }}
          state={{ name: name, price: price, imgSrc: imgSrc, description: description, type: type}}
        >
          {name}
        </Link>
        <span>${price} CAD</span>
      </div>
    </div>
  );
}

export default ItemCard;
