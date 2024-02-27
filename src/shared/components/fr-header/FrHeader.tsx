import React, { Fragment } from "react";
import "./FrHeader.scss";
import { Link } from "react-router-dom";

export const Header = (): any => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
          <Link to="/dashboard">
            <span className="logo navbar-toggler"></span>
          </Link>
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
          <div className="spacer"></div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
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
                <Link className="login" to="/home">
                  Iniciar sesión
                </Link>
              </li>
            </ul>
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
          </div>
      </nav>
    </Fragment>
  );
};
