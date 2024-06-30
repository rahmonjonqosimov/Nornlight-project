import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="nav__search">
      <input type="search" placeholder="Поиск по товарам" />
      <FiSearch />
    </div>
  );
};

export default Search;
