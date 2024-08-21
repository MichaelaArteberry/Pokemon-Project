import React from "react";
import { IndexedPokemon } from "../interface/pokemon.interface";
import PokemonCard from "./PokemonCard.tsx";

interface PokemonListProps {
    pokemons: IndexedPokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
    return (
        <>
        { pokemons.length > 0
            ? pokemons.map((p) => {
                return <PokemonCard key = { p.name } pokemon = { p }/>
        })
        : null }
        </>
        )
};

export default PokemonList;
