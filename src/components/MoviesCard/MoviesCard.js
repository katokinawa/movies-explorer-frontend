import "./MoviesCard.css";
import { useState } from "react";

function MoviesCard({
  movies,
  liked,
  buttonType,
  onDislikeMovies,
  onLikeMovies,
}) {
  const isLiked = liked.some((i) => i.movieId === movies.movieId);

  const [likeStatus, setLikeStatus] = useState(false);

  function handleLikeStatus(e) {
    e.preventDefault();
    setLikeStatus(true);
    if (buttonType === "liked" && !isLiked) {
      onLikeMovies(movies)
        .catch((err) => err)
        .finally(() => setLikeStatus(false));
    } else {
      onDislikeMovies(movies)
        .catch((err) => err)
        .finally(() => setLikeStatus(false));
    }
  }

  function numberToHoursMinute(duration) {
    let result;
    let time = movies.duration;
    let minute = time % 60;
    let hours = (time - minute) / 60;

    if (minute < 10) minute = "0" + minute;
    result = hours + "ч " + minute + "м";

    return result;
  }

  return (
    <li className="movies-card-item">
      <a rel="noreferrer" href={movies.trailerLink} target="_blank">
        <img
          src={movies.image}
          loading="lazy"
          alt={movies.nameRU}
          className="movies-card-image"
        ></img>
      </a>
      <h2 className="title movies-card-title">{movies.nameRU}</h2>
      <p className="subtitle movies-card-subtitle">
        {numberToHoursMinute(movies.duration)}
      </p>
      {buttonType === "liked" && (
        <button
          type="button"
          onClick={handleLikeStatus}
          className={
            isLiked
              ? "movies-card-like-active button-animation-graphic"
              : "movies-card-like-button button-animation-graphic"
          }
          isDisabled={likeStatus}
        />
      )}
      {buttonType === "disliked" && (
        <button
          type="button"
          onClick={handleLikeStatus}
          className={
            isLiked
              ? "movies-card-like-active button-animation-graphic"
              : "movies-card-like-button button-animation-graphic"
          }
          isDisabled={likeStatus}
        />
      )}
    </li>
  );
}

export default MoviesCard;
