import gql from "graphql-tag";
import * as React from "react";
import { useQuery } from "react-apollo-hooks";

interface Props {}

export const DirectQuery: React.FC<Props> = () => {
  const { data, loading } = useQuery(
    gql`
      query SimplePokemon {
        count @client
        pokemon(name: "Pikachu") {
          maxHP
        }
      }
    `
  );

  // true until slowest query is fetched
  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <h1>Client Query</h1>
      <div>count {data.count}</div>
      <div>Pikachu maxHP: {data.pokemon && data.pokemon.maxHP}</div>
    </div>
  );
};
