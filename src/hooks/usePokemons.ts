import { useEffect, useState } from 'react';
import { IndexedPokemon, ListPokemon, PokemonListResponse } from '../interface/pokemon.interface'
import { POKEMON_API_POKEMON_URL } from '../constants.ts'
import { httpClient } from '../api/httpClient.ts'
import { POKEMON_IMAGES_BASE_URL } from '../constants.ts'

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<ListPokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL)

    useEffect(() => {
        fetchPokemon()
    }, [])

const indexedPokemonToListPokemon = (indexedPokemon: IndexedPokemon) => {
    const pokedexNumber =parseInt(indexedPokemon.url.replace(`${POKEMON_API_POKEMON_URL}/`, '').replace('/', ''))

    const listPokemon: ListPokemon = {
        name: indexedPokemon.name,
        url: indexedPokemon.url,
        image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
        pokedexNumber: pokedexNumber
    }
    return listPokemon;
}

    const fetchPokemon = async () => {
        if(nextUrl) {
            const result = await httpClient.get<PokemonListResponse>(nextUrl)
            console.log(result)
            if (result?.data?.results) {
                const listPokemon = result.data.results.map(p => indexedPokemonToListPokemon(p))
                setPokemons(listPokemon)
                setNextUrl(result.data.next)
            }
        }
    }

    return {
        pokemons,
        fetchNextPage: fetchPokemon,
hasMorePokemon: !!nextUrl
    };

}

export default usePokemons;
