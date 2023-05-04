//Bör uppdateras med koden från OnBoardingPartial2V2
import React, { useState } from 'react';
import VerticalBar from "../VerticalBar";
import PageIndicator from "../PageIndicator";

const OnboardingPartial2 = () => {
    const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="welcome-section">
      <div className="welcome-circle">
        <VerticalBar/>
        <div className="welcome-text">Welcome to Manero</div>
        <div className="subtext">Please enjoy our store</div>
        <button className="get-started-btn">Get started</button>
        <PageIndicator currentPage={currentPage} />
      </div>
    </div>
  );
};

export default OnboardingPartial2;
