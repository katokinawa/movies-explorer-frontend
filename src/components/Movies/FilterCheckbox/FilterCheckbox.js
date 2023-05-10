import { useEffect } from "react";
import "./FilterCheckbox.css";
import { useLocation } from "react-router-dom";

function FilterCheckbox({ onSubmit, setChecked, checked }) {
  useEffect(() => {
    localStorage.setItem("checkboxState", checked);
  });

  const location = useLocation();

  function onChangeCheckbox(e) {
    localStorage.setItem("checkboxState", e.target.checked);
    setChecked(e.target.checked);
    handleOnSubmit();
  }

  function handleOnSubmit() {
    if (
      localStorage.getItem("movieSearchValue") ||
      localStorage.getItem("savedMovieSearchValue")
    ) {
      onSubmit(
        location.pathname === "/movies"
          ? localStorage.getItem("movieSearchValue")
          : localStorage.getItem("savedMovieSearchValue")
      );
    }
    return;
  }
  return (
    <section>
      <label className="filter-checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChangeCheckbox}
          className="filter-checkbox__invisible-checkbox"
        />
        <div className="filter-checkbox__visible-checkbox">
          <div className="filter-checkbox__circle-inner"></div>
        </div>
      </label>
    </section>
  );
}

export default FilterCheckbox;
