import React from "react";
import ManeroLogo from "../partials/ManeroLogo";
import { useNavigate } from "react-router-dom";
import Navbar from "../partials/Navbar";

const Search = () => {
  const navigate = useNavigate();

  //   const handleLogoClick = () => {
  //     navigate("/Onboarding");
  //   };

  return (
    <div className="Search-Container">
      <div>
        {/* <ManeroLogo onClick={handleLogoClick} /> */}
        <div className="row">
          <div className="Placeholder187x187 col">Dresses</div>
          <div className="Placeholder187x187 col" >Pants</div>
        </div>

        <div className="Placeholder375x170">Accessories</div>

        <div className="row">
          <div className="Placeholder187x187 col">Shoes</div>
          <div className="Placeholder187x187 col">T-shirts</div>
        </div>

        
      </div>
    </div>
  );
};

export default Search;
