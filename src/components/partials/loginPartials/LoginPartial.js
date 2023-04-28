import React from "react";
import BackArrow from "../BackArrow";

const LoginPartal = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          
        
          <BackArrow/>
          <h2 className="text-center my-4">Sign In</h2>
          <p>Sign in to continue</p>
          <form method="post">
            <div className="input-field-group">
              <label>EMAIL</label>
              <input type="email" className="input-field" placeholder="Email" />
            </div>
            <div className="input-field-group">
              <label>PASSWORD</label>
              <input type="password" className="input-field" placeholder="Password" />
            </div>
            <button className="BigBlackButton" type="submit">Sign In</button>
          </form>
          <p className="text-center my-2">Already have an account?</p>
        </div>
      </div>
    </div>
  );
};
export default LoginPartal;
