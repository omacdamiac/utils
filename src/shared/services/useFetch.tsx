import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE, GET_TIPS } from "../../lib";

export function useFetch() {
  const [tips, setTips] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    axios.get(API_BASE + GET_TIPS).then((res: any) => {
      setLoader(false);
      setTips(res?.data[0]);
    });
  }, []);

  return { tips, loader };
}
