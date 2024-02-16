import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url: string) {
  const [tips, setTips]: any = useState([]);
  const [loader, setLoader]: any = useState(true);

  const getTips = () => {
    setLoader(true);
    // let url = API_BASE + GET_TIPS;
    axios.get(url).then((res: any) => {
      //   console.log(res?.data[0]);
      setLoader(false);
      setTips(res?.data[0]);
    });
  };
  useEffect(() => {
    getTips();
  },[]);

  return { tips, loader };
}
