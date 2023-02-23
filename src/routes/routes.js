import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import { Navigations } from "../config";
import { Feature1, Feature2, Feature3, Home, Login, Register,Welcome } from "../pages";

export function Routes() {
  return (
    <Router>
      <Route path={Navigations.LOGIN} element={<Login />} />
      <Route path={Navigations.Register} element={<Register />} />
      <Route path={Navigations.Home} element={<Home />} />
      <Route path={Navigations.Welcome} element={<Welcome />} />
      <Route path={Navigations.FEATURE1} element={<Feature1 />} />
      <Route path={Navigations.FEATURE2} element={<Feature2 />} />
      <Route path={Navigations.FEATURE3} element={<Feature3 />} />
    </Router>
  );
}
