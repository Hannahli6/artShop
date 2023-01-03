import { Link } from "react-router-dom";
import "./ItemCard.css";

function ItemCard({ name, price, imgSrc, productId, size, description, type }) {
  console.log(imgSrc);
  return (
    <div
      className="item-card"
      style={size === "small" ? { maxWidth: "280px" } : null}
    >
      <Link
        to={{ pathname: `/collection/${productId}` }}
        state={{
          name: name,
          price: price,
          imgSrc: imgSrc,
          description: description,
          type: type,
        }}
      >
        <img src={require(`../assets/${type}/${imgSrc}`)} alt=""></img>
      </Link>
      <div>
        <Link
          to={{ pathname: `/collection/${productId}` }}
          state={{
            name: name,
            price: price,
            imgSrc: imgSrc,
            description: description,
            type: type,
          }}
        >
          {name}
        </Link>
        <span>${price} CAD</span>
      </div>
    </div>
  );
}

export default ItemCard;
