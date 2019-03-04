import gql from "graphql-tag";
import * as React from "react";
import { useApolloClient, useQuery } from "react-apollo-hooks";

interface Props {}

// Use for simple writes
// writeData does not validate the shape of the data saved to the cache

export const DirectWrite: React.FC<Props> = () => {
  const client = useApolloClient();
  const { data } = useQuery(
    gql`
      {
        count @client
      }
    `
  );

  return (
    <div>
      <h1>Direct Write</h1>
      <button onClick={() => client.writeData({ data: { count: 0 } })}>
        set count
      </button>
      <div>count: {data && data.count}</div>
    </div>
  );
};
