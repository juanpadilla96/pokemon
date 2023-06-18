const axios = require('axios');
const { Types } = require('../models/Types');
const { Router } = require('express');
const router = Router()

const getTypes = async (req, res) => {
  try {
    // Verificar si existen tipos en la base de datos
    const types = await Types.findAll();
    const { Router } = require('express');
    const router = Router()
    if (types.length === 0) {
      // Si no hay tipos en la base de datos, obtenerlos de la API
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      const apiTypes = response.data.results;

      // Guardar los tipos en la base de datos
      const createdTypes = await Types.bulkCreate(apiTypes.map((apiType) => ({ nombre: apiType.name })));

      res.json(createdTypes);
    } else {
      res.json(types);
    }
  } catch (error) {
    console.error('Error al obtener los tipos de Pokémon:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los tipos de Pokémon' });
  }
};

router.get('/pokemons', getTypes)

module.exports = {
  getTypes,
};
