import React from "react";
import usePokemons from "../hooks/usePokemons.ts";

const Home = () => {
const { pokemons } = usePokemons();

    return <div>Home</div>

};

export default Home;
