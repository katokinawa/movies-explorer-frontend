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
    <li className="movies-card-item">
      <img
        src={props.movies.image}
        loading="lazy"
        alt={props.movies.nameRU}
        className="movies-card-image"
      ></img>
      <h2 className="title movies-card-title">{props.movies.nameRU}</h2>
      <p className="subtitle movies-card-subtitle">
        {numberToHoursMinute(props.movies.duration)}
      </p>
      <button
        className="movies-card-like-button movies-card-like-active button-animation-graphic"
      ></button>
    </li>
  );
}

export default MoviesCard;
