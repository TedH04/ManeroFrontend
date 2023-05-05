//imports
import SocialMediaPartial from "../partials/SocialMediaPartial";
import InputBoxPartial from "../partials/InputBoxPartial";
import BackArrow from "../partials/BackArrow";
import VerticalBar from "../partials/VerticalBar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { useContext, useRef, useState } from "react";

const Registration = () => {
  const { signup } = useContext(AuthContext);
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleRegistration = async (e) => {
    console.log("i handle metoden");
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return false;
    } else {
      const nameArray = fullNameRef.current.value.split(" ");
      try {
        await signup(
          nameArray[0],
          nameArray[1],
          emailRef.current.value,
          passwordRef.current.value,
          "+46123456789"
        );
        console.log("success regwindow metod #2");
      } catch {}
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="RegHeader">
              <BackArrow />
              <h3>Sign up</h3>
            </div>

            <VerticalBar />
            <h2 className="text-center my-4">Sign up</h2>

            <form onSubmit={handleRegistration} method="post">
              <div className="input-field-group">
                <label>Name</label>
                <input
                  type="Name"
                  className="input-field"
                  placeholder="Name"
                  ref={fullNameRef}
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
export default Registration;
