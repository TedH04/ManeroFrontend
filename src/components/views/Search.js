import React from "react";
import ManeroLogo from "../partials/ManeroLogo";
import { useNavigate } from "react-router-dom";
import Navbar from "../partials/Navbar";

const Welcome = () => {
  const navigate = useNavigate();

//   const handleLogoClick = () => {
//     navigate("/Onboarding");
//   };

  return (
    <div className="Search-Container">
      <div>
        {/* <ManeroLogo onClick={handleLogoClick} /> */}
        <div className="Placeholder187x187">Dresses</div>
        <div className="Placeholder187x187">Pants</div>
        <div className="Placeholder375*170">Accessories</div>
        <div className="Placeholder187x187">Shoes</div>
        <div className="Placeholder187x187">T-shirts</div>
        <Navbar/>
      </div>
    </div>
  );
};

export default Welcome;