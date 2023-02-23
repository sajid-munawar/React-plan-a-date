import React from "react";
import { Images, Navigations } from "../config";
import { Link } from "react-router-dom";
import { ArrowButton } from "../components/ArrowButton";

export function Welcome() {
  return (
    <div className="general-wrapper welcome">
      <div className="welcome-container">
        <img src={Images.STEPOUT} alt="stepout" className="stepout-img-we" />
        <h1 className="welcome-h">Welcome</h1>
        <p className="welcome-text">
          Mauris fermentum justo eu finibus blandit. Maecenas congue luctus
          dolor.
        </p>
        <div className="feature-tiny-boxes">
          <div className="feature-blue-box"></div>
          <div className="feature-grey-box"></div>
          <div className="feature-grey-box"></div>
          <div className="feature-grey-box"></div>
        </div>
        <Link to={Navigations.FEATURE1}>
          <ArrowButton classname="arrow-button" />
        </Link>
      </div>
    </div>
  );
}
