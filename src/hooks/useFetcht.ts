import { useEffect, useState } from "react";
import React from "react";
import { Data, SideEffect } from "../stories/Pokemon/PokemonCard";
// export type apiResponse = {};
export const useFetch = (url: string): Data & SideEffect => {
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
          } else {
            return response.text().then((text) => {
              setError(text + "");
              setIsError(true);
              throw new Error(text);
            });
          }
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
  const { sprites, name, height, weight, held_items, moves }: any = data;
  return {
    sprites,
    name,
    height,
    weight,
    held_items,
    moves,
    loading,
    error,
    isError,
  };
};
