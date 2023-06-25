import React, { useEffect } from "react";
import { ReactNode } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import { Text } from "../Text/Text";
import { useFetch } from "../../hooks/useFetcht";
import { PokemonCard } from "./PokemonCard";
import { InfiniteFetch } from "../../hooks/InfiniteFetch";

export type Props = {
  pname?: string | number;
  isInfinite?: boolean;
};

const Pokemon = ({ pname, isInfinite = false }: Props) => {
  const { data, error, loading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${pname}`
  );

  interface dataFromat {
    sprites: { front_default: string };
    name: string;
    height: number;
    weight: number;
    held_items: { item: { name: string } }[] | [];
  }
  // in storybook control isInfinite cannot be switched, otherwise meet error: Rendered more hooks than during the previous render.
  // return isInfinite ? InfiniteFetch(1) : <PokemonCard {...data} />;
  // new: fixd by changing InfiniteFetch(1) to  <InfiniteFetch number={1} />
  if (isInfinite) {
    return <InfiniteFetch number={1} />;
  } else {
    return <PokemonCard {...data} error={error} loading={loading} />;
  }
};

export default Pokemon;
