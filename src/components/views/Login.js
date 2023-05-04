//imports
import BackArrow from "../partials/BackArrow";
import VerticalBar from "../partials/VerticalBar";
import SocialMediaPartial from "../partials/SocialMediaPartial";
import InputBoxPartial from "../partials/InputBoxPartial";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="RegHeader">
              <BackArrow />
              <h3>Login</h3>
            </div>

            <VerticalBar />
            <h2 className="text-center my-4">Login</h2>
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
                Login
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
export default Login;
