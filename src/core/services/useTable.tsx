import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE, GET_TABLE } from "../../lib";
import { IHEAD } from "../models";
const initialHeader = {
  table_headers: [],
  table_title: "",
};

export function useTable() {
  const [theaders, setTheaders] = useState<IHEAD>(initialHeader);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    axios.get(API_BASE + GET_TABLE).then((res: any) => {
      setLoad(false);
      setTheaders(res?.data[0]);
    });
  }, []);

  return { theaders, load };
}
