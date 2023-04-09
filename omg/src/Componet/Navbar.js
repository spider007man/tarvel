import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menuitem } from "./Menuitem";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="nav-item">
        <h1>
          Terval<i className="fa-sharp fa-solid fa-plane-departure"></i>
        </h1>

        <div className="icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "menu-item active" : "menu-item"}>
          {Menuitem.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}>{item.title}</i>{" "}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
