import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [battleResult, setBattleResult] = useState(null);

  // Obtener la lista de Pokémon desde el backend
  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(data => setPokemonList(data));
  }, []);

  // Función para iniciar la batalla
  const startBattle = (pokemonId) => {
    const opponent = pokemonList[Math.floor(Math.random() * pokemonList.length)];

    // Asegurarnos de que el contrincante sea diferente al Pokémon seleccionado
    if (opponent.id === pokemonId) {
      startBattle(pokemonId); // Si son iguales, seleccionamos otro oponente
      return;
    }

    fetch('http://localhost:3000/battle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pokemon1Id: pokemonId, pokemon2Id: opponent.id }),
    })
      .then(response => response.json())
      .then(result => setBattleResult(result))
      .catch(error => console.error('Error al iniciar la batalla:', error));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Pokémon Battle
      </Typography>
      {battleResult && (
        <Box mb={2}>
          <Typography variant="h6" color="primary">
            {battleResult.winner} es el ganador!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {battleResult.log}
          </Typography>
        </Box>
      )}
      <Grid container spacing={2}>
        {pokemonList.map(pokemon => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
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
                  onClick={() => startBattle(pokemon.id)}
                >
                  Batallar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
