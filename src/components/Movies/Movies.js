import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState } from "react";

function Movies() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(value) {
    setIsLoading(true);
    const movies = JSON.parse(localStorage.getItem('allMovies'));

    const moviesFiltered = movies.filter((movie) => {
      if(movie.nameRU.toLowerCase().match(value) || movie.nameEN.toLowerCase().match(value)){
        return true;
      }
      return false;
    })
    setResult(moviesFiltered);
    setTimeout(() => {
      setIsLoading(false);
    }, "1000")

  }

  return (
    <main className="movies">
      <SearchForm onSubmit={onSubmit} />
      <MoviesCardList movies={result} isLoading={isLoading} />
      <section className="movies-button-wrapper button-animation">
        <button className="movies-button">
          Ещё
        </button>
      </section>
    </main>
  );
}

export default Movies;
