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
      <div className="ScrollingCategories">
        <div className="CategoriesScrollable">MEN</div>
        <div className="CategoriesScrollable">WOMEN</div>
        <div className="CategoriesScrollable">KIDS</div>
        <div className="CategoriesScrollable">ACCESSORIES</div>
        <div className="CategoriesScrollable">DRESSES</div>
        <div className="CategoriesScrollable">PANTS</div>
        <div className="CategoriesScrollable">SHOES</div>
        <div className="CategoriesScrollable">T-SHIRTS</div>

      </div>
      <div className="CategoryRowContainer">
        <div className="Placeholder187x187">Dresses</div>
        <div className="Placeholder187x187">Pants</div>
      </div>

      <div className="Placeholder375x170">Accessories</div>

      <div className="CategoryRowContainer">
        <div className="Placeholder187x187">Shoes</div>
        <div className="Placeholder187x187">T-shirts</div>
      </div>
      <Navbar />
      {/* <ManeroLogo onClick={handleLogoClick} /> */}
    </div>
  );
};

export default Search;
