import React from "react";
import { useState, useEffect, createContext } from "react";
import { registerUser } from "../ManeroWebApi";
import { RegisterUserModel } from "../models/RegisterUserModel";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  // states, effects o.s.v

  // Metoder o.s.v
  const signup = async (
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    profileImage = null
  ) => {
    console.log("i signup metoden");

    const model = new RegisterUserModel();
    model.FirstName = firstName;
    model.LastName = lastName;
    model.Email = email;
    model.Password = password;
    model.PhoneNumber = phoneNumber;
    model.ProfileImage = profileImage;

    console.log("framme vid auth providern");
    const result = await registerUser(model);
    if (result.status === 201) {
      console.log("Användaren har lagts in");
      return true;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
