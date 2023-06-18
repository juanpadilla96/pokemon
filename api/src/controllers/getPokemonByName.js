const axios = require('axios');
const { Op } = require('sequelize');
const { Router } = require('express');
const router = Router()
const { pokemon } = require('../models/Pokemons');

const getPokemonByName = async (req, res) => {
  const { name } = req.query;

  try {
    const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon?name=${name}`);
    const apiPokemons = apiResponse.data.results;

    const dbPokemons = await pokemon.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      }
    });

    const pokemons = [...apiPokemons, ...dbPokemons];

    if (pokemons.length === 0) {
      res.status(404).json({ message: 'No se encontraron Pokémon con ese nombre' });
    } else {
      res.json(pokemons);
    }
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los datos' });
  }
};


router.get('/pokemons/name?="..."', getPokemonByName);

module.exports = {
  getPokemonByName
};

