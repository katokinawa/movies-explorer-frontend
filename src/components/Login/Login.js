import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    onLogin({
      email: email,
      password: password,
    });
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
            type="text"
            name="email"
            value={email}
            onChange={handleSetEmail}
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
            value={password}
            onChange={handleSetPassword}
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

        <button
          type="submit"
          name="login"
          className="title login__button button-animation"
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
