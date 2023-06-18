import { OBTENER_POKEMONES, SELECCIONAR_POKEMON, FILTRAR_POR_TIPO } from "./action-type";

const initialState = {
    pokemones: [],
    pokemonSeleccionado: null,
    filtroTipo: null,
    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case OBTENER_POKEMONES:
        return {
          ...state,
          pokemones: action.payload,
        };
      case SELECCIONAR_POKEMON:
        return {
          ...state,
          pokemonSeleccionado: action.payload,
        };
      case FILTRAR_POR_TIPO:
        return {
          ...state,
          filtroTipo: action.payload,
        };
      
      
        default: return {...state}
    }};
    
    export default reducer;
