import gql from "graphql-tag";
import * as React from "react";
import { useMutation, useQuery } from "react-apollo-hooks";

interface Props {}

export const Todos: React.FC<Props> = () => {
  const { data } = useQuery(
    gql`
      query Todos {
        todos @client {
          id
          text
          complete
        }
      }
    `
  );

  const toggleTodoComplete = useMutation(gql`
    mutation ToggleTodoComplete($id: ID!) {
      toggleTodoComplete(id: $id) @client
    }
  `);

  return (
    <div>
      <h1>todo</h1>
      <button onClick={() => toggleTodoComplete({ variables: { id: 1 } })}>
        toggle
      </button>
      <div>{data.todos && JSON.stringify(data.todos)}</div>
    </div>
  );
};
