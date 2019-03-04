import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import ReactDOM from "react-dom";
import App from "./App";
import { resolvers } from "./resolvers";
import * as serviceWorker from "./serviceWorker";

/*

1. Install and setup
  * yarn add react-apollo apollo-boost graphql
2. Direct writes
3. Mutation resolvers
4. Query cache
5. Initialize cache
6. Use client cache values as variables
7. Write fragment
8. Typescript

*/

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh",
  resolvers: resolvers as any
});

// import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

// const client = new ApolloClient({
//   link: new HttpLink({uri: 'https://graphql-pokemon.now.sh'}),
//   cache: new InMemoryCache(),
//   resolvers: {}
// })

const initData = () =>
  client.writeData({
    data: {
      count: 2,
      todos: [
        {
          __typename: "Todo",
          id: 1,
          text: "wash dishes",
          complete: false
        }
      ]
    }
  });

initData();

// client.resetStore()
client.onResetStore(async () => {
  initData();
});
// client.clearStore()
client.onClearStore(async () => {
  initData();
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
