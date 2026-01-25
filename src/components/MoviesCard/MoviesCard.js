import "./MoviesCard.css";

function MoviesCard(props) {
  function numberToHoursMinute(duration) {
    let result;
    let time = props.movies.duration;
    let minute = time % 60;
    let hours = (time - minute) / 60;

    if (minute < 10) minute = "0" + minute;
    result = hours + "ч " + minute + "м";

    return result;
  }

  return (
    <li className="movies-card__item">
      <img
        src={props.movies.image}
        loading="lazy"
        alt={props.movies.nameRU}
        className="movies-card__image"
      ></img>
      <h2 className="title movies-card__title">{props.movies.nameRU}</h2>
      <p className="subtitle movies-card__subtitle">
        {numberToHoursMinute(props.movies.duration)}
      </p>
      <button
        className="movies-card__like-button movies-card__like-active"
      ></button>
    </li>
  );
}

export default MoviesCard;
