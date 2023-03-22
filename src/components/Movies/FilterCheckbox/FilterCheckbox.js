import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <section>
      <label className="filter-checkbox">
        <input
          type="checkbox"
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
