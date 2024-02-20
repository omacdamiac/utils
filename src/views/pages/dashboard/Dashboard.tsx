import React, { Fragment } from "react";
import "./Dashboard.scss";
import FrTable from "../../../shared/components/fr-table/FrTable";
import { useFetch } from "../../../shared/services/useFetch";

export const Dashboard = (): any => {
  const { tips, loader } = useFetch();

  return (
    <Fragment>
      {loader && <p>Loading...</p>}
      <FrTable key={'1'} data={tips} />
    </Fragment>
  );
};
