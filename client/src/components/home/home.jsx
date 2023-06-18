import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { obtenerPokemones } from '../../redux/actions';
import { useSelector } from 'react-redux';
import Cards from '../cards/cards';
import Paginado from '../paginado/paginado';
import styles from './home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemones);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(6);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(obtenerPokemones());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Cards />
      <Paginado
        pokemonsPerPage={pokemonsPerPage}
        pokemons={allPokemons.length}
        paginado={paginado}
      />
    </div>
  );
};

export default Home;
