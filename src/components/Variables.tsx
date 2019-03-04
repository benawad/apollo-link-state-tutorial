import gql from "graphql-tag";
import * as React from "react";
import { useQuery } from "react-apollo-hooks";

interface Props {}

export const Variables: React.FC<Props> = () => {
  // you can only use @export with @client
  // if you change the value of count this does not automatically refetch
  const { data } = useQuery(
    gql`
      query Pokemons($numPokemons: Int!) {
        count @client @export(as: "numPokemons")
        pokemons(first: $numPokemons) {
          name
        }
      }
    `
  );

  if (!data.pokemons) {
    return null;
  }

  return (
    <div>
      <h1>Export Variables</h1>
      {data.pokemons.map((x: any) => (
        <div key={x.name}>{x.name}</div>
      ))}
    </div>
  );
};
