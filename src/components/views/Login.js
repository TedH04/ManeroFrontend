//imports
import BackArrow from "../partials/BackArrow";
import VerticalBar from "../partials/VerticalBar";
import SocialMediaPartial from "../partials/registrationPartials/SocialMediaPartial";

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
              <div className="input-field-group">
                <label>EMAIL</label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="Email"
                />
              </div>
              <div className="input-field-group">
                <label>PASSWORD</label>
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                />
              </div>
              <button className="BigBlackButton" type="submit">
                Login
              </button>
            </form>
            <p className="text-center my-2">Already have an account?</p>
            {/* Add SIGN IN and links to FACEBOOK, etc. */}
          </div>
        </div>
      </div>
      <SocialMediaPartial />
    </>
  );
};
export default Login;
