import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/*

1. Install and setup
  * yarn add react-apollo apollo-boost graphql
2. Direct writes

*/

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh",
  resolvers: {}
});

// import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

// const client = new ApolloClient({
//   link: new HttpLink({uri: 'https://graphql-pokemon.now.sh'}),
//   cache: new InMemoryCache(),
//   resolvers: {}
// })

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
