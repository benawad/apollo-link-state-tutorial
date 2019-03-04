import gql from "graphql-tag";
import * as React from "react";
import { useQuery } from "react-apollo-hooks";

interface Props {}

export const Queries: React.FC<Props> = () => {
  const q1 = useQuery(
    gql`
      query GetCount {
        getCount @client
      }
    `
  );

  // isMaxHPDivisibleByCount is not recomputed if the count changes
  const q2 = useQuery(
    gql`
      query Pokemon {
        pokemon(name: "Pikachu") {
          name
          maxHP
          isMaxHPOdd @client
          isMaxHPDivisibleByCount @client
          randomPerson @client {
            gender
            name {
              title
              first
              last
            }
          }
          isFavorite @client(always: true)
        }
      }
    `
  );

  return (
    <div>
      <h1>Queries</h1>
      <div>count: {q1.data.getCount}</div>
      <div>
        isMaxHPOdd: {q2.data.pokemon && `${q2.data.pokemon.isMaxHPOdd}`}
      </div>
      <div>
        isMaxHPDivisibleByCount:
        {q2.data.pokemon && `${q2.data.pokemon.isMaxHPDivisibleByCount}`}
      </div>
      <div>
        randomPerson:{" "}
        {q2.data.pokemon && JSON.stringify(q2.data.pokemon.randomPerson)}
      </div>
    </div>
  );
};
