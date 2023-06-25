import React, { forwardRef, Ref, FC, ReactElement } from "react";
import Card from "../Card/Card";
import { Text } from "../Text/Text";

export const PokemonCard = forwardRef((data: object, ref: Ref<FC>) => {
  // do not know how to correctly provide the types for these variables extracted from the API
  const { sprites, name, height, weight, held_items, error, loading } = data;

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
                    ? held_items?.map((i: { item: { name: any } }) => {
                        return i?.item?.name;
                      })
                    : "nothing"
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
