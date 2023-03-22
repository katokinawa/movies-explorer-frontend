import "./Profile.css";
import Header from "../Header/Header";

function Profile({ isLoggedIn }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="profile">
      <Header isLoggedIn={!isLoggedIn} />
      <h1 className="title profile__title">Привет, Даниил!</h1>
      <form onSubmit={handleSubmit} className="profile__form" noValidate>
        <div className="profile__input-wrapper">
          <p className="subtitle profile__subtitle">Имя</p>
          <label htmlFor="username"></label>
          <input
            id="username"
            type="text"
            name="name"
            className="username profile__input username-input"
            minLength="2"
            maxLength="40"
            required
          />
        </div>
        <div className="profile__input-wrapper">
          <p className="subtitle profile__subtitle">E-mail</p>
          <label htmlFor="email"></label>
          <input
            id="email"
            type="text"
            name="email"
            className="email profile__input email-input"
            minLength="2"
            maxLength="40"
            required
          />
        </div>
        <div className="profile__button-wrapper">
          <button type="submit" name="edit" className="profile__button">
            Редактировать
          </button>
          <button
            type="text"
            name="edit"
            onClick={() => isLoggedIn(false)}
            className="profile__button profile__button-color_red"
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
