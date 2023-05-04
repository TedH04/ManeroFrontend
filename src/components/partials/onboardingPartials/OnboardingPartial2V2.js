import React, { useState } from 'react';
import VerticalBar from "../VerticalBar";
import PageIndicator from "../PageIndicator";

const OnboardingPartial2V2 = () => {
    const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="OnboardingPartial2-Container">
      <div className="circle-3">
        <div className="circle-4">
          <VerticalBar />
          <div className="welcome-text">Welcome to Manero</div>
          <div className="subtext">Please enjoy our store</div>
          <button className="get-started-btn">Get started</button>
          <PageIndicator currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
};

export default OnboardingPartial2V2;
