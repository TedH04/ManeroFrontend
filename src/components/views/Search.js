import React, { useState } from "react";
import ManeroLogo from "../partials/ManeroLogo";
import { useNavigate } from "react-router-dom";
import Navbar from "../partials/Navbar";

const Search = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    "MEN",
    "WOMEN",
    "KIDS",
    "ACCESSORIES",
    "DRESSES",
    "PANTS",
    "SHOES",
    "T-SHIRTS",
  ];

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  //   const handleLogoClick = () => {
  //     navigate("/Onboarding");
  //   };
  return (
    <div className="Search-Container">
      <div className="Placeholder375x38">
        <span className="textInsidePlaceholder">Ska ersättas med HEADER</span>
      </div>
      <div className="ScrollingCategories">
        {categories.map((category) => (
          <div
            key={category}
            className={`CategoriesScrollable ${
              selectedCategories.includes(category) ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="CategoryRowContainer">
        <div className="Placeholder187x187">
          <span className="textInsidePlaceholder">DRESSES</span>
        </div>
        <div className="Placeholder187x187">
          <span className="textInsidePlaceholder">PANTS</span>
        </div>
      </div>

      <div className="Placeholder375x170">
        <span className="textInsidePlaceholder">ACCESSORIES</span>
      </div>

      <div className="CategoryRowContainer">
        <div className="Placeholder187x187">
          <span className="textInsidePlaceholder">SHOES</span>
        </div>
        <div className="Placeholder187x187">
          <span className="textInsidePlaceholder">T-SHIRTS</span>
        </div>
      </div>
      <Navbar />
      {/* <ManeroLogo onClick={handleLogoClick} /> */}
    </div>
  );
};

export default Search;
