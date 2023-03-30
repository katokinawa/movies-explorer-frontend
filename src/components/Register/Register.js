import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name: name, email: email, password: password });
  };

  return (
    <main className="register">
      <div className="register__head-wrapper">
        <Link to="/" className="register__logo button-animation-graphic"></Link>
        <h1 className="title register__title">Добро пожаловать!</h1>
      </div>
      <form onSubmit={handleSubmit} className="register__form">
        <div className="register__input-wrapper">
          <p className="subtitle register-subtitle register-subtitle-color-grey">
            Имя
          </p>
          <label htmlFor="username"></label>
          <input
            id="username"
            type="text"
            name="name"
            value={name}
            onChange={handleSetName}
            className="username register__input username-input"
            minLength="2"
            maxLength="40"
            required
          />
        </div>
        <div className="register__input-wrapper">
          <p className="subtitle register-subtitle register-subtitle-color-grey">
            E-mail
          </p>
          <label htmlFor="email"></label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={handleSetEmail}
            className="email register__input email-input"
            minLength="2"
            maxLength="40"
            required
          />
        </div>
        <div className="register__input-wrapper">
          <p className="subtitle register-subtitle register-subtitle-color-grey">
            Пароль
          </p>
          <label htmlFor="password"></label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleSetPassword}
            className="password register__input-password password-input"
            minLength="2"
            maxLength="40"
            required
          />
        </div>

        <button
          type="submit"
          name="edit"
          className="title register__button button-animation"
        >
          Зарегистрироваться
        </button>
        <div className="register__button-wrapper">
          <p className="subtitle register-subtitle-answer register-subtitle-color-grey">
            Уже зарегистрированы?
          </p>
          <Link
            to="/signin"
            className="subtitle register-button-color-green button-animation"
          >
            Войти
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Register;
