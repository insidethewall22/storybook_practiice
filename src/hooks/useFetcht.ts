import { useEffect, useState } from "react";
import React from "react";

// export type apiResponse = {};
export const useFetch = (url: string) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    try {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          setError(response.status + "");
          setIsError(true);
          console.log(error);

          throw new Error("Something went wrong");
        })
        .then((actualData) => {
          console.log(actualData);
          setData(actualData);
        });
    } catch (e: any) {
      setError(e);
      setIsError(true);
      console.log(e);
    }
    setLoading(false);
    console.log(loading);
  }, []);
  return { data, loading, error, isError };
};
