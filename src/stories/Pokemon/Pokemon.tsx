// Could you create a new Story that uses infinite scroll to load pokemon in batches of 20
// E.g. https://dev.to/hey_yogini/infinite-scrolling-in-react-with-intersection-observer-22fh
// That example is leveraging https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
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
  }, [url]);
  // Would be nice to see this error somehow when a I type in an invalid pokemon name
  // either an alert() or instead of rendering the Card the error message is shown
  return { data, loading, error };
};

const Pokemon = ({ pname }: Props) => {
  // When I change the pname in Storybook this data object doesn't update.
  // E.g. if I changed "clefairy" to "mew" the component does update & so does the value
  // assigned to pname but the data object still has clefairy data
  const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pname}`);
  console.log({ data });

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
              // Can you also show 4 random moves from the moves array that is returned in the API?
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
