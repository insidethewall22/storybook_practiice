import { useFetch } from "../../hooks/useFetcht";
import { PokemonCard } from "./PokemonCard";
import { InfiniteFetch } from "../../hooks/InfiniteFetch";
import { Data, SideEffect } from "./PokemonCard";

export type Props = {
  pname?: string | number;
  isInfinite?: boolean;
};

const Pokemon = ({ pname, isInfinite = false }: Props) => {
  const {
    error,
    loading,
    isError,
    sprites,
    name,
    height,
    weight,
    held_items,
    moves,
  }: Data & SideEffect = useFetch(`https://pokeapi.co/api/v2/pokemon/${pname}`);
  console.log(useFetch(`https://pokeapi.co/api/v2/pokemon/${pname}`));

  // in storybook control isInfinite cannot be switched, otherwise meet error: Rendered more hooks than during the previous render.
  // return isInfinite ? InfiniteFetch(1) : <PokemonCard {...data} />;
  // new: fixd by changing InfiniteFetch(1) to  <InfiniteFetch number={1} />
  if (isInfinite) {
    return <InfiniteFetch index={1} />;
  } else {
    return (
      <PokemonCard
        // issue might happen at here
        sprites={sprites}
        name={name}
        height={height}
        weight={weight}
        held_items={held_items}
        moves={moves}
        error={error}
        loading={loading}
        isError={isError}
      />
    );
  }
};

export default Pokemon;
