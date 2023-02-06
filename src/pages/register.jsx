import React from "react";
import { Images } from "../config";

export const Register = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="logo-holder">
          <img src={Images.LOGO} alt="logo" />
        </div>
        <form className="auth-form">
          <h1>Create An Account.</h1>
          <p>Please enter below details to get registered.</p>
          <div className="split-input">
            <input type="text" />
            <input type="text" />
          </div>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <div>
            <input type="text" />
            <p>Accept Terms & Conditions</p>
          </div>
          <button>Register</button>
          <hr />
          <p>Already have an account?</p>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};
