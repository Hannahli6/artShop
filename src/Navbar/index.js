import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };
  const links = ["Home", "Collection", "About Me", "Cart"];
  return (
    <nav className="navbar">
      <a href={`/`} className="nav-logo">
        H
      </a>
      <ul
        className={`nav-menu ${isActive ? "active" : ""}`}
        onClick={ToggleClass}
      >
        {links.map((link, index) => {
          return (
            <li className="nav-item" key={index}>
              <a href={`/`} className="nav-link" >
                {link}
              </a>
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
