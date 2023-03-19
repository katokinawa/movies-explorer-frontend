import "./MoviesCard.css";

function MoviesCard() {
  return (
    <article className="movies-card">
      <li className="movies-card__item">
        <img
          src={require("../../images/33-slova-o-dizaine.png")}
          loading="lazy"
          alt="33 слова о дизайне"
          className="movies-card__image"
        ></img>
        <h2 className="title movies-card__title">33 слова о дизайне</h2>
        <p className="subtitle movies-card__subtitle">1ч 42м</p>
        <button
          type="button"
          className="movies-card__like-button movies-card__like-active"
        ></button>
      </li>
      <li className="movies-card__item">
        <img
          src={require("../../images/kinoalmanah-100-let-dizaina.png")}
          loading="lazy"
          alt="Киноальманах «100 лет дизайна»"
          className="movies-card__image"
        ></img>
        <h2 className="title movies-card__title">Киноальманах «100 лет дизайна»</h2>
        <p className="subtitle movies-card__subtitle">1ч 42м</p>
        <button
          type="button"
          className="movies-card__like-button movies-card__like-active"
        ></button>
      </li>
      <li className="movies-card__item">
        <img
          src={require("../../images/v-pogone-za-benksi.png")}
          loading="lazy"
          alt="В погоне за Бенкси"
          className="movies-card__image"
        ></img>
        <h2 className="title movies-card__title">В погоне за Бенкси</h2>
        <p className="subtitle movies-card__subtitle">1ч 42м</p>
        <button
          type="button"
          className="movies-card__like-button movies-card__like-active"
        ></button>
      </li>
      <li className="movies-card__item">
        <img
          src={require("../../images/baksiya-vzryv-realnosti.png")}
          loading="lazy"
          alt="Баския: Взрыв реальности"
          className="movies-card__image"
        ></img>
        <h2 className="title movies-card__title">Баския: Взрыв реальности</h2>
        <p className="subtitle movies-card__subtitle">1ч 42м</p>
        <button
          type="button"
          className="movies-card__like-button movies-card__like-active"
        ></button>
      </li>
      <li className="movies-card__item">
        <img
          src={require("../../images/beg-eto-svoboda.png")}
          loading="lazy"
          alt="Бег это свобода"
          className="movies-card__image"
        ></img>
        <h2 className="title movies-card__title">Бег это свобода</h2>
        <p className="subtitle movies-card__subtitle">1ч 42м</p>
        <button
          type="button"
          className="movies-card__like-button movies-card__like-active"
        ></button>
      </li>
      <li className="movies-card__item">
        <img
          src={require("../../images/knigotvorcy.png")}
          loading="lazy"
          alt="Книготорговцы"
          className="movies-card__image"
        ></img>
        <h2 className="title movies-card__title">Книготорговцы</h2>
        <p className="subtitle movies-card__subtitle">1ч 42м</p>
        <button
          type="button"
          className="movies-card__like-button movies-card__like-active"
        ></button>
      </li>
      <li className="movies-card__item">
        <img
          src={require("../../images/kogda-ya-dymay-o-germanii-nochyy.png")}
          loading="lazy"
          alt="Когда я думаю о Германии ночью"
          className="movies-card__image"
        ></img>
        <h2 className="title movies-card__title">Когда я думаю о Германии ночью</h2>
        <p className="subtitle movies-card__subtitle">1ч 42м</p>
        <button
          type="button"
          className="movies-card__like-button movies-card__like-active"
        ></button>
      </li>
    </article>
  );
}

export default MoviesCard;
