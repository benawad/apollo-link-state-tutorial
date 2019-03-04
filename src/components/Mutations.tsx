import gql from "graphql-tag";
import * as React from "react";
import { useMutation } from "react-apollo-hooks";

interface Props {}

export const Mutations: React.FC<Props> = () => {
  const setCount = useMutation(gql`
    mutation SetCount($count: Int!) {
      setCount(count: $count) @client
    }
  `);

  return (
    <div>
      <h1>Mutations</h1>

      <button
        onClick={() =>
          setCount({
            variables: {
              count: 12
            }
          })
        }
      >
        set count resolver
      </button>
    </div>
  );
};
