const axios = require('axios');

// Nombre del Pokémon que deseas obtener
const nombrePokemon = 'pikachu';

// URL de la API de PokeAPI para obtener información de un Pokémon
const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

// Realiza una solicitud a la API
axios.get(apiUrl)
  .then(response => {
    if (response.status === 200) {
      const pokemon = response.data;
      console.log('Nombre del Pokémon:', pokemon.name);
      console.log('ID del Pokémon:', pokemon.id);
      console.log('Tipos del Pokémon:');
      pokemon.types.forEach(tipo => {
        console.log('-', tipo.type.name);
      });
    } else {
      console.log('No se encontró el Pokémon.');
    }
  })
  .catch(error => {
    console.error('Error al obtener datos del Pokémon:', error);
  });