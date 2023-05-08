import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div onClick={toggleSidebar} className="navbar-toggler">
            <BiMenu size={30} />
          </div>
          <div className="navbar-brand mx-auto">Manero</div>
          <div className="cart-icon">
            <FaShoppingCart size={24} />
          </div>
          <div
            className={`sidebar${showSidebar ? ' show' : ''}`}
            onClick={toggleSidebar}
          >
            <h1>Option 1</h1>
            <h1>Option 2</h1>
            <h1>Option 3</h1>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
