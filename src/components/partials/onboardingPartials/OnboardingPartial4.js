import React, { useState } from 'react';
import VerticalBar from "../VerticalBar";
import PageIndicator from "../PageIndicator";

const OnboardingPartial4 = () => {
    const [currentPage, setCurrentPage] = useState(3);
  return (
    <div className="welcome-section">
      <div className="welcome-circle">
        <VerticalBar/>
        <div className="welcome-text">Door to Door Delivery!</div>
        <div className="subtext">Please enjoy our store</div>
        <button className="get-started-btn">Get started</button>
        <PageIndicator currentPage={currentPage} />
      </div>
    </div>
  );
};

export default OnboardingPartial4;
