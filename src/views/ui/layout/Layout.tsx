import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import FrNavBar from "../../../shared/components/fr-navbar/FrNavBar";
import FrBanner from "../../../shared/components/fr-banner/FrBanner";
import { FrMain } from "../../../shared/components/fr-main/FrMain";

const Layout = () => {
  return (
    <Fragment>
      <header className="text-end">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-end">
                <FrMain></FrMain>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </header>
      <FrNavBar></FrNavBar>
      <FrBanner></FrBanner>
      <section className="bg__grays">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Layout;
