import "./FilterCheckbox.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function FilterCheckbox({onSubmit}) {
  const [checked, setChecked] = useState(localStorage.getItem("checkboxState") === "true" ? true : false)
  const location = useLocation();

  function handleOnSubmit() {
    if(localStorage.getItem("movieSearchValue") || localStorage.getItem("savedMovieSearchValue")) {
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
          onChange={(e) => {
            localStorage.setItem("checkboxState", e.target.checked);
            setChecked(e.target.checked);
            handleOnSubmit();
          }}
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
