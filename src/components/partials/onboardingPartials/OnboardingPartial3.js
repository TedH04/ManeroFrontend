import React, { useState } from 'react';
import VerticalBar from "../VerticalBar";
import PageIndicator from "../PageIndicator";

const OnboardingPartial3 = () => {
    const [currentPage, setCurrentPage] = useState(2);
  return (
    <div className="welcome-section">
      <div className="welcome-circle">
        <VerticalBar/>
        <div className="welcome-text">Easy Track Order!</div>
        <div className="subtext">Please enjoy our store</div>
        <button className="get-started-btn">Get started</button>
        <PageIndicator currentPage={currentPage} />
      </div>
    </div>
  );
};

export default OnboardingPartial3;
