import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import { useEffect } from "react";

function SavedMovies({ movies }) {

  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
      <section className="saved-movies__space"></section>
    </main>
  );
}

export default SavedMovies;
