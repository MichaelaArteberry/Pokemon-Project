import React from "react";
import { IndexedPokemon } from "../interface/pokemon.interface";
import PokemonCard from "./PokemonCard.tsx";
import { Grid } from "@mui/material";

interface PokemonListProps {
pokemons: IndexedPokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
return (
    <Grid container spacing={2}>
    {pokemons.length > 0
        ? pokemons.map((p) => {
            return (
            <Grid item xs={4}>
                <PokemonCard key={p.name} pokemon={p} />
            </Grid>
            );
        })
        : null}
    </Grid>
);
};

export default PokemonList;
