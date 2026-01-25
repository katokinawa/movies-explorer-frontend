import { useEffect } from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  let isLiked;

  if (props.liked === null) {
    return;
  } else {
    isLiked = props.liked.some((i) => i.movieId === props.movies.movieId);
  }

  function numberToHoursMinute(duration) {
    let result;
    let time = props.movies.duration;
    let minute = time % 60;
    let hours = (time - minute) / 60;

    if (minute < 10) minute = "0" + minute;
    result = hours + "ч " + minute + "м";

    return result;
  }

  function handleLikeMovie() {
    props.onLikeMovies(props.movies);
  }

  function handleDislikeMovie() {
    props.onDislikeMovies(props.movies);
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
      {isLiked ? (
        <button
          onClick={handleDislikeMovie}
          className="movies-card-like-button movies-card-like-active button-animation-graphic"
        ></button>
      ) : (
        <button
          onClick={handleLikeMovie}
          className="movies-card-like-button button-animation-graphic"
        ></button>
      )}
    </li>
  );
}

export default MoviesCard;
