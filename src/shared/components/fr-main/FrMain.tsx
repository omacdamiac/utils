import React from "react";
import "./FrMain.scss";
import { Link } from "react-router-dom";

export const FrMain = () => {
  return (
    <>
      <ul>
        <li>
          <span>¡Eres bienvenido a disfrutar y compartir! </span>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link className="login" to="/home">Iniciar sesión</Link>
        </li>
      </ul>
    </>
  );
};
