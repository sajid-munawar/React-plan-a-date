import React from "react";
import { Route } from "react-router-dom";
import { Button } from "../components";

export const Home = () => {
  return (
    <>
      <a href="/register">
        <Button className="btn-filled"> Register </Button>
      </a>
    </>
  );
};
