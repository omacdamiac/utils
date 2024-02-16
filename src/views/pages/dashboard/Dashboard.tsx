import React, { Fragment } from "react";
import "./Dashboard.scss";
import FrTable from "../../../shared/components/fr-table/FrTable";
import { API_BASE, GET_TIPS } from "../../../lib/endpoint.const";
import { useFetch } from "../../../shared/services/useFetch";

export const Dashboard = (): any => {
  let url = API_BASE + GET_TIPS;
  const { tips, loader } = useFetch(url);

  return (
    <Fragment>
      {loader && <p>Loading...</p>}
      <FrTable key={tips?.id} data={tips} />
    </Fragment>
    //   <Fragment>
    //   {tips ? (
    //     <FrTable key={tips?.id} data={tips} />
    //   ) : (
    //     <span>No hay registros</span>
    //   )}
    // </Fragment>
  );
};
