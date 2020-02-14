import { useState, useEffect } from "react";
import axios from "axios";

export const useApi = (url, initialValue) => {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return { data };
};
