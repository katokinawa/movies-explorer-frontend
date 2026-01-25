import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import * as MoviesApi from "../../utils/MoviesApi";
import * as api from "../../utils/MainApi";
import { useEffect, useState } from "react";

function Movies({
  loggedIn,
  onLikeMovies,
  onDislikeMovies,
  liked,
  setLikedMovies,
}) {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState("");
  const BASE_URL = "https://api.nomoreparties.co/";

  useEffect(() => {
    if (info !== "Ничего не найдено") {
      if (localStorage.getItem("searchValue")) {
        setResult(
          localStorage.getItem("moviesFiltered") === null
            ? JSON.parse(localStorage.getItem("movFilterDuration")) || []
            : JSON.parse(localStorage.getItem("moviesFiltered")) || []
        );
      }
    }
  }, [info]);
  // Блок с сохранёнными фильмами
  useEffect(() => {
    if (loggedIn) {
      api
        .getUserMovie()
        .then((likeMovies) => {
          setLikedMovies(likeMovies);
        })
        .catch(() =>
          setInfo(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          )
        );
    }
  }, [loggedIn]);

  // Блок с фильтром
  useEffect(() => {
    if (loggedIn) {
      MoviesApi.getMovies()
        .then((movies) => {
          const arrMovies = movies.map((movie) => {
            return {
              movieId: movie.id,
              country: movie.country,
              director: movie.director,
              duration: movie.duration,
              year: movie.year,
              description: movie.description,
              trailerLink: movie.trailerLink,
              nameRU: movie.nameRU,
              nameEN: movie.nameEN,
              image: BASE_URL + movie.image.url,
              thumbnail: BASE_URL + movie.image.formats.thumbnail.url,
            };
          });
          return arrMovies;
        })
        .then((movies) => {
          localStorage.setItem("arrMovies", JSON.stringify(movies));
        })
        .catch(() => {
          setInfo(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        });
    }
  }, [loggedIn]);

  function onSubmit(value) {
    setIsLoading(true);
    setInfo("");
    localStorage.removeItem("moviesFiltered");
    localStorage.removeItem("movFilterDuration");
    const checkbox = localStorage.getItem("checkboxState");
    const movies = JSON.parse(localStorage.getItem("arrMovies"));

    const moviesFiltered = movies.filter((movie) => {
      if (
        movie.nameRU.toLowerCase().match(value) ||
        movie.nameEN.toLowerCase().match(value)
      ) {
        return true;
      }
      return false;
    });

    function moviesFilteredDuration() {
      const movFilterDuration = moviesFiltered.filter((movie) => {
        if (movie.duration <= 40) {
          return true;
        }
        return false;
      });

      if (movFilterDuration.length === 0) {
        setInfo("Ничего не найдено");
      } else {
        localStorage.setItem(
          "movFilterDuration",
          JSON.stringify(movFilterDuration)
        );
        setResult(movFilterDuration);
      }
    }

    if (moviesFiltered.length === 0) {
      setInfo("Ничего не найдено");
    } else {
      if (checkbox === "true") {
        moviesFilteredDuration();
      } else {
        localStorage.setItem("moviesFiltered", JSON.stringify(moviesFiltered));
        setResult(moviesFiltered);
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, "1000");
  }

  return (
    <main className="movies">
      <SearchForm onSubmit={onSubmit} />
      {isLoading ? (
        <Preloader />
      ) : info === "" ? (
        <MoviesCardList
          onLikeMovies={onLikeMovies}
          onDislikeMovies={onDislikeMovies}
          movies={result}
          liked={liked}
        />
      ) : (
        <p className="subtitle movies__subtitle">{info}</p>
      )}

      {!isLoading && result.length > 3 ? (
        <section className="movies-button-wrapper button-animation">
          <button className="movies-button">Ещё</button>
        </section>
      ) : (
        <section className="movies__space"></section>
      )}
    </main>
  );
}

export default Movies;
