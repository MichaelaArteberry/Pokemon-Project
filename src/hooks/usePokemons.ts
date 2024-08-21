import { useEffect, useState } from 'react';
import { IndexedPokemon, PokemonListResponse } from '../interface/pokemon.interface'
import { POKEMON_API_POKEMON_URL } from '../constants.ts'
import { httpClient } from '../api/httpClient.ts'

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<IndexedPokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL)

    useEffect(() => {
        fetchPokemon()
    }, [])

    const fetchPokemon = async () => {
        if(nextUrl) {
            const result = await httpClient.get<PokemonListResponse>(nextUrl)
            console.log(result)
            if (result?.data?.results) {
                setPokemons(result.data.results)
            }
        }
    }

    return {
        pokemons,
    };
}

export default usePokemons;
