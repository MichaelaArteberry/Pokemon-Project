import React from "react";
import usePokemons from "../hooks/usePokemons.ts";
import PokemonList from "../components/PokemonList.tsx";
import { Button, Container } from "@mui/material";

const Home = () => {
const { pokemons, hasMorePokemon, fetchNextPage } = usePokemons();

    return(
        <Container>
            <PokemonList pokemons={pokemons} />
            {hasMorePokemon ? (
                <Button variant ="contained" onClick={fetchNextPage}>
                    Load More Pokemon
                </Button>
            ) : null}
        </Container>
    )

};

export default Home;
