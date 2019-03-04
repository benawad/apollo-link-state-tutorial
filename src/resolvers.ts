import gql from "graphql-tag";
import {
  MutationResolvers,
  PokemonResolvers,
  QueryResolvers
} from "./generated/graphql";

const countQuery = gql`
  query Count {
    count @client
  }
`;

export const resolvers = {
  Mutation: {
    setCount: (parent, { count }, { cache }, info) => {
      cache.writeData({
        data: {
          count
        }
      });

      return null;
    },
    increment: (parent, args, { cache }) => {
      let data;
      try {
        // if query does not exist in the cache it will throw an error
        data = cache.readQuery({
          query: countQuery
        });
      } catch {}

      cache.writeData({
        data: {
          count: data ? data.count + 1 : 1
        }
      });

      return null;
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
        query: countQuery
      });

      return count;
    }
  },
  Pokemon: {
    isMaxHPOdd: parent => {
      return parent.maxHP! % 2 !== 0;
    },
    isMaxHPDivisibleByCount: (parent, args, { cache }) => {
      const { count } = cache.readQuery({
        query: countQuery
      });

      return parent.maxHP! % count === 0;
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
} as {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
  Pokemon: PokemonResolvers;
};
