import "./Burger.css";

function Burger(props) {
  return (
    <button
      className={props.isOpen ? "burger-button burgen-button__hidden" : "burger-button"}
      onClick={() => props.setIsOpen(true)}
    ></button>
  );
}

export default Burger;
