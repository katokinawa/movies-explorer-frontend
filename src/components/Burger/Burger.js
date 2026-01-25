import "./Burger.css";

function Burger(props) {
  return (
    <button
      className={
        props.isOpen ? "burger-button burgen-button__hidden" : "burger-button button-animation-graphic"
      }
      onClick={() => props.setIsOpen(true)}
    ></button>
  );
}

export default Burger;
