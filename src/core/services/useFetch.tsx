import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE, GET_TIPS } from "../../lib";
import { ITIPS } from "../models";

export function useFetch() {
  const [tips, setTips] = useState<ITIPS[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    axios.get(API_BASE + GET_TIPS, { method: "GET" }).then((res: any) => {
      setLoader(false);
      setTips(res?.data[0].body);
    });
  }, []);

  return { tips, loader };
}
