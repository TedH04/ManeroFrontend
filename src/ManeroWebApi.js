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
  const response = await fetch(apiUrl + "/User/SignIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email, password),
  });
  console.log("login successfull")

  return response.status;
};
