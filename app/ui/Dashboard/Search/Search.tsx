"use client";
import React, {useState} from 'react';
import { IoSearch } from "react-icons/io5";
import style from './Search.module.css';

  const Search: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearch = () => {
      // Votre fonction de recherche sur Base
      console.log("Recherche avec le terme:", searchQuery);
    };
  
    return (
      <div className={style.search}>
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={style.input}
        />
        <button onClick={handleSearch}><IoSearch style={{ color: '#425c54' }} /></button>
      </div>
    );
  };
  
  export default Search;