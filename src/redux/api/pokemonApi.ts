import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:3001'}),
    endpoints: (build) => ({
        fetchAllPokemons: build.query({
            query: () => ({
                url: 'pokemons',
            })
        })
    })
});


export const {useFetchAllPokemonsQuery} = pokemonApi;