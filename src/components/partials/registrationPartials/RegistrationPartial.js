import React from "react";

const RegistrationPartial = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <h2 className="text-center my-4">Sign up</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input type="text" className="form-control" id="name" placeholder="Full name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
              <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
            </div>
            <button className="btn btn-primary btn-block">Sign Up</button>
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