
import axios from 'axios';
import { OBTENER_POKEMONES, SELECCIONAR_POKEMON, FILTRAR_POR_TIPO } from './action-type';

export const obtenerPokemones = () => {
  return async (dispatch) => {
    try {
      const respuesta = await axios.get('http://localhost:3001/pokemons');
      return dispatch({
        type: OBTENER_POKEMONES,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log('Error al obtener los pokemones desde la API:', error);
    }
  }; 
};

export const seleccionarPokemon = (pokemonId) => {
  return async (dispatch) => {
    try {
      const respuesta = await axios.get(`http://localhost:3001/pokemons/${pokemonId}`);
      dispatch({
        type: SELECCIONAR_POKEMON,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log('Error al seleccionar el pokemon:', error);
    }
  };
};

export const filtrarPorTipo = (tipo) => {
  return async (dispatch) => {
    try {
      const respuesta = await axios.get(`http://localhost:3001/pokemons/pokemons?tipo=${tipo}`);
      dispatch({
        type: FILTRAR_POR_TIPO,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log('Error al filtrar los pokemones por tipo:', error);
    }
  };
};



 
  