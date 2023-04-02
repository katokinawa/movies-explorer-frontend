import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";
import * as api from "../../utils/MainApi";
import { useState, useEffect } from "react";

function SavedMovies({
  loggedIn,
  onLikeMovies,
  onDislikeMovies,
  setLikedMovies,
  liked,
  moviesListNumber,
}) {
  const [info, setInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    localStorage.removeItem("checkbox");
    localStorage.removeItem("savedMovieSearchValue");
    setResult(false);
  }, []);

  useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      api
        .getUserMovie()
        .then((likeMovies) => {
          setLikedMovies(likeMovies);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setInfo(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        });
    }
  }, [loggedIn]);

  function onSubmit(value) {
    setIsLoading(true);
    setInfo("");

    localStorage.removeItem("movLikedFiltered");
    localStorage.removeItem("movLikedFilterDuration");
    const checkbox = localStorage.getItem("checkboxState");
    const movies = liked;

    const movLikedFiltered = movies.filter((movie) => {
      if (
        movie.nameRU.toLowerCase().match(value) ||
        movie.nameEN.toLowerCase().match(value)
      ) {
        return true;
      }
      return false;
    });

    function moviesFilteredDuration() {
      const movLikedFilterDuration = movLikedFiltered.filter((movie) => {
        if (movie.duration <= 40) {
          return true;
        }
        return false;
      });

      if (movLikedFilterDuration.length === 0) {
        setInfo("Ничего не найдено");
      } else {
        localStorage.setItem(
          "movLikedFilterDuration",
          JSON.stringify(movLikedFilterDuration)
        );
        setResult(movLikedFilterDuration);
      }
    }

    if (movLikedFiltered.length === 0) {
      setInfo("Ничего не найдено");
    } else {
      if (checkbox === "true") {
        moviesFilteredDuration();
      } else {
        localStorage.setItem(
          "movLikedFiltered",
          JSON.stringify(movLikedFiltered)
        );
        setResult(movLikedFiltered);
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, "1000");
  }

  return (
    <main className="saved-movies">
      <SearchForm onSubmit={onSubmit} />
      {isLoading ? (
        <Preloader />
      ) : info === "" ? (
        <MoviesCardList
          movies={result ? result : liked}
          liked={result ? result : liked}
          onLikeMovies={onLikeMovies}
          buttonType="disliked"
          onDislikeMovies={onDislikeMovies}
          moviesListNumber={moviesListNumber}
        />
      ) : (
        <p className="subtitle movies__subtitle">{info}</p>
      )}
      <section className="saved-movies__space"></section>
    </main>
  );
}

export default SavedMovies;
