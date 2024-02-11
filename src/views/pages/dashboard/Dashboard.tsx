import React, { Fragment, useState, useEffect } from "react";
import "./Dashboard.scss";
import FrTable from "../../../shared/components/fr-table/FrTable";
import { API_BASE, GET_TIPS } from "../../../lib/endpoint.const";
import axios from "axios";

export const Dashboard = (): any => {
  const [tips, setTips]: any = useState([]);

  const getTips = () => {
    let url = API_BASE + GET_TIPS;
    axios.get(url).then((res: any) => {
      console.log(res?.data[0])
      
      setTips(res?.data[0])});
  };
  useEffect(() => {
    getTips();
  }, []);
  return (
    <Fragment>
      {
        tips ?
        <FrTable  key={tips?.id} data={tips} />
        : <span>No hay registros</span>
      }
    </Fragment>
  );
};
