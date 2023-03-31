import "./Profile.css";
import useFormWithValidation from "../../utils/useFormWithValidation";
import { useEffect } from "react";

function Profile({ updateProfile, logout, user, message, errorColor }) {
  const { values, setValues, handleChange, errors, isValid, setIsValid } =
  useFormWithValidation();

  useEffect(() => {
    if (user) {
      setValues({
        name: user.name,
        email: user.email,
      });
    }
  }, [user, setValues]);

  useEffect(() => {
    if (user.name === values.name && user.email === values.email) {
      setIsValid(false);
    }
  }, [user, setIsValid, values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(values);
  };

  return (
    <main className="profile">
      <h1 className="title profile__title">
        Привет{user.name ? ", " + user.name : ""}!
      </h1>
      <form onSubmit={handleSubmit} className="profile__form">
        <div className="profile__input-wrapper">
          <p className="subtitle profile__subtitle">Имя</p>
          <label htmlFor="username"></label>
          <input
            id="username"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="username profile__input username-input"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="profile__error">{errors.password || ""}</span>
        </div>

        <div className="profile__input-wrapper profile__input-wrapper-margin">
          <p className="subtitle profile__subtitle">E-mail</p>
          <label htmlFor="email"></label>
          <input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="email profile__input profile__input-border email-input"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="profile__error">{errors.password || ""}</span>
        </div>
        <p className={errorColor ? "subtitle profile__error profile__error-red" : "subtitle profile__error profile__error-green"}>{message}</p>
        <div className="profile__button-wrapper">
          <button
            type="submit"
            disabled={!isValid}
            name="edit"
            className="profile__button button-animation-graphic"
          >
            Редактировать
          </button>
          <button
            type="button"
            name="edit"
            onClick={logout}
            className="profile__button profile__button-color_red button-animation-graphic"
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </main>
  );
}

export default Profile;
