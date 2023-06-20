import { useEffect, useState } from "react";
import React from "react";

// export type apiResponse = {};
export const useFetch = <T>(
  url: string
): { data: T | undefined; loading: boolean; error: string } => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("no error");
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
