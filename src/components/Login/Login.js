import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="login">
      <div className="login__head-wrapper">
        <Link to="/" className="login__logo button-animation-graphic"></Link>
        <h1 className="title login__title">Рады видеть!</h1>
      </div>
      <form onSubmit={handleSubmit} className="login__form">
        <div className="login__input-wrapper">
          <p className="subtitle login__subtitle login-subtitle-color-grey">
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
          <p className="subtitle login__subtitle login-subtitle-color-grey">
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
            className="password-error login__error"
          ></span>
        </div>

        <button type="submit" name="edit" className="title login__button button-animation">
          Войти
        </button>
        <div className="login__button-wrapper">
          <p className="subtitle login__subtitle-answer login-subtitle-color-grey">
            Ещё не зарегистрированы?
          </p>
          <Link to="/signup" className="subtitle login-button-color-green button-animation">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
