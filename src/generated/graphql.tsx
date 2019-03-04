export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

export type SimplePokemonVariables = {};

export type SimplePokemonQuery = {
  __typename?: "Query";

  count: Maybe<number>;

  pokemon: Maybe<SimplePokemonPokemon>;
};

export type SimplePokemonPokemon = {
  __typename?: "Pokemon";

  maxHP: Maybe<number>;
};

export type IncrementVariables = {};

export type IncrementMutation = {
  __typename?: "Mutation";

  increment: Maybe<number>;
};

export type SetCountVariables = {
  count: number;
};

export type SetCountMutation = {
  __typename?: "Mutation";

  setCount: Maybe<number>;
};

export type GetCountVariables = {};

export type GetCountQuery = {
  __typename?: "Query";

  getCount: Maybe<number>;
};

export type PokemonVariables = {};

export type PokemonQuery = {
  __typename?: "Query";

  pokemon: Maybe<PokemonPokemon>;
};

export type PokemonPokemon = {
  __typename?: "Pokemon";

  name: Maybe<string>;

  maxHP: Maybe<number>;

  isMaxHPOdd: boolean;

  isMaxHPDivisibleByCount: boolean;

  randomPerson: Maybe<PokemonRandomPerson>;

  isFavorite: Maybe<boolean>;
};

export type PokemonRandomPerson = {
  __typename?: "Person";

  gender: Maybe<string>;

  name: Maybe<PokemonName>;
};

export type PokemonName = {
  __typename?: "Name";

  title: Maybe<string>;

  first: Maybe<string>;

  last: Maybe<string>;
};

export type TodosVariables = {};

export type TodosQuery = {
  __typename?: "Query";

  todos: Maybe<TodosTodos>;
};

export type TodosTodos = {
  __typename?: "Todo";

  id: string;

  text: Maybe<string>;

  complete: Maybe<boolean>;
};

export type ToggleTodoCompleteVariables = {
  id: string;
};

export type ToggleTodoCompleteMutation = {
  __typename?: "Mutation";

  toggleTodoComplete: Maybe<boolean>;
};

export type PokemonsVariables = {
  numPokemons: number;
};

export type PokemonsQuery = {
  __typename?: "Query";

  count: Maybe<number>;

  pokemons: Maybe<(Maybe<PokemonsPokemons>)[]>;
};

export type PokemonsPokemons = {
  __typename?: "Pokemon";

  name: Maybe<string>;
};

import gql from "graphql-tag";
import * as ReactApolloHooks from "react-apollo-hooks";

// ====================================================
// Components
// ====================================================

export const SimplePokemonDocument = gql`
  query SimplePokemon {
    count @client
    pokemon(name: "Pikachu") {
      maxHP
    }
  }
`;
export function useSimplePokemon(
  baseOptions?: ReactApolloHooks.QueryHookOptions<SimplePokemonVariables>
) {
  return ReactApolloHooks.useQuery<SimplePokemonQuery, SimplePokemonVariables>(
    SimplePokemonDocument,
    baseOptions
  );
}
export const IncrementDocument = gql`
  mutation Increment {
    increment @client
  }
`;
export function useIncrement(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    IncrementMutation,
    IncrementVariables
  >
) {
  return ReactApolloHooks.useMutation<IncrementMutation, IncrementVariables>(
    IncrementDocument,
    baseOptions
  );
}
export const SetCountDocument = gql`
  mutation SetCount($count: Int!) {
    setCount(count: $count) @client
  }
`;
export function useSetCount(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    SetCountMutation,
    SetCountVariables
  >
) {
  return ReactApolloHooks.useMutation<SetCountMutation, SetCountVariables>(
    SetCountDocument,
    baseOptions
  );
}
export const GetCountDocument = gql`
  query GetCount {
    getCount @client
  }
`;
export function useGetCount(
  baseOptions?: ReactApolloHooks.QueryHookOptions<GetCountVariables>
) {
  return ReactApolloHooks.useQuery<GetCountQuery, GetCountVariables>(
    GetCountDocument,
    baseOptions
  );
}
export const PokemonDocument = gql`
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
`;
export function usePokemon(
  baseOptions?: ReactApolloHooks.QueryHookOptions<PokemonVariables>
) {
  return ReactApolloHooks.useQuery<PokemonQuery, PokemonVariables>(
    PokemonDocument,
    baseOptions
  );
}
export const TodosDocument = gql`
  query Todos {
    todos @client {
      id
      text
      complete
    }
  }
`;
export function useTodos(
  baseOptions?: ReactApolloHooks.QueryHookOptions<TodosVariables>
) {
  return ReactApolloHooks.useQuery<TodosQuery, TodosVariables>(
    TodosDocument,
    baseOptions
  );
}
export const ToggleTodoCompleteDocument = gql`
  mutation ToggleTodoComplete($id: ID!) {
    toggleTodoComplete(id: $id) @client
  }
`;
export function useToggleTodoComplete(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    ToggleTodoCompleteMutation,
    ToggleTodoCompleteVariables
  >
) {
  return ReactApolloHooks.useMutation<
    ToggleTodoCompleteMutation,
    ToggleTodoCompleteVariables
  >(ToggleTodoCompleteDocument, baseOptions);
}
export const PokemonsDocument = gql`
  query Pokemons($numPokemons: Int!) {
    count @client @export(as: "numPokemons")
    pokemons(first: $numPokemons) {
      name
    }
  }
`;
export function usePokemons(
  baseOptions?: ReactApolloHooks.QueryHookOptions<PokemonsVariables>
) {
  return ReactApolloHooks.useQuery<PokemonsQuery, PokemonsVariables>(
    PokemonsDocument,
    baseOptions
  );
}

// ====================================================
// Types
// ====================================================

/** Query any Pokémon by number or name */
export interface Query {
  query?: Maybe<Query>;

  pokemons?: Maybe<(Maybe<Pokemon>)[]>;

  pokemon?: Maybe<Pokemon>;

  getCount?: Maybe<number>;

  count?: Maybe<number>;

  todos?: Maybe<Todo>;
}

/** Represents a Pokémon */
export interface Pokemon {
  /** The ID of an object */
  id: string;
  /** The identifier of this Pokémon */
  number?: Maybe<string>;
  /** The name of this Pokémon */
  name?: Maybe<string>;
  /** The minimum and maximum weight of this Pokémon */
  weight?: Maybe<PokemonDimension>;
  /** The minimum and maximum weight of this Pokémon */
  height?: Maybe<PokemonDimension>;
  /** The classification of this Pokémon */
  classification?: Maybe<string>;
  /** The type(s) of this Pokémon */
  types?: Maybe<(Maybe<string>)[]>;
  /** The type(s) of Pokémons that this Pokémon is resistant to */
  resistant?: Maybe<(Maybe<string>)[]>;
  /** The attacks of this Pokémon */
  attacks?: Maybe<PokemonAttack>;
  /** The type(s) of Pokémons that this Pokémon weak to */
  weaknesses?: Maybe<(Maybe<string>)[]>;

  fleeRate?: Maybe<number>;
  /** The maximum CP of this Pokémon */
  maxCP?: Maybe<number>;
  /** The evolutions of this Pokémon */
  evolutions?: Maybe<(Maybe<Pokemon>)[]>;
  /** The evolution requirements of this Pokémon */
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  /** The maximum HP of this Pokémon */
  maxHP?: Maybe<number>;

  image?: Maybe<string>;

  isMaxHPOdd: boolean;

  isMaxHPDivisibleByCount: boolean;

  randomPerson?: Maybe<Person>;

  isFavorite?: Maybe<boolean>;
}

/** Represents a Pokémon's dimensions */
export interface PokemonDimension {
  /** The minimum value of this dimension */
  minimum?: Maybe<string>;
  /** The maximum value of this dimension */
  maximum?: Maybe<string>;
}

/** Represents a Pokémon's attack types */
export interface PokemonAttack {
  /** The fast attacks of this Pokémon */
  fast?: Maybe<(Maybe<Attack>)[]>;
  /** The special attacks of this Pokémon */
  special?: Maybe<(Maybe<Attack>)[]>;
}

/** Represents a Pokémon's attack types */
export interface Attack {
  /** The name of this Pokémon attack */
  name?: Maybe<string>;
  /** The type of this Pokémon attack */
  type?: Maybe<string>;
  /** The damage of this Pokémon attack */
  damage?: Maybe<number>;
}

/** Represents a Pokémon's requirement to evolve */
export interface PokemonEvolutionRequirement {
  /** The amount of candy to evolve */
  amount?: Maybe<number>;
  /** The name of the candy to evolve */
  name?: Maybe<string>;
}

export interface Person {
  gender?: Maybe<string>;

  name?: Maybe<Name>;
}

export interface Name {
  title?: Maybe<string>;

  first?: Maybe<string>;

  last?: Maybe<string>;
}

export interface Todo {
  id: string;

  text?: Maybe<string>;

  complete?: Maybe<boolean>;
}

export interface Mutation {
  setCount?: Maybe<number>;

  increment?: Maybe<number>;

  toggleTodoComplete?: Maybe<boolean>;
}

// ====================================================
// Arguments
// ====================================================

export interface PokemonsQueryArgs {
  first: number;
}
export interface PokemonQueryArgs {
  id?: Maybe<string>;

  name?: Maybe<string>;
}
export interface SetCountMutationArgs {
  count?: Maybe<number>;
}
export interface ToggleTodoCompleteMutationArgs {
  id: string;
}

import { GraphQLResolveInfo } from "graphql";

import { MyContext } from "../context";

export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  TContext = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
  | ISubscriptionResolverObject<Result, Parent, TContext, Args>;

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
  parent: Parent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Query any Pokémon by number or name */
export interface QueryResolvers<TContext = MyContext, TypeParent = {}> {
  query?: QueryQueryResolver<Maybe<Query>, TypeParent, TContext>;

  pokemons?: QueryPokemonsResolver<
    Maybe<(Maybe<Pokemon>)[]>,
    TypeParent,
    TContext
  >;

  pokemon?: QueryPokemonResolver<Maybe<Pokemon>, TypeParent, TContext>;

  getCount?: QueryGetCountResolver<Maybe<number>, TypeParent, TContext>;

  count?: QueryCountResolver<Maybe<number>, TypeParent, TContext>;

  todos?: QueryTodosResolver<Maybe<Todo>, TypeParent, TContext>;
}

export type QueryQueryResolver<
  R = Maybe<Query>,
  Parent = {},
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type QueryPokemonsResolver<
  R = Maybe<(Maybe<Pokemon>)[]>,
  Parent = {},
  TContext = MyContext
> = Resolver<R, Parent, TContext, QueryPokemonsArgs>;
export interface QueryPokemonsArgs {
  first: number;
}

export type QueryPokemonResolver<
  R = Maybe<Pokemon>,
  Parent = {},
  TContext = MyContext
> = Resolver<R, Parent, TContext, QueryPokemonArgs>;
export interface QueryPokemonArgs {
  id?: Maybe<string>;

  name?: Maybe<string>;
}

export type QueryGetCountResolver<
  R = Maybe<number>,
  Parent = {},
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type QueryCountResolver<
  R = Maybe<number>,
  Parent = {},
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type QueryTodosResolver<
  R = Maybe<Todo>,
  Parent = {},
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
/** Represents a Pokémon */
export interface PokemonResolvers<TContext = MyContext, TypeParent = Pokemon> {
  /** The ID of an object */
  id?: PokemonIdResolver<string, TypeParent, TContext>;
  /** The identifier of this Pokémon */
  number?: PokemonNumberResolver<Maybe<string>, TypeParent, TContext>;
  /** The name of this Pokémon */
  name?: PokemonNameResolver<Maybe<string>, TypeParent, TContext>;
  /** The minimum and maximum weight of this Pokémon */
  weight?: PokemonWeightResolver<Maybe<PokemonDimension>, TypeParent, TContext>;
  /** The minimum and maximum weight of this Pokémon */
  height?: PokemonHeightResolver<Maybe<PokemonDimension>, TypeParent, TContext>;
  /** The classification of this Pokémon */
  classification?: PokemonClassificationResolver<
    Maybe<string>,
    TypeParent,
    TContext
  >;
  /** The type(s) of this Pokémon */
  types?: PokemonTypesResolver<Maybe<(Maybe<string>)[]>, TypeParent, TContext>;
  /** The type(s) of Pokémons that this Pokémon is resistant to */
  resistant?: PokemonResistantResolver<
    Maybe<(Maybe<string>)[]>,
    TypeParent,
    TContext
  >;
  /** The attacks of this Pokémon */
  attacks?: PokemonAttacksResolver<Maybe<PokemonAttack>, TypeParent, TContext>;
  /** The type(s) of Pokémons that this Pokémon weak to */
  weaknesses?: PokemonWeaknessesResolver<
    Maybe<(Maybe<string>)[]>,
    TypeParent,
    TContext
  >;

  fleeRate?: PokemonFleeRateResolver<Maybe<number>, TypeParent, TContext>;
  /** The maximum CP of this Pokémon */
  maxCP?: PokemonMaxCpResolver<Maybe<number>, TypeParent, TContext>;
  /** The evolutions of this Pokémon */
  evolutions?: PokemonEvolutionsResolver<
    Maybe<(Maybe<Pokemon>)[]>,
    TypeParent,
    TContext
  >;
  /** The evolution requirements of this Pokémon */
  evolutionRequirements?: PokemonEvolutionRequirementsResolver<
    Maybe<PokemonEvolutionRequirement>,
    TypeParent,
    TContext
  >;
  /** The maximum HP of this Pokémon */
  maxHP?: PokemonMaxHpResolver<Maybe<number>, TypeParent, TContext>;

  image?: PokemonImageResolver<Maybe<string>, TypeParent, TContext>;

  isMaxHPOdd?: PokemonIsMaxHpOddResolver<boolean, TypeParent, TContext>;

  isMaxHPDivisibleByCount?: PokemonIsMaxHpDivisibleByCountResolver<
    boolean,
    TypeParent,
    TContext
  >;

  randomPerson?: PokemonRandomPersonResolver<
    Maybe<Person>,
    TypeParent,
    TContext
  >;

  isFavorite?: PokemonIsFavoriteResolver<Maybe<boolean>, TypeParent, TContext>;
}

export type PokemonIdResolver<
  R = string,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonNumberResolver<
  R = Maybe<string>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonNameResolver<
  R = Maybe<string>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonWeightResolver<
  R = Maybe<PokemonDimension>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonHeightResolver<
  R = Maybe<PokemonDimension>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonClassificationResolver<
  R = Maybe<string>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonTypesResolver<
  R = Maybe<(Maybe<string>)[]>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonResistantResolver<
  R = Maybe<(Maybe<string>)[]>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonAttacksResolver<
  R = Maybe<PokemonAttack>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonWeaknessesResolver<
  R = Maybe<(Maybe<string>)[]>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonFleeRateResolver<
  R = Maybe<number>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonMaxCpResolver<
  R = Maybe<number>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonEvolutionsResolver<
  R = Maybe<(Maybe<Pokemon>)[]>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonEvolutionRequirementsResolver<
  R = Maybe<PokemonEvolutionRequirement>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonMaxHpResolver<
  R = Maybe<number>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonImageResolver<
  R = Maybe<string>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonIsMaxHpOddResolver<
  R = boolean,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonIsMaxHpDivisibleByCountResolver<
  R = boolean,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonRandomPersonResolver<
  R = Maybe<Person>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonIsFavoriteResolver<
  R = Maybe<boolean>,
  Parent = Pokemon,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
/** Represents a Pokémon's dimensions */
export interface PokemonDimensionResolvers<
  TContext = MyContext,
  TypeParent = PokemonDimension
> {
  /** The minimum value of this dimension */
  minimum?: PokemonDimensionMinimumResolver<
    Maybe<string>,
    TypeParent,
    TContext
  >;
  /** The maximum value of this dimension */
  maximum?: PokemonDimensionMaximumResolver<
    Maybe<string>,
    TypeParent,
    TContext
  >;
}

export type PokemonDimensionMinimumResolver<
  R = Maybe<string>,
  Parent = PokemonDimension,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonDimensionMaximumResolver<
  R = Maybe<string>,
  Parent = PokemonDimension,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
/** Represents a Pokémon's attack types */
export interface PokemonAttackResolvers<
  TContext = MyContext,
  TypeParent = PokemonAttack
> {
  /** The fast attacks of this Pokémon */
  fast?: PokemonAttackFastResolver<
    Maybe<(Maybe<Attack>)[]>,
    TypeParent,
    TContext
  >;
  /** The special attacks of this Pokémon */
  special?: PokemonAttackSpecialResolver<
    Maybe<(Maybe<Attack>)[]>,
    TypeParent,
    TContext
  >;
}

export type PokemonAttackFastResolver<
  R = Maybe<(Maybe<Attack>)[]>,
  Parent = PokemonAttack,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonAttackSpecialResolver<
  R = Maybe<(Maybe<Attack>)[]>,
  Parent = PokemonAttack,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
/** Represents a Pokémon's attack types */
export interface AttackResolvers<TContext = MyContext, TypeParent = Attack> {
  /** The name of this Pokémon attack */
  name?: AttackNameResolver<Maybe<string>, TypeParent, TContext>;
  /** The type of this Pokémon attack */
  type?: AttackTypeResolver<Maybe<string>, TypeParent, TContext>;
  /** The damage of this Pokémon attack */
  damage?: AttackDamageResolver<Maybe<number>, TypeParent, TContext>;
}

export type AttackNameResolver<
  R = Maybe<string>,
  Parent = Attack,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type AttackTypeResolver<
  R = Maybe<string>,
  Parent = Attack,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type AttackDamageResolver<
  R = Maybe<number>,
  Parent = Attack,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
/** Represents a Pokémon's requirement to evolve */
export interface PokemonEvolutionRequirementResolvers<
  TContext = MyContext,
  TypeParent = PokemonEvolutionRequirement
> {
  /** The amount of candy to evolve */
  amount?: PokemonEvolutionRequirementAmountResolver<
    Maybe<number>,
    TypeParent,
    TContext
  >;
  /** The name of the candy to evolve */
  name?: PokemonEvolutionRequirementNameResolver<
    Maybe<string>,
    TypeParent,
    TContext
  >;
}

export type PokemonEvolutionRequirementAmountResolver<
  R = Maybe<number>,
  Parent = PokemonEvolutionRequirement,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PokemonEvolutionRequirementNameResolver<
  R = Maybe<string>,
  Parent = PokemonEvolutionRequirement,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;

export interface PersonResolvers<TContext = MyContext, TypeParent = Person> {
  gender?: PersonGenderResolver<Maybe<string>, TypeParent, TContext>;

  name?: PersonNameResolver<Maybe<Name>, TypeParent, TContext>;
}

export type PersonGenderResolver<
  R = Maybe<string>,
  Parent = Person,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type PersonNameResolver<
  R = Maybe<Name>,
  Parent = Person,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;

export interface NameResolvers<TContext = MyContext, TypeParent = Name> {
  title?: NameTitleResolver<Maybe<string>, TypeParent, TContext>;

  first?: NameFirstResolver<Maybe<string>, TypeParent, TContext>;

  last?: NameLastResolver<Maybe<string>, TypeParent, TContext>;
}

export type NameTitleResolver<
  R = Maybe<string>,
  Parent = Name,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type NameFirstResolver<
  R = Maybe<string>,
  Parent = Name,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type NameLastResolver<
  R = Maybe<string>,
  Parent = Name,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;

export interface TodoResolvers<TContext = MyContext, TypeParent = Todo> {
  id?: TodoIdResolver<string, TypeParent, TContext>;

  text?: TodoTextResolver<Maybe<string>, TypeParent, TContext>;

  complete?: TodoCompleteResolver<Maybe<boolean>, TypeParent, TContext>;
}

export type TodoIdResolver<
  R = string,
  Parent = Todo,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type TodoTextResolver<
  R = Maybe<string>,
  Parent = Todo,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type TodoCompleteResolver<
  R = Maybe<boolean>,
  Parent = Todo,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;

export interface MutationResolvers<TContext = MyContext, TypeParent = {}> {
  setCount?: MutationSetCountResolver<Maybe<number>, TypeParent, TContext>;

  increment?: MutationIncrementResolver<Maybe<number>, TypeParent, TContext>;

  toggleTodoComplete?: MutationToggleTodoCompleteResolver<
    Maybe<boolean>,
    TypeParent,
    TContext
  >;
}

export type MutationSetCountResolver<
  R = Maybe<number>,
  Parent = {},
  TContext = MyContext
> = Resolver<R, Parent, TContext, MutationSetCountArgs>;
export interface MutationSetCountArgs {
  count?: Maybe<number>;
}

export type MutationIncrementResolver<
  R = Maybe<number>,
  Parent = {},
  TContext = MyContext
> = Resolver<R, Parent, TContext>;
export type MutationToggleTodoCompleteResolver<
  R = Maybe<boolean>,
  Parent = {},
  TContext = MyContext
> = Resolver<R, Parent, TContext, MutationToggleTodoCompleteArgs>;
export interface MutationToggleTodoCompleteArgs {
  id: string;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  MyContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  MyContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  MyContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export type IResolvers<TContext = MyContext> = {
  Query?: QueryResolvers<TContext>;
  Pokemon?: PokemonResolvers<TContext>;
  PokemonDimension?: PokemonDimensionResolvers<TContext>;
  PokemonAttack?: PokemonAttackResolvers<TContext>;
  Attack?: AttackResolvers<TContext>;
  PokemonEvolutionRequirement?: PokemonEvolutionRequirementResolvers<TContext>;
  Person?: PersonResolvers<TContext>;
  Name?: NameResolvers<TContext>;
  Todo?: TodoResolvers<TContext>;
  Mutation?: MutationResolvers<TContext>;
} & { [typeName: string]: never };

export type IDirectiveResolvers<Result> = {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
} & { [directiveName: string]: never };
