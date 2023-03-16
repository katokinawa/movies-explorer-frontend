import "./Header.css";

function Header() {
  return (
    <header className="header page__header">
      <div className="header__logo"></div>
      <div className="header__sidebar">
        <p className="subtitle header__subtitle">Регистрация</p>
        <p className="subtitle header__button">Войти</p>
      </div>
    </header>
  );
}

export default Header;
