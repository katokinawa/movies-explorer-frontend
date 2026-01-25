import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <label className="filter-checkbox">
      <input type="checkbox" className="filter-checkbox__invisible-checkbox" />
      <div className="filter-checkbox__visible-checkbox">
        <div className="filter-checkbox__circle-inner"></div>
      </div>
    </label>
  );
}

export default FilterCheckbox;
