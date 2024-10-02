import React from "react";
import usePokemons from "../hooks/usePokemons.ts";
import PokemonList from "../components/PokemonList.tsx";
import { Container } from "@mui/material";

const Home = () => {
const { pokemons } = usePokemons();

    return(
        <Container>
            <PokemonList pokemons={pokemons} />
        </Container>
    )

};

export default Home;
