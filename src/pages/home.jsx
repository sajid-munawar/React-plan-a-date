import React from "react";
import { Images } from "../config";
import {Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
    <Link to="/welcome">
      <div className="start-screen-container">
        <img src={Images.STEPOUT} alt="stepout" className="stepout-img"/>
      </div>
    </Link>
    </>
  );
};
