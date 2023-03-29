import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useRef } from "react";

function SearchForm({ onSubmit }) {
  const input = useRef();

  function handleSearch(e) {
    e.preventDefault()
    onSubmit(input.current.value)
  }
  return (
    <section className="search-form">
      <div className="search-form__wrapper">
        <form onSubmit={handleSearch} className="search-form__form">
          <div className="search-form__loupe-img"></div>
          <label htmlFor="search"></label>
          <input
            placeholder="Фильм"
            type="text"
            name="search"
            ref={input}
            className="search-form__input"
            required
          />
          <button type="submit" className="search-form__submit-button button-animation-graphic"></button>
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
