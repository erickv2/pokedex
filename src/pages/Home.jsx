import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import Header from "../components/Header";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import Skeletons from "../components/Skeletons";

export const Home = ({setPokemonData}) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];

    for (var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];

    if (name === "") {
      getPokemons();
    }

    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    console.log(filteredPokemons);
    setPokemons(filteredPokemons);
  };

  return (
    <>
      <Header pokemonFilter={pokemonFilter} />
      <Container maxWidth="false">
        <Grid container spacing={5}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={2} key={key}>
                <Box onClick={() => setPokemonData(pokemon.data)}>
                <PokemonCard
                  name={pokemon.data.name}
                  image={pokemon.data.sprites.front_default}
                  types={pokemon.data.types}
                />
                </Box>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </>
  );
};
