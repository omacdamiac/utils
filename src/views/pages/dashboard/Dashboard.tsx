import React, { Fragment } from "react";
import "./Dashboard.scss";
import FrTable from "../../../shared/components/fr-table/FrTable";
import { useFetch } from "../../../shared/services/useFetch";

export const Dashboard = (): any => {
  const { tips, loader } = useFetch();

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {loader && <p>Loading...</p>}
            <FrTable key={"1"} data={tips} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
