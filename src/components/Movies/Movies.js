import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({ movies, isLoggedIn }) {
  return (
    <section className="movies">
      <Header isLoggedIn={!isLoggedIn} />
      <SearchForm />
      <MoviesCardList movies={movies} />
      <section className="movies-button-wrapper">
        <button className="movies-button" type="button">
          Ещё
        </button>
      </section>
      <Footer />
    </section>
  );
}

export default Movies;
