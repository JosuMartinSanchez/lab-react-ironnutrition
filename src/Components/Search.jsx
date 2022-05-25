import React, { useState } from 'react';

function Search(props) {
  //!----------------Estado -----------------
  const [search, setSearch] = useState('');
  //!----------------Props -----------------
  const { searchFood } = props;
  //!----------------Funcion de buscar -----------------
  const handleSearch = (event) => {
    setSearch(event.target.value);
    searchFood(event.target.value);
  };

  return (
    <div>
      <h3>Realiza tu busqueda</h3>
      <form>
        <label htmlFor="sarch">Buscar:</label>
        <input
          type="text"
          name="sarch"
          onChange={handleSearch}
          value={search}
        />
      </form>
    </div>
  );
}

export default Search;
