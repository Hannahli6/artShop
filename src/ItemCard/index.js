import "./ItemCard.css";
// import { useState } from "react";

function ItemCard({name, price, imgSrc, link}) {
  return (
    <div className="item-card">
      <img src={imgSrc} alt=""></img>
      <a href={`/`}>{name}</a>
      <span>${price} CAD</span>
    </div>
  );
}

export default ItemCard;
