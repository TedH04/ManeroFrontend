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
        <Navbar/>
      </div>
    </div>
  );
};

export default Welcome;