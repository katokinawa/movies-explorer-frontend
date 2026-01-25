import "./FilterCheckbox.css";
import { useState } from "react";

function FilterCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <section>
      <label className="filter-checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            localStorage.setItem("checkboxState", e.target.checked);
            setChecked(e.target.checked);
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
