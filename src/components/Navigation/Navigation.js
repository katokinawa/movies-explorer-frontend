import "./Navigation.css";
import { NavLink, Link } from "react-router-dom";

function Navigation({ isOpen, setIsOpen }) {
  return (
    <nav className={`navigation ${isOpen ? "navigation_opened" : ""}`}>
      <button
        onClick={() => setIsOpen(false)}
        className="navigation__close-button button-animation-graphic"
      ></button>
      <ul className="navigation__sidebar">
        <li>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/"
            className={
              isOpen
                ? "subtitle navigation__subtitle button-animation-graphic"
                : "subtitle navigation__subtitle navigation__subtitle_hidden"
            }
          >
            Главная
          </NavLink>
        </li>
        <li className="navigation__movies">
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "subtitle navigation__subtitle navigation__link-is-active button-animation-graphic"
                : "subtitle navigation__subtitle button-animation-graphic"
            }
          >
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__save-movies">
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/saved-movies"
            className={({ isActive }) =>
              isActive
                ? "subtitle navigation__subtitle navigation__link-is-active button-animation-graphic"
                : "subtitle navigation__subtitle button-animation-graphic"
            }
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation__account-wrapper">
          <Link
            onClick={() => setIsOpen(false)}
            to="/profile"
            className="subtitle navigation__button-account button-animation-graphic button-animation-graphic"
          >
            Аккаунт
          </Link>
          <div className="navigation__icon-account"></div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
