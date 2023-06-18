import React from 'react';
import styles from './detail.module.css';

const Detail = ({ pokemon }) => {
  const { name, image, tipo, hp, attack, defense, speed, height, weight } = pokemon;

  return (
    <div className={styles.detail}>
      <h2 className={styles.name}>{name}</h2>
      <img src={image} alt={name} className={styles.image} />
      <p className={styles.property}>Tipo: {tipo}</p>
      <p className={styles.property}>HP: {hp}</p>
      <p className={styles.property}>Attack: {attack}</p>
      <p className={styles.property}>Defense: {defense}</p>
      <p className={styles.property}>Speed: {speed}</p>
      <p className={styles.property}>Height: {height}</p>
      <p className={styles.property}>Weight: {weight}</p>
      {Object.entries(pokemon).map(([key, value]) => (
        !['name', 'image', 'tipo', 'hp', 'attack', 'defense', 'speed', 'height', 'weight'].includes(key) && (
          <p key={key} className={styles.property}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
          </p>
        )
      ))}
    </div>
  );
};

export default Detail;

