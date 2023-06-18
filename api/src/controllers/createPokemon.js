const { Pokemon, Type } = require('../models/Pokemons');
const { Router } = require('express');
const router = Router()

const createPokemon = async (req, res) => {
  const { name, types, image, vida, ataque, defensa, velocidad, altura, peso } = req.body;

  try {
    const newPokemon = await Pokemon.create({
      name,
      image,
      vida,
      ataque, 
      defensa,
      velocidad,
      altura,
      peso,
      types
    });

    const dbTypes = await Type.findAll({
      where: {
        name: types
      }
    });

    await newPokemon.addTypes(dbTypes);

    res.status(200).json(newPokemon);
  } catch (error) {
    console.error('Error al crear el Pokemon:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear el Pokemon' });
  }
};


module.exports = {
  createPokemon
};

