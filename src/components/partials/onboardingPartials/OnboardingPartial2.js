import React, { useState } from "react";
import VerticalBar from "../VerticalBar";
import PageIndicator from "../PageIndicator";

const OnboardingPartial2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [textVersion, setTextVersion] = useState(0);

  const texts = [
    { welcome: "Welcome to Manero", subtext: "Please enjoy our store" },
    { welcome: "Discover Manero", subtext: "Find your new favorite items" },
    {
      welcome: "Join the Manero Family",
      subtext: "Get exclusive deals and offers",
    },
  ];

  const handleButtonClick = () => {
    setTextVersion((textVersion + 1) % texts.length);
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };

  return (
    <div className="OnboardingPartial2-Container">
      <div className="circle-3">
        <div className="circle-4">
          <VerticalBar />
          <div className="welcome-text">{texts[textVersion].welcome}</div>
          <div className="subtext">{texts[textVersion].subtext}</div>
          <button className="get-started-btn" onClick={handleButtonClick}>
            Get started
          </button>
          <PageIndicator currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
};

export default OnboardingPartial2;
