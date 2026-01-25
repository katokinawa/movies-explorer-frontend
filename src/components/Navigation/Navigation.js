import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <nav className={`navigation ${props.isOpen ? "navigation_opened" : ""}`}>
      <ul className="navigation__sidebar">
        <li>
          <NavLink
            to="/"
            className={(props.isOpen)
                ? "subtitle navigation__subtitle"
                : "subtitle navigation__subtitle navigation__subtitle_hidden"
            }
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "subtitle navigation__subtitle navigation__subtitle-font_weight"
                : "subtitle navigation__subtitle"
            }
          >
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive
                ? "subtitle navigation__subtitle navigation__subtitle-font_weight"
                : "subtitle navigation__subtitle"
            }
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation__account-wrapper">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "subtitle navigation__button-account navigation__subtitle-font_weight"
                : "subtitle navigation__button-account"
            }
          >
            Аккаунт
          </NavLink>
          <div className="navigation__icon-account"></div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
