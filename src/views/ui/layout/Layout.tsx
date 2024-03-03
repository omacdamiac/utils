import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { FrNavBar, Header } from "../../../shared/components";

export const Layout = () => {
  const [caracteres, setCaracteres] = useState(); // recibe data de navBar
  // console.log(caracteres);
  // const [text, setText] = useState();        //Envia data al OutLet
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
      <p>{caracteres}</p>
      <FrNavBar
        caracteres={caracteres}
        setCaracteres={setCaracteres}
      ></FrNavBar>
      {/* <FrBanner></FrBanner> */}
      <section className="bg__grays">
        <Outlet context={caracteres} />
        {/* <Outlet /> */}
      </section>
    </Fragment>
  );
};
