import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ onSubmit }) {
  const location = useLocation();
  const searchValue = useRef();

  function handleSearch(e) {
    e.preventDefault();
    if (location.pathname === "/movies") {
      localStorage.setItem(
        "movieSearchValue",
        searchValue.current.value.toLowerCase()
      );
    }

    localStorage.setItem(
      "savedMovieSearchValue",
      searchValue.current.value.toLowerCase()
    );
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
            placeholder={
              location.pathname === "/movies"
                ? localStorage.getItem("movieSearchValue")
                : localStorage.getItem("savedMovieSearchValue")
            }
            type="text"
            name="search"
            ref={searchValue}
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
          <FilterCheckbox />
          <p className="subtitle search-form__subtitle">Короткометражки</p>
        </div>
      </div>
      <div className="underform-line"></div>
    </section>
  );
}

export default SearchForm;
