import "./Login.css";
import useFormWithValidation from "../../utils/useFormWithValidation";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Login({ onLogin, message, errorColor, setMessage }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  useEffect(() => {
    setMessage("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  return (
    <main className="login">
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
            type="email"
            name="email"
            pattern="[a-z0-9-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={values.email || ""}
            onChange={handleChange}
            className="email login__input email-input"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="login__error">{errors.email || ""}</span>
        </div>

        <div className="login__input-wrapper login__input-password-margin">
          <p className="subtitle login__subtitle login-subtitle-color-grey">
            Пароль
          </p>
          <label htmlFor="password"></label>
          <input
            id="password"
            type="password"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
            className="password login__input-password password-input"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="login__error">{errors.password || ""}</span>
        </div>
        <p
          className={
            errorColor
              ? "subtitle login__error login__error-red"
              : "subtitle login__error login__error login__error-green"
          }
        >
          {message}
        </p>
        <button
          type="submit"
          name="login"
          className="title login__button button-animation"
          disabled={!isValid}
        >
          Войти
        </button>
        <div className="login__button-wrapper">
          <p className="subtitle login__subtitle-answer login-subtitle-color-grey">
            Ещё не зарегистрированы?
          </p>
          <Link
            to="/signup"
            className="subtitle login-button-color-green button-animation"
          >
            Регистрация
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
