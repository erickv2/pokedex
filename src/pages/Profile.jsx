import React from "react";
import Header from "../components/Header";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import PokemonTable from "../components/PokemonTable";

export const Profile = ({ pokemonData }) => {
  const { name, sprites } = pokemonData;
  console.log(pokemonData);
  return (
    <>
      <Header hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" flexDirection="column" alignItems="center" padding={5}>
            <Typography variant="h5">{name}</Typography>
            <Box display="flex" margin={10} width="100%">
              <Box component="img" src={sprites.front_default} width="100%" height="100%"/>
              <PokemonTable pokemonData={pokemonData} />
            </Box>
            <Box width="100%">
              <Divider>Variações</Divider>
              <Box component="img" src={sprites.front_default} width="100%" height="100%"/>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
