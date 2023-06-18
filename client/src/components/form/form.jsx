import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [image, setImage] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    formData.append("height", height);
    formData.append("weight", weight);
    formData.append("image", image);

    fetch("/pokemons", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        
        setName("");
        setType("");
        setHeight("");
        setWeight("");
        setImage(null);
      })
      .catch((error) => {
        
      });
  };

  return (
    <div>
      <h2>Crear Nuevo Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />

        <label htmlFor="type">Tipo:</label>
        <input type="text" id="type" value={type} onChange={handleTypeChange} required />

        <label htmlFor="height">Altura:</label>
        <input type="text" id="height" value={height} onChange={handleHeightChange} required />

        <label htmlFor="weight">Peso:</label>
        <input type="text" id="weight" value={weight} onChange={handleWeightChange} required />

        <label htmlFor="image">Imagen:</label>
        <input type="file" id="image" onChange={handleImageChange} accept=".jpg, .jpeg, .png" required />

        <button type="submit">Crear</button>
      </form>

      {image && (
        <div>
          <h3>Imagen seleccionada:</h3>
          <img src={URL.createObjectURL(image)} alt="Imagen del Pokémon" />
        </div>
      )}
    </div>
  );
};

export default Form;




