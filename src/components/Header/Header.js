import "./Header.css";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import Burger from "../Burger/Burger";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={
        props.isLoggedIn 
          ? "header page__header"
          : `header page__header ${props.colorGrey}`
      }
    >
      <NavLink to="/" className="header__logo"></NavLink>
      {props.isLoggedIn && <Burger setIsOpen={props.setIsOpen} /> ? (
        <ul className="header__sidebar">
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive
                  ? "subtitle header__subtitle header__subtitle-font_weight"
                  : "subtitle header__subtitle"
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
                  ? "subtitle header__subtitle header__subtitle-font_weight"
                  : "subtitle header__subtitle"
              }
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className="header__account-wrapper">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "subtitle header__button-account header__subtitle-font_weight"
                  : "subtitle header__button-account"
              }
            >
              Аккаунт
            </NavLink>
            <div className="header__icon-account"></div>
          </li>
        </ul>
      ) : (
        <Navigation isOpen={props.isOpen}/>
      )}
    </header>
  );
}

export default Header;
