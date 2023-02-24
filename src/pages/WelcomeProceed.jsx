import React from "react";
import { Button } from "../components/button";
import { Images, Navigations } from "../config";
import { Link } from "react-router-dom";

export function WelcomeProceed() {
  return (
    <div className="general-wrapper bg-blue">
      <div className="logo-holder">
        <img src={Images.LOGO} alt="logo" className="img-fluid" />
      </div>
      <div className="content-container bottom-fixed">
        <h1 className="proceed-h1">How would you like to proceed?</h1>
        <Link to={Navigations.REGISTER}>
            <Button className="btn-filled">Register</Button>
        </Link>
        <Link to={Navigations.LOGIN}>
            <Button className="btn-empty proceed-login">Login</Button>
        </Link>
      </div>
    </div>
  );
}
