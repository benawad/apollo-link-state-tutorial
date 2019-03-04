import gql from "graphql-tag";
import * as React from "react";
import { useQuery } from "react-apollo-hooks";

interface Props {}

export const ClientQuery: React.FC<Props> = () => {
  const { data, loading } = useQuery(
    gql`
      {
        count @client
      }
    `
  );

  if (loading) {
    console.log("loading!");
    return <div>...loading</div>;
  }

  return (
    <div>
      <h1>Client Query</h1>
      <div>count {data && data.count}</div>
    </div>
  );
};
