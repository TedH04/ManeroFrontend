//imports
import SocialMediaPartial from "../partials/SocialMediaPartial";
import InputBoxPartial from "../partials/InputBoxPartial";
import BackArrow from "../partials/BackArrow";
import VerticalBar from "../partials/VerticalBar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { useContext, useRef, useState } from "react";

const VerificationCode = () => {
  const [inputValues, setInputValues] = useState(Array(5).fill(""));

  function handleInput(event, index) {
    const value = event.target.value.trim();
    if (value.length === 1 && !isNaN(value)) {
      const newInputValues = [...inputValues];
      newInputValues[index] = value;
      setInputValues(newInputValues);
    }
  }

  return (
    <>
      <div className="RegHeader">
        <BackArrow />
        <h3>Verify your phone number</h3>
      </div>
      <div className="mycirclecontainer">
        <h2 className="text-center my-4">Enter your OTP here.</h2>

        <form method="post">
          <div className="cirleOTP-container">
            {inputValues.map((value, index) => (
              <div className={`circleOTP ${value ? "filled" : ""}`} key={index}>
                <input
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleInput(e, index)}
                />
              </div>
            ))}
          </div>
          <button className="BigBlackButton" type="submit">
            Verify
          </button>
        </form>
        <p className="text-center my-2">
          Didn't receive the OTP? <Link to="/NumberReg">Resend.</Link>
        </p>
      </div>
    </>
  );
};

export default VerificationCode;
