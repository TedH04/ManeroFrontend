//imports
import SocialMediaPartial from "../partials/SocialMediaPartial";
import InputBoxPartial from "../partials/InputBoxPartial";
import BackArrow from "../partials/BackArrow";
import VerticalBar from "../partials/VerticalBar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { useContext, useRef, useState } from "react";

const Registration = () => {
  const { signup } = useContext(AuthContext);
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleRegistration = async (e) => {
    console.log("i handle metoden");
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return false;
    } else {
      const nameArray = fullNameRef.current.value.split(" ");
      try {
        console.log(
          "success regwindow metod" + " " + nameArray[0] + nameArray[1]
        );
        await signup(
          nameArray[0],
          nameArray[1],
          emailRef.current.value,
          passwordRef.current.value,
          "+46123456789"
        );
        console.log("success regwindow metod #2");
      } catch {}
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="RegHeader">
              <BackArrow />
              <h3>Sign up</h3>
            </div>

            <VerticalBar />
            <h2 className="text-center my-4">Sign up</h2>

            <form onSubmit={handleRegistration} method="post">
              <div className="input-field-group">
                <label>Name</label>
                <input
                  type="Name"
                  className="input-field"
                  placeholder="Name"
                  ref={fullNameRef}
                />
              </div>
              <div className="input-field-group">
                <label>Email</label>
                <input
                  type="Email"
                  className="input-field"
                  placeholder="Email"
                  ref={emailRef}
                />
              </div>
              <div className="input-field-group">
                <label>Password</label>
                <input
                  type="Password"
                  className="input-field"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
              <div className="input-field-group">
                <label>Confirm Password</label>
                <input
                  type="Password"
                  className="input-field"
                  placeholder="Confirm
                Password"
                  ref={confirmPasswordRef}
                />
              </div>

              <button className="BigBlackButton" type="submit">
                Sign Up
              </button>
            </form>

            <p className="text-center my-2">
              Already have an account? <Link to="/Login">Sign in</Link>
            </p>

            {/* Flyttade in i divven, utlösning på full screen */}
            {/* Flyttade in i divven, utlösning på bing chiling 令人不寒而栗*/}
            {/* Spelade skinnflöjt, var skönt */}
            {/* 帮助他们强迫我编码 */}

            <SocialMediaPartial />
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration;

/**
 * 
 *              <div className="input-field-group">
                <label>Email</label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="Email"
                  ref={emailRef}
                />
              </div>
 * import React, { useState } from 'react';

const MyForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues),
    };

    try {
      const response = await fetch('https://your-api-url.com/endpoint', requestOptions);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <input
        type="text"
        name="name"
        className="input-field"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        className="input-field"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        className="input-field"
        placeholder="Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        className="input-field"
        placeholder="Confirm Password"
        onChange={handleChange}
      />
      <button className="BigBlackButton" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default MyForm;

 * 
 * 
 */
