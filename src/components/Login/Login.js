import "./Login.css";
import { Link, NavLink } from "react-router-dom";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="login">
      <div className="login__head-wrapper">
        <Link to="/" className="login__logo"></Link>
        <h1 className="title login__title">Рады видеть!</h1>
      </div>
      <form onSubmit={handleSubmit} className="login__form" noValidate>
        <div className="login__input-wrapper">
          <p className="subtitle login__subtitle login__subtitle-color_grey">
            E-mail
          </p>
          <label htmlFor="email"></label>
          <input
            id="email"
            type="text"
            name="email"
            className="email login__input email-input"
            minLength="2"
            maxLength="40"
            required
          />
        </div>
        <div className="login__input-wrapper">
          <p className="subtitle login__subtitle login__subtitle-color_grey">
            Пароль
          </p>
          <label htmlFor="password"></label>
          <input
            id="password"
            type="password"
            name="password"
            className="password login__input-password password-input"
            minLength="2"
            maxLength="40"
            required
          />
          <span
            id="password-error"
            className="password-error popup__error"
          ></span>
        </div>

        <button type="submit" name="edit" className="title login__button">
          Войти
        </button>
        <div className="login__button-wrapper">
          <p className="subtitle login__subtitle-answer login__subtitle-color_grey">
            Ещё не зарегистрированы?
          </p>
          <NavLink to="/signup" className="subtitle login__button-color_green">
            Регистрация
          </NavLink>
        </div>
      </form>
    </section>
  );
}

export default Login;
