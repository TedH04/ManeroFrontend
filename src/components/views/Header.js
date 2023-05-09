import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="header-main-title">
            <h1>Manero</h1>
          </div>
          <div className="header-shoppingcart-symbol">
            <AiIcons.AiOutlineShoppingCart size={25} />
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div>
              <li key="index" className="nav-text">
                <Link to={"/"}>
                  <IoIcons.IoMdHome />
                  <span>Home</span>
                </Link>
              </li>
              <li key="index" className="nav-text">
                <Link to={"/"}>
                  <IoIcons.IoIosApps />
                  <span>Products</span>
                </Link>
              </li>
              <li key="index" className="nav-text">
                <Link to={"/"}>
                  <IoIcons.IoIosSettings />
                  <span>My Account</span>
                </Link>
              </li>
              <div>
                <p className="sidebar-contact-us">Contact Us</p>
                <div className="about-us-information d-flex align-items-start">
                  <IoIcons.IoMdMap className="map-icon-location me-3" />
                  <div>
                    <p>27 Divison St, New York.</p>
                    <p>NY 10002, USA</p>
                  </div>
                </div>
                <div className="about-us-information d-flex align-items-start">
                  <IoIcons.IoMdMail className="map-icon-location me-3" />
                  <div>
                    <p>ManeroG4@proton.me</p>
                  </div>
                </div>
                <div className="about-us-information d-flex align-items-start">
                  <IoIcons.IoIosPhonePortrait className="map-icon-location me-3" />
                  <div>
                    <p>+46 112 112 12</p>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
