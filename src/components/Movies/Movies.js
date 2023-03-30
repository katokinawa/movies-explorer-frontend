import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import { useState } from "react";

function Movies(props) {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState('')
  
  function onSubmit(value) {
    setIsLoading(true);
    setInfo('');

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

    if(moviesFiltered.length === 0) {
      setInfo('Ничего не найдено')
    } else {
      setResult(moviesFiltered)
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
      ) : info === '' ? (
        <MoviesCardList movies={result} />
      ) : <p className="subtitle movies__subtitle">{info}</p>}
      <section className="movies-button-wrapper button-animation">
        <button className="movies-button">Ещё</button>
      </section>
    </main>
  );
}

export default Movies;
