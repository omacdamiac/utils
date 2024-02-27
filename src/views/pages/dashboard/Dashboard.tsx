import React, { Fragment } from "react";
import "./Dashboard.scss";
import { FrTable } from "../../../shared/components";
import { useFetch } from "../../../core/services";

export const Dashboard = (): any => {
  const { tips, loader } = useFetch();
console.log(tips)
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {loader && <p>Loading...</p>}
            <FrTable key={1} data={tips} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
