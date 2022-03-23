import axios from "axios";
import { useCallback, useState, useEffect } from "react";

const useFetchNext = (url) => {
  const [isError, setError] = useState(false);
  const [response, setResponse] = useState([]);

  const fetchNext = useCallback(async () => {
    setError(false);
    try {
      const res = await axios.get(url);

      setResponse(res.data);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  }, [url]);

  useEffect(() => {
    fetchNext();
  }, [fetchNext]);

  return { isError, response, fetchNext };
};

export default useFetchNext;
