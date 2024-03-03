import React, { Fragment } from "react";
import "./Dashboard.scss";
import { FrTable } from "../../../shared/components";
import { useFetch } from "../../../core/services";
import { useOutletContext } from "react-router-dom";
import { API_BASE, GET_TIPS } from "../../../lib";

export const Dashboard = () => {
  // console.log(useOutletContext());
  
   const { tips, loader } = useFetch(API_BASE + GET_TIPS);
  const busqueda = useOutletContext<string>(); 
  console.log(tips);

  return (
    <Fragment>
      {/* <p>{count}</p> */}
      {/* <button onClick={increment}>{text}</button> */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {loader && <p>Loading...</p>}
            <FrTable key={1} data={tips} busqueda ={busqueda}/>
            {/* <FrTable key={1} data={tips} /> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
