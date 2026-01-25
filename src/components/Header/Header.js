import "./Header.css";

function Header() {
  return (
    <header className="header page__header">
      <div className="header__logo"></div>
      <div class="header__sidebar">
        <p class="subtitle header__subtitle">Регистрация</p>
        <div className="header__button">
          <p class="subtitle header__subtitle_black">Войти</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
