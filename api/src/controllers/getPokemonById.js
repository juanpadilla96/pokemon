const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { Router } = require('express');
const router = Router()

async function getPokemonById(req, res) {
  const { id } = req.params;

  try {
    let pokemon;

    // Verificar si el Pokemon está en la base de datos
    if (Number.isNaN(parseInt(id))) {
      pokemon = await Pokemon.findOne({
        where: { name: id.toLowerCase() },
        include: { model: Type },
      });
    } else {
      // Obtener el Pokemon de la API
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = response.data;

  
      // Crear el objeto del Pokemon
      pokemon = {
        id: data.id,
        name: data.name,
        image: data.image,
        vida: data.vida,
        ataque: data.ataque,
        defensa: data.defensa,
        velocidad: data.velocidad,
        altura: data.altura,
        peso: data.peso
      };
    }

    if (pokemon) {
      res.json(pokemon);
    } else {
      res.status(404).json({ message: 'Pokemon not found' });
    }
  } catch (error) {
    console.error('Error al obtener los datos del Pokemon:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los datos del Pokemon' });
  }
}

router.get('/pokemons/:idPokemon', getPokemonById);

module.exports = {
  getPokemonById,
};
