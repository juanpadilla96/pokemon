import { Link } from "react-router-dom";
import style from './NavBar.module.css'
import SearchBar from "../searchbar/searchBar";
import React, { useState } from "react";

const NavBar = () => {
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
      const data = await response.json();
      setSearchResults([data]);
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  };

  return (
    <div className={style.navBar}>
      <div className={style.SearchBarContainer}>
        <SearchBar onSearch={handleSearch} />
      </div>
      <Link to="/home">HOME</Link>
      <Link to="/Form">FORM</Link>
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            <h3>{result.name}</h3>
            <img src={result.sprites.front_default} alt={result.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
