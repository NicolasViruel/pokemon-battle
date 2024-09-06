import React, { useEffect, useState } from "react";
import {
  Container,
  Grid2,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Grid22,
} from "@mui/material";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [opponent, setOpponent] = useState(null);
  const [battleResult, setBattleResult] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemonList(data));
  }, []);

  const startBattle = (pokemonId) => {
    const opponent =
      pokemonList[Math.floor(Math.random() * pokemonList.length)];

    // Verifica que no sea contra el mismo Pokémon seleccionado
    if (opponent.id === pokemonId) {
      startBattle(pokemonId);
      return;
    }

    setSelectedPokemon(pokemonId);
    setOpponent(opponent);

    fetch("http://localhost:4000/battle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pokemon1Id: pokemonId, pokemon2Id: opponent.id }),
    })
      .then((response) => response.json())
      .then((result) => setBattleResult(result))
      .catch((error) => console.error("Error al iniciar la batalla:", error));
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Pokémon Battle
      </Typography>
      <Typography variant="h4" gutterBottom color="primary">
        Select your Pokémon
      </Typography>
      <Grid2 container spacing={2} justifyContent="center">
        {pokemonList.map((pokemon) => (
          <Grid2 item xs={12} sm={6} md={4} lg={2} key={pokemon.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={pokemon.imageUrl}
                alt={pokemon.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {pokemon.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Attack: {pokemon.attack} <br />
                  Defense: {pokemon.defense} <br />
                  HP: {pokemon.hp} <br />
                  Speed: {pokemon.speed}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => startBattle(pokemon.id)}
                >
                  Battle
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {battleResult && selectedPokemon && opponent && (
        <Box mt={4}>
          <Typography variant="h6" color="primary">
            Batalla entre{" "}
            {pokemonList.find((p) => p.id === selectedPokemon)?.name} y{" "}
            {opponent.name}
          </Typography>
          <Grid2 container spacing={10} justifyContent="center">
            <Grid2 item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={
                    pokemonList.find((p) => p.id === selectedPokemon)?.imageUrl
                  }
                  alt={pokemonList.find((p) => p.id === selectedPokemon)?.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {pokemonList.find((p) => p.id === selectedPokemon)?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Attack:{" "}
                    {pokemonList.find((p) => p.id === selectedPokemon)?.attack}{" "}
                    <br />
                    Defense:{" "}
                    {
                      pokemonList.find((p) => p.id === selectedPokemon)?.defense
                    }{" "}
                    <br />
                    HP: {
                      pokemonList.find((p) => p.id === selectedPokemon)?.hp
                    }{" "}
                    <br />
                    Speed:{" "}
                    {pokemonList.find((p) => p.id === selectedPokemon)?.speed}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={opponent.imageUrl}
                  alt={opponent.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {opponent.name}
                  </Typography>
                  <Typography variant="body2 h2" color="text.secondary">
                    Attack: {opponent.attack} <br />
                    Defense: {opponent.defense} <br />
                    HP: {opponent.hp} <br />
                    Speed: {opponent.speed}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
          <Typography variant="h4" color="primary" mt={2}>
            {battleResult.winner} es el ganador!
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            my={2}
            sx={{ fontSize: "1.5rem", mb: 6 }}
          >
            {battleResult.log}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default App;
