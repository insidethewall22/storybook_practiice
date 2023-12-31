import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";

import { PokemonCard } from "../stories/Pokemon/PokemonCard";

import { Data } from "../stories/Pokemon/PokemonCard";
export const InfiniteFetch = ({ index }: { index: number }) => {
  const [loading, setLoading] = useState(true);
  const [allPokemons, setAllPokemons] = useState<Array<object>>([]);
  const [lastElement, setLastElement] = useState<Element | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [num, setNum] = useState<number>(index);
  const TOTAL_NUMBER: number = 20;

  const observer = useRef(
    new IntersectionObserver((entries) => {
      console.log(entries);

      const first = entries[0];
      if (first.isIntersecting) {
        setNum((no: number) => no + 1);
      }
    })
  );

  useEffect(() => {
    if (num <= TOTAL_NUMBER) {
      setLoading(true);
      try {
        fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
          .then((response) => response.json())
          .then((actualData: object) => {
            // setAllPokemons([...all]);
            setAllPokemons((prev: Array<object>) => {
              console.log([...prev, actualData]);
              return [...prev, actualData];
            });
          });
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
    }
  }, [num]);
  useEffect(() => {
    const currentElement = lastElement;
    console.log(currentElement);

    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(lastElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(lastElement);
      }
    };
  }, [lastElement]);

  return (
    <>
      {allPokemons.length > 0 &&
        allPokemons.map(function <T extends Data>(pokemon: T, i: number) {
          return (
            <div ref={setLastElement} key={i}>
              {i === allPokemons.length - 1 &&
              !loading &&
              num <= TOTAL_NUMBER ? (
                <PokemonCard
                  {...pokemon}
                  error={error}
                  isError={error ? true : false}
                  loading={loading}
                />
              ) : (
                <PokemonCard
                  {...pokemon}
                  error={error}
                  isError={error ? true : false}
                  loading={loading}
                />
              )}
            </div>
          );
        })}
      <>
        {loading && <p>loading...</p>}
        {num - 1 === TOTAL_NUMBER && <p>It is end </p>}
      </>
    </>
  );
};
