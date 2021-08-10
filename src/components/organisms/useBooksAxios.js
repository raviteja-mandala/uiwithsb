import axios from "axios";
import { useEffect, useState } from "react";

const useBooksAxios = (url, method) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    setTimeout(() => {
      axios[method](url)
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setloading(false);
        });
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, [method, url]);

  return [response, setResponse, error, loading];
};

export default useBooksAxios;
