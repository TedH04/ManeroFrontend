import React, { useRef } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BackArrow from "../partials/BackArrow";
import VerticalBar from "../partials/VerticalBar";
import SocialMediaPartial from "../partials/SocialMediaPartial";

const NumberRegistration = () => {
  const { addPhoneNumber } = useContext(AuthContext);
  const phoneNumberRef = useRef();
  const navigate = useNavigate;

  const handlePhoneNumberRegistration = async (e) => {
    e.preventDefault();
    try {
      await addPhoneNumber(phoneNumberRef.current.value);
      navigate("/VerificationCode");
      console.log("success phone number registration");
    } catch (error) {
      console.log("error in phone number registration");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="RegHeader">
              <BackArrow />
              <h3>Enter Phone Number</h3>
            </div>

            <VerticalBar />
            <h2 className="text-center my-4">Enter Phone Number</h2>

            <form onSubmit={handlePhoneNumberRegistration} method="post">
              <div className="input-field-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Phone Number"
                  ref={phoneNumberRef}
                />
              </div>
              <button className="BigBlackButton" type="submit">
                Confirm
              </button>
            </form>
            <SocialMediaPartial />
          </div>
        </div>
      </div>
    </>
  );
};
export default NumberRegistration;
