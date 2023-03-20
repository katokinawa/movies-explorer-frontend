import "./Header.css";

function Header() {
  return (
    <header className="header page__header">
      <div className="header__logo"></div>
      <div className="header__sidebar">
        <button className="subtitle header__subtitle header__subtitle-font_weight">
          Фильмы
        </button>
        <button className="subtitle header__subtitle">
          Сохранённые фильмы
        </button>
        <button className="subtitle header__subtitle-signup">
          Регистрация
        </button>
        <button className="subtitle header__button-login">Войти</button>
        <div className="header__account-wrapper">
          <button className="subtitle header__button-account">Аккаунт</button>
          <div className="header__icon-account"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
