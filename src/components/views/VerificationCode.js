//imports
import SocialMediaPartial from "../partials/SocialMediaPartial";
import InputBoxPartial from "../partials/InputBoxPartial";
import BackArrow from "../partials/BackArrow";
import VerticalBar from "../partials/VerticalBar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { useContext, useRef, useState } from "react";

const VerificationCode = () => {
  function checkInput(element) {
    const value = element.textContent.trim();
    if (value.length === 1 && !isNaN(value)) {
      element.classList.add("grey");
    } else {
      element.classList.remove("grey");
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div className="RegHeader">
            <BackArrow />
            <h3>Verify your phone number</h3>
          </div>

          <h2 className="text-center my-4">Enter your OTP here.</h2>
          <form method="post">
            <div class="cirleOTP-container">
              <div
                class="circleOTP"
                contenteditable="true"
                maxlength="1"
                oninput="checkInput(this)"
              ></div>
              <div
                class="circleOTP"
                contenteditable="true"
                maxlength="1"
                oninput="checkInput(this)"
              ></div>
              <div
                class="circleOTP"
                contenteditable="true"
                maxlength="1"
                oninput="checkInput(this)"
              ></div>
              <div
                class="circleOTP"
                contenteditable="true"
                maxlength="1"
                oninput="checkInput(this)"
              ></div>
              <div
                class="circleOTP"
                contenteditable="true"
                maxlength="1"
                oninput="checkInput(this)"
              ></div>
            </div>

            <button className="BigBlackButton" type="submit">
              Verify
            </button>
          </form>
          <p className="text-center my-2">
            Didn't receive the OTP? <Link to="/NumberReg">Resend.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
