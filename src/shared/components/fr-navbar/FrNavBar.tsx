import React, { Fragment } from "react";
import "./FrNavBar.scss";
import { Link } from "react-router-dom";

const FrNavBar = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row align-items-center my-4">
          <div className="col-md-3 text-center">
            <Link to="/dashboard">
              <span className="logo"></span>
            </Link>
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-3 text-end position-relative">
            <span className="apoyo__span">¡Puedes apoyarnos!</span>
            <div className="position-absolute apoyo__yape">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXygN73kw9K5v_oLc5fjN2Tpi1NvcsWX_GRA&usqp=CAU"
                alt=""
              />
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default FrNavBar;
