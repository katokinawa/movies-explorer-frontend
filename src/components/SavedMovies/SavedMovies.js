import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"

function SavedMovies(props) {
  return (
    <ul className="saved-movies">
      <Header isLoggedIn={!props.isLoggedIn} />
      <SearchForm />
      <MoviesCardList />
      <section className="movies_button-wrapper">
        <button className="movies_button" type="button">
          Ещё
        </button>
      </section>
      <Footer />
    </ul>
  );
}

export default SavedMovies;
