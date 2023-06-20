import React, { useEffect } from "react";
import { ReactNode } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import { Text } from "../Text/Text";

export type Props = {
  pname?: string | number;
};
export const useFetch = (url: string) => {
  const [data, setData] = useState({});
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

const Pokemon = ({ pname }: Props) => {
  const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pname}`);
  console.log(data);

  interface dataFromat {
    sprites: { front_default: string };
    name: string;
    height: number;
    weight: number;
    held_items: { item: { name: string } }[] | [];
  }

  const { sprites, name, height, weight, held_items } = data;
  return (
    <>
      <Card
        type="default"
        header={<img src={sprites?.front_default} />}
        body={
          <div>
            <Text as="h3" children={name}></Text>
            <Text
              as="h2"
              children={`It's height is ${height} and weight is ${weight}.It's weapon is ${
                held_items?.length != 0
                  ? held_items?.map((i) => {
                      return i?.item?.name;
                    })
                  : "nothing"
              }`}
            ></Text>
          </div>
        }
      />
    </>
  );
};

export default Pokemon;
