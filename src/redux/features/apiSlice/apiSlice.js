import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
  endpoints: builder => ({
    getPokemon: builder.query({
      query: name => ({
        url: `/pokemon/${name}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPokemonQuery } = apiSlice; // use + "custom builder Name" + Query
// типу екшени/операції та слайс із редюсерами все в одній кучі, яка буде пиздос яка громадна при норм проекті
