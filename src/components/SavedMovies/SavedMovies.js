import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  return (
    <section className="saved-movies">
      <Header isLoggedIn={!props.isLoggedIn} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
  );
}

export default SavedMovies;
