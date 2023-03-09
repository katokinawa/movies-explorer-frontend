import "./Header.css";

function Header() {
  return (
    <header className="header page__header">
      <div className="logo"></div>
      <div class="sidebar">
        <p class="subtitle header__subtitle">Регистрация</p>
        <div className="button">
          <p class="subtitle header__subtitle_black">Войти</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
