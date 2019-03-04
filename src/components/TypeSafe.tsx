import * as React from "react";
import { usePokemons } from "../generated/graphql";

interface Props {}

export const TypeSafe: React.FC<Props> = () => {
  const { data } = usePokemons();
  if (!data) {
    return null;
  }
  return (
    <div>
      <h1>TypeSafe</h1>
      <div>count: {data.count}</div>
      <div>
        {data.pokemons &&
          data.pokemons.map(p => <div key={p!.name!}>{p!.name}</div>)}
      </div>
    </div>
  );
};
