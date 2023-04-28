import React from "react";


const RegistrationPartial = () => {
  return (
    <div className="">
        <div>
            <label>Sign up</label>
        </div>
        
        <label>|</label>
        <label>Sign up</label>
        <form>
        <label for="name">NAME</label>
        <input type="text" id="name" placeholder="Full name" />
        <label for="email">EMAIL</label>
        <input type="text" id="email" placeholder="Email" />
        <label for="password">PASSWORD</label>
        <input type="text" id="password" placeholder="Password" />
        <label for="confirmPassword">CONFIRM PASSWORD</label>
        <input type="text" id="confirmPassword" placeholder="Confirm password" />
        <button>Sign Up</button>
        <label>Already have an account?</label>
        {/* Lägg till SIGN IN och koppling till FACEBOOK etc. */}
      </form>
    </div>
  );
};
export default RegistrationPartial;
/*kommentar test*/
/*<!-- This is a comment -->*/

// Bakåtpilen hämtad från:
// https://oblador.github.io/react-native-vector-icons/