import React from "react";
import usePokemons from "../hooks/usePokemons.ts";
import PokemonList from "../components/PokemonList.tsx";

const Home = () => {
const { pokemons } = usePokemons();

    return <PokemonList pokemons={pokemons} />;

};

export default Home;
