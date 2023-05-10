import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ onSubmit, setChecked, checked }) {
  const location = useLocation();

  const [movieSearchValue, setMovieSearchValue] = useState(
    location.pathname === "/movies"
      ? localStorage.getItem("movieSearchValue")
      : localStorage.getItem("savedMovieSearchValue")
  );

  function handleChangeInput(e) {
    setMovieSearchValue(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (location.pathname === "/movies") {
      const value = movieSearchValue.toLowerCase();
      localStorage.setItem("movieSearchValue", value);
    }
    if (location.pathname === "/saved-movies") {
      const value = movieSearchValue.toLowerCase();
      localStorage.setItem("savedMovieSearchValue", value);
    }

    onSubmit(
      location.pathname === "/movies"
        ? localStorage.getItem("movieSearchValue")
        : localStorage.getItem("savedMovieSearchValue")
    );
  }
  return (
    <section className="search-form">
      <div className="search-form__wrapper">
        <form onSubmit={handleSearch} className="search-form__form">
          <div className="search-form__loupe-img"></div>
          <label htmlFor="search"></label>
          <input
            value={movieSearchValue}
            type="text"
            name="search"
            onChange={handleChangeInput}
            className="search-form__input"
            required
          />
          <button
            type="submit"
            className="search-form__submit-button button-animation-graphic"
          ></button>
          <div className="vertical-line"></div>
        </form>

        <div className="checkbox-wrapper">
          <FilterCheckbox
            onSubmit={onSubmit}
            setChecked={setChecked}
            checked={checked}
          />
          <p className="subtitle search-form__subtitle">Короткометражки</p>
        </div>
      </div>
      <div className="underform-line"></div>
    </section>
  );
}

export default SearchForm;
