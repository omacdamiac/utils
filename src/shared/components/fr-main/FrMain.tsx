import React from "react";
import "./FrMain.scss";
import { Link } from "react-router-dom";

export const FrMain = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </>
  );
};
