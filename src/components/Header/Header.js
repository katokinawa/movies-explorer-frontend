import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import Burger from "../Burger/Burger";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={props.isLoggedIn ? "header" : `header header_color_grey`}
    >
      <Link to="/" className="header__logo button-animation-graphic"></Link>
      {props.isLoggedIn && <Burger isOpen={isOpen} setIsOpen={setIsOpen} />}
      {props.isLoggedIn ? (
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <ul className="header__sidebar">
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "subtitle header__subtitle-signup header__subtitle-font_weight button-animation-graphic"
                  : "subtitle header__subtitle-signup button-animation-graphic"
              }
            >
              Регистрация
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive
                  ? "subtitle header__button-login header__subtitle-font_weight button-animation-graphic"
                  : "subtitle header__button-login button-animation-graphic"
              }
            >
              Войти
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
