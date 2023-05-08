// Header.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>

          <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`}>
            <div className="navbar-nav">
              <h1 className="nav-item nav-link">Option 1</h1>
              <h1 className="nav-item nav-link">Option 2</h1>
              <h1 className="nav-item nav-link">Option 3</h1>
            </div>
          </div>

          <NavLink to="/" className="navbar-brand">
            Manero
          </NavLink>

          <NavLink to="/cart" className="nav-link">
            <FiShoppingCart />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
