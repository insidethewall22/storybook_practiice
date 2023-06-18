import { useEffect, useState } from "react";

// export type apiResponse = {};
export const useFetch = (url: string) => {
  const [data, setData] = useState("123");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("no error");
  useEffect(() => {
    setLoading(true);
    try {
      fetch(url)
        .then((response) => response.json())
        .then((actualData) => {
          console.log(actualData);
          setData(actualData);
        });
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
  }, []);
  return { data, loading, error };
};
