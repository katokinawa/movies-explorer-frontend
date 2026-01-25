import "./Burger.css";

function Burger(props) {
  return (
    <button
      className="burger-button"
      onClick={() => props.setIsOpen(true)}
    ></button>
  );
}

export default Burger;
