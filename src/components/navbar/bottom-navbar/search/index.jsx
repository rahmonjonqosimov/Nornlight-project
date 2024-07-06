import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../../../context/api/productApi";

const Search = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [value, setValue] = useState("");
  const { data } = useGetProductsQuery();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    setValue("");
  }, [pathname]);
  useEffect(() => {
    if (value.trim()) {
      setSearchResult(
        data.filter((product) =>
          product.title.toLowerCase().includes(value.trim().toLowerCase())
        )
      );
    }
  }, [value]);

  const searchItem = searchResult?.slice(0, 8)?.map((item) => (
    <div
      onClick={() => navigate(`/product/${item.id}`)}
      className="search__item"
      key={item.id}
    >
      <FiSearch />
      <p>{item.title}</p>
    </div>
  ));

  return (
    <div className={`nav__search ${value.trim() ? "show" : ""}`}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="search"
        placeholder="Поиск по товарам"
      />
      <FiSearch />
      {value.trim() ? (
        <div className="search__result">
          {searchItem?.length ? (
            searchItem
          ) : (
            <div className="search__item">Товаров не найдена</div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Search;
