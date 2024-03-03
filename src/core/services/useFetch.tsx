import { useEffect, useState } from "react";
import axios from "axios";
import { ITIPS } from "../models";

export const useFetch = (url: string) => {
  const [tips, setTips] = useState<ITIPS[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    axios.get(url, { method: "GET" }).then((res: any) => {
      setLoader(false);
      setTips(res?.data[0].body);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { tips, loader };
};
