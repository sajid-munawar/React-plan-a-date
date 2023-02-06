import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import { Navigations } from "../config";
import Login from "../pages/login";

export function Routes() {
  return (
    <Router>
      <Route path={Navigations.LOGIN} element={<Login />} />
    </Router>
  );
}
