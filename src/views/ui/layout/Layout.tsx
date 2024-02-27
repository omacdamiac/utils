import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { FrNavBar, Header } from "../../../shared/components";

export const Layout = () => {
  return (
    <Fragment>
      <header className="text-end">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-end">
                <Header></Header>
                {/* <FrMain></FrMain> */}
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </header>
      <FrNavBar></FrNavBar>
      {/* <FrBanner></FrBanner> */}
      <section className="bg__grays">
        <Outlet />
      </section>
    </Fragment>
  );
};
