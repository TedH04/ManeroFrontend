import React, { useState, useEffect } from "react";
import { RegisterUserModel } from "./models/RegisterUserModel";

const apiUrl = "https://manerog4webappbackend.azurewebsites.net/api";

export const registerUser = async (RegisterUserModel) => {
  console.log("inside Api");
  const response = await fetch(apiUrl + "/User/SignUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(RegisterUserModel),
  });
  console.log("api success");

  return response.status;
};

export const loginUser = async (email, password) => {
  const response = fetch(apiUrl + "/User/SignIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,  
    }),
  })
  .then(reponse => reponse.text())
  .then(response => {
    console.log(response)
  })
  .catch(err => console.log(err))

  console.log("login successful")

  console.log(response.text());
};


