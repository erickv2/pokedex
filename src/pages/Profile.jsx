import React from "react";
import Header from "../components/Header";
import { Container, Typography, Box, Paper } from "@mui/material";
import PokemonTable from "../components/PokemonTable";

export const Profile = ({ pokemonData }) => {
  const { name, sprites } = pokemonData;
  console.log(pokemonData);
  return (
    <>
      <Header hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h5">{name}</Typography>
            <Box component="img" src={sprites.front_default} width="50%" />
            <PokemonTable />
          </Box>
        </Paper>
      </Container>
    </>
  );
};
