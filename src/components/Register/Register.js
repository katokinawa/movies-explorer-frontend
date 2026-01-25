import "./Register.css";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../utils/useFormWithValidation";
import { useEffect } from "react";

function Register({ onRegister, message, errorColor, setMessage }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  useEffect(() => {
    setMessage("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  return (
    <main className="register">
      <div className="register__head-wrapper">
        <Link to="/" className="register__logo button-animation-graphic"></Link>
        <h1 className="title register__title">Добро пожаловать!</h1>
      </div>
      <form onSubmit={handleSubmit} className="register__form">
        <div className="register__wrapper">
          <div className="register__input-wrapper">
            <p className="subtitle register-subtitle register-subtitle-color-grey">
              Имя
            </p>
            <label htmlFor="username"></label>
            <input
              id="username"
              type="text"
              name="name"
              pattern="[- А-Яа-яA-Za-zёЁ]+$"
              value={values.name}
              onChange={handleChange}
              className="username register__input username-input"
              minLength="2"
              maxLength="40"
              required
            />
          </div>
          <span className="register__error">{errors.name || ""}</span>
        </div>

        <div className="register__input-wrapper">
          <p className="subtitle register-subtitle register-subtitle-color-grey">
            E-mail
          </p>
          <label htmlFor="email"></label>
          <input
            id="email"
            type="email"
            name="email"
            pattern="[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={values.email}
            onChange={handleChange}
            className="email register__input email-input"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="register__error">{errors.email || ""}</span>
        </div>

        <div className="register__input-wrapper register__input-wrapper-margin">
          <p className="subtitle register-subtitle register-subtitle-color-grey">
            Пароль
          </p>
          <label htmlFor="password"></label>
          <input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="password register__input-password password-input"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="register__error">{errors.password || ""}</span>
        </div>
        <p
          className={
            errorColor
              ? "subtitle register__error register__error-red"
              : "subtitle register__error register__error-green"
          }
        >
          {message}
        </p>
        <button
          type="submit"
          name="edit"
          disabled={!isValid}
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
