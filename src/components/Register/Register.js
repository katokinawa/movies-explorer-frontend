import "./Register.css";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="register">
      <div className="register__head-wrapper">
        <div className="register__logo"></div>
        <h1 className="title register__title">Добро пожаловать!</h1>
      </div>
      <form onSubmit={handleSubmit} className="register__form" noValidate>
        <div className="register__input-wrapper">
          <p className="subtitle register__subtitle register__subtitle-color_grey">
            Имя
          </p>
          <label htmlFor="username"></label>
          <input
            id="username"
            type="text"
            name="name"
            className="username register__input username-input"
            minLength="2"
            maxLength="40"
            required
          />
        </div>
        <div className="register__input-wrapper">
          <p className="subtitle register__subtitle register__subtitle-color_grey">
            E-mail
          </p>
          <label htmlFor="email"></label>
          <input
            id="email"
            type="text"
            name="email"
            className="email register__input email-input"
            minLength="2"
            maxLength="40"
            required
          />
        </div>
        <div className="register__input-wrapper">
          <p className="subtitle register__subtitle register__subtitle-color_grey">
            Пароль
          </p>
          <label htmlFor="password"></label>
          <input
            id="password"
            type="password"
            name="password"
            className="password register__input-password password-input"
            minLength="2"
            maxLength="40"
            required
          />
          <span
            id="password-error"
            className="password-error popup__error"
          ></span>
        </div>

        <button type="submit" name="edit" className="title register__button">
          Зарегистрироваться
        </button>
        <div className="register__button-wrapper">
          <p className="subtitle register__subtitle-answer register__subtitle-color_grey">
            Уже зарегистрированы?
          </p>
          <button
            type="text"
            name="edit"
            className="register__button-color_green"
          >
            Войти
          </button>
        </div>
      </form>
    </section>
  );
}

export default Register;
