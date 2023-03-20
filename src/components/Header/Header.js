import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header page__header">
      <NavLink to="/" className="header__logo"></NavLink>
      <div className="header__sidebar">
        <NavLink to="/movies" className="subtitle header__subtitle header__subtitle-font_weight">
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className="subtitle header__subtitle">
          Сохранённые фильмы
        </NavLink>
        <NavLink to="/signup" className="subtitle header__subtitle-signup">
          Регистрация
        </NavLink>
        <NavLink to="/signin" className="subtitle header__button-login">Войти</NavLink>
        <div className="header__account-wrapper">
          <NavLink to="/profile" className="subtitle header__button-account">Аккаунт</NavLink>
          <div className="header__icon-account"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
