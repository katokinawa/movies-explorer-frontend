import "./Header.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className={`header page__header ${props.colorGrey}`}>
      <NavLink to="/" className="header__logo"></NavLink>
      <div className="header__sidebar">
        <NavLink to="/movies" className={({isActive}) => isActive ? "subtitle header__subtitle header__subtitle-font_weight" : "subtitle header__subtitle"}>
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className={({isActive}) => isActive ? "subtitle header__subtitle header__subtitle-font_weight" : "subtitle header__subtitle"}>
          Сохранённые фильмы
        </NavLink>
        <NavLink to="/signup" className={({isActive}) => isActive ? "subtitle header__subtitle-signup header__subtitle-font_weight" : "subtitle header__subtitle-signup"}>
          Регистрация
        </NavLink>
        <NavLink to="/signin" className={({isActive}) => isActive ? "subtitle header__button-login header__subtitle-font_weight" : "subtitle header__button-login"}>Войти</NavLink>
        <div className="header__account-wrapper">
          <NavLink to="/profile" className={({isActive}) => isActive ? "subtitle header__button-account header__subtitle-font_weight" : "subtitle header__button-account"}>Аккаунт</NavLink>
          <div className="header__icon-account"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
