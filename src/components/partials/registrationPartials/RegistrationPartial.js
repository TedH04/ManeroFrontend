import React from "react";
import BackArrow from "../BackArrow";
import VerticalBar from "../VerticalBar";

const RegistrationPartial = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          
        <div className="RegHeader">
          <BackArrow/>
          <h3>Sign up</h3>
          </div>
          
          <VerticalBar/>
          <h2 className="text-center my-4">Sign up</h2>
          <form method="post">
            <div className="input-field-group">
              <label>NAME</label>
              <input type="text" className="input-field" placeholder="Full name" />
            </div>
            <div className="input-field-group">
              <label>EMAIL</label>
              <input type="email" className="input-field" placeholder="Email" />
            </div>
            <div className="input-field-group">
              <label>PASSWORD</label>
              <input type="password" className="input-field" placeholder="Password" />
            </div>
            <div className="input-field-group">
              <label>CONFIRM PASSWORD</label>
              <input type="password" className="input-field" placeholder="Confirm password" />
            </div>
            <button className="BigBlackButton" type="submit">Sign Up</button>
          </form>
          <p className="text-center my-2">Already have an account?</p>
          {/* Add SIGN IN and links to FACEBOOK, etc. */}
        </div>
      </div>
    </div>
  );
};

export default RegistrationPartial;

/*kommentar test*/
/*<!-- This is a comment -->*/

// Bakåtpilen hämtad från:
// https://oblador.github.io/react-native-vector-icons/