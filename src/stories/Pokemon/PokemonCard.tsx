import React, { forwardRef, Ref, FC, ReactElement } from "react";
import Card from "../Card/Card";
import { Text } from "../Text/Text";

export const PokemonCard = forwardRef((data: object, ref: Ref<FC>) => {
  // do not know how to correctly provide the types for these variables extracted from the API
  const { sprites, name, height, weight, held_items, error, loading, moves } =
    data;
  const getFourRandom = (arr: Array<object>): Array<object> => {
    const shuffled = arr?.sort(() => 0.5 - Math.random());
    return shuffled?.slice(0, 4);
  };

  if (!error) {
    return (
      <div>
        {/* do not understand why card is not FC type */}
        <Card
          ref={ref}
          type="default"
          loading={loading}
          header={<img src={sprites?.front_default} />}
          body={
            <div>
              <Text as="h3" children={name}></Text>
              <Text
                as="h2"
                children={`It's height is ${height} and weight is ${weight}.It's weapon is ${
                  held_items?.length != 0
                    ? held_items?.map((i: { item: { name: string } }) => {
                        return i?.item?.name;
                      })
                    : "nothing"
                }. It's 4 random moves are ${
                  moves?.length != 0
                    ? getFourRandom(moves)?.map(
                        // do not understand why this has typescript error but above held_items did not meet the error
                        (m: { move: { name: string } }) => {
                          return m?.move?.name;
                        }
                      )
                    : "noting"
                }`}
              ></Text>
            </div>
          }
        />
      </div>
    );
  } else {
    return (
      <>
        <Card
          type="default"
          error={true}
          errorContent={error}
          loading={loading}
        />
      </>
    );
  }
});
