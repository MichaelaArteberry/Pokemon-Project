import React from "react";
import { IndexedPokemon } from "../interface/pokemon.interface";

interface PokemonCardProps {
    pokemon: IndexedPokemon
}

const PokemonCard = ({pokemon}: PokemonCardProps) => {
    return (
            <div>{ pokemon.name }</div>
    )
};

export default PokemonCard;
