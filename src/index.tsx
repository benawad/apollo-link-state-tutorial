import ApolloClient, { gql } from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/*

1. Install and setup
  * yarn add react-apollo apollo-boost graphql
2. Direct writes
3. Mutation resolvers
4. Query cache
5. Use client cache values as variables
6. Write fragment

*/

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh",
  resolvers: {
    Mutation: {
      setCount: (parent, { count }, { cache }, info) => {
        cache.writeData({
          data: {
            count
          }
        });
      },
      increment: (parent, args, { cache }) => {
        let data;
        try {
          // if query does not exist in the cache it will throw an error
          data = cache.readQuery({
            query: gql`
              {
                count @client
              }
            `
          });
        } catch {}

        cache.writeData({
          data: {
            count: data ? data.count + 1 : 1
          }
        });
      },
      toggleTodoComplete: (parent, { id }, { cache, getCacheKey }) => {
        const cacheId = getCacheKey({ __typename: "Todo", id });
        const fragment = gql`
          fragment completeTodo on Todo {
            complete
          }
        `;
        const todo = cache.readFragment({ fragment, id: cacheId });
        cache.writeFragment({
          fragment,
          id: cacheId,
          data: {
            ...todo,
            complete: !todo.complete
          }
        });
        return null;
      }
    },
    Query: {
      getCount: (parent, args, { cache }) => {
        const { count } = cache.readQuery({
          query: gql`
            {
              count @client
            }
          `
        });

        return count;
      }
    },
    Pokemon: {
      isMaxHPOdd: parent => {
        return parent.maxHP % 2 !== 0;
      },
      isMaxHPDivisibleByCount: (parent, args, { cache }) => {
        const { count } = cache.readQuery({
          query: gql`
            {
              count @client
            }
          `
        });

        return parent.maxHP % count === 0;
      },
      randomPerson: async parent => {
        const response = await fetch(
          `https://randomuser.me/api?seed=${parent.maxHP}`
        );
        const json = await response.json();
        const [data] = json.results;
        return {
          __typename: "Person",
          ...data,
          name: {
            __typename: "Name",
            ...data.name
          }
        };
      },
      isFavorite(parent) {
        return localStorage.getItem("favoritePokemon") === parent.name;
      }
    }
  }
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
