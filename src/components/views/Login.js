//imports
import BackArrow from "../partials/BackArrow";
import VerticalBar from "../partials/VerticalBar";
import SocialMediaPartial from "../partials/SocialMediaPartial";
import InputBoxPartial from "../partials/InputBoxPartial";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="RegHeader">
              <BackArrow />
              <h3>Sign in</h3>
            </div>

            <VerticalBar />
            <h2 className="text-center my-4">Sign in</h2>
            <form method="post">
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
              <button className="BigBlackButton" type="submit">
                Sign in
              </button>
            </form>
            <p className="text-center my-2">
              Don't have an account? <Link to="/Register">Sign up</Link>
            </p>
            {/* Flyttade in i divven, löste spacing vid full screen */}
            <SocialMediaPartial />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
