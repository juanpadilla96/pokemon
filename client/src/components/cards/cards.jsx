import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/card';
import styles from './cards.module.css';

const Cards = () => {
  const pokemons = useSelector((state) => state.pokemones);

  return (
    <div className={styles.cardContainer}>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          tipo={pokemon.types}
        />
      ))}
    </div>
  );
};

export default Cards;
