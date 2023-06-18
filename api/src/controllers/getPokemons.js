const axios = require('axios');
const { Router } = require('express');


async function getPokemons(req, res) {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const subRequest = await Promise.all(response.data.results.map((e) => axios.get(e.url)));
    const pokemons = subRequest.map((e) => ({
      id: e.data.id,
      name: e.data.name,
      hp: e.data.stats[0].base_stat,
      attack: e.data.stats[1].base_stat,
      defense: e.data.stats[2].base_stat,
      speed: e.data.stats[5].base_stat,
      height: e.data.height,
      weight: e.data.weight,
      image: e.data.sprites.other.dream_world.front_default,
      createInBd: 'false',
      types: e.data.types.map((type) => type.type.name),
    }));

    res.status(200).send(pokemons);
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los datos de la API' });
  }
}

module.exports = {
  getPokemons,
};

 