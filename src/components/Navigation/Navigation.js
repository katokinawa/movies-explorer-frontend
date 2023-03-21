import "./Navigation.css";
import { NavLink, Link } from "react-router-dom";

function Navigation({ isOpen, setIsOpen }) {
  return (
    <nav className={`navigation ${isOpen ? "navigation_opened" : ""}`}>
      <button
        onClick={() => setIsOpen(false)}
        className="navigation__close-button"
      ></button>
      <ul className="navigation__sidebar">
        <li>
          <NavLink
            to="/"
            className={
              isOpen
                ? "subtitle navigation__subtitle"
                : "subtitle navigation__subtitle navigation__subtitle_hidden"
            }
          >
            Главная
          </NavLink>
        </li>
        <li className="navigation__movies">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "subtitle navigation__subtitle navigation__link-is-active"
                : "subtitle navigation__subtitle"
            }
          >
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__save-movies">
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive
                ? "subtitle navigation__subtitle navigation__link-is-active"
                : "subtitle navigation__subtitle"
            }
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation__account-wrapper">
          <Link to="/profile" className="subtitle navigation__button-account">
            Аккаунт
          </Link>
          <div className="navigation__icon-account"></div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
