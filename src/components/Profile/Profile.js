import "./Profile.css";
import { useState } from "react";

function Profile({ updateProfile, logout }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("")

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name) {
      return;
    }
    updateProfile({
      name: name,
      email: email,
    });
  };

  return (
    <main className="profile">
      <h1 className="title profile__title">Привет, Даниил!</h1>
      <form onSubmit={handleSubmit} className="profile__form">
        <div className="profile__input-wrapper">
          <p className="subtitle profile__subtitle">Имя</p>
          <label htmlFor="username"></label>
          <input
            id="username"
            type="text"
            name="name"
            value={name}
            onChange={handleSetName}
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
            value={email}
            onChange={handleSetEmail}
            className="email profile__input email-input"
            minLength="2"
            maxLength="40"
            required
          />
        </div>
        <div className="profile__button-wrapper">
          <button type="submit" name="edit" className="profile__button button-animation-graphic">
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
