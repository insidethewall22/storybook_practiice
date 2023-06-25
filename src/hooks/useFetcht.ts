import { useEffect, useState } from "react";
import React from "react";

// export type apiResponse = {};
export const useFetch = (url: string) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setLoading(true);
    try {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          setError("Something went wrong");
          console.log(error);

          throw new Error("Something went wrong");
        })
        .then((actualData) => {
          console.log(actualData);
          setData(actualData);
        });
    } catch (e: any) {
      setError(e);
      console.log(e);
    }
    setLoading(false);
    console.log(loading);
  }, []);
  return { data, loading, error };
};
