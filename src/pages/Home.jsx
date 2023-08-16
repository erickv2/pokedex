import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import Header from "../components/Header";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import Skeletons from "../components/Skeletons";
import { useNavigate } from "react-router-dom";
import { PaginationComponent } from "../components/PaginationComponent";
import { PaginationSelector } from "../components/PaginationSelector";

export const Home = ({setPokemonData}) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(pokemons.length / pokemonsPerPage)
  const startIndex = currentPage * pokemonsPerPage
  const endIndex = startIndex + pokemonsPerPage
  const currentPokemons = pokemons.slice(startIndex, endIndex)

  const navigate = useNavigate()

  const getPokemons = () => {
    var endpoints = [];

    for (var i = 1; i < 500; i++) {
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

    setPokemons(filteredPokemons);
  };

  const pokemonPickHandler = (pokemonData) => {
    setPokemonData(pokemonData)
    navigate("/profile")
  }

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    setCurrentPage(0)
  }, [pokemonsPerPage])

  return (
    <>
      <Header pokemonFilter={pokemonFilter} />

      <Container maxWidth="false">
        <Grid container spacing={5}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            currentPokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={2} key={key}>
                <Box onClick={() => pokemonPickHandler(pokemon.data)}>
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
        
        <PaginationSelector pokemonsPerPage={pokemonsPerPage} setPokemonsPerPage={setPokemonsPerPage} />
        <PaginationComponent pages={pages} setCurrentPage={setCurrentPage} />

      </Container>
    </>
  );
};
