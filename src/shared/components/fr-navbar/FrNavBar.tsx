import React, { Fragment } from "react";
import "./FrNavBar.scss";

const FrNavBar = () => {
  return (
    <Fragment>
        <div className="container">
          <div className="row align-items-center my-4">
            <div className="col-md-3 text-center">
              <span className="logo"></span>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3 text-end">Carrito </div>
            <div className="clearfix"></div>
          </div>
        </div>
    </Fragment>
  );
};

export default FrNavBar;
