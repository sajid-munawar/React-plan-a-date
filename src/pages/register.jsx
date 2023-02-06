import React from "react";
import { Button, Input } from "../components";
import { Images } from "../config";

export const Register = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="logo-holder">
          <img src={Images.LOGO} alt="logo" className="img-fluid"/>
        </div>
        <form className="auth-form">
          <h1>Create An Account.</h1>
          <p>Please enter below details to get registered.</p>
          <div className="split-input">
            <Input type="text" placeholder='First name' name='firstName'/>
            <Input type="text" placeholder='Last name' name='lastName'/>
          </div>
          <Input type="date" />
          <Input type="email" name='name' placeholder='Please Enter email' />
          <Input type="text" name='userName' placeholder='Please enter username'/>
          <div className="terms-conditions">
            <Input type="checkbox" />
            <p>Accept Terms & Conditions</p>
          </div>
          <Button className='btn-filled'>Register</Button>
          <hr className="register-hr"/>
          <p>Already have an account?</p>
          <Button className='btn-empty'>Login</Button>
        </form>
      </div>
    </div>
  );
};
