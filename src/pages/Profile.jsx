import React from "react";
import Header from "../components/Header";
import { Container, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import PokemonTable from "../components/PokemonTable";

export const Profile = ({ pokemonData }) => {
  const { name, sprites, moves } = pokemonData;
  console.log(pokemonData);
  return (
    <>
      <Header hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" flexDirection="column" alignItems="center" padding={5}>
            <Typography variant="h5">{name}</Typography>
            <Box display="flex" alignItems="center" margin={10} width="100%">
              <Box component="img" src={sprites.front_default} width="100%" height="100%"/>
              <PokemonTable pokemonData={pokemonData} />
            </Box>
            <Box width="100%">
              <Divider>Variações</Divider>
                <Box component="img" src={sprites.front_female} width="30%" height="30%"/>
                <Box component="img" src={sprites.front_shiny} width="30%" height="30%"/>
                <Box component="img" src={sprites.front_shiny_female} width="30%" height="30%"/>
              <Divider>Ataques</Divider>
              <Box textAlign="center" marginTop="15px"> 
                {moves.map((move, key) => (
                  <Chip key={key} sx={{m:"5px"}} label={move.move.name} />
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
