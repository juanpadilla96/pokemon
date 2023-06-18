 
// const getPokemons = require('.controllers/getPokemons')
const { Router } = require('express');
const {getPokemons} = require('../controllers/getPokemons');
const { getPokemonById } = require('../controllers/getPokemonById'); 
const { getPokemonByName } = require('../controllers/getPokemonByName');
const { createPokemon } = require('../controllers/createPokemon')
const { getTypes } = require('../controllers/getTypes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/pokemons', getPokemons);
router.get('/pokemons/:idPokemon', getPokemonById);
router.get('/pokemons/name', getPokemonByName);
router.post('/pokemons', createPokemon);
router.get('/types', getTypes)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
