//imports
import SocialMediaPartial from "../partials/SocialMediaPartial";
import InputBoxPartial from "../partials/InputBoxPartial";
import BackArrow from "../partials/BackArrow";
import VerticalBar from "../partials/VerticalBar";

const Registration = () => {
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

            <form method="post">
              <InputBoxPartial
                type="text"
                className="input-field"
                placeholder="Name"
              />
              <InputBoxPartial
                type="Email"
                className="input-field"
                placeholder="Email"
              />
              <InputBoxPartial
                type="Password"
                className="input-field"
                placeholder="Password"
              />
              <InputBoxPartial
                type="Password"
                className="input-field"
                placeholder="Confirm Password"
              />

              <button className="BigBlackButton" type="submit">
                Sign Up
              </button>
            </form>

            <p className="text-center my-2">Already have an account?</p>

            {/* Flyttade in i divven, löste spacing vid full screen */}
            <SocialMediaPartial />
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration;
