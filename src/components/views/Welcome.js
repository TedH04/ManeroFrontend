import React from "react";
import ManeroLogo from "../partials/ManeroLogo";
import { useNavigate } from "react-router-dom";
import Navbar from "../partials/Navbar";

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/Onboarding");
  };

  return (
    <div className="Welcome-Container">
      <div>
        <ManeroLogo onClick={handleLogoClick} />
      </div>
      <Navbar/>
    </div>
  );
};

export default Welcome;
