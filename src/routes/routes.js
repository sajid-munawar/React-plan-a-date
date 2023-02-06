import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import { Navigations } from "../config";
import { Home, Login, Register } from "../pages";

export function Routes() {
  return (
    <Router>
      <Route path={Navigations.LOGIN} element={<Login />} />
      <Route path={Navigations.Register} element={<Register />} />
      <Route path='/' element={<Home />} />
    </Router>
  );
}
