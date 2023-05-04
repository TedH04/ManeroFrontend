import React, { useState } from "react";
import VerticalBar from "../VerticalBar";
import PageIndicator from "../PageIndicator";

const OnboardingPartial4 = () => {
  const [currentPage, setCurrentPage] = useState(3);
  return (
    <div className="OnboardingPartial2-Container">
      <div className="circle-3">
        <div className="circle-4">
          <VerticalBar />
          <div className="welcome-text">Door to Door Delivery!</div>
          <div className="subtext">lorem ipsum lorem lorem</div>
          <button className="get-started-btn">Get started</button>
          <PageIndicator currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
};

export default OnboardingPartial4;
