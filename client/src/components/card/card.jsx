import React, { useState } from "react";
import Detail from "../detail/detail";
import styles from "./card.module.css";

const Card = (props) => {
  const { name, image, tipo, hp, attack, defense, speed, height, weight } =
    props;
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles.card}>
      <p className={styles.name}>Name: {name}</p>
      <img
        src={image}
        alt={name}
        className={styles.image}
        onClick={toggleDetails}
      />
      <p className={styles.type}>Tipo: {tipo}</p>
      {showDetails && (
        <Detail
          pokemon={{
            name,
            image,
            tipo,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
          }}
        />
      )}
    </div>
  );
};

export default Card;
