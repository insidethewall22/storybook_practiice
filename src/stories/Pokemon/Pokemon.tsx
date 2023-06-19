import React, { useEffect } from "react";
import { ReactNode } from "react";
import { useState } from "react";

export type Props = {
  name?: ReactNode;
  test?: string;
};
export const useFetch = (url: string) => {
  const [data, setData] = useState("123");
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

const Pokemon = ({ name, test }: Props) => {
  const { data } = useFetch("https://pokeapi.co/api/v2/pokemon/clefairy");
  const [x, setX] = useState<string>("test");
  return (
    <>
      {name}
      <p>{x}</p>
      <p>{data["name"]}</p>
      {test}
    </>
  );
};

export default Pokemon;
