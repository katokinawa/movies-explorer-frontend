import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import * as MoviesApi from "../../utils/MoviesApi";
import { useEffect, useState } from "react";

function Movies({loggedIn}) {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState("");
  const BASE_URL = "https://api.nomoreparties.co/";

  // Блок с фильтром
  useEffect(() => {
    if (loggedIn) {
      MoviesApi.getMovies()
        .then((movies) => {
          const allMovies = movies.map((movie) => {
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
          return allMovies;
        })
        .then((movies) => {
          const rawMovies = JSON.stringify(movies);
          localStorage.setItem("allMovies", rawMovies);
        })
        .catch((err) => err);
    }
  }, [loggedIn]);

  function onSubmit(value) {
    setIsLoading(true);
    setInfo("");

    const movies = JSON.parse(localStorage.getItem("allMovies"));

    const moviesFiltered = movies.filter((movie) => {
      if (
        movie.nameRU.toLowerCase().match(value) ||
        movie.nameEN.toLowerCase().match(value)
      ) {
        return true;
      }
      return false;
    });

    if (moviesFiltered.length === 0) {
      setInfo("Ничего не найдено");
    } else {
      setResult(moviesFiltered);
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
        <MoviesCardList movies={result} />
      ) : (
        <p className="subtitle movies__subtitle">{info}</p>
      )}
      <section className="movies-button-wrapper button-animation">
        <button className="movies-button">Ещё</button>
      </section>
    </main>
  );
}

export default Movies;
