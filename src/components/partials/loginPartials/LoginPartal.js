import React from "react";
import SocialMediaPartial from "../registrationPartials/SocialMediaPartial";

const LoginPartal = () => {
  return (
    <div>
      <div className="">
        <label for="email">EMAIL</label>
        <input type="text" id="email" placeholder="Email" />
        <label for="password">PASSWORD</label>
        <input type="text" id="password" placeholder="Password" />
      </div>

      <div>
        <input type="checkbox" id="rememberMe"></input>
        <label for="rememberMe">Remember me</label>
        {/* Är <i> rätt? */}
        <i>Forgot Password?</i>
      </div>
      <div>
        <button>Sign In</button>
      </div>
      <div>
        <label><i>Don't have an account?</i></label>
      </div>
    </div>
  );
};
export default LoginPartal;
