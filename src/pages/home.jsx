import React from "react";
import { Images, Navigations } from "../config";
import {Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
    <Link to={Navigations.Welcome}>
      <div className="general-wrapper splash">
        <img src={Images.STEPOUT} alt="stepout" className="stepout-img"/>
      </div>
    </Link>
    </>
  );
};
