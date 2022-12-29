import "./ItemCard.css";
// import { useState } from "react";

function ItemCard({ name, price, imgSrc, link, size }) {
  return (
    <div className="item-card" style={size==="small"? {minWidth: "170px"} : null}>
      <img src={imgSrc} alt="" ></img>
      <div>
        <a href={`/`}>{name}</a>
        <span>${price} CAD</span>
      </div>
    </div>
  );
}

export default ItemCard;
