import React from "react";

const RegistrationPartial = () => {
  return (
    <div className="">
      <label>Sign up</label>
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
      </form>
    </div>
  );
};
/*kommentar test*/
/*<!-- This is a comment -->*/ 