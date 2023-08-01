import * as React from "react";
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {typeHandler} from '../../utils'

export default function PokemonCard({ name, image, types }) {


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 200 }} image={image} title="green iguana" />
      <CardContent>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
            {typeHandler(types)}
          </Typography>
        </Box>
        
      </CardContent>
    </Card>
  );
}
