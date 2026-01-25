import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies({ isLoggedIn, movies }) {
  return (
    <section className="saved-movies">
      <Header isLoggedIn={!isLoggedIn} />
      <SearchForm />
      <MoviesCardList movies={movies} />
      <section className="saved-movies__space"></section>
      <Footer />
    </section>
  );
}

export default SavedMovies;
