import React from "react";
import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  // states, effects o.s.v

  // Metoder o.s.v

  return (
    <AuthContext.Provider
      value={
        {
          /*metoder och states du vill exportera*/
        }
      }
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
