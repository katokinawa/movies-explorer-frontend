import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__wrapper">
        <form className="search-form__form" noValidate>
          <div className="search-form__loupe-img"></div>
          <label htmlFor="search"></label>
          <input
            id="search"
            placeholder="Фильм"
            type="text"
            name="search"
            className="search-form__input"
            required
          />
          <button type="submit" className="search-form__submit-button">
            <div className="search-from__submit-img"></div>
          </button>
          <div className="vertical-line"></div>
        </form>

        <div className="search-from__checkbox-wrapper">
          <FilterCheckbox />
          <p className="subtitle search-form__subtitle">Короткометражки</p>
        </div>
      </div>
      <div className="underform-line"></div>
    </section>
  );
}

export default SearchForm;
