import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping,} from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom"; 
import { useState } from "react";

function Navbar({backgroundColor}) {
  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive);
  };
  const links = [{name: "Home", path: ""},{name: "Collection", path: "collection"},{name: "About Me", path: "about-me"},{name: "Cart" , path: ""}];
  return (
    <nav className="navbar" style={{backgroundColor: backgroundColor}}>
      <span className="nav-logo">
        H
      </span>
      <ul
        className={`nav-menu ${isActive ? "active" : ""}`}
        onClick={ToggleClass}
      >
        {links.map((link, index) => {
          if(link.name === "Cart"){
            link.name = <FontAwesomeIcon icon={faCartShopping} />
          }
          return (
            <li className="nav-item" key={index}>
            <Link to={`/${link.path}`} className="nav-link hover-underline-animation">{link.name}</Link>
            </li>
          );
        })}
      </ul>
      <div
        className={`hamburger ${isActive ? "active" : ""}`}
        onClick={ToggleClass}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
