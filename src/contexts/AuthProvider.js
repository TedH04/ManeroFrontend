import React from "react";
import { useState, useEffect, createContext } from "react";
import { registerUser, loginUser } from "../ManeroWebApi";
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

  const signIn = async (email, password) => {
    const result = await loginUser(email, password);
    if (result.status === 200){
      console.log(result);
      return result;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signup, signIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
